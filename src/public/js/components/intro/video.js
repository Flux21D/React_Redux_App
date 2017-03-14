import React from "react";
import {Link} from "react-router";
import VideoPlayer from "../shared/video-player/video-player";

class Video extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const entryId = "0_8g48i6ux";

        const thumbnailUrl = "//www.kaltura.com/p/" + GLOBALS.kalturaConfigs.partnerId + "/thumbnail/entry_id/" + entryId + "/width/466/height/262";
        const srcRoot = "//www.kaltura.com/p/" + GLOBALS.kalturaConfigs.partnerId + "/sp/0/playManifest/entryId/" + entryId + "/format/url/flavorParamId/301971/";

        const videos = [{
            src: srcRoot + "video.mp4",
            type: "video/mp4"
        }, {
            src: srcRoot + "video.ogg",
            type: "video/ogg"
        }];

        const {params} = this.props;

        const videoAttrs = {
            autoPlay: params.screen === 'video'
        };

        return (
            <div
                className={"video-thumbnail " + (params.screen === 'video' ? 'intro-video' : '') + (params.screen === 'challenge' ? 'intro-challenge' : '')}>

                {
                    params.screen === 'challenge' ?
                        <div className="video-cover-container">

                            <div className="video-cover">
                                <h2 className="text-white">Challenge</h2>

                                <span className={"btn btn-border-white " + (params.screen === 'challenge' ? 'disabled': '')}>Start</span>
                            </div>

                            <div className="intro-challenge-content intro-content">
                                <h3 className="intro-title clearfix">
                                    Take the challenge
                                    <span className="pull-right">9/12</span>
                                </h3>

                                <p className="intro-desc">When you are done reviewing a slide you can text your new knowledge by taking the challenge.</p>

                                <div className="clearfix">
                                    <Link to="intro/skipping" className="btn btn-white btn-previous">Previous</Link>
                                    <Link to="intro/references"
                                          className="btn btn-orange btn-next pull-right">Next</Link>
                                </div>
                            </div>
                        </div> : null
                }

                <span className="arrow-down">
                    <img src="svg/icons/arrow_orange_down.svg" alt="Go to quiz"/>
                </span>

                <VideoPlayer ref="videoPlayer" videos={videos} poster={thumbnailUrl} videoAttrs={videoAttrs}/>

                <div className="intro-video-content intro-content">
                    <h3 className="intro-title clearfix">
                        Video
                        <span className="pull-right">1/12</span>
                    </h3>

                    <p className="intro-desc">Every slide of the presentation has a supplementary video to walk you
                        through the topic.</p>

                    <div className="clearfix">
                        <Link to="intro/video-script" className="btn btn-orange btn-next pull-right">NEXT</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Video;