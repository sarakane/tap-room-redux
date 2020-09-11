import React, { Children } from 'react';
import KegList from './KegList';

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

    currentlyVisibleState = <KegList kegList={this.state.masterKegList} />
    buttonText = "Add Keg";
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default KegControl;