import React from "react";
import createMarkup from "../../../../utils/html-text";
import CollapseBtn from "../../collapse-btn";

class OnceDailyTablet extends React.Component {

  constructor (props) {
    super (props);
  }

  render () {

    const {slide} = this.props;

    return (
            <div className={slide.slug}>
                <div className="chart-content">
                    <CollapseBtn/>
                    <table cellPadding="0" cellSpacing="0">
                        <tbody>
                        <tr>
                            <td colSpan="2">
                                <div className="chart-header">
                                    <h3 className="title" dangerouslySetInnerHTML={createMarkup(slide.title)} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="thumbnail-container">
                                <img src={slide.slideData.mg4.thumbnail} alt=""/>
                            </td>
                            <td>
                                <h3 className="mg4-title" dangerouslySetInnerHTML={createMarkup(slide.slideData.mg4.text)} />
                            </td>
                        </tr>
                        <tr>
                            <td className="thumbnail-container">
                                <img src={slide.slideData.mg2.thumbnail} alt=""/>
                            </td>
                            <td>
                                <ul className="mg2-desc-list" dangerouslySetInnerHTML={createMarkup(slide.slideData.mg2.text)} />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="actual-size">Tablets are not shown at actual size</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    );

  }

}

export default OnceDailyTablet;