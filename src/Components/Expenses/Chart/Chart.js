import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css'

const Chart = props => {
    const datapoints = props.dataPoints.map(dataPoint => dataPoint.value);
    const maximumVal = Math.max(...datapoints) + 100
    console.log(`maxVal is ${maximumVal}`)
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