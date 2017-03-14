import React from "react";
import {connect} from "react-redux";
import registerValues from "../../utils/register-values";
import {updateUser} from "../../actions/auth";

class EditProfile extends React.Component {

    constructor (props) {
        super (props);

        const {user} = props.auth;

        this.state = {
            formData: {
                personalData_title: user.personalData_title,
                personalData_firstName: user.personalData_firstName,
                personalData_lastName: user.personalData_lastName,
                professionalContactData_emailAddress: user.professionalContactData_emailAddress,
                professionalContactData_phone: user.professionalContactData_phone,
                professionalData_professionalGroup: user.professionalData_professionalGroup,
                professionalData_specialty: user.professionalData_specialty,
                professionalData_postalCode: user.professionalData_postalCode
            }
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
    }

    handleFormChange (event) {
        let formData = this.state.formData;
        formData[event.target.name] = event.target.value;

        this.setState({
            formData
        });
    }

    onSubmit (event) {
        event.preventDefault();

        const {formData} = this.state;

        this.props.updateUser(formData).then(res => {
            this.props.setScreen("show");
        });
    }

    render () {

        const {formData} = this.state;

        return (
            <div id="edit-profile">
                <form  onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <select name="personalData_title" defaultValue={formData.personalData_title} onChange={this.handleFormChange} className="form-control">
                            <option value="" disabled="disabled">Title</option>
                            {registerValues.titles.map((title, key) => {
                                return <option key={key} value={title.value}>{title.label}</option>
                            })}
                        </select>
                    </div>

                    <div className="form-group">
                        <input name="personalData_firstName" defaultValue={formData.personalData_firstName} onChange={this.handleFormChange} className="form-control" type="text" placeholder="First name"/>
                    </div>

                    <div className="form-group">
                        <input name="personalData_lastName" defaultValue={formData.personalData_lastName} onChange={this.handleFormChange} className="form-control" type="text" placeholder="Last name"/>
                    </div>

                    <div className="form-group">
                        <input name="professionalContactData_emailAddress" defaultValue={formData.professionalContactData_emailAddress} onChange={this.handleFormChange} className="form-control" type="email" placeholder="Email"/>
                    </div>

                    <div className="form-group">
                        <input name="professionalContactData_phone" defaultValue={formData.professionalContactData_phone} onChange={this.handleFormChange} className="form-control" type="text" placeholder="Phone number"/>
                    </div>

                    <div className="form-group">
                        <select name="professionalData_professionalGroup" defaultValue={formData.professionalData_professionalGroup} onChange={this.handleFormChange} className="form-control">
                            <option value="" disabled="disabled">Role</option>
                            {registerValues.roles.map((role, key) => {
                                return <option key={key} value={role.value}>{role.label}</option>
                            })}
                        </select>
                    </div>

                    <div className="form-group">
                        <select name="professionalData_specialty" defaultValue={formData.professionalData_specialty} onChange={this.handleFormChange} className="form-control">
                            <option value="" disabled="disabled">Speciality</option>
                            {registerValues.specialities.map((speciality, key) => {
                                return <option key={key} value={speciality.value}>{speciality.label}</option>
                            })}
                        </select>
                    </div>

                    <div className="form-group">
                        <input name="professionalData_postalCode" defaultValue={formData.professionalData_postalCode} onChange={this.handleFormChange} className="form-control" type="text" placeholder="Postal code"/>
                    </div>

                    <div className="wrp-edit-profile">
                        <input type="submit" value="SAVE PROFILE" className="btn btn-orange" />
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
    updateUser
};

export default connect(mapStateToProps, actionCreators)(EditProfile);