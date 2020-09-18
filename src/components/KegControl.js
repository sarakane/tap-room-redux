import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import KegDetail from './KegDetail';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedKeg: null
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    } 
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    this.setState({ formVisibleOnPage: false });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({selectedKeg: selectedKeg});
  }

  handlePintDecrement = (decrementedPintKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(decrementedPintKeg);
    dispatch(action)
    this.setState({
      selectedKeg: decrementedPintKeg
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg={this.state.selectedKeg} onClickingSellPint={this.handlePintDecrement} />
      buttonText = "Return to Ticket List";
    } else if(this.state.formVisibleOnPage) {    
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Return to Keg List";
    } else {
        currentlyVisibleState = <KegList kegList={this.props.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />
        buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <Button variant="outline-primary" onClick={this.handleClick}>{buttonText}</Button>
      </React.Fragment>
    );
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterKegList: state
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;