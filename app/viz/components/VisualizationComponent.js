import React from "react";


class VisualizationComponent extends React.Component {

    constructor(props) {
        super(props);
        this.drawChart = this.drawChart.bind(this);
        this.chart = null;
    }

    componentDidMount() {
        google.charts.load('current', {'packages':['line']});
        google.charts.setOnLoadCallback(this.drawFirst.bind(this));
    }

    componentDidUpdate() {
        this.drawChart();
    }

    drawFirst() {
        this.chart = new google.charts.Line(document.getElementById('area'));
    }

    drawChart() {
        if(this.chart) {
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Time');

            this.props.unique_symbol_names.map((symbol_name) => {
                data.addColumn('number', symbol_name);
            });

            if (this.props.rows.length > 0) {
                data.addRows(this.props.rows);

                var options = {
                    series: {
                        1: {curveType: 'function'}
                    }
                };

                this.chart.draw(data, options);

            }
        }
    }


    renderErrorMessage() {
        if( this.props.rows.length == 0) {
            return (
                <div>
                    <p>
                        Not seeing any graph?
                        <br/>
                        Maybe you haven't seen the data generation page and set it up correctly?
                        <br/>
                        Click <a href="/" target="_blank">to go the data generation page.</a>.
                        <br/>
                        If you have, wait for a couple of seconds to see if it clears up?
                    </p>
                    <p>
                        Still seeing not seeing anything?
                        <br/>
                        I have seen this problem clear up with a closing and reopening of the browser.
                        <br/>
                        <i>
                            This is a <a href="https://support.pusher.com/hc/en-us/articles/202085586-WebSocket-is-closed-before-the-connection-is-established">  common problem with Pusher.</a>
                            <sup>Not that I am trying to blame them or anything.
                                I would never do that. :sniff:</sup>
                        </i>
                    </p>
                </div>
            );
        }
        else if (!this.chart) {
            return (
                <div>
                    <p>
                        Looks like the Google charting library has not loaded correctly.
                        <br/>
                        This is very awkward. Can you please try reloading the page?
                    </p>
                </div>
            );
        }
    }

    render() {

        return (
            <div>
                {this.renderErrorMessage()}
                <div>
                    <div id="area" style={{height: "500px"}}></div>
                </div>
            </div>
        );

    }
};

VisualizationComponent.propTypes = {
    unique_symbol_names: React.PropTypes.arrayOf(React.PropTypes.string),
    rows: React.PropTypes.array.isRequired
};


module.exports = VisualizationComponent;
