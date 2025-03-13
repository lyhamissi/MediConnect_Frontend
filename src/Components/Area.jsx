import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
    { name: 'Jan', pv: 30 },
    { name: 'Feb', pv: 60 },
    { name: 'Mar', pv: 40 },
    { name: 'Apr', pv: 70 },
    { name: 'May', pv: 50 },
    { name: 'Jun', pv: 90 },
    { name: 'Jul', pv: 50 },
    { name: 'Aug', pv: 55 },
    { name: 'Sep', pv: 45 },
    { name: 'Oct', pv: 60 },
    { name: 'Nov', pv: 50 },
    { name: 'Dec', pv: 65},
];

const Areas = () => {
    return (
        <div className="chartcontainer">
        <ResponsiveContainer width="110%" height={250}>
            <AreaChart data={data} margin={{ top:2, right: 55, left: -20, bottom: 0 }}>
                <defs>
                    <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2979ff" stopOpacity={0.5} />
                        <stop offset="60%" stopColor="#2979ff" stopOpacity={0} />
                    </linearGradient>
                </defs>

                <XAxis dataKey="name"  tick={{ fill: "#999", fontSize: 14}} className='axis-text'/>
                <YAxis  tick={{ fill: "#999", fontSize: 14}} className='axis-text' />
                {/* <CartesianGrid strokeDasharray="10" /> */}
                <Tooltip />
                <Area 
                    type="monotone" 
                    dataKey="pv" 
                    stroke="#2979ff" 
                    fill="url(#areaGradient)" 
                />
            </AreaChart>
        </ResponsiveContainer>
        </div>
    );
};

export default Areas;
