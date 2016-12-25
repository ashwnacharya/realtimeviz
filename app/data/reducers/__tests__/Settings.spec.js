import expect from 'expect';

import settings from 'app/data/reducers/Settings';
import ActionTypes from 'app/data/ActionTypes';



describe("Settings reducer", ()  => {
    it("should start streaming", () => {

        const expected = {is_streaming: true};
        const actual = settings({is_streaming: false}, {type: ActionTypes.START_STREAMING});
        expect(expected).toEqual(actual);
    });

    it("should stop streaming", () => {

        const expected = {is_streaming: false};
        const actual = settings({is_streaming: true}, {type: ActionTypes.STOP_STREAMING});
        expect(expected).toEqual(actual);
    });
});