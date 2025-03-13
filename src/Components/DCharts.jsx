import React, { PureComponent } from 'react';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 1000,
    pv: 1400,
    amt: 200,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1400,
    amt: 200,
  },
  {
    name: 'Page C',
    uv: 3500,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 1500,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 6000,
    pv: 400,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 5000,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 2500,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page H',
    uv: 1500,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page I',
    uv: 2600,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page J',
    uv: 2800,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page K',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page L',
    uv: 2700,
    pv: 4300,
    amt: 2100,
  },
];

const DCharts = () => {
    return (
        <ResponsiveContainer width="20%" height="80%">
            <BarChart  data={data} border-radius={5}>
                <Bar dataKey="uv" fill="#e04545" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default DCharts;
