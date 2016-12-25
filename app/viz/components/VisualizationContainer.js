import React from "react";
import { connect } from 'react-redux'
import VisualizationComponent from 'app/viz/components/VisualizationComponent';
import {convertStateToMultiChartData} from 'app/viz/components/PayloadUtilityFunctions';


const mapStateToProps = (state) => {
    return convertStateToMultiChartData(state.stock_symbols);
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const VisualizationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(VisualizationComponent);


export default VisualizationContainer;