import React from "react";
import {connect} from "react-redux";
import references from "../../utils/references";
import referencesValues from "../../utils/references-values";
import {toggleReference} from "../../actions/reference";

class References extends React.Component {

    constructor(props) {
        super(props);

        this.closeReferences = this.closeReferences.bind(this);
    }

    closeReferences () {
        this.props.toggleReference({
            showReference: false
        });
    }

    render() {

        const refs = references[this.props.reference.reference];

        return (
            <div id="references" className="bg-grey">

                <span className="close-references" onClick={this.closeReferences}>
                    <img src="svg/icons/icon_close_grey.svg" alt="Close"/>
                </span>

                <h2 className="references-title">
                    <img src="svg/icons/icon_ref.svg" alt="References"/> References
                </h2>

                <ul className="references-list">
                    {
                        refs.map((ref, key) => {
                            return <li key={key}>
                                {referencesValues[ref].author + " " + referencesValues[ref].title + " " + referencesValues[ref].otherInfo}
                            </li>;
                        })
                    }
                </ul>

            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        reference: state.reference
    }
};

const actionCreators = {
    toggleReference
};

export default connect(mapStateToProps, actionCreators)(References);