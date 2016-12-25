import { connect } from 'react-redux'
import DataStreamingComponent from 'app/data/components/DataStreamingComponent';
import common_settings from 'app/CommonSettings';

const mapStateToProps = (state) => {
  return {
      pusher_app_key: common_settings.PUSHER_APP_KEY,
      channel_name: common_settings.CHANNEL_NAME,
      event_name: common_settings.EVENT_NAME,
      stock_symbols: state.stock_symbols,
      is_streaming: state.settings.is_streaming
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const DataStreamingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DataStreamingComponent);

export default DataStreamingContainer;