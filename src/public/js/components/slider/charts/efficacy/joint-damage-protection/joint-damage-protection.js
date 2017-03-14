import React from "react";
import CollapseBtn from "../../../collapse-btn";
import {openModal} from "../../../../../actions/modal";
import {connect} from "react-redux";
import Modal from "../rapid-and-sustained/modal";
import ChartWeek24 from "./chart-week24";
import ChartWeek52 from "./chart-week52";
import Pole from "../../../keys/pole";

class JointDamageProtection extends React.Component {

    state = {
        activeChartIndex: 0
    };

    constructor(props) {
        super(props);

        this.openModal = this.openModal.bind(this);
    }

    openModal(data) {
        this.props.openModal({
            Component: Modal,
            data: data
        });
    }

    setActiveChart(index) {
        this.setState({
            activeChartIndex: index
        });
    }

    render() {

        const {slide, expanded} = this.props;

        return (
            <div className={slide.slug}>

                <div className="chart-content">
                    <CollapseBtn />

                    <div style={{position: 'relative', overflow: 'hidden'}}>
                        {this.state.activeChartIndex === 0 ? <ChartWeek24 /> : <ChartWeek52 />}

                        <Pole />

                        <img style={{width: '58.2%'}} src="img/charts/joint-damage-protection/jdp.jpg"/>
                    </div>

                    <div className="week-btns-container">
                        {slide.chartImgs.map((chart, key) => {
                            return <span key={key} onClick={() => {
                                return this.setActiveChart(key)
                            }}
                                         className={"btn " + (this.state.activeChartIndex === key ? "btn-light-grey" : "btn-orange")}>{chart.fields.title}</span>
                        })}
                    </div>

                    <div className="explore-btn-container">
                        <span onClick={() => {
                            return this.openModal(slide.slideData.exploreBtn.modal)
                        }} className="btn btn-blue btn-next">{slide.slideData.exploreBtn.title}</span>
                    </div>
                </div>
            </div>
        );

    }

}

export default connect(null, {openModal})(JointDamageProtection);