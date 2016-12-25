import expect from 'expect';

import {addPayload, toggleShowInSingleGraph} from 'app/viz/ActionCreators';
import ActionTypes from 'app/viz/ActionTypes';

describe("viz action creator", () => {
    it("should create an action to add a payload", () => {

        const payload = Object();

        const expected = {type: ActionTypes.ADD_PAYLOAD, payload};

        const actual = addPayload(payload);

        expect(expected).toEqual(actual);

    });
});