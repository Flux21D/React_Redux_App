import React from "react";
import CollapseBtn from "../../collapse-btn";
import Chart from "./chart";

class EfficacyAcrossTrials extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {slide} = this.props;

        return (
            <div className={slide.slug}>
                <div className="chart-content">
                    <CollapseBtn/>
                    <Chart />
                </div>
            </div>
        );

    }

}

export default EfficacyAcrossTrials;