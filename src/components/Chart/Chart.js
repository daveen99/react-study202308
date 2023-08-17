import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({ dataPoints }) => {
  // 지출액들만 월별로 추출
  const dataPointValues = dataPoints.map((dp) => dp.value);
  // console.log(dataPointValues);

  // 1년치 총액
  // a: 리턴결과에 대한 누적값
  // b: 배열에서 하나씩 꺼낸 값
  // 맨 뒤의 값 : 누적값의 초기값
  const maximumValue = dataPointValues.reduce((a, b) => a + b, 0);
  console.log(maximumValue);

  return (
    <div className="chart">
      {dataPoints.map(({ label, value }) => (
        <ChartBar
          key={label}
          label={label}
          currentValue={value}
          maxValue={maximumValue}
        />
      ))}
      ;
    </div>
  );
};

export default Chart;
