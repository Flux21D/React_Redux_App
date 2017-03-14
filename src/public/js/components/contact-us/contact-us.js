import React from "react";
import {connect} from "react-redux";
import {getContacts} from "../../actions/contacts";
import createMarkup from "../../utils/html-text";

class ContactUs extends React.Component {

    constructor (props) {
        super (props);
    }

    componentDidMount () {
        this.props.getContacts();
    }

    render () {
        const {contacts} = this.props;

        return (
            <div id="contact-us" className="bg-grey">

                <h3 className="content-title contacts-us-title">
                    <img src="svg/icons/icon_envelope_grey.svg" alt="Envelope"/>
                    Contact us
                </h3>

                {contacts.contacts.map((contact, key) => {
                    return <div key={key} className="contact-container">
                        <div className="contact-headquarter">{contact.headquarter}</div>
                        <div>{contact.company}</div>
                        <div dangerouslySetInnerHTML={createMarkup(contact.address)} />
                        <div>{contact.postalCode}</div>
                        <div>{contact.telephone}</div>
                    </div>
                })}


            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    }
};

const actionCreators = {
    getContacts
};

export default connect(mapStateToProps, actionCreators)(ContactUs);