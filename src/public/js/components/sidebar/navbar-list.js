import React from "react";
import NavbarItem from "./navbar-item";
import NavbarDropdown from "./navbar-dropdown";
import DropdownMenu from "./dropdown-menu";
import {
    rootUrl,
    efficacyMenuItems,
    MOAMenuItems,
    PROMenuItems,
    dosingMenuItems,
    safetyMenuItems,
    clinicOverviewMenuItems
} from "../../utils/navigation-links";

const icons = {
    home: "../svg/nav-icons/icon_home.svg",
    moa: "../svg/nav-icons/icon_moa.svg",
    intro: "../svg/nav-icons/icon_intro.svg",
    patientProfile: "../svg/nav-icons/icon_patient_profile.svg",
    treatmentParadigm: "../svg/nav-icons/icon_treatment_paradigm.svg",
    efficacy: "../svg/nav-icons/icon_efficacy.svg",
    clinic: "../svg/nav-icons/icon_clinical_trial_overview.svg",
    pros: "../svg/nav-icons/icon_pros.svg",
    dosing: "../svg/nav-icons/icon_dosing.svg",
    safety: "../svg/nav-icons/icon_safety.svg",
    summary: "../svg/nav-icons/icon_summary.svg"
};

class NavbarList extends React.Component {

    state = {
        expandedMenuItemId: null
    };

    constructor (props) {
        super (props);

        this.collapseMenuItems = this.collapseMenuItems.bind(this);
    }

    collapseMenuItems (id) {
        this.setState({
            expandedMenuItemId: id
        });
    }

    render() {
        return (
            <ul className="sidebar-nav">
                <NavbarItem link="home" title="Home" icon={icons.home}/>
                <NavbarItem link={rootUrl + "intro"} title="Intro" icon={icons.intro}/>
                <NavbarItem link={rootUrl + "patient-profile"} title="Patient Profile" icon={icons.patientProfile}/>
                <NavbarItem link={rootUrl + "treatment-paradigm"} title="Treatment Paradigm" icon={icons.treatmentParadigm}/>
                <NavbarDropdown title="MOA" id="MOA" icon={icons.moa} collapseMenuItems={this.collapseMenuItems} expandedMenuItemId={this.state.expandedMenuItemId}>
                    <DropdownMenu menuItems={MOAMenuItems}/>
                </NavbarDropdown>
                <NavbarDropdown title="Efficacy" id="Efficacy" icon={icons.efficacy} collapseMenuItems={this.collapseMenuItems} expandedMenuItemId={this.state.expandedMenuItemId}>
                    <DropdownMenu menuItems={efficacyMenuItems}/>
                </NavbarDropdown>
                <NavbarDropdown title="PROs" id="PROs" icon={icons.pros} collapseMenuItems={this.collapseMenuItems} expandedMenuItemId={this.state.expandedMenuItemId}>
                    <DropdownMenu menuItems={PROMenuItems}/>
                </NavbarDropdown>
                <NavbarDropdown title="Clinical trial overview" id="clinical" icon={icons.clinic} collapseMenuItems={this.collapseMenuItems} expandedMenuItemId={this.state.expandedMenuItemId}>
                    <DropdownMenu menuItems={clinicOverviewMenuItems}/>
                </NavbarDropdown>
                <NavbarDropdown title="Dosing" id="Dosing" icon={icons.dosing} collapseMenuItems={this.collapseMenuItems} expandedMenuItemId={this.state.expandedMenuItemId}>
                    <DropdownMenu menuItems={dosingMenuItems}/>
                </NavbarDropdown>
                <NavbarDropdown title="Safety" id="safety" icon={icons.safety} collapseMenuItems={this.collapseMenuItems} expandedMenuItemId={this.state.expandedMenuItemId}>
                    <DropdownMenu menuItems={safetyMenuItems}/>
                </NavbarDropdown>
                <NavbarItem link={rootUrl + "summary"} title="Summary" icon={icons.summary}/>
                <NavbarItem className="menu-item-small" link="intro" title="Guide"/>
                <NavbarItem className="menu-item-small" link="download-center" title="Download center"/>
            </ul>
        );
    }

}

export default NavbarList;