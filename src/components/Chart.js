import React from 'react'
import Chartbar from './Chartbar'
import './Chart.css'
function Chart(props) {
  const dataPointvalue = props.dataPoints.map(datapoint=> datapoint.value);
  const totalmaximum = Math.max(...dataPointvalue);
  return (
    <div className='chart'>
        {props.dataPoints.map(dataPoint => <Chartbar key={dataPoint.label} value={dataPoint.value} maxValue={totalmaximum} label = {dataPoint.label}/>)}
    </div>
  )
}

export default Chart