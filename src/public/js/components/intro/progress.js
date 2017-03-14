import React from "react";
import {Link} from "react-router";

class Progress extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let slides = [];
        for (let i = 0; i < 19; i++) {
            slides.push({});
        }

        const {params} = this.props;

        return (
            <ul className={"progress-container " + (params.screen === 'progress' ? 'intro-progress' : '')}>
                {slides.map((slide, key) => {
                    return <li key={key} className={"" + (key === 7 ? 'active' : '')}>
                        {key === 7 ?
                            <div className="intro-content">
                                <h3 className="intro-title clearfix">
                                    Progress bar<span className="pull-right">7/12</span>
                                </h3>

                                <p className="intro-desc">The progress bar will show you how many slides you have
                                    completed out of the total presentation.</p>

                                <div className="clearfix">
                                    <Link to="intro/navigation" className="btn btn-white btn-previous">Previous</Link>
                                    <Link to="intro/skipping" className="btn btn-orange btn-next pull-right">Next</Link>
                                </div>
                            </div> : null}
                        <div />
                    </li>;
                })}
            </ul>
        );

    }

}

export default Progress;