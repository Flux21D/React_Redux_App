import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {getLatestVisitedSlideInfo} from "../../actions/resume";
import {openModal} from "../../actions/modal";
import {setReference} from "../../actions/reference";
import {removeNewUser} from "../../actions/auth";
import Welcome from "./welcome";
import Resume from "./resume";

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.setHome = this.setHome.bind(this);
    }

    componentDidMount() {

        if (!this.props.children) {

            const {isNew} = this.props.auth;

            if (isNew) {
                this.props.openModal({
                    Component: Welcome,
                    dialogSettings: {
                        classes: "welcome-box index-modal-box"
                    },
                    onBeforeClose: () => {
                        this.props.removeNewUser();
                    }
                });
            }
        }

        this.props.setReference({
            reference: 'index'
        });
    }

    componentWillUnmount () {
        this.props.setReference({
            reference: null
        });
    }

    setHome(){
        this.context.router.push('/home');
    }

    componentWillReceiveProps(nextProps) {

        const hideWelcome = sessionStorage.getItem("hideWelcome");
        const {location, auth} = nextProps;
        const {user, accessToken} = auth;
        const that = this;
        if (nextProps.children !== this.props.children && accessToken && hideWelcome !== "true" && location.query.resume === "1") {
            this.props.getLatestVisitedSlideInfo(user.uuid).then(response => {
                if (response !== "") {
                    this.props.openModal({
                        Component: Resume,
                        data: response,
                        dialogSettings: {
                            classes: "resume-box index-modal-box"
                        },
                        onBeforeClose: () => {
                            sessionStorage.setItem("hideWelcome", true);
                            if(response.slide_id == 18){
                                that.setHome();
                            }
                        }
                    });
                }
            });
        }
    }

    render() {
        return (
            <div className="index-container">
                {this.props.children}
                <div id="index">
                    <p className="text-center">For patients with moderate-to-severe rheumatoid arthiritis (RA)</p>
                    <h1 className="text-center">Reach beyond the standard</h1>
                    <p className="dmard text-center">When treating patients who are insufficiently <br />responding or
                        intolerant to conventional DMARDs.</p>

                    <p className="choose-experience text-center">Please choose your experience</p>

                    <div className="quick-start clearfix">
                        <div className="pull-left">
                            <Link className="btn btn-orange" to="slide/fast-track/intro">
                                FAST-TRACK VERSION
                                <img className="arrow-right-3" src="svg/icons/arrow_white_right_3.svg"/>
                            </Link>
                        </div>
                        <div className="pull-right">
                            <Link className="btn btn-orange" to="slide/full/intro">
                                FULL VERSION
                                <img className="arrow-right-1" src="svg/icons/arrow_white_right.svg"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

Index.contextTypes = {
    router: React.PropTypes.object.isRequired
};


const mapStateToProps = (state) => {
    return {
        resume: state.resume,
        auth: state.auth
    };
};

const actionCreators = {
    getLatestVisitedSlideInfo,
    openModal,
    setReference,
    removeNewUser
};

export default connect(mapStateToProps, actionCreators)(Index);