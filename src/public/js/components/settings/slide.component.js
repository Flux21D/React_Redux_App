import React from "react";
import {Link} from "react-router";
import createMarkup from "../../utils/html-text";

class SlideComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {slide} = this.props;

        return (
            <tr className="slides-list-item">
                <td className="slide-title">Slide {slide.id}</td>
                <td className="slide-description" dangerouslySetInnerHTML={createMarkup(slide.title)}/>
                <td className="slide-actions">
                    {
                        slide.quiz ? (slide.quizAnswer && slide.quizAnswer.is_correct) ? <Link className="btn btn-white" to={"slide/full/" + this.props.slide.slug}>COMPLETED - RE-START</Link> : <Link className="btn btn-orange" to={"slide/full/" + this.props.slide.slug}>START CHALLENGE</Link> : null
                    }
                </td>
            </tr>
        );

    }
}

export default SlideComponent;