import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import KegDetail from './KegDetail';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';

class KegControl extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selectedKeg: null
  //   };
  // }

  handleClick = () => {
    const { dispatch } = this.props;
    if (this.props.selectedKeg != null) {
      const action = a.selectedKeg(null);
      dispatch(action);
    } else {
      const action = a.toggleForm();
      dispatch(action);
    } 
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm()
    dispatch(action2);
  }

  handleChangingSelectedKeg = (id) => {
    const { dispatch } = this.props;
    const selectedKeg = this.props.masterKegList[id];
    // this.setState({selectedKeg: selectedKeg});
    const action = a.selectedKeg(selectedKeg);
    dispatch(action);
  }

  handlePintDecrement = (decrementedPintKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(decrementedPintKeg);
    dispatch(action)
    // this.setState({
    //   selectedKeg: decrementedPintKeg
    // });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.props.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg={this.props.selectedKeg} onClickingSellPint={this.handlePintDecrement} />
      buttonText = "Return to Ticket List";
    } else if(this.props.formVisibleOnPage) {    
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
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedKeg: state.selectedKeg
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;