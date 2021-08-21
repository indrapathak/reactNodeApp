import React, { useEffect,useState } from "react";
import Plot from 'react-plotly.js';
import { Card } from '@material-ui/core';

// Here below we have seen that how can we call the backend GET API with query parameters in URL. For sending query parameters in URL we have to use "URLSearchParams" interface. It support various kinds of methods for manipulating the query parameters in URL. 

// In order to append the data in the component as it is comming inside USE EFFECT hook,we have to create the state and then set that state with that data and then use that in component 

const PieChart = (Props) => {
 
  const[data1,setdata1] = useState([]);

  let url = "http://localhost:5050/fetchDataWithGetMethod";
  
  const params = {
    "type": "Pie"
  }
  url += "?" + new URLSearchParams(params).toString()
  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    URL: url
  };

  useEffect(() => {
    fetch(url, options).then(resp => resp.json())
      .then(resp => {setdata1(resp.data.elements)}
      )
  }, [])

  return (
    <Card style={{ width: "60%", height: "60vh", marginTop: "20px", marginLeft: "auto", marginRight: "auto", backgroundColor: 'white' }}>
      <Plot
        data={
          [{
            values: data1,
            labels: Props.labels,
            type: 'pie'
          }]}
        layout={{
          height: 400,
          width: 500
        }} />
    </Card>

  );


}

export default PieChart;
