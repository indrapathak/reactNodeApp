import React, { useEffect,useState } from 'react';
import Plot from 'react-plotly.js';
import { Card } from '@material-ui/core';
//USE EFFECT HOOK contains DID MOUNT,DID UPDATE and COMPONET WILL MOUNT properties of react life cycle methods that are used in class based components.
// Here for demo purpose we have used USE EFFECT HOOK for calling the API. Generally we dont call the API component if we do so it will not be resusable
//Here we called the post API of backend with body,the fetch function generaly need these parameters,we can do same things with axios there we write data instead of body and we dont need to transform the data into json when we use axios.
//Similarly we can call PUT AND DELETE method also,for calling th GET method we can not pass body in that we have to send request parameters in other manner 
// In order to append the data in the component as it is comming inside USE EFFECT hook,we have to create the state and then set that state with that data and then use that in component 
const LineBar = () => {

  const [lineData,setLineData] = useState([]);
  const url = "http://localhost:5050/fetchData";
  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify({
      type: "Line"
    })
  };

  useEffect(() => {

    fetch(url, options).then(resp => resp.json())
      .then(resp =>setLineData(resp.data.elements)
      )
  }, [])
  return (
    <Card style={{ width: "60%", height: "50vh", marginTop: "20px", marginLeft: "auto", marginRight: "auto", backgroundColor: 'white' }}>
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: lineData,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'red' },
          },
          { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
        ]}
        layout={{ width: "100%", height: "100%", title: 'A Fancy Plot' }}
      />
    </Card>
  );
}


export default LineBar;