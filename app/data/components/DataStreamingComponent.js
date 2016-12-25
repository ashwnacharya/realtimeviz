import React from "react";

class DataStreamingComponent extends React.Component {
    constructor(props) {
        super(props);
        var pusher = new Pusher(props.pusher_app_key);
        this.channel = pusher.subscribe(props.channel_name);
        this.channel.bind('pusher:subscription_succeeded', this.bindSuccessful, this);

    }

    bindSuccessful() {
        console.log("Pusher bind successful");
    }

    getPayload() {
        const timestamp = Date.now();

        return {
            timestamp,
            symbols: this.props.stock_symbols
                .filter((item) => item['active'])
                .map((item) => {
                    return {
                        symbol: item.symbol,
                        value: item.value
                    }
                })
        };
    }

    componentWillReceiveProps() {
        if(this.props.is_streaming) {
            const payload = this.getPayload();
            if (payload.symbols.length > 0) {
                console.log(JSON.stringify(payload));
                this.channel.trigger(this.props.event_name, payload);
            }
        }
    }


    render() {
        return ( <div id="data-streaming-component"></div>);
    }
};


DataStreamingComponent.propTypes = {
    pusher_app_key: React.PropTypes.string.isRequired,
    channel_name: React.PropTypes.string.isRequired,
    stock_symbols: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            active: React.PropTypes.bool.isRequired,
            symbol: React.PropTypes.string.isRequired,
            value: React.PropTypes.number.isRequired
        })
    )
};


export default DataStreamingComponent;