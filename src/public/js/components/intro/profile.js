import React from "react";
import {Link} from "react-router";

class Preferences extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {params} = this.props;

        return (
            <div className={(params.screen === 'profile' ? 'intro-profile' : '')}>
                <div className="intro-content">
                    <h3 className="intro-title clearfix">Profile & progress<span className="pull-right">12/12</span>
                    </h3>

                    <p className="intro-desc">From here you can edit your profile and view your progress on the
                        challenges.</p>

                    <div>
                        <Link to="intro/pi" className="btn btn-white btn-previous">Previous</Link>
                        <Link to="/" className="btn btn-orange btn-next pull-right">Finish</Link>
                    </div>
                </div>
            </div>
        );
    }

}

export default Preferences;