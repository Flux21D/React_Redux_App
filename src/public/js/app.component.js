import React from "react";
import HeaderComponent from "./components/shared/header/header.component";
import FooterComponent from "./components/shared/footer/footer.component";
import SidebarNav from "./components/sidebar/sidebar-nav.component";
import CookieComponent from "./components/shared/cookie";
import References from "./components/references/references";
import Modal from "./components/shared/modal/modal";
import {connect} from "react-redux";
import hideCookie from "./actions/cookie";

class AppComponent extends React.Component {

    constructor(props) {
        super(props);

        this.hideCookie = this.hideCookie.bind(this);
    }

    hideCookie() {
        this.props.hideCookie({
            showCookie: false
        });
    }

    render() {

        const {reference, modal, cookie, sidebar, overlay} = this.props;

        let classes = sidebar.flag ? 'sidebar-nav ' : '';

        classes += modal.Component ? 'my-modal-open' : ' ';

        return (
            <div id="wrapper" className={classes}>

                {modal.Component ? <Modal /> : null}

                <div id="content-wrapper">
                    <div className="flex">
                        <div id="main-content" className={overlay.showOverlay === true ? "overlay" : ""}>
                            <HeaderComponent />
                            <div id="content">
                                {reference.showReference ? <References /> : null}
                                { this.props.children }
                            </div>
                            <FooterComponent />
                        </div>
                        <SidebarNav/>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar,
        cookie: state.cookie,
        modal: state.modal,
        overlay: state.overlay,
        reference: state.reference
    }
};

export default connect(mapStateToProps, {hideCookie})(AppComponent);