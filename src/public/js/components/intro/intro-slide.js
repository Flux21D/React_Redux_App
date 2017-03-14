import React from "react";
import {Link} from "react-router";
import Video from "./video";
import FullScreen from "./full-screen";
import Hotspot from "./hotspot";
import Navigation from "./navigation";
import Progress from "./progress";
import Skipping from "./skipping";
import References from "./references";
import Pi from "./pi";
import Profile from "./profile";
import Script from "./script";
import {connect} from "react-redux";
import {setReference} from "../../actions/reference";

class IntroSlide extends React.Component {

    componentDidMount() {
        this.props.setReference({
            reference: 'index'
        });
    }

    componentWillUnmount() {
        this.props.setReference({
            reference: null
        });
    }

    render() {
        const {params} = this.props;

        return (
            <div id="slider" className={"intro-slider " + (params.screen === 'hot-spots' ? '' : 'overlayik ') + (params.screen === 'skipping' ? 'allow-nav' : null)}>

                <div id="header">
                    <nav id="header-nav" className="clearfix">
                        <div className="header-logo pull-left">
                            <a href="javascript: void(0)">
                                <img src="svg/logos/logo_olumiant.svg" alt="Olumiant" />
                            </a>
                        </div>
                        <ul className="header-navbar pull-right">
                            <li className={params.screen === 'references' ? 'intro-references-container' : ''}>
                                {params.screen === 'references' ? <References params={params}/> : null}
                                <a href="javascript: void(0)">
                                    <img src="svg/icons/icon_ref.svg" /> REFERENCES
                                </a>
                            </li>
                            <li className={params.screen === 'pi' ? 'intro-pi-container' : ''}>
                                {params.screen === 'pi' ? <Pi params={params}/> : null}
                                <a href="javascript: void(0)">
                                    <img src="svg/icons/icon_pi.svg" /> PI
                                </a>
                            </li>
                            <li className={params.screen === 'profile' ? 'intro-profile-container' : ''}>
                                {params.screen === 'profile' ? <Profile params={params}/> : null}
                                <a href="javascript: void(0)">
                                    <img src="svg/icons/icon_profile.svg" />
                                    <span className="user-name">{this.props.auth.user.personalData_firstName + ' ' + this.props.auth.user.personalData_lastName}</span>
                                </a>
                            </li>
                            <li>
                                <a className="logout">LOG OUT</a>
                            </li>
                            <li className="toggle-sidebar-nav">
                                {params.screen === 'skipping' ? <Skipping params={params}/> : null}
                                <a href="#">
                                    <img src="svg/icons/icon_bars.svg" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div>
                    <div className="slide-container">
                        <div className="left-side">
                            <span className="btn-expand">
                                <img src="svg/icons/arrow_orange_left.svg" alt="Collapse"/>
                            </span>
                            <div id="video">
                                <div className="video-container">

                                    <Video params={params}/>

                                    <div
                                        className={"video-script-container " + (params.screen === 'video-script' ? 'intro-video-script' : '')}>

                                        {params.screen === 'video-script' ? <Script /> : null}

                                        <p className="video-script-title">Video script</p>
                                        <div className="video-script text-orange">
                                            <p>Hello. I am Dr. Francesco De Leonardis. I am a rheumatologist and a Senior Medical Advisor at Lilly Europe and Canada.</p>
                                            <p>I would like to introduce you to our interactive, self-directed detailer for Olumiant that will allow you to learn about Olumiant at your own pace.</p>
                                            <p>I will be your step-by-step guide, and I will assist you with understanding how Olumiant could help your patients.</p>
                                            <p>Next up is a tutorial on how to use the various features and how to view the clinical trial data in greater detail.</p>
                                            <p>If you have any questions, please get in touch with us at any time. Simply click “Contact us” in the footer, and we will be happy to help you.</p>
                                            <p>Click “Next” below to continue with this guide.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-side">
                            <div className={"chart-container " + (params.screen === "chart" ? "intro-chart" : "")}>

                                <div className="intro-content">
                                    <h3 className="intro-title clearfix">Contents of presentation <span className="pull-right">3/12</span></h3>

                                    <p className="intro-desc">Here you can find all the clinic trial data and interactive content.</p>

                                    <div>
                                        <Link to="intro/video-script" className="btn btn-white btn-previous">PREVIOUS</Link>
                                        <Link to="intro/full-screen" className="btn btn-orange btn-next pull-right">Next</Link>
                                    </div>
                                </div>

                                <div className="chart-content-container">
                                    <div className="rapid-and-sustained">
                                        <div className="chart-content">
                                            <div className="chart-header">
                                                <FullScreen params={params}/>
                                                <h3 className="title">Superior improvements vs adalimumab + MTX after 8 weeks, sustained up to 52 weeks in MTX-IR patients, as measured by ACR50</h3>
                                            </div>
                                            <div className="chart-image">
                                                <div className="graph-line graph-acr50">
                                                    <img src="img/charts/rapid-and-sustained/graph-acr50.png" />
                                                    <div className="cover" style={{left: "100%"}}></div>
                                                    <div className="bar" style={{display: "block"}}></div>
                                                </div>
                                                <div style={{position: 'relative'}}>
                                                    <img src="img/charts/rapid-and-sustained/acr50.jpg" />
                                                    <Hotspot params={params}/>
                                                </div>
                                            </div>
                                            <div className="acr-btns-container">
                                                <span className={"btn btn-orange " + (params.screen === "chart" ? "disabled" : "")}>ACR20</span>
                                                <span className={"btn btn-light-grey " + (params.screen === "chart" ? "disabled" : "")}>ACR50</span>
                                                <span className={"btn btn-orange " + (params.screen === "chart" ? "disabled" : "")}>ACR70</span>
                                            </div>
                                            <div className="action-btns-container">
                                                <span className={"btn btn-blue btn-next " + (params.screen === "chart" ? "disabled" : "")}>Explore the phase III clinical trial programme</span>
                                                <span className={"btn btn-blue btn-next " + (params.screen === "chart" ? "disabled" : "")}>View the RA-BEAM study design</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Navigation params={params}/>
                        </div>
                    </div>
                    <Progress params={params}/>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        reference: state.reference
    };
};

const actionCreators = {
    setReference
};

export default connect(mapStateToProps, actionCreators)(IntroSlide);