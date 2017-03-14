import React from 'react';
import {Link} from "react-router";
import {connect} from "react-redux";
import {logout} from "../../../actions/auth";
import {toggleSidebar} from "../../../actions/toggle-sidebar";
import ReferencesMenuItem from "./references-menu-item";

class HeaderComponent extends React.Component {

    constructor (props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
        this.handleToggleSidebarNav = this.handleToggleSidebarNav.bind(this);
    }

    handleLogout () {
    janrain.capture.ui.endCaptureSession();
        this.props.logout();
        this.context.router.push("/");
    }

    handleToggleSidebarNav (event) {
        event.preventDefault();

        this.props.toggleSidebar({
            flag: !this.props.sidebar.flag
        });
    }

    render () {
        const {reference, auth, sidebar} = this.props;

        return (
            <div id="header">
                <nav id="header-nav" className="clearfix">
                    <div className="header-logo pull-left">
                        <Link to="/">
                            <img src="svg/logos/logo_olumiant.svg" alt="Olumiant"/>
                        </Link>
                    </div>
                    <ul className="header-navbar pull-right">

                        {reference.reference ? <ReferencesMenuItem /> : null}

                        <li>
                            <Link target="_blank"
                                  to="https://assets.contentful.com/sbcgmhmzarrn/1Fwa5bnfqsSYME6Wc2mIoa/a5da863439e6dc9bfcef064175fbf2ae/Olumiant.pdf">
                                <img src="svg/icons/icon_pi.svg"/> PI
                            </Link>
                        </li>
                        {/*<li>*/}
                        {/*<Link to="country"><img src="svg/icons/icon_globe.svg" /> {country.countryCode + '-' + country.languageCode}</Link>*/}
                        {/*</li>*/}
                        {
                            auth.accessToken ?
                                <li>
                                    <Link to="settings">
                                        <img src="svg/icons/icon_profile.svg"/> <span
                                        className="user-name">{auth.user.personalData_firstName + ' ' + auth.user.personalData_lastName},</span>
                                    </Link>
                                </li> : null
                        }
                        {
                            auth.accessToken ?
                                <li>
                                    <span className="logout" onClick={this.handleLogout}>LOG OUT</span>
                                </li> : null
                        }
                        {
                            !auth.accessToken ?
                                <li>
                                    <Link to="login">
                                        <img src="svg/icons/icon_profile.svg"/> LOG IN
                                    </Link>
                                </li> : null
                        }
                        <li onClick={this.handleToggleSidebarNav} className="toggle-sidebar-nav">
                            <a href="#">
                                <img src={sidebar.flag ? "svg/icons/icon_close.svg" : "svg/icons/icon_bars.svg"} />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        );

    }

}

HeaderComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar,
        auth: state.auth,
        country: state.country,
        reference: state.reference,
        toggleSidebar: state.toggleSidebar
    }
};

export default connect(mapStateToProps, {logout, toggleSidebar})(HeaderComponent);