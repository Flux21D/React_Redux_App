import React from "react";
import {connect} from "react-redux";
import {updateUser} from "../../actions/auth";
import EditProfile from "./edit-profile";

class ProfileComponent extends React.Component {

    state = {
        screen: ""
    };

    constructor(props) {
        super(props);

        this.handleContactConsent = this.handleContactConsent.bind(this);
        this.setScreen = this.setScreen.bind(this);
    }

    handleContactConsent (event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

        this.props.updateUser({
            termsAndCondition_contactConsent: value
        });
    }

    setScreen (screen) {
        this.setState({
            screen: screen
        });
    }

    render() {
        const {auth} = this.props;
        const {user} = auth;

        return (
            <div id="profile">
                <h1 className="text-center">Profile</h1>

                <div className="wrp-profile-pic">
                    <img src="svg/icons/icon_profile.svg" alt="Profile picture"/>
                </div>

                {this.state.screen === "edit" ? <EditProfile setScreen={this.setScreen} /> :

                <div>
                    <div className="user-info-box">
                        <div className="user-info-box-row">
                            <div className="user-info-box-cell">Title</div>
                            <div className="user-info-box-cell user-info-box-val">{user.personalData_title}</div>
                        </div>
                        <div className="user-info-box-row">
                            <div className="user-info-box-cell">First name</div>
                            <div className="user-info-box-cell user-info-box-val">{user.personalData_firstName}</div>
                        </div>
                        <div className="user-info-box-row">
                            <div className="user-info-box-cell">Last name</div>
                            <div className="user-info-box-cell user-info-box-val">{user.personalData_lastName}</div>
                        </div>
                        <div className="user-info-box-row">
                            <div className="user-info-box-cell">Email</div>
                            <div className="user-info-box-cell user-info-box-val">{user.professionalContactData_emailAddress}</div>
                        </div>
                        <div className="user-info-box-row">
                            <div className="user-info-box-cell">
                                Phone number
                            </div>
                            <div className="user-info-box-cell user-info-box-val">{user.professionalContactData_phone}</div>
                        </div>
                        <div className="user-info-box-row">
                            <div className="user-info-box-cell">Role</div>
                            <div className="user-info-box-cell user-info-box-val">{user.professionalData_professionalGroup}</div>
                        </div>
                        <div className="user-info-box-row">
                            <div className="user-info-box-cell">Speciality</div>
                            <div className="user-info-box-cell user-info-box-val">{user.professionalData_specialty}</div>
                        </div>
                        <div className="user-info-box-row">
                            <div className="user-info-box-cell">Work postcode</div>
                            <div className="user-info-box-cell user-info-box-val">{user.professionalData_postalCode}</div>
                        </div>
                    </div>
                    <div className="checkbox">
                        <label className="disclaimer"><input type="checkbox" defaultChecked={user.termsAndCondition_contactConsent} onChange={this.handleContactConsent} /> I wish to be contacted by email and by otherforms of electronic communication about Lilly's products and services.</label>
                    </div>

                    <div className="wrp-edit-profile">
                        <span className="btn btn-orange" onClick={() => {this.setScreen("edit")}}>EDIT PROFILE</span>
                    </div>
                </div>}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};

const actionCreators = {
    updateUser
};

export default connect(mapStateToProps, actionCreators)(ProfileComponent);