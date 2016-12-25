import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import visualizer from 'app/viz/reducers/Visualizer';
import Home from 'app/viz/components/Home'

let store = createStore(visualizer);

const render = () => {
    ReactDOM.render(
        (
            <Provider store={store}>
                <Home />
            </Provider>

        ), document.getElementById('app'));
};

store.subscribe(render);

render();


