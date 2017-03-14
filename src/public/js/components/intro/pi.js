import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {toggleReference} from "../../actions/reference";

class Preferences extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount () {
        this.props.toggleReference({
            showReference: false
        });
    }

    render() {
        const {params} = this.props;

        return (
            <div className={(params.screen === 'pi' ? 'intro-pi' : '')}>
                <div className="intro-content">
                    <h3 className="intro-title clearfix">PI (Product Information)<span
                        className="pull-right">11/12</span></h3>

                    <p className="intro-desc">You can access the product information in the top navigation.</p>

                    <div>
                        <Link to="intro/references" className="btn btn-white btn-previous">Previous</Link>
                        <Link to="intro/profile" className="btn btn-orange btn-next pull-right">Next</Link>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        references: state.references
    };
};

const actionCreators = {
    toggleReference
};

export default connect(mapStateToProps, actionCreators)(Preferences);