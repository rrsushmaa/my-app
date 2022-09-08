import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css'

const Chart = props => {
    const maximumVal = props.dataPoints.map(dataPoint => dataPoint.value);

    return (
        <div className="chart">
            {props.dataPoints.map(
                datapoint =>
                    <ChartBar
                        key={datapoint.label}
                        value={datapoint.value}
                        maxValue={maximumVal}
                        label={datapoint.label}/>
            )}
        </div>
    )
}

export default Chart;