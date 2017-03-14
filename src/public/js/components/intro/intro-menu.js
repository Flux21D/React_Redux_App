import React from "react";
import {Link} from "react-router";

class IntroMenu extends React.Component {

    render() {
        return (
            <div id="intro-menu">
                <div className="intro-content">
                    <span className="intro-toggle">
                        <img src="svg/icons/icon_bars.svg"/>
                    </span>

                    <p className="intro-desc">The intro can be accessed<br />any time from the menu</p>

                    <div>
                        <Link to="intro/video" className="btn btn-orange btn-ok">OK</Link>
                    </div>
                </div>
            </div>
        );
    }

}

export default IntroMenu;