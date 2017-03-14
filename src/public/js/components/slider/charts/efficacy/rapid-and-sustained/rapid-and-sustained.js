import React from "react";
import {connect} from "react-redux";
import CollapseBtn from "../../../collapse-btn";
import {openModal} from "../../../../../actions/modal";
import ExploreModal from "./modal";
import ViewModal from "../head-to-head/modal";
import ChartHeader from "../../../chart-header";
import GTMDimentionsValues from "../../../../../utils/gtm-dimentions-values";
import ACR20 from "./acr20";
import ACR50 from "./acr50";
import ACR70 from "./acr70";

class RapidAndSustained extends React.Component {

    state = {
        activeChart: 'ACR50'
    };

    constructor(props) {
        super(props);

        this.openModal = this.openModal.bind(this);
        this.expandChart = this.expandChart.bind(this);
        this.imageMapCallback = this.imageMapCallback.bind(this);
    }

    imageMapCallback() {
        dataLayer.push({
            'event': 'CustomClick',
            'language': this.props.country.language,
            'country': this.props.country.country,
            'cdj': GTMDimentionsValues['SD-SL-03-HI'].cdj,
            'btc': GTMDimentionsValues['SD-SL-03-HI'].btc
        });
    }

    expandChart() {
        this.props.expandChart();
    }

    openModal(component, data) {
        this.props.openModal({
            Component: component,
            data: data
        });
    }

    setActiveChart(acr) {
        this.setState({
            activeChart: acr
        });
    }

    render() {

        const {slide, expanded} = this.props;

        const setChart = () => {

            const data = slide.slideData[this.state.activeChart];

            if (this.state.activeChart === 'ACR20') {
                return <ACR20 data={data}/>;
            }
            if (this.state.activeChart === 'ACR50') {
                return <ACR50 data={data}/>;
            }
            if (this.state.activeChart === 'ACR70') {
                return <ACR70 data={data}/>;
            }

        };

        return (
            <div className={slide.slug}>
                <div className="chart-content">
                    <CollapseBtn />

                    <ChartHeader expandChart={this.expandChart} slideData={{
                        title: slide.slideData[this.state.activeChart].title,
                        description: slide.slideData[this.state.activeChart].description
                    }}/>

                    {setChart()}

                    <div className="acr-btns-container">
                        <span onClick={() => {
                            return this.setActiveChart('ACR20')
                        }} className={"btn " + (this.state.activeChart === 'ACR20' ? "btn-light-grey" : "btn-orange")}>ACR20</span>
                        <span onClick={() => {
                            return this.setActiveChart('ACR50')
                        }} className={"btn " + (this.state.activeChart === 'ACR50' ? "btn-light-grey" : "btn-orange")}>ACR50</span>
                        <span onClick={() => {
                            return this.setActiveChart('ACR70')
                        }} className={"btn " + (this.state.activeChart === 'ACR70' ? "btn-light-grey" : "btn-orange")}>ACR70</span>
                    </div>
                    <div className="action-btns-container">
                        <span className="btn btn-blue btn-next" onClick={() => {
                            return this.openModal(ExploreModal, slide.slideData.exploreBtn.modal)
                        }}>{slide.slideData.exploreBtn.title}</span>

                        <span className="btn btn-blue btn-next" onClick={() => {
                            return this.openModal(ViewModal, slide.slideData.viewBtn.modal)
                        }}>{slide.slideData.viewBtn.title}</span>
                    </div>
                </div>
            </div>
        );

    }

}

const mapStateToProps = (state) => {
    return {
        country: state.country
    }
};

export default connect(mapStateToProps, {openModal})(RapidAndSustained);