import React, {Component} from "react";
import ProfileComponent from "./profile.component";
import ChallengesComponent from "./challenges.component";

class SettingsComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="settings">
                <div className="settings-container">
                    <ProfileComponent />
                    <ChallengesComponent />
                </div>
            </div>
        );
    }
}

export default SettingsComponent;