import React from "react";


class StocksForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show_error: false
        };
    }

    handleClick() {
        const name = this.input.value;

        if(name != "") {
            const value = (Math.round((Math.random()*10))*10)+ 100;
            this.props.addSymbol(name, value);
            this.setState({show_error :false});
        }
        else {
            this.setState({show_error :true});

        }

        this.input.value = "";
    }

    renderErrorMessage() {
        if(this.state.show_error) {
            return <span style={{color: 'red'}}>Please enter a valid name.</span>;
        }
    }

    render() {
        return (
            <div className="form-inline">
                <div className="form-group">
                    <input ref={(input) => this.input = input}  type="text" className="form-control" id="input" placeholder="MSFT, GOOG, etc." />

                </div>
                <button type="submit" className="btn btn-primary" style={{'margin': '10px'}} onClick={this.handleClick.bind(this)}>Add stocks</button>
                <br/>
                {this.renderErrorMessage()}
            </div>
        );
    }

};

StocksForm.propTypes = {
    addSymbol: React.PropTypes.func.isRequired
};

export default StocksForm;
