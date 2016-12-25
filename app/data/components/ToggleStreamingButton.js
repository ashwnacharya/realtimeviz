import React from "react";

class ToggleStreamingButton extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClick() {
        if(this.props.is_streaming) {
            this.props.stopStreaming();
        }
        else {
            this.props.startStreaming();
        }
    }

    render() {
        if(this.props.is_streaming) {
            return (
                <button className="btn btn-lg btn-danger" onClick={this.handleClick.bind(this)}>Stop Streaming</button>
            );
        }
        else {
            return (
                <button className="btn btn-lg btn-success" onClick={this.handleClick.bind(this)}>Start Streaming</button>
            );
        }
    }

};

ToggleStreamingButton.propTypes = {
    is_streaming: React.PropTypes.bool.isRequired,
    startStreaming: React.PropTypes.func.isRequired,
    stopStreaming: React.PropTypes.func.isRequired
};

export default ToggleStreamingButton;
