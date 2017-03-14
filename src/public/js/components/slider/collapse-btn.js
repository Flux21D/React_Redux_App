import React from "react";
import {connect} from "react-redux";
import {closeModal} from "../../actions/modal";

class ExitFullScreen extends React.Component {

  constructor (props) {
    super (props);

    this.exitFullScreen = this.exitFullScreen.bind(this);
  }

  exitFullScreen () {
    this.props.closeModal();
  }

  render () {
    return (
            <span className="exit-full-screen" onClick={this.exitFullScreen}>
                <img src="../svg/icons/icon_exit_full_screen.svg" alt="Exit full screen" />
            </span>
    );
  }

}

export default connect(null, {closeModal})(ExitFullScreen);