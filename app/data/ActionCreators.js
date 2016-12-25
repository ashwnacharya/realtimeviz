import ActionTypes from 'app/data/ActionTypes';

export function addSymbol(symbol, value) {
    return { type: ActionTypes.ADD_SYMBOL, symbol, value };
}

export function pauseSymbol(index) {
    return { type: ActionTypes.PAUSE_SYMBOL, index};
}

export function resumeSymbol(index) {
    return { type: ActionTypes.RESUME_SYMBOL, index};
}

export function updateSymbolValues(values) {
    return { type: ActionTypes.UPDATE_SYMBOL_VALUES, values };
}

export function startStreaming() {
    return { type: ActionTypes.START_STREAMING};
}

export function stopStreaming() {
    return { type: ActionTypes.STOP_STREAMING};
}

