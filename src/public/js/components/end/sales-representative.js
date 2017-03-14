import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {closeModal} from "../../actions/modal";
import {contactSalesRepresentative} from "../../actions/emails";

class SalesRepresentative extends React.Component {

    constructor (props) {
        super (props);

        const {user} = props.auth;

        this.state = {
            formData: {
                email: user.professionalContactData_emailAddress,
                message: ""
            }
        };

        this.handleFormChange = this.handleFormChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        let {formData} = this.state;

        this.props.contactSalesRepresentative(formData);
        this.props.closeModal();
    }

    closeModal() {
        this.props.closeModal();
    }

    handleFormChange(event) {
        let formData = this.state.formData;
        formData[event.target.name] = event.target.value;

        this.setState({
            formData
        });
    }

    render() {

        const {formData} = this.state;

        return (
            <div className="end-modal-container">
                <h3 className="title">Contact your local sales representative</h3>

                <p className="description">Please confirm your email address and write a message (optional) to your
                    local sales representative below</p>

                <form onSubmit={this.onSubmit}>
                    <div className="input-group">
                        <span className="input-group-addon">
                            <img src="svg/icons/icon_mail.svg"/>
                        </span>
                        <input defaultValue={formData.email} name="email" onChange={this.handleFormChange} type="email" className="form-control" placeholder="Email"/>
                    </div>

                    <div className="input-group">
                        <span className="input-group-addon">
                            <img src="svg/icons/icon_comment_white.svg"/>
                        </span>
                        <textarea onChange={this.handleFormChange} placeholder={"Please write your message to your \nsales representative here"} className="form-control" name="message" cols="30" rows="10"></textarea>
                    </div>

                    <div className="my-modal-footer-buttons">
                        <div>
                            <Link onClick={this.closeModal} className="btn btn-white btn-intro">CANCEL</Link>
                        </div>
                        <div>
                            <input type="submit" className="btn btn-orange btn-login" value="CONTACT NOW"/>
                        </div>
                    </div>
                </form>
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
    closeModal,
    contactSalesRepresentative
};

export default connect(mapStateToProps, actionCreators)(SalesRepresentative);