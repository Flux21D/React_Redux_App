import React from "react";
import ImageMap from "../../../shared/image-map";
import $ from "jquery";

class Chart extends React.Component {

  constructor (props) {
    super (props);

    this.imageMapCallback = this.imageMapCallback.bind(this);
  }

  componentDidMount () {

    setTimeout(() => {
      $(this._redDotUp).animate({marginLeft: '2.5%', marginTop: '5%'}, 6000);
      $(this._darkRedDotUp).animate({marginLeft: '7%', marginTop: '11%'}, 3000, () => {
        $(this._darkRedDotUp).animate({marginLeft: '9%', marginTop: '16%'}, 3000);
      });

      $(this._brownDot).animate({marginLeft: '-2%', marginTop: '5%'}, 2000, () => {
        $(this._brownDot).animate({marginLeft: '-6%', marginTop: '11%'}, 4000);
      });

      $(this._maroon).animate({marginLeft: '-12%', marginTop: '10%'}, 3000, () => {
        $(this._maroon).animate({marginLeft: '-18%', marginTop: '8%'}, 1000, () => {
          $(this._maroon).animate({marginLeft: '-21%', marginTop: '14%'}, 1000);
        });
      });
    }, 0);

    setInterval(() => {
      $(this._jak3).animate({ top: '56%' }, 1000);
      $(this._tyk2).animate({ top: '79%' }, 1000);

      $(this._jak3).animate({ top: '57%' }, 1000);
      $(this._tyk2).animate({ top: '78%' }, 1000);
    }, 2000);

    setTimeout(() => {
      $(this._jak1).animate({marginLeft: '3.5%'}, 1000);
      $(this._jak2).animate({marginLeft: '-3.5%'}, 1000);
    }, 3000);

    setTimeout(() => {
      $(this._redDotUp).css({
        marginLeft: 0,
        marginTop: 0
      });
      $(this._darkRedDotUp).css({
        marginLeft: 0,
        marginTop: 0
      });
      $(this._brownDot).css({
        marginLeft: 0,
        marginTop: 0
      });
      $(this._maroon).css({
        marginLeft: 0,
        marginTop: 0
      });

      $(this._orange1).show().animate({top: "50%", left: "2%"}, 2000, () => {
        $(this._orange1).animate({top: "65%", left: "6%"}, 2000, () => {
          $(this._orange1).animate({top: "62%", left: "17%"}, 2000, () => {

            $(this._jakarrow).animate({width: '18%'}, 2000, () => {
              $(this._dotzoom).animate({width: '25%'}, 2000, () => {

                setTimeout(() => {
                  $(this._jakarrow).hide();
                  $(this._dotzoom).hide();

                  setTimeout(() => {
                    $(this._jak3).fadeOut(1000).fadeIn(1000);
                    $(this._tyk2).fadeOut(1000).fadeIn(1000);

                    $(this._jak1).find("img").attr("src", "img/charts/moa/fadedjak1.png");
                    $(this._jak2).find("img").attr("src", "img/charts/moa/fadedjak2.png");

                  }, 4000);

                }, 2000);

              });
            });

            $(this._leftRecptor).show();
            $(this._rightRecptor).show();
          });
        });
      });
      $(this._orange2).show().animate({top: "50%", left: "57%"}, 2000, () => {
        $(this._orange2).animate({top: "65%", left: "46%"}, 2000, () => {
          $(this._orange2).animate({top: "62%", left: "38%"}, 2000);
        });
      });

      $(this._jak1).css({marginLeft: '0'});
      $(this._jak2).css({marginLeft: '0'});

    }, 10000);

  }

  imageMapCallback () {
    this.props.imageMapCallback();
  }

  render () {

    const {slide} = this.props;

    return (
            <div className="chart-image">
                <ImageMap hotspots={[{styles: {left: "25%", top: "59%"}}]} data={slide.slideData.hotspot} callback={this.imageMapCallback}>
                    <img src="img/charts/moa/moa.png" />
                </ImageMap>

                <div ref={a => {return this._leftRecptor = a}} className="left-recptor">
                    <img src="img/charts/moa/left-receptor.png"/>
                </div>

                <div ref={a => {return this._jak1 = a}} className="jak1">
                    <img src="img/charts/moa/jak1.png" alt="JAK1"/>
                </div>

                <div ref={a => {return this._jakarrow = a}} className="jakarrow">
                    <img src="img/charts/moa/jakarrow.png"/>
                </div>

                <div ref={a => {return this._dotzoom = a}} className="dotzoom">
                    <img src="img/charts/moa/dotzoom.png"/>
                </div>

                <div ref={a => {return this._rightRecptor = a}} className="right-recptor">
                    <img src="img/charts/moa/right-recptor.png"/>
                </div>

                <div ref={a => {return this._jak2 = a}} className="jak2">
                    <img src="img/charts/moa/jak2.png" alt="JAK2"/>
                </div>
                <div ref={a => {return this._jak3 = a}} className="jak3">
                    <img src="img/charts/moa/jak3.png" alt="JAK3"/>
                </div>
                <div ref={a => {return this._tyk2 = a}} className="tyk2">
                    <img src="img/charts/moa/tyk2.png" alt="TYK2"/>
                </div>

                <div ref={a => {return this._darkRedDotUp = a}} className="dot dark-red">
                    <img src="img/charts/moa/reddark-dot.png" />
                </div>
                <div ref={a => {return this._redDotUp = a}} className="dot red">
                    <img src="img/charts/moa/red-dot.png" />
                </div>
                <div ref={a => {return this._brownDot = a}} className="dot brown">
                    <img src="img/charts/moa/brown-dot.png" />
                </div>
                <div ref={a => {return this._maroon = a}} className="dot maroon">
                    <img src="img/charts/moa/maroon-dot.png" />
                </div>

                <div ref={a => {return this._orange1 = a}} className="dot orange1">
                    <img src="img/charts/moa/orange-dot.png" />
                </div>
                <div ref={a => {return this._orange2 = a}} className="dot orange2">
                    <img src="img/charts/moa/orange-dot.png" />
                </div>

            </div>
    );
  }

}

export default Chart;