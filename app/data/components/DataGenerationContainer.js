import React from "react";
import { connect } from 'react-redux'
import DataGenerationComponent from 'app/data/components/DataGenerationComponent';
import {updateSymbolValues} from 'app/data/ActionCreators';

const mapStateToProps = (state) => {
  return {
      stock_symbols: state.stock_symbols
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      updateSymbolValues: (updated) => {
          dispatch(updateSymbolValues(updated))
      }
  };
};

const DataGenerationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DataGenerationComponent);


export default DataGenerationContainer;