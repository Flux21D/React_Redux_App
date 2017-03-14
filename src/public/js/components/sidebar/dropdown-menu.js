import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {toggleSidebar} from "../../actions/toggle-sidebar";
import {toggleReference} from "../../actions/reference";

class DropdownMenu extends React.Component {

  constructor (props) {
    super (props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.props.toggleReference({
        showReference: false
    });
    this.props.toggleSidebar({
      flag: false
    });
    return true;
  }

  render () {
    const {menuItems} = this.props;
    return (
            <ul>
                {menuItems.map((item, key) => {
                  return <li key={key} onClick={this.handleClick}><Link to={item.link}>{item.title}</Link></li>
                })}
            </ul>
    );
  }

}

const mapStateToProps = (state) => {
    return {
        references: state.references,
        toggleSidebar: state.toggleSidebar
    };
};

const actionCreators = {
    toggleReference,
    toggleSidebar
};

export default connect(mapStateToProps, actionCreators)(DropdownMenu);