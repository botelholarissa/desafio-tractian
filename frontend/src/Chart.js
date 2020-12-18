import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {useEffect, useState} from 'react';


const options = {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'My chart'
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6]
      }
    ]
};

export const Chart = () => {
  const [initialState, setInitialState] = useState() 

  return (
    <div>
    <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
};