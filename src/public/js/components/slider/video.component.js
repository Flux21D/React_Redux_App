import React from "react";
import {connect} from "react-redux";
import VideoPlayer from "../shared/video-player/video-player";
import {videoView} from "../../utils/gtm";
import {pad} from "../../utils/functions";
import createMarkup from "../../utils/html-text";
import GTMDimentionsValues from "../../utils/gtm-dimentions-values";

let interval;

function resetVideoState(state){
    if(state != null)
        resetVideoState.state = state;
    return function(){
        return resetVideoState.state;
    }
}

class VideoComponent extends React.Component {

    

    constructor(props) {
        super(props);
        const {slide, videoId, videoScript, hasQuiz, saveCoverState, getCoverState} = this.props;
        //this.props.saveCoverState(false);
        this.state = {
            showCover:this.props.getCoverState(),
            showStartQuiz: false,
            classWatched: 'progress-' + 0,
            onStartedPlayingTriggered: false
        };
        resetVideoState(false);
        this.onShowStartQuiz = this.onShowStartQuiz.bind(this);
        this.onVideoStateChange = this.onVideoStateChange.bind(this);
        this.onStartedPlaying = this.onStartedPlaying.bind(this);
    	this.endedVideo = this.endedVideo.bind(this);
        this.onPlay = this.onPlay.bind(this);
        
    }

    onPlay(){
        console.log('play event Fired');
        resetVideoState(false);
        this.setState({
            showCover:this.props.getCoverState()
        }); 
        if(this.props.hasQuiz){
            clearInterval(interval);
             let i = 0;
             interval = setInterval(() => {
                i += 1;

            this.setState({
                classWatched: 'progress-' + i
            });

            if (i === 100) {
                clearInterval(interval);

                this.setState({
                    showStartQuiz: true
                });
            }

            }, 100);
        }
    }

    endedVideo(){
        console.log('event Fired');
        this.props.saveCoverState(true);
        resetVideoState(false);
        console.log('state got is :'+this.props.getCoverState());
        this.setState({
            showCover:this.props.getCoverState()
        }); 
    }
    
    onStartedPlaying (flg) {
        console.log('start Playing ');
       resetVideoState(!flg);
        
    }

    onShowStartQuiz () {
        this.props.saveCoverState(true);
        this.setState({
            showCover:this.props.getCoverState()
        })
        this.refs.videoPlayer.pause();
    }

    onVideoStateChange(videoState) {
              
        let flg = resetVideoState(null);
        let resetflag = flg();
        if(!resetflag){
            this.onStartedPlaying(false);
            this.setState({
                showStartQuiz: false
            });
        }

        const pctWatched = Math.round(videoState.percentagePlayed);

        if (pctWatched === 25 || pctWatched === 50 || pctWatched === 75 || pctWatched === 90 || pctWatched === 100) {
            // OLUSD-65 - Q&A challenges functionality missing on videos

		     // if(pctWatched === 100){
                /*this.props.saveCoverState(true);
                resetVideoState(false);
               this.setState({
                    showCover:this.props.getCoverState()
                }); */
            // }
            
			

            videoView({
                pctWatched: pctWatched,
                'language': this.props.country.language,
                'country': this.props.country.country,
                'cdj': GTMDimentionsValues['SD-SL-' + pad(this.props.id)].cdj,
                'btc': GTMDimentionsValues['SD-SL-' + pad(this.props.id)].btc,
                'videoId': 'SD-VI-' + pad(this.props.id)
            });
        }
    }

    render() {
        const {slide, videoId, videoScript, hasQuiz, saveCoverState, getCoverState} = this.props;
        
        const protocol = window.location.protocol;

        const thumbnailUrl = protocol + "//www.kaltura.com/p/" + GLOBALS.kalturaConfigs.partnerId + "/thumbnail/entry_id/" + videoId + "/width/466/height/262";
        const srcRoot = protocol + "//www.kaltura.com/p/" + GLOBALS.kalturaConfigs.partnerId + "/sp/0/playManifest/entryId/" + videoId + "/format/url/flavorParamId/301971/";

        const videos = [{
            src: srcRoot + "video.mp4",
            type: "video/mp4"
        }, {
            src: srcRoot + "video.ogg",
            type: "video/ogg"
        }];

        return (
            <div id="video">
                <div className="video-container">
                    <div className="video-thumbnail">

                        {
                            this.state.showCover && hasQuiz ?
                                <div className="video-cover-container">
                                    <div className="video-cover">
                                        <h2 className="text-white">Challenge</h2>

                                        <span className="btn btn-border-white" onClick={this.props.showQuiz}>Start</span>
                                    </div>
                                </div> : null
                        }

                        {
                            hasQuiz ?
                                <span className="arrow-down" onClick={this.onShowStartQuiz}>

                                    <div className={"progress-radial " + this.state.classWatched + " " + (hasQuiz ? "active" : "") }>
                                        <div className="overlay1"></div>
                                    </div>

                                    <img src={"svg/icons/" + (this.state.showCover ? 'arrow_orange_up.svg' : 'arrow_orange_down.svg')} />
                                </span> : null
                        }

                        <VideoPlayer ref="videoPlayer" videos={videos} poster={thumbnailUrl}
                                     videoStateChange={this.onVideoStateChange} myEnd={this.endedVideo} onPlay={this.onPlay}/>

                        <div className={this.state.showStartQuiz && hasQuiz ? 'quiz-start' : 'hidden'}>
                            <div className="start-challenge">
                                <span className="btn btn-border-white" onClick={this.props.showQuiz}>
                                    SKIP VIDEO AND START CHALLENGE
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="headline">
                        <h3 className="text-orange" dangerouslySetInnerHTML={createMarkup(slide.title)}/>
                        <p dangerouslySetInnerHTML={createMarkup(slide.description)}/>
                    </div>
                    <div className="video-script-container">
                        <p className="video-script-title">Video script</p>
                        <div className="video-script text-orange" dangerouslySetInnerHTML={createMarkup(videoScript)}/>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        country: state.country
    }
};

export default connect(mapStateToProps)(VideoComponent);
