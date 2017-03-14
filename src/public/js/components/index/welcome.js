import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {closeModal} from "../../actions/modal";
import {removeNewUser} from "../../actions/auth";

class Welcome extends React.Component {

    constructor(props) {
        super(props);

        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        this.props.removeNewUser();
        this.props.closeModal();
    }


    render() {
        return (
            <div id="welcome">
                <h3 className="title">Welcome!</h3>

                <p className="description">Would you like a short introduction to how the detailer <br /> works, or would
                    you rather get straight into it?</p>

                <div className="thumbnail-container">
                    <img src="img/pages/index/welcome-thumbnail.jpg"/>
                </div>

                <div className="welcome-buttons-container">
                    <div>
                        <Link onClick={this.closeModal} className="btn btn-white btn-intro">SKIP INTRO</Link>
                    </div>
                    <div>
                        <Link onClick={this.closeModal} to="intro" className="btn btn-orange btn-intro">START
                            INTRO</Link>
                    </div>
                </div>
            </div>
        );
    }

}

const actionCreators = {
    closeModal,
    removeNewUser
};

export default connect(null, actionCreators)(Welcome);