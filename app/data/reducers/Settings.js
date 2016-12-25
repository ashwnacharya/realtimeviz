import ActionTypes from 'app/data/ActionTypes';

const default_settings = {
    is_streaming: false
};

const settings = (state=default_settings, action) => {
    switch (action.type) {
        case ActionTypes.STOP_STREAMING:
            return {is_streaming: false};

        case ActionTypes.START_STREAMING:
            return {is_streaming: true};

        default:
            return state;

    }
};

export default settings;