import React from "react";
import $ from "jquery";

class Chart extends React.Component {

  constructor (props) {
    super (props);
  }

  componentDidMount () {
    setTimeout(() => {
      $(this._arrow).animate({bottom: "4.5%"}, 1000);
    }, 0);
  }

  render () {
    return (
            <div>
                <img ref={a => {return this._arrow = a}} className="arrow-up-blue" src="img/charts/joint-damage-protection/arrow.png"/>
                <div className="chart-bars-container jdp-bars">

                    <img className="week24" src="img/charts/joint-damage-protection/week24.png" alt="Week 24"/>

                </div>
            </div>
    );
  }

}

export default Chart;