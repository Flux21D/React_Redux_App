import React from "react";
import $ from "jquery";

class Chart extends React.Component {

  constructor (props) {
    super (props);

    this.handleAnimations = this.handleAnimations.bind(this);
  }

  componentDidMount () {
    this.handleAnimations ();
  }

  handleAnimations () {

    const time = 2000;

    $(this._acr20_1, this._acr20_2).find('div').each((i, el) => {
      $(el).animate({height: $(el).text() + '%'}, time)
    });

    $(this._acr20_2).find('div').each((i, el) => {
      $(el).animate({height: $(el).text() + '%'}, time)
    });

    $(this._acr20_3).find('div').each((i, el) => {
      $(el).animate({height: $(el).text() + '%'}, time)
    });


    setTimeout (() => {
      $(this._acr50_1, this._acr20_2).find('div').each((i, el) => {
        $(el).animate({height: $(el).text() + '%'}, time)
      });

      $(this._acr50_2).find('div').each((i, el) => {
        $(el).animate({height: $(el).text() + '%'}, time)
      });

      $(this._acr50_3).find('div').each((i, el) => {
        $(el).animate({height: $(el).text() + '%'}, time)
      });

      $(this._acr70_1, this._acr20_2).find('div').each((i, el) => {
        $(el).animate({height: $(el).text() + '%'}, time)
      });

      $(this._acr70_2).find('div').each((i, el) => {
        $(el).animate({height: $(el).text() + '%'}, time)
      });

      $(this._acr70_3).find('div').each((i, el) => {
        $(el).animate({height: $(el).text() + '%'}, time)
      });
    }, time);
  }

  render () {

    return (
            <div style={{display: 'inline-block', position: 'relative'}}>

                <div className="chart-bars-container head-to-head-bars" style={{bottom: '10.7%', left: '6%', width: '59%', height: '94%'}}>

                    <div ref={a => {return this._acr20_1 = a}} className="acr20">
                        <div className="qaq bar light-grey" style={{left: '2.3%'}}>40</div>
                        <div className="bar orange" style={{left: '5.7%'}}>70</div>
                        <div className="bar grey" style={{left: '9.2%'}}>61</div>
                    </div>

                    <div ref={a => {return this._acr50_1 = a}} className="acr50">
                        <div className="bar light-grey" style={{left: '13.8%'}}>17</div>
                        <div className="bar orange" style={{left: '17.2%'}}>45</div>
                        <div className="bar grey" style={{left: '20.5%'}}>35</div>
                    </div>

                    <div ref={a => {return this._acr70_1 = a}} className="acr70">
                        <div className="bar light-grey" style={{left: '25.3%'}}>5</div>
                        <div className="bar orange" style={{left: '28.6%'}}>19</div>
                        <div className="bar grey" style={{left: '31.8%'}}>13</div>
                    </div>

                    <div ref={a => {return this._acr20_2 = a}} className="acr20">
                        <div className="bar light-grey" style={{left: '38.8%'}}>37</div>
                        <div className="bar orange" style={{left: '42.3%'}}>74</div>
                        <div className="bar grey" style={{left: '45.8%'}}>66</div>
                    </div>

                    <div ref={a => {return this._acr50_2 = a}} className="acr50">
                        <div className="bar light-grey" style={{left: '50.3%'}}>19</div>
                        <div className="bar orange" style={{left: '53.7%'}}>51</div>
                        <div className="bar grey" style={{left: '57%'}}>45</div>
                    </div>

                    <div ref={a => {return this._acr70_2 = a}} className="acr70">
                        <div className="bar light-grey" style={{left: '62%'}}>8</div>
                        <div className="bar orange" style={{left: '65.3%'}}>30</div>
                        <div className="bar grey" style={{left: '68.3%'}}>22</div>
                    </div>

                    <div ref={a => {return this._acr20_3 = a}} className="acr20">
                        <div className="bar orange" style={{left: '75.3%'}}>71</div>
                        <div className="bar grey" style={{left: '78.8%'}}>62</div>
                    </div>

                    <div ref={a => {return this._acr50_3 = a}} className="acr50">
                        <div className="bar orange" style={{left: '83.4%'}}>56</div>
                        <div className="bar grey" style={{left: '86.8%'}}>47</div>
                    </div>

                    <div ref={a => {return this._acr70_3 = a}} className="acr70">
                        <div className="bar orange" style={{left: '91%'}}>37</div>
                        <div className="bar grey" style={{left: '94.3%'}}>31</div>
                    </div>
                </div>

                <img style={{width: '100%'}} src="img/charts/head-to-head/head-to-head.jpg" />
            </div>
    );
  }

}

export default Chart;