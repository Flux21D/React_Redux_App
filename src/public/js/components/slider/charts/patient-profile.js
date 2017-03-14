import React from "react";
import CollapseBtn from "../collapse-btn";
import createMarkup from "../../../utils/html-text";

class PatientProfile extends React.Component {

  constructor (props) {
    super (props);
  }

  render () {

    const {slide} = this.props;

    return (
            <div className={slide.slug}>
                <div className="chart-header">
                    <h3 className="title" dangerouslySetInnerHTML={createMarkup(slide.title)} />
                    <p className="description" dangerouslySetInnerHTML={createMarkup(slide.description)} />
                </div>

                <div className="chart-content">
                    <CollapseBtn />

                    {slide.slideData.circlesData.map((circle, key) => {
                      return <div key={key} className={"circle circle-" + key}>
                            <div>
                                {circle.text}
                            </div>
                        </div>;
                    })}

                    <div className="circle-big">
                        <div>{slide.slideData.bigCircle.text}</div>
                    </div>
                </div>
            </div>
    );

  }
}

export default PatientProfile;