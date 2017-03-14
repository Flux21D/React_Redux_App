import React from "react";
import NavbarListComponent from "./navbar-list";

class NavbarComponent extends React.Component {

  constructor (props) {
    super (props);
  }

  render () {
    return (
            <nav>
                <NavbarListComponent />
            </nav>
    );
  }
}

export default NavbarComponent;