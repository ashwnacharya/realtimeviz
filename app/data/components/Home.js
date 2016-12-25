import React from "react";
import StocksFormContainer from 'app/data/components/StocksFormContainer';
import StocksListContainer from 'app/data/components/StocksListContainer';
import ToggleStreamingContainer from 'app/data/components/ToggleStreamingContainer';

const Home = () => {
    return (
        <div className="container">
            <div className="row-fluid">
                <div className="span12">
                    <h2 className="splash-head">Hi, you are here.</h2>
                    <h3>Welcome.</h3>
                    <p>
                        This page uses a simple random number generator to
                        generate real-time like stock price data.
                        <br/>
                        To start off, add some stock symbols using the form below.
                    </p>
                    <StocksFormContainer />
                    <StocksListContainer />
                    <p>
                        Added some stocks? Cool. The page will generate random stock prices every second for the stocks you have added.
                    </p>
                    <p>
                        This page uses API called <a href="https://pusher.com"  target="_blank">Pusher</a> to stream this data.
                        The data is 'pushed' periodically, so travels across the interwebs to Pusher servers.
                        <br/>
                        The pusher servers then broadcasts it to all the other subscribers.
                        <br/>
                        One of the subscribers is the visualization page, where you can see this data being rendered in pretty graphs and charts.
                        <br/>
                        So, click on the button below to start streaming stock data.
                    </p>
                    <ToggleStreamingContainer/>
                    <p>
                        <br/>
                        You clicked? Good. You can open this tab's console to see the data being streamed.
                        <br/>
                        You can also toggle the streaming of individual stock symbols by clicking the button next to each stock symbol above.
                        <br/>
                    </p>
                    <p>
                        We are done here. Keep this tab open, and head over to the visualization, where all the excitement is.
                        <br/>

                    </p>

                    <h1>Click on <a target="blank" href="/viz">this link</a> to open the visualization page in a new tab.</h1>
                    <br/>

                </div>
            </div>
        </div>
    );
};

export default Home;
