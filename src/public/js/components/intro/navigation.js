import React from "react";
import {Link} from "react-router";

class Navigation extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {params} = this.props;

        return (
            <div className={"arrow-buttons-container " + (params.screen === 'navigation' ? 'intro-navigation' : '')}>

                <div className="intro-content">
                    <h3 className="intro-title clearfix">Navigating the presentation<span
                        className="pull-right">6/12</span></h3>

                    <p className="intro-desc">Navigate through the slides in order by clicking previous or next.</p>

                    <Link to="intro/hot-spots" className="btn btn-white btn-previous">Previous</Link>
                    <Link to="intro/progress" className="btn btn-orange btn-next pull-right">Next</Link>
                </div>
                <div className="previous-container">
                    <span className={"btn btn-transparent btn-previous " + (params.screen === 'navigation' ? 'disabled' : '')}>PREVIOUS</span>
                </div>
                <div className="buttons-progress-container"></div>
                <div className="next-container">
                    <span className={"btn btn-orange btn-next pull-right " + (params.screen === 'navigation' ? 'disabled' : '')}>NEXT</span>
                </div>
            </div>
        );
    }

}

export default Navigation;