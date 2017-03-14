import React from "react";
import $ from "jquery";

class ACR70 extends React.Component {

  constructor (props) {
    super (props);
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }

  handleImageLoaded () {
    $(this._chart).find(".cover").animate({'left': '100%'}, 2000, () => {
      $(this._chart).find(".bar").fadeIn(2000);
    });
  }

  render () {
    return (
            <div className="chart-image">
                <div ref={a => {return this._chart = a}} className="graph-line graph-acr70">
                    <img src="img/charts/rapid-and-sustained/graph-acr70.png" alt=""/>
                    <div className="cover"></div>

                    <div className="bar"></div>
                </div>
                <img onLoad={this.handleImageLoaded} src="img/charts/rapid-and-sustained/acr70.jpg" alt=""/>
            </div>
    );
  }

}

export default ACR70;