import React  from "react";
import {connect} from "react-redux";
import {login} from "../../actions/auth";
import {openModal} from "../../actions/modal";
import LoginForm from "./login-form.component";

class LoginComponent extends React.Component {

    constructor(props) {
        super(props);
    }

  
  componentWillUnmount () {
    // this.props.removeAuthErrors();
  }


    render () {
        return (
            <div className="fixed-box">
                <div className="fix-box-inner">
                    <LoginForm onClick={this.props.onClick} />
                </div>
            </div>
        );
    }

}

LoginComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps, {login, openModal})(LoginComponent);