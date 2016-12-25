import expect from 'expect';
import ActionTypes from 'app/viz/ActionTypes';
import stock_symbols from 'app/viz/reducers/StockSymbols';
import deepfreeze from 'deepfreeze';

describe("Stock symbols reducer", () => {

    it("should add a payload", () => {
        const payload = Object();
        const action = {type: ActionTypes.ADD_PAYLOAD, payload};

        const initial_state = [];
        deepfreeze(initial_state);

        const expected = [payload];

        const actual = stock_symbols(initial_state, action);

        expect(expected).toEqual(actual);

    });

    it("should add retain last 10 payloads", () => {
        const payload = 11;
        const action = {type: ActionTypes.ADD_PAYLOAD, payload};

        const initial_state = [1,2,3,4,5,6,7,8,9,10];
        deepfreeze(initial_state);

        const expected = [2,3,4,5,6,7,8,9,10,11];

        const actual = stock_symbols(initial_state, action);

        expect(expected).toEqual(actual);

    });
});
