import React from 'react';
import KegList from './KegList';
import Button from 'react-bootstrap/Button';
import NewKegForm from './NewKegForm';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [
        {
          name: "Mango Cider",
          brand: "BARN DOOR",
          price: 7,
          alcoholContent: 4.6,
          pints: 124
        }
      ],
      formVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.formVisibleOnPage) {    
      currentlyVisibleState = <NewKegForm />;
      buttonText = "Return to Keg List";
    } else {
        currentlyVisibleState = <KegList kegList={this.state.masterKegList} />
        buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <Button onClick={this.handleClick}>{buttonText}</Button>
      </React.Fragment>
    );
  }
}

export default KegControl;