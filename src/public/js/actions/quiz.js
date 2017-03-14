import {SET_QUIZ_QUESTIONS_ANSWERED} from "./types";
import axios from "axios";

export function setQuizQuestionsAnswered (quizQuestionsAnswered) {
  return {
    type: SET_QUIZ_QUESTIONS_ANSWERED,
    quizQuestionsAnswered
  }
}

export function saveUserQuizAnswer (data) {

  const request = axios.post('/api/quiz-answer', data);

  request.then(res => {
        // console.log('then', res);
  }).catch(err => {
        // console.log('catch', err);
  });

}

export function getQuizQuestionsAnswered (data) {

  return dispatch => {
    const req = axios.get('/api/quiz-answer', data);

    req.then(res => {

      dispatch(setQuizQuestionsAnswered(res.data));

    }).catch(err => {

    });

    return req;
  };

}