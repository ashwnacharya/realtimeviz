import expect from 'expect';

import {addSymbol, pauseSymbol, resumeSymbol, updateSymbolValues, startStreaming, stopStreaming} from 'app/data/ActionCreators';
import ActionTypes from 'app/data/ActionTypes';



describe("Data Action creator", ()  => {
    it("should create an action to add a symbol", () => {

        const symbol = 'GOOG';
        const value = '1000';

        const expected = { type: ActionTypes.ADD_SYMBOL, symbol, value };

        const actual = addSymbol(symbol, value);

        expect(expected).toEqual(actual);

    });

    it("should create an action to pause streaming a symbol", () => {

        const index = 1;

        const expected = { type: ActionTypes.PAUSE_SYMBOL, index };

        const actual = pauseSymbol(index);

        expect(expected).toEqual(actual);

    });

    it("should create an action to resume streaming a symbol", () => {

        const index = 1;

        const expected = { type: ActionTypes.RESUME_SYMBOL, index };

        const actual = resumeSymbol(index);

        expect(expected).toEqual(actual);

    });

    it("should create an action to update symbol values", () => {

        const values = Object();

        const expected = { type: ActionTypes.UPDATE_SYMBOL_VALUES, values };

        const actual = updateSymbolValues(values);

        expect(expected).toEqual(actual);

    });

    it("should create an action to stop streaming", () => {

        const index = 1;

        const expected = { type: ActionTypes.STOP_STREAMING };

        const actual = stopStreaming();

        expect(expected).toEqual(actual);

    });

    it("should create an action to start streaming", () => {

        const index = 1;

        const expected = { type: ActionTypes.START_STREAMING };

        const actual = startStreaming();

        expect(expected).toEqual(actual);

    });
});