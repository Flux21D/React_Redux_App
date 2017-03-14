import React from "react";
import {Link} from "react-router";

class FullScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {params} = this.props;

        return (
            <span className={"full-screen-btn " + (params.screen === "full-screen" ? "intro-full-screen" : "" + (params.screen === "chart" ? "disabled" : ""))}>

                <img src="svg/icons/icon_full_screen.svg" alt="Full screen"/>

                <div className="intro-full-screen-content">
                    <h3 className="intro-title clearfix">
                        Full screen mode
                        <span className="pull-right">4/12</span>
                    </h3>

                    <p className="intro-desc">By clicking this button you can expand the slide to full screen mode.</p>

                    <div>
                        <Link to="intro/chart" className="btn btn-white btn-previous">Previous</Link>
                        <Link to="intro/hot-spots" className="btn btn-orange btn-next pull-right">Next</Link>
                    </div>
                </div>
            </span>
        );
    }
}

export default FullScreen;