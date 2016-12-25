import React from "react";

class DataGenerationComponent extends React.Component {

    generateData() {
        let updated_data = this.props.stock_symbols.map((symbol_obj) => {

            return {
                active: symbol_obj.active,
                symbol: symbol_obj.symbol,
                value: symbol_obj.value + (symbol_obj.value/5)*(Math.random() - 0.5)
            }
        });

        this.props.updateSymbolValues(updated_data)
    }

    componentDidMount() {
        // console.log("Pusher channel binding succeeded.");
        setInterval(this.generateData.bind(this), 1000);
    }


    render() {
        return ( <div id="data-generation-component"></div>);
    }
};

DataGenerationComponent.propTypes = {
    stock_symbols: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            active: React.PropTypes.bool.isRequired,
            symbol: React.PropTypes.string.isRequired,
            value: React.PropTypes.number.isRequired
        })
    )
};

export default DataGenerationComponent;
