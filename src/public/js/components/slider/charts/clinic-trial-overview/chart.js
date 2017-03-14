import React from "react";
import $ from "jquery";

class Chart extends React.Component {

  constructor (props) {
    super (props);
  }

  componentDidMount () {
    $(".eat-bars .graph").animate({bottom: "0%"}, 2000, () => {
        $(this._graphLines).fadeIn(500);
    });
  }

  render () {
    return (
            <div style={{display: 'inline-block', position: 'relative'}}>
                <div className="chart-bars-container eat-bars">
                    <div className="graph first">
                        <img src="img/charts/efficacy-across-trials/firstGraphAnim.png" />
                    </div>

                    <img ref={a => {return this._graphLines = a}} src="img/charts/efficacy-across-trials/graphLines.png" className="graphLines" />

                    <div className="graph second">
                        <img src="img/charts/efficacy-across-trials/secondGraphAnim.png" />
                    </div>

                    <div className="graph third">
                        <img src="img/charts/efficacy-across-trials/thirdGraphAnim.png" />
                    </div>
                    
                    <div className="graph fourth">
                        <img src="img/charts/efficacy-across-trials/fourthGraphAnim.png" />
                    </div>
                </div>

                <img style={{width: '100%'}} src="img/charts/efficacy-across-trials/efficacy-across-trials.jpg" />
            </div>
    );
  }

}

export default Chart;