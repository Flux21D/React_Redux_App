import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {closeModal} from "../../actions/modal";

class Resume extends React.Component {

    constructor(props) {
        super(props);

        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        sessionStorage.setItem("hideWelcome", true);
        this.props.closeModal();
    }

    render() {

        const {slide_id = 0, slide_slug = 'intro', user} = this.props;
        const islide_id = slide_id + 1;
        
        return (
            <div id="resume">
                <h3 className="title">Welcome back {user.personalData_firstName + ' ' + user.personalData_lastName}!</h3>

                <p className="description">Would you like to continue where you left off last time?</p>

                <div className="thumbnail-container">
                    <img src="img/pages/index/resume-thumbnail.jpg"/>

                    <div className="thumbnail-content">
                        <h3>Slide {islide_id} of 19</h3>

                        <div className="btn-continue-container">
                            <Link onClick={this.closeModal} to={"slide/full/" + slide_slug} className="btn btn-orange">CONTINUE</Link>
                        </div>
                    </div>
                </div>

                <div className="resume-buttons-container">
                    <p className="">...Or you can view more presentations from the home page</p>
                    <div>
                        <Link onClick={this.closeModal} to="slide/full/intro" className="btn btn-orange btn-intro">Full version</Link>
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    };
};

const actionCreators = {
    closeModal
};

export default connect(mapStateToProps, actionCreators)(Resume);