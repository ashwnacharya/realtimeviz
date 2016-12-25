import React from "react";
import { connect } from 'react-redux'
import StocksList from 'app/data/components/StocksList';
import {pauseSymbol, resumeSymbol} from 'app/data/ActionCreators';


const mapStateToProps = (state) => {
  return {
      symbols: state.stock_symbols.map((item, index) => {
          return {index: index, active: item.active, symbol: item.symbol};
      })
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      pauseSymbol: (index) => dispatch(pauseSymbol(index)),
      resumeSymbol: (index) => dispatch(resumeSymbol(index))
  };
};

const StocksListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StocksList);


export default StocksListContainer;