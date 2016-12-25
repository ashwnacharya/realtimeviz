import React from "react";
import { connect } from 'react-redux'
import ToggleStreamingButton from 'app/data/components/ToggleStreamingButton';
import {startStreaming, stopStreaming} from 'app/data/ActionCreators';


const mapStateToProps = (state) => {
  return {
      is_streaming: state.settings.is_streaming
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      startStreaming: () => dispatch(startStreaming()),
      stopStreaming: () => dispatch(stopStreaming())
  };
};

const ToggleStreamingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleStreamingButton);


export default ToggleStreamingContainer;