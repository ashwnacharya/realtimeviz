import ActionTypes from 'app/viz/ActionTypes';

const stock_symbols = (state=[], action) => {
    switch(action.type) {
        case ActionTypes.ADD_PAYLOAD:
            return state.concat(action.payload).slice(-10);

        default:
            return state;
    }
};

export default stock_symbols;
