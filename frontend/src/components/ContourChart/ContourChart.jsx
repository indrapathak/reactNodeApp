import React from "react";
import Plot from 'react-plotly.js';
import { Card } from '@material-ui/core';
var size = 100, x = new Array(size), y = new Array(size), z = new Array(size), i, j;

for(var i = 0; i < size; i++) {
	x[i] = y[i] = -2 * Math.PI + 4 * Math.PI * i / size;
  	z[i] = new Array(size);
}

for(var i = 0; i < size; i++) {
  	for(j = 0; j < size; j++) {
    	var r2 = x[i]*x[i] + y[j]*y[j];
    	z[i][j] = Math.sin(x[i]) * Math.cos(y[j]) * Math.sin(r2) / Math.log(r2+1);
 	}
}




const ContourChart = () => {

  return (
    <Card style={{ width: "60%",  height: "70vh",marginTop:"20px" ,marginLeft: "auto", marginRight:"auto",backgroundColor: 'white' }}>
    <Plot 
    data = {[ {
      z: z,
      x: x,
      y: y,
      type: 'contour'
    }
  ]}
    />
    </Card>
  )
   
}

export default ContourChart;
