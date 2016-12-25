import React from "react";


class StocksList extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClick(item) {
        if(item.active) {
            this.props.pauseSymbol(item.index);
        }
        else {
            this.props.resumeSymbol(item.index);
        }
    }

    renderListItems() {
        return this.props.symbols.map(
            (item) => {
                const btnClassName = "btn btn-xs ".concat(item.active?"btn-danger":"btn-success").concat(" pull-right");
                const btnName = item.active?"Disable streaming":"Enable streaming";
                const itemColor = item.active?"#5cb85c":"#f0ad4e";

                return (
                    <li className="list-group-item" style={{width: "200px"}}  key={item.index}>
                        <span style={{"color": itemColor }}><b>{item.symbol}</b></span>
                        <button
                            type="button"
                            className={btnClassName}
                            onClick={() => {
                                this.handleClick(item);
                            }}>
                            {btnName}
                        </button>
                    </li>
                )
            }
        );
    }

    render() {
        return (
            <div style={{padding: "20px"}}>
                <ul className="list-group">
                    {this.renderListItems()}
                </ul>
            </div>
        );
    }

};

StocksList.propTypes = {
    symbols: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            active: React.PropTypes.bool.isRequired,
            symbol: React.PropTypes.string.isRequired,
            index: React.PropTypes.number.isRequired
        })
    ),
    pauseSymbol: React.PropTypes.func.isRequired,
    resumeSymbol: React.PropTypes.func.isRequired,
}

export default StocksList;
