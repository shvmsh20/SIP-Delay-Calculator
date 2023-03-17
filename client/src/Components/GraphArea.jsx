import React from 'react';
import {ResponsiveContainer,BarChart,Bar,XAxis,YAxis, Label, Tooltip} from 'recharts'


const Graph = (props) => {

  const Array = [
    {
      name:"Start Today",
      Amount: props.startToday,
      
  },
  {
      name:"Delayed Start",
      Amount: props.delayedStart,
  },
  {
      name:"Notional Loss",
      Amount: props.notionalLoss,
      fill: '#DF2E38'

  },
]

function toIndianRupees(sum){
  return Number(sum).toString().replace(/\D/g, "").replace(/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g, "$1,");
}

return (

    <div className='graphArea'>
      <p className='graph-text'>After {props.investmentPeriod} years, you will have<br/>
      <span className='totalamount'>₹ {toIndianRupees(props.delayedStart)}</span>
      <br/>That's <span className='potentialamount'>₹ {toIndianRupees(props.startToday)}</span> as potential capital gains <br/> on your investment of 
      <span className='delay'> ₹ {toIndianRupees(props.monthlyInvestment)}</span></p>
    <ResponsiveContainer height="40%" width="80%" aspect={1.3} >
     
        <BarChart  className="bar-graph" data = {Array} width={200} max-height = {200}>
            <XAxis dataKey="name" fill='#5E73EB'/>
            <YAxis width={110}>
            <Label angle={270} position='left' offset={-1}
            value="Amount (Rs.)"
            style={{ textAnchor: 'middle', fontSize: '100%', fill: 'rgba(0, 0, 0, 0.56)' }}></Label>
            </YAxis>
            <Tooltip cursor={false}  />
            <Bar dataKey="Amount" fill = '#5E73EB' />
        </BarChart>
    </ResponsiveContainer>
    </div>
  )



}

export default Graph;
