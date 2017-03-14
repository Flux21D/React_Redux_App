import {SET_QUIZ_QUESTIONS_ANSWERED} from "../actions/types";

const INITIAL_STATE = {
    quizQuestionsAnswered: []
};

export default (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case SET_QUIZ_QUESTIONS_ANSWERED:
            return {
                ...state.quizQuestionsAnswered,
                ...action
            };
        default:
            return state;
    }
}