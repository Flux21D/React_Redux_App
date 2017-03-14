import React from "react";

class NavbarDropdown extends React.Component {

    state = {
        collapsed: true
    };

    constructor (props) {
        super (props);

        this.handleDropdownClick = this.handleDropdownClick.bind(this);
    }

    handleDropdownClick (e) {
        e.preventDefault();

        this.setState({
            collapsed: !this.state.collapsed
        });

        this.props.collapseMenuItems(this.props.id);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.expandedMenuItemId !== this.props.id) {
            this.setState({
                collapsed: true
            });
        }
    }

    render() {
        const {title, icon} = this.props;
        return (
            <li ref="dropdown" className={this.state.collapsed ? "collapsed" : null}>
                <a onClick={this.handleDropdownClick} href="#" className="clearfix">
                    <span className="menu-icon-container"><img src={icon} alt={title} className="icon"/></span>
                    {title}
                    <img className="dropdown-arrow"
                         src={this.state.collapsed ? "svg/icons/arrow_white_down.svg" : "svg/icons/arrow_white_up.svg"}
                         alt=""/>
                </a>
                {this.props.children}
            </li>
        );
    }

}

export default NavbarDropdown;