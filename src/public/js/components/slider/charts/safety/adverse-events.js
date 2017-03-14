import React from "react";
import createMarkup from "../../../../utils/html-text";
import CollapseBtn from "../../collapse-btn";

class AdverseEvents extends React.Component {

  constructor (props) {
    super (props);
  }

  render () {
    const {slide} = this.props;

    return (
            <div className="chart-content">
                <CollapseBtn />
                <div className="chart-image">
                    <img src={slide.chartImg.fields.file.url} alt={slide.chartImg.fields.file.title}/>
                </div>

                <ul className="chart-desciption-list">
                    {slide.slideData.map((item, key) => {
                      return <li key={key} dangerouslySetInnerHTML={createMarkup(item.text)}></li>;
                    })}
                </ul>
            </div>
    );

  }

}

export default AdverseEvents;