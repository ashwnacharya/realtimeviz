import { combineReducers } from 'redux'
import stock_symbols from 'app/data/reducers/StockSymbols';
import settings from 'app/data/reducers/Settings';

const data_streamer = combineReducers({
  stock_symbols,
  settings
});

export default data_streamer;