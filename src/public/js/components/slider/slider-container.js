import React from "react";
import {connect} from "react-redux";
import SlideItem from "./slide-item";
import SliderProgress from "./slider-progress";
import getSlidesData, {setSlideVersion, setFirstVisitedSlide} from "../../actions/slides";
import {setReference, toggleReference} from "../../actions/reference";
import {pad} from "../../utils/functions";
import {customPageView} from "../../utils/gtm";
import GTMDimentionsValues from "../../utils/gtm-dimentions-values";
import {saveLatestVisitedSlideInfo} from "../../actions/resume";

function setCoverVideoState(state){
    if(state != null)
        setCoverVideoState.state = state;
    return function(){
        return setCoverVideoState.state;
    }
}
class SliderContainer extends React.Component {

    state={
        coverVideo:false
    };
    
    constructor(props) {
        super(props);
        setCoverVideoState(false);
        this.saveCoverState = this.saveCoverState.bind(this);
        this.getCoverState = this.getCoverState.bind(this);
    }

    saveCoverState(state){
      
      /*this.setState({
        coverVideo:state
      });*/
      setCoverVideoState(state);
      console.log('Setting state of coverVideo to :'+state);
    }

    getCoverState(){
        let st = setCoverVideoState(null);
        let state = st();
        console.log('Getting state of coverVideo to :'+state);
        return state;
    }

    componentDidMount() {
        const {params, country} = this.props;
        const {version, slug} = params;

        if (version !== "fast-track" && version !== "full") {
            this.context.router.push("404");
        }

        this.props.setSlideVersion({
            version: version
        });

        this.props.getSlidesData(version).then(() => {

            const currentSlideIndex = this.getCurrentSlideIndex(slug);

            this.props.setFirstVisitedSlide({
                firstVisitedSlide: {
                    slug: slug
                }
            });

            customPageView({
                'language': country.language,
                'country': country.country,
                'cdj': GTMDimentionsValues['SD-SL-' + pad(currentSlideIndex)].cdj,
                'btc': GTMDimentionsValues['SD-SL-' + pad(currentSlideIndex)].btc
            });

        });

        this.props.setReference({
            reference: slug
        });
    }

    componentWillReceiveProps(nextProps) {

        const {auth} = this.props;

        if (nextProps.params.slug !== this.props.params.slug) {

            const {slug} = nextProps.params;
            const activeSlideIndex = this.getCurrentSlideIndex(slug);

            this.props.saveLatestVisitedSlideInfo({
                uuid: auth.user.uuid,
                slideId: activeSlideIndex,
                slideSlug: slug
            });

            this.props.setReference({
                reference: nextProps.params.slug
            });
        }

    }

    getCurrentSlideIndex(activeSlideSlug) {
        const slides = this.props.slide.slides;

        let currentSlideIndex = 0;

        for (let i = 0; i < slides.length; i++) {
            if (slides[i].slug === activeSlideSlug) {
                currentSlideIndex = i;
            }
        }

        return currentSlideIndex;
    }

    render () {
        let {slide, params} = this.props;

        let next = "slide/" + params.version + "/";
        let prev = "slide/" + params.version + "/";
        let activeSlideIndex;

        if (slide.slides.length) {

            activeSlideIndex = this.getCurrentSlideIndex(params.slug);

            if (activeSlideIndex > 0) {
                prev += slide.slides[activeSlideIndex - 1].slug;
            } else {
                prev = "";
            }

            if (activeSlideIndex < slide.slides.length - 1) {
                next += slide.slides[activeSlideIndex + 1].slug;
            } else {
                next = "end";
            }

        }

        return (
            <div id="slider">
                {slide.slides.length ?
                    <div>
                        <SlideItem slides={slide.slides} activeSlideIndex={activeSlideIndex} next={next} prev={prev} version={params.version} saveCoverState={this.saveCoverState} getCoverState={this.getCoverState}/>
                        <div className="footer-progress-container">
                            <SliderProgress slidesNumber={slide.slides.length} activeSlideIndex={activeSlideIndex}/>
                        </div>
                    </div> : null}
            </div>
        );
    }

}

SliderContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        country: state.country,
        resume: state.resume,
        auth: state.auth,
        slide: state.slide,
        reference: state.reference
    }
};

const actionCreators = {
    getSlidesData,
    setSlideVersion,
    setFirstVisitedSlide,
    setReference,
    toggleReference,
    saveLatestVisitedSlideInfo
};

export default connect(mapStateToProps, actionCreators)(SliderContainer);