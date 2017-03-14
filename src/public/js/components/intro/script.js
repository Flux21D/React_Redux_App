import React from "react";
import {Link} from "react-router";

class Script extends React.Component {

    constructor (props) {
        super (props);
    }

    render () {
        return (
            <div className="intro-content">
                <h3 className="intro-title clearfix">
                    Video script<span className="pull-right">2/12</span>
                </h3>

                <p className="intro-desc">All videos are transcribed so you will be able to read through the text being spoken aloud.</p>

                <div className="clearfix">
                    <Link to="intro/video" className="btn btn-white btn-previous">PREVIOUS</Link>
                    <Link to="intro/chart" className="btn btn-orange btn-next pull-right">NEXT</Link>
                </div>
            </div>
        );
    }

}

export default Script;