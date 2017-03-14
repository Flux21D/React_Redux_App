import React from "react";
import {Link} from "react-router";
import createMarkup from "../../../utils/html-text";
import CollapseBtn from "../collapse-btn";
import {connect} from "react-redux";

class Summary extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {slide, reduxSlide} = this.props;

        return (
            <div className={slide.slug}>
                <div className="chart-header">
                    <h3 className="title" dangerouslySetInnerHTML={createMarkup(slide.title)}/>
                    <p className="description" dangerouslySetInnerHTML={createMarkup(slide.description)}/>
                </div>
                <div className="chart-content">
                    <CollapseBtn />
                    <ul className="summary-list">
                        {slide.slideData.summaryData.map((item, key) => {
                            return <li key={key} className="summary-list-item">
                                <p className="title" dangerouslySetInnerHTML={createMarkup(item.htmlText)}/>
                                <div className="btn-container">
                                    <Link className="btn btn-orange" to={"slide/" + reduxSlide.version + "/" + item.link}>GO TO SECTION</Link>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        );

    }
}

const mapStateToProps = (state) => {
    return {
        reduxSlide: state.slide
    };
};

export default connect(mapStateToProps)(Summary);