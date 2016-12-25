import { connect } from 'react-redux'
import StreamReaderComponent from 'app/viz/components/StreamReaderComponent';
import { addPayload } from 'app/viz/ActionCreators';
import common_settings from 'app/CommonSettings';


const mapStateToProps = (state) => {
  return {
      pusher_app_key: common_settings.PUSHER_APP_KEY,
      channel_name: common_settings.CHANNEL_NAME,
      event_name: common_settings.EVENT_NAME
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      addPayload: (payload) => dispatch(addPayload(payload))
  };
};

const StreamReaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamReaderComponent);

export default StreamReaderContainer;