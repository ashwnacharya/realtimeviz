import expect from 'expect';
import deepfreeze from 'deepfreeze';

import {getUniqueSymbolNames, getRowForPayloadItem, convertStateToMultiChartData} from 'app/viz/components/PayloadUtilityFunctions';

describe('Payload utility functions module', () => {

    it("should extract all unique symbols", () => {

        let payload_array = [
            {"timestamp":1482652650440, "symbols":[{"symbol":"MSFT","value":100}, {"symbol":"GOOG","value":200}, {"symbol":"FB","value":300}]},
            {"timestamp":1482652651440, "symbols":[{"symbol":"MSFT","value":150}, {"symbol":"GOOG","value":210}, {"symbol":"FB","value":310}]},
            {"timestamp":1482652652440, "symbols":[{"symbol":"MSFT","value":180}, {"symbol":"GOOG","value":220}, {"symbol":"FB","value":320}]},
            {"timestamp":1482652653440, "symbols":[{"symbol":"MSFT","value":200}, {"symbol":"GOOG","value":230}, {"symbol":"FB","value":330}, {"symbol":"YAHOO","value":10}]}

        ];

        deepfreeze(payload_array);

        const expected = ['MSFT', 'GOOG', 'FB', 'YAHOO'];
        const actual = getUniqueSymbolNames(payload_array);

        expect(expected).toEqual(actual);

    });

    it("should extract a row of data from a payload item for each symbol in the symbol array", () => {

        let unique_symbol_names = ['MSFT', 'GOOG', 'FB', 'YAHOO'];

        let payload_item = {
            "timestamp":1482652650440,
            "symbols":[
                {"symbol":"MSFT","value":100},
                {"symbol":"GOOG","value":200},
                {"symbol":"FB","value":300}
            ]
        };

        deepfreeze(unique_symbol_names);
        deepfreeze(payload_item);

        const expected = [100, 200, 300, null];

        const actual = getRowForPayloadItem(unique_symbol_names, payload_item);

        expect(expected).toEqual(actual);
    });

    it("should generate chart data from payload", () => {

        let payload = [
            {"timestamp":1482652650440, "symbols":[{"symbol":"MSFT","value":100}, {"symbol":"GOOG","value":200}, {"symbol":"FB","value":300}]},
            {"timestamp":1482652651440, "symbols":[{"symbol":"MSFT","value":150}, {"symbol":"GOOG","value":210}, {"symbol":"FB","value":310}]},
            {"timestamp":1482652652440, "symbols":[{"symbol":"MSFT","value":180}, {"symbol":"GOOG","value":220}, {"symbol":"FB","value":320}]},
            {"timestamp":1482652653440, "symbols":[{"symbol":"MSFT","value":200}, {"symbol":"GOOG","value":230}, {"symbol":"FB","value":330}, {"symbol":"YAHOO","value":10}]}

        ];

        deepfreeze(payload);

        let expected = {
            unique_symbol_names: ['MSFT', 'GOOG', 'FB', 'YAHOO'],
            rows: [
                ['1:27:30 PM', 100, 200, 300, null ],
                ['1:27:31 PM', 150, 210, 310, null ],
                ['1:27:32 PM', 180, 220, 320, null ],
                ['1:27:33 PM', 200, 230, 330, 10 ]
            ]

        };

        let actual = convertStateToMultiChartData(payload);

        expect(expected).toEqual(actual);

    });

});

