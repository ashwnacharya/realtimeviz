import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Home from 'app/data/components/Home';
import DataStreamingContainer from 'app/data/components/DataStreamingContainer';
import DataGenerationContainer from 'app/data/components/DataGenerationContainer';
import data_streamer from 'app/data/reducers/DataStreamer';

let store = createStore(data_streamer);

const render = () => {
    ReactDOM.render(
        (
            <Provider store={store}>
                <div>
                    <Home />
                    <DataGenerationContainer />
                    <DataStreamingContainer />
                </div>
            </Provider>

        ), document.getElementById('app'));
};

store.subscribe(render);

render();


