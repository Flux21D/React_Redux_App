import React from "react";
import createMarkup from "../../../../utils/html-text";

class TreatmentParadigmModal extends React.Component {

    render () {
        const {title, description, disclaimer, img} = this.props;

        return (
            <div className="treatment-paradigm-dialog">
                <h3 className="text-orange" dangerouslySetInnerHTML={createMarkup(title)} />

                <div><img src={img} alt=""/></div>

                <p className="desc" dangerouslySetInnerHTML={createMarkup(description)}/>
                <p className="disc">{disclaimer}</p>
            </div>
        );

    }
}

export default TreatmentParadigmModal;