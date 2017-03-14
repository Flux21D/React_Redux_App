import React from "react";
import $ from "jquery";
import Pole from "../../../keys/pole";

class Chart extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        $(this._week12).animate({height: '100%'}, 2000, () => {
            $(this._week24).animate({height: '100%'}, 2000, () => {
                $(this._week52).animate({height: '100%'}, 2000);
            });
        });
    }

    render() {

        return (
            <div style={{position: 'relative'}}>

                <div className="chart-bars-container disease-activity-bars">

                    <img ref={a => {
                        return this._week12 = a
                    }} className="week12" src="img/charts/disease-activity/week12.png"/>

                    <img ref={a => {
                        return this._week24 = a
                    }} className="week24" src="img/charts/disease-activity/week24.png"/>

                    <img ref={a => {
                        return this._week52 = a
                    }} className="week52" src="img/charts/disease-activity/week52.png"/>
                </div>

                <Pole />

                <img style={{width: '67%'}} src="img/charts/disease-activity/disease-activity.jpg"/>
            </div>
        );

    }

}

export default Chart;