import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {toggleSidebar} from "../../actions/toggle-sidebar";

class Skipping extends React.Component {

  constructor (props) {
    super (props);
  }

  componentWillMount () {
    this.props.toggleSidebar({
      flag: true
    });
  }

  componentWillUnmount () {
    this.props.toggleSidebar({
      flag: false
    });
  }

  render () {
    const {params} = this.props;

    return (
            <div className={(params.screen === 'skipping' ? 'intro-skipping' : '')}>
                <div className="intro-content">
                    <h3 className="intro-title clearfix">
                        Skipping to a specific slide<span className="pull-right">8/12</span>
                    </h3>

                    <p className="intro-desc">If you would like to jump ahead to a specific topic in the presentation just click on the menu icon to view all of the topics.</p>

                    <div>
                        <Link to="intro/progress" className="btn btn-white btn-previous">Previous</Link>
                        <Link to="intro/challenge" className="btn btn-orange btn-next pull-right">Next</Link>
                    </div>
                </div>
            </div>
    );
  }

}

const mapStateToProps = (state) => {
    return {
        toggleSidebar: state.toggleSidebar
    };
};

export default connect(mapStateToProps, {toggleSidebar})(Skipping);
