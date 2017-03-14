import React from "react";
import $ from "jquery";

class Chart extends React.Component {

  constructor (props) {
    super (props);
  }

  componentDidMount () {

    setTimeout(() => {
      $(this._one1).animate({height: '100%'}, 1000, () => {
        $(this._one2).animate({height: '100%'}, 1000, () => {
          $(this._one3).animate({height: '100%'}, 1000, () => {
            $(this._firstHeading).fadeIn(500);
          });
        });
      });
    }, 0);

    setTimeout(() => {
      $(this._two1).animate({height: '100%'}, 1000, () => {
        $(this._two2).animate({height: '100%'}, 1000, () => {
          $(this._two3).animate({height: '100%'}, 1000, () => {
            $(this._secondHeading).fadeIn(500);
          });
        });
      });
    }, 3000);

    setTimeout(() => {
      $(this._three2).animate({height: '100%'}, 1000, () => {
        $(this._three1).animate({height: '100%'}, 1000, () => {
          $(this._thirdHeading).fadeIn(500);
        });
      });
    }, 6000);

    setTimeout(() => {
      $(this._mainGraph).animate({height: '100%'}, 1000, () => {
        $(this._graphHeadings).fadeIn(500);
      });
    }, 8000);

  }

  render () {

    return (
            <div style={{display: 'inline-block', position: 'relative'}}>

                <div className="chart-bars-container head-to-head-bars">
                    <div ref={a => {return this._one1 = a}} className="bar one1" />
                    <div ref={a => {return this._one2 = a}} className="bar one2" />
                    <div ref={a => {return this._one3 = a}} className="bar one3" />

                    <div ref={a => {return this._two1 = a}} className="bar two1" />
                    <div ref={a => {return this._two2 = a}} className="bar two2" />
                    <div ref={a => {return this._two3 = a}} className="bar two3" />

                    <div ref={a => {return this._three1 = a}} className="bar three1" />
                    <div ref={a => {return this._three2 = a}} className="bar three2" />

                    <div ref={a => {return this._mainGraph = a}} className="main_graph" />

                    <img ref={a => {return this._graphHeadings = a}} className="graphHeadings" src="img/charts/head-to-head/graphHeadings.png" />

                    <img ref={a => {return this._firstHeading = a}} className="firstHeading" src="img/charts/head-to-head/firstHeading.png" />
                    <img ref={a => {return this._secondHeading = a}} className="secondHeading" src="img/charts/head-to-head/secondHeading.png" />
                    <img ref={a => {return this._thirdHeading = a}} className="thirdHeading" src="img/charts/head-to-head/thirdHeading.png" />
                </div>

                <img style={{width: '100%'}} src="img/charts/head-to-head/head-to-head.jpg" />
            </div>
    );
  }

}

export default Chart;