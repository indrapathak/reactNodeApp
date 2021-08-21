import Plot from 'react-plotly.js';
import { Card } from '@material-ui/core';

/// HERE we only wrote the data array part inside retunrn and trace part outside as it will give trace is undefined error 

const ParalleCordinateCHart = () => {
    const  trace = {
        type: 'parcoords',
        line: {
          color: 'Red'
        },
        
        dimensions: [{
          range: [1, 5],
          constraintrange: [1, 2],
          label: 'A',
          values: [1,4]
        }, {    
          range: [1,5],
          label: 'B',
          values: [3,1.5],
          tickvals: [1.5,3,4.5]
        }, {
          range: [1, 5],
          label: 'C',
          values: [2,4],
          tickvals: [1,2,4,5],
          ticktext: ['text 1','text 2','text 4','text 5']
        }, {
          range: [1, 5],
          label: 'D',
          values: [4,2]
        }]
      }
      
    return (
      <Card style={{ width: "60%",  height: "70vh",marginTop:"20px" ,marginLeft: "auto", marginRight:"auto",backgroundColor: 'white' }}>
        <Plot
        data = {[trace]}
        />
        </Card>
        ) ;
}

export default ParalleCordinateCHart;