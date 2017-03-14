import extend from "lodash/extend";

export const customPageView = (dimentions) => {
  dataLayer.push(extend({
    'event': 'CustomPageView'
  }, dimentions));    
};

export const videoView = (data) => {
  dataLayer.push(extend({
    'event': 'CustomVideoView',
    'videoAction': "Watched " + data.pctWatched + "%",
  }, data));
};

export const quizAnswer = (data) => {
  dataLayer.push(extend({
    'event': 'CustomQuizAnswer'
  }, data));
};