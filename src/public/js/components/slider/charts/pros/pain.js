import React from "react";
import CollapseBtn from "../../collapse-btn";
import $ from "jquery";
import Graph from "../../keys/graph";

class Pain extends React.Component {

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
                    <CollapseBtn />

                    <div className="chart-image chart-pain">
                        <div ref={a => {
                            return this._chart = a
                        }} className="graph-line pain">
                            <img style={{position: 'relative', left: '-1%'}} src="img/charts/pros/pain-graph.png"/>
                            <div className="cover"></div>
                        </div>

                        <Graph />

                        <img onLoad={this.handleImageLoaded} src="img/charts/pros/pain.jpg"/>
                    </div>
                </div>
            </div>
        );


    }

}

export default Pain;