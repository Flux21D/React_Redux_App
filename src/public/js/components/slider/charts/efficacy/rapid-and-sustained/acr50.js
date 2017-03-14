import React from "react";
import ImageMap from "../../../../shared/image-map";
import $ from "jquery";

class ACR50 extends React.Component {

    constructor(props) {
        super(props);
        this.handleImageLoaded = this.handleImageLoaded.bind(this);
    }

    handleImageLoaded() {
        $(this._chart).find(".cover").animate({'left': '100%'}, 2000, () => {
            $(this._chart).find(".bar").fadeIn(2000);
        });
    }

    render() {

        const {data} = this.props;

        data.hotspot.img = "img/charts/rapid-and-sustained/hotspot.jpg";

        return (
            <div className="chart-image">
                <div ref={a => {
                    return this._chart = a
                }} className="graph-line graph-acr50">
                    <img src="img/charts/rapid-and-sustained/graph-acr50.png" alt=""/>
                    <div className="cover"></div>

                    <div className="bar"></div>
                </div>

                <ImageMap hotspots={[{styles: {top: "40%", left: "6%"}}]} data={data.hotspot}>
                    <img onLoad={this.handleImageLoaded} src="img/charts/rapid-and-sustained/acr50.jpg" alt=""/>
                </ImageMap>
            </div>
        );
    }

}

export default ACR50;