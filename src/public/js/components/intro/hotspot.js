import React from "react";
import {Link} from "react-router";

class Hotspot extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {params} = this.props;

        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

        return (
            <div className={"hotspot-container " + (params.screen === "hot-spots" ? "intro-hotspots" : "")}>
                <div className="intro-content">
                    <span className="hotspot active" style={{left: '6%', top: '38%'}}>
                        <div className={"hotspot-circle " + (!isSafari ? "circle" : "")}>
                            <div className="hotspot-tooltip">
                                <h3 className="intro-title clearfix">
                                    Hot Spots<span className="pull-right">5/12</span>
                                </h3>

                                <p className="intro-desc">By activating a hot spot on the slide you will gain further insights and explaination of the data.</p>

                                <div>
                                    <Link to="intro/full-screen" className="btn btn-white btn-previous">Previous</Link>
                                    <Link to="intro/navigation"
                                          className="btn btn-orange btn-next pull-right">Next</Link>
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
            </div>
        );
    }
}

export default Hotspot;