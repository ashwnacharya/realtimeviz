import ActionTypes from 'app/data/ActionTypes';

const stocks_symbols = (state = [], action) => {

    switch (action.type) {
        case ActionTypes.ADD_SYMBOL:

            if(!state.find((item) => { return item.symbol == action.symbol})) {
                return [...state, {active: true, symbol: action.symbol, value: action.value }];
            }
            else {
                return state;
            }


        // Ugly, updating all the symbols at once,
        // but I want to reduce the pusher traffic.
        case ActionTypes.UPDATE_SYMBOL_VALUES:
            return state.map((symbol_obj) => {
                const updated_symbol_obj = action.values.find((item) => item.symbol == symbol_obj.symbol);

                if(typeof updated_symbol_obj != 'undefined') {
                    return {
                        active: symbol_obj.active,
                        symbol: symbol_obj.symbol,
                        value: updated_symbol_obj.value
                    }
                }

                return symbol_obj;
            });


        case ActionTypes.PAUSE_SYMBOL:
            return state.map((symbol, index) => {
                if(index === action.index) {
                    return Object.assign({}, symbol, {active: false})
                }
                else return symbol;
            });

        case ActionTypes.RESUME_SYMBOL:
            return state.map((symbol, index) => {
                if(index === action.index) {
                    return Object.assign({}, symbol, {active: true})
                }
                else return symbol;
            });

        default:
            return state;
    }
};

export default stocks_symbols;