import React from "react";


class StreamReaderComponent extends React.Component {

    streamEventHandler(payload) {
        console.log(JSON.stringify(payload));
        this.props.addPayload(payload);
    }


    componentDidMount() {
        var pusher = new Pusher(this.props.pusher_app_key);
        var channel = pusher.subscribe(this.props.channel_name);
        channel.bind(this.props.event_name, this.streamEventHandler.bind(this));
    }


    render() {
        return(
            <div>
                <div id="stream-reader-component"></div>
            </div>
        );
    }
};

StreamReaderComponent.propTypes = {
    pusher_app_key: React.PropTypes.string.isRequired,
    channel_name: React.PropTypes.string.isRequired,
    event_name: React.PropTypes.string.isRequired,
    addPayload: React.PropTypes.func.isRequired
};

module.exports = StreamReaderComponent;
