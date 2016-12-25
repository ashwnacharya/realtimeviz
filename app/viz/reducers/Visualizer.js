import { combineReducers } from 'redux'
import stock_symbols from 'app/viz/reducers/StockSymbols';

const visualizer = combineReducers({
  stock_symbols,
});

export default visualizer;