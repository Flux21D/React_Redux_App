import React from "react";
import $ from "jquery";

class ACR20 extends React.Component {

  constructor (props) {
    super (props);
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }

  handleImageLoaded () {
    setTimeout (() => {
      $(this._chart).find(".cover").animate({'left': '100%'}, 2000);
    }, 0);
  }

  render () {
    return (
            <div className="chart-image">
                <div ref={a => {return this._chart = a}} className="graph-line graph-acr20">
                    <img src="img/charts/rapid-and-sustained/graph-acr20.png" alt=""/>
                    <div className="cover"></div>
                </div>
                <img onLoad={this.handleImageLoaded} src="img/charts/rapid-and-sustained/acr20.jpg" alt=""/>
            </div>
    );
  }

}

export default ACR20;