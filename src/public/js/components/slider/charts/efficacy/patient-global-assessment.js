import React from "react";
import CollapseBtn from "../../collapse-btn";
import $ from "jquery";
import Graph from "../../keys/graph";

class PatientGlobalAssessment extends React.Component {

    constructor(props) {
        super(props);

        this.handleImageLoaded = this.handleImageLoaded.bind(this);
    }

    handleImageLoaded() {
        setTimeout(() => {
            $(this._chart).find(".cover").animate({'left': '100%'}, 2000);
        }, 0);
    }

    render() {

        const {slide} = this.props;

        return (
            <div className={slide.slug}>
                <div className="chart-content">
                    <CollapseBtn/>

                    <div className="chart-image" style={{position: 'relative'}}>

                        <div ref={a => {
                            return this._chart = a
                        }} className="graph-line graph-patient">
                            <img src="img/charts/patient-global-assessment/graph.png" className="graph-img"/>
                            <div className="cover"/>
                        </div>

                        <Graph />

                        <img onLoad={this.handleImageLoaded}
                             src="img/charts/patient-global-assessment/patient-global-assessment.jpg"/>
                    </div>
                </div>
            </div>
        );

    }

}

export default PatientGlobalAssessment;