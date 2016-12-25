import React from "react";
import { connect } from 'react-redux'
import StocksForm from 'app/data/components/StocksForm';
import {addSymbol} from 'app/data/ActionCreators';


const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      addSymbol: (symbol_name, value) => dispatch(addSymbol(symbol_name, value))
  };
};

const StocksFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StocksForm);


export default StocksFormContainer;