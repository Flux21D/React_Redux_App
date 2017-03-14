import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {closeModal} from "../../actions/modal";
import {subscribeToNewsletter} from "../../actions/emails";

class Newsletter extends React.Component {

    /* state = {
        formData: {
            professionalContactData_emailAddress: "",
            contacted: null
        }
    }; */

    constructor(props) {
        super(props);
        const {user} = props.auth;

        this.state = {
            formData: {
                email: user.professionalContactData_emailAddress,
                contacted: null
            }
        };
        this.handleFormChange = this.handleFormChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        let {formData} = this.state;

        formData.uuid = this.props.auth.user.uuid;
        formData.access_token = this.props.auth.accessToken;

        if (formData.contacted === "yes") {
            this.props.subscribeToNewsletter(formData);
        }
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

    componentDidMount() {
        let formData = this.state.formData;
        formData.email = this.props.auth.user.email;

        this.setState({
            formData
        });
    }

    render() {

        const {formData} = this.state;

        return (
            <div className="end-modal-container">

                <h3 className="title text-center">Newsletter sign up</h3>

                <p className="description text-center">Please confirm you email address and accept below</p>

                <form action="" onSubmit={this.onSubmit}>
                    <div className="input-group">
                        <span className="input-group-addon">
                            <img src="svg/icons/icon_mail.svg"/>
                        </span>
                        <input value={formData.email} name="email"
                               onChange={this.handleFormChange} type="email" className="form-control"
                               placeholder="Email"/>
                    </div>

                    <p className="contacted">I wish to be contacted by email and by other forms of electronic
                        communication about Lilly's products and services:</p>

                    <div onChange={this.handleFormChange}>
                        <div className="radio">
                            <label>
                                <input type="radio" name="contacted" value="yes"/>Yes, I accept
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" name="contacted" value="no"/>No, I don't accept
                            </label>
                        </div>

                        {formData.contacted === "no" ? <p className="text-orange">You must accept</p> : null}
                    </div>

                    <div className="my-modal-footer-buttons">
                        <div>
                            <Link onClick={this.closeModal} className="btn btn-white btn-intro">CANCEL</Link>
                        </div>
                        <div>
                            <input type="submit" className="btn btn-orange btn-login" value="SIGN UP"/>
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
    subscribeToNewsletter
};

export default connect(mapStateToProps, actionCreators)(Newsletter);