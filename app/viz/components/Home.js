import React from "react";
import StreamReaderContainer from 'app/viz/components/StreamReaderContainer';
import VisualizationContainer from 'app/viz/components/VisualizationContainer';

const Home = () => {
    return (
        <div className="container">
            <div className="row-fluid">
                <div className="span12">
                    <h3>Hello there.</h3>
                    This page renders the visualizations of data that is being streamed by the <a href="/">data generation page.</a>
                    <br/>
                    <VisualizationContainer />
                    <StreamReaderContainer />
                </div>
            </div>
        </div>
    );
};

export default Home;
