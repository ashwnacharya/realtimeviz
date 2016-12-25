import expect from 'expect';

import stock_symbols from 'app/data/reducers/StockSymbols';
import ActionTypes from 'app/data/ActionTypes';
import deepfreeze from 'deepfreeze'


describe("StockSymbols reducer", ()  => {
    it("should add a symbol", () => {

        const symbol = 'GOOG';
        const value = 1000;
        const type = ActionTypes.ADD_SYMBOL;

        const action = {type, symbol, value};

        let initial_state = [];

        deepfreeze(initial_state);

        let expected_updated_state = [{active: true, symbol, value}];

        let actual_updated_state = stock_symbols(initial_state, action);

        expect(expected_updated_state).toEqual(actual_updated_state);


    });

    it("should add not a duplicate symbol", () => {

        const symbol = 'GOOG';
        const value = 1000;
        const type = ActionTypes.ADD_SYMBOL;

        const action = {type, symbol, value};

        let initial_state = [{active: true, symbol, value}];

        deepfreeze(initial_state);

        let expected_updated_state = [{active: true, symbol, value}];

        let actual_updated_state = stock_symbols(initial_state, action);

        expect(expected_updated_state).toEqual(actual_updated_state);


    });

    it("should update symbol values", () => {

        const action = {
            type: ActionTypes.UPDATE_SYMBOL_VALUES,
            values: [
                {symbol: 'GOOG', value: 1000},
                {symbol: 'MSFT', value: 500}
            ]
        };

        let initial_state = [
            {active: true, symbol: 'GOOG', value: 900},
            {active: true, symbol: 'MSFT', value: 400},
            {active: true, symbol: 'FB', value: 100}
        ];


        deepfreeze(initial_state);

        let expected_updated_state = [
            {active: true, symbol: 'GOOG', value: 1000},
            {active: true, symbol: 'MSFT', value: 500},
            {active: true, symbol: 'FB', value: 100}
        ];

        let actual_updated_state = stock_symbols(initial_state, action);

        expect(expected_updated_state).toEqual(actual_updated_state);
    });

    it("should pause a symbol", () => {

        const action = {
            type: ActionTypes.PAUSE_SYMBOL,
            index: 0
        };

        let initial_state = [
            {active: true, symbol: 'GOOG', value: 900},
            {active: true, symbol: 'MSFT', value: 400},
            {active: true, symbol: 'FB', value: 100}
        ];


        deepfreeze(initial_state);

        let expected_updated_state = [
            {active: false, symbol: 'GOOG', value: 900},
            {active: true, symbol: 'MSFT', value: 400},
            {active: true, symbol: 'FB', value: 100}
        ];

        let actual_updated_state = stock_symbols(initial_state, action);

        expect(expected_updated_state).toEqual(actual_updated_state);

    });

    it("should resume a symbol", () => {
        const action = {
            type: ActionTypes.RESUME_SYMBOL,
            index: 0
        };

        let initial_state = [
            {active: false, symbol: 'GOOG', value: 900},
            {active: true, symbol: 'MSFT', value: 400},
            {active: true, symbol: 'FB', value: 100}
        ];


        deepfreeze(initial_state);

        let expected_updated_state = [
            {active: true, symbol: 'GOOG', value: 900},
            {active: true, symbol: 'MSFT', value: 400},
            {active: true, symbol: 'FB', value: 100}
        ];

        let actual_updated_state = stock_symbols(initial_state, action);

        expect(expected_updated_state).toEqual(actual_updated_state);
    });
});