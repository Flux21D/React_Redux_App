import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import {toggleReference} from "../../actions/reference";

class References extends React.Component {

    constructor(props) {
        super(props);
        this.hideReference = this.hideReference.bind(this);
    }

    componentDidMount () {
        this.props.toggleReference({
            showReference: true
        });
    }

    hideReference (event) {
        event.preventDefault();
        window.location = 'intro/challenge';
        this.props.toggleReference({
            showReference: false
        });
    }

    render() {
        const {params} = this.props;

        return (
            <div className={(params.screen === 'references' ? 'intro-references' : '')}>
                <div className="intro-content">
                    <h3 className="intro-title clearfix">
                        References<span className="pull-right">10/12</span>
                    </h3>

                    <p className="intro-desc">You can access the references in the top navigation.</p>

                    <div>
                        <Link to="intro/challenge" className="btn btn-white btn-previous" onClick={this.hideReference}>Previous</Link>
                        <Link to="intro/pi" className="btn btn-orange btn-next pull-right">Next</Link>
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

export default connect(mapStateToProps, actionCreators)(References);