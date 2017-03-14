import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import {homeNavItems} from "../../utils/navigation-links";
import {setReference} from "../../actions/reference";

class HomeComponent extends React.Component {

    state = {
        activeNavItem: null,
        styles: []
    };

    constructor(props) {
        super(props);

        this.setActiveNavItem = this.setActiveNavItem.bind(this);
    }

    componentDidMount () {
        this.props.setReference({
            reference: 'index'
        });
    }

    setActiveNavItem(activeNavItemIndex) {

        let styles = [];
        styles[activeNavItemIndex] = null;

        const l = homeNavItems.length;

        if (activeNavItemIndex >= l / 2) {

            let k;

            for (let i = 0; i < activeNavItemIndex; i++) {
                styles[i] = i;
                k = i;
            }
            for (let i = activeNavItemIndex + 1; i < l; i++) {
                styles[i] = styles[k + activeNavItemIndex - i + 1];
            }

        } else {
            let k;

            for (let i = l; i > activeNavItemIndex; i--) {
                styles[i] = l - i;
                k = i;
            }

            for (let i = activeNavItemIndex - 1; i >= 0; i--) {
                styles[i] = styles[k + activeNavItemIndex - i - 1];
            }
        }

        this.setState({
            activeNavItem: this.state.activeNavItem === activeNavItemIndex ? null : activeNavItemIndex,
            styles: this.state.activeNavItem === activeNavItemIndex ? [] : styles
        });
    }

    checkActive(navItem) {
        return navItem === this.state.activeNavItem ? 'active ' : '';
    }

    render() {
        return (
            <div id="home" className={this.state.activeNavItem !== null ? "home-nav-active" : ""}>

                <div className="home-info">
                    <p>For patients with moderate-to-severe rheumatoid arthiritis (RA)</p>

                    <h1>Reach beyond the standard</h1>

                    <p>When treating patients who are insufficiently responding to conventional DMARDs.</p>
                </div>

                <ul className="home-nav">
                    {homeNavItems.map((item, key) => {
                        let style;
                        style = this.state.styles.length && this.state.activeNavItem != key ? {background: 'rgba(0, 0, 0, .' + this.state.styles[key] + ')'} : {};
                        return <li key={key} style={style} className={this.checkActive(key)} onClick={() => {
                            return this.setActiveNavItem(key)
                        }}>

                            <div className="info">
                                <div className="info-icon-container">
                                    <img src={item.iconOrange} alt={item.title}/>
                                </div>

                                <h3 className="text-orange">{item.title}</h3>

                                <div className="visit">
                                    <Link to={item.link} className="visit-link">
                                        <span className="visit-icon"><img src="../svg/icons/arrow_orange_right.svg"
                                                                          alt=""/></span>Visit now
                                    </Link>
                                </div>
                            </div>

                            <div className="bottom-icon">
                                <img src={item.icon} alt={item.title}/>
                            </div>

                            <div>{item.title}</div>
                        </li>
                    })}
                </ul>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        reference: state.reference
    };
};

const actionCreators = {
    setReference
};

export default connect(mapStateToProps, actionCreators)(HomeComponent);