import React from "react";
import Navbar from "./navbar.component";
import SideBarHeader from "./sidebar-header";

class Sidebar extends React.Component {

  render () {
    return (
            <aside id="sidebarNavigation">
                <SideBarHeader/>
                <Navbar />

                <div className="sidebar-logo">
                    <img src="svg/logos/logo_lilly_white.svg" alt="Lilly"/>
                </div>
            </aside>
    );

  }

}

export default Sidebar;