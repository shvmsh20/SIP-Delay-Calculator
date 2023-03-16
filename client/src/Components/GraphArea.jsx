import React from 'react';
import {ResponsiveContainer,BarChart,Bar,XAxis,YAxis, Label, Tooltip} from 'recharts'

function findAmountWithoutDelay(monthlyInvestment, investmentPeriod, rateOfReturn){
  let Months = (investmentPeriod)*12;
  let Rate = (rateOfReturn - 0)/12;
  let sipCumulation = 0;
  let sipGrowthResult = 0;

  for(let i=1; i<=Months; i++)
  {
    sipCumulation = monthlyInvestment*(Math.pow((1+Rate/100),i));
    sipGrowthResult += sipCumulation;
  }
  return sipGrowthResult;
}

function findAmountWithDelay(monthlyInvestment, investmentPeriod, rateOfReturn, delay){
  let Months = (investmentPeriod)*12 - delay;
  let Rate = (rateOfReturn - 0)/12;
  let sipCumulation = 0;
  let sipGrowthResult = 0;

  for(let i=1; i<=Months; i++)
  {
    sipCumulation = monthlyInvestment*(Math.pow((1+Rate/100),i));
    sipGrowthResult += sipCumulation;
  }
  return sipGrowthResult;
}

const Graph = ({monthlyInvestment, investmentPeriod, rateOfReturn, delay}) => {



let amountWithoutDelay = findAmountWithoutDelay(monthlyInvestment, investmentPeriod, rateOfReturn).toFixed(0);
let amountWithDelay = findAmountWithDelay(monthlyInvestment, investmentPeriod, rateOfReturn, delay).toFixed(0);
let notionalLoss = amountWithoutDelay-amountWithDelay;





  const Array = [
    {
      name:"Start Today",
      Amount: amountWithoutDelay,
      
  },
  {
      name:"Delayed Start",
      Amount: amountWithDelay,
  },
  {
      name:"Notional Loss",
      Amount: notionalLoss,
      fill: '#DF2E38'

  },
]

function toIndianRupees(sum){
  return sum.toString().replace(/\D/g, "").replace(/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g, "$1,");
}
return (
    <div className='graphArea'>
      <p className='graph-text'>After {investmentPeriod} years, you will have<br/>
      <span className='totalamount'>₹ {toIndianRupees(amountWithDelay)}</span>
      <br/>That's <span className='potentialamount'>₹ {toIndianRupees(amountWithoutDelay)}</span> as potential capital gains <br/> on your investment of 
      <span className='delay'> ₹ {toIndianRupees(monthlyInvestment)}</span></p>
      
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
