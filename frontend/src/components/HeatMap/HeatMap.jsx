import React from "react";
import Plot from 'react-plotly.js';
import { Card } from '@material-ui/core';
//Here we are writing props in functional component argument in which we are recieving the properties from the component call in app.js
const HeatMap = (Props)=>{
    console.log("Props for x axis that we are recieving in Heat Map ",Props.xAxis)
    return (
      <Card style={{ width: "60%",  height: "70vh",marginTop:"20px" ,marginLeft: "auto", marginRight:"auto",backgroundColor: 'white' }}>
        <Plot 
         data = {[
            {
              z: [[1, null, 30, 50, 1], [20, 1, 60, 80, 30], [30, 60, 1, -10, 20]],
              x: ["Jan", "Feb", "March", "April", "May"],
              y: Props.yAxis,
              type: 'heatmap',
              hoverongaps: false
            }
          ]}
          />
          </Card>
    );
}

export default HeatMap;