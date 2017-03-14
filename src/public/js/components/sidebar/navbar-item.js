import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {toggleSidebar} from "../../actions/toggle-sidebar";
import {toggleReference} from "../../actions/reference";

class NavbarItem extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        this.props.toggleReference({
            showReference: false
        });
        this.props.toggleSidebar({
            flag: false
        });
        return true;
    }

    render() {
        const {link, title, className, icon} = this.props;
        return (
            <li className={className} onClick={this.handleClick}>
                <Link to={link}>
                    {icon ? <span className="menu-icon-container"><img src={icon} alt={title} className="icon"/></span> : null} {title}
                </Link>
            </li>
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

export default connect(mapStateToProps, actionCreators)(NavbarItem);