export const getUniqueSymbolNames = (payload_array) => {
    let symbols = [];

    payload_array.map((payload) => {
        payload.symbols.map((symbol_obj) => {
            if(symbols.indexOf(symbol_obj.symbol) == -1) {
                symbols.push(symbol_obj.symbol)
            }
        });
    });

    return symbols;
};


export const getRowForPayloadItem = (unique_symbol_names, payload_item) => {
    let row = unique_symbol_names.map((symbol_name) => {
        let symbol_obj = payload_item.symbols.find((item) => {
            return item.symbol == symbol_name;
        });

        if (symbol_obj === undefined) {
            return null;
        }
        else {
            return symbol_obj.value
        }
    });
    return row;
};


export const convertStateToMultiChartData = (payload_array) => {
    const unique_symbol_names = getUniqueSymbolNames(payload_array);

    let rows = payload_array.map((payload_item) => {

        const timestamp = payload_item.timestamp;

        const row = getRowForPayloadItem(unique_symbol_names, payload_item);

        const timestampString = (new Date(timestamp)).toLocaleTimeString();

        return [timestampString, ...row]
    });

    return {unique_symbol_names, rows};

};


