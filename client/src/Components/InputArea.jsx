import React from 'react';
import SliderArea from './SliderArea';

function InputArea(props) {
  return (
    <div class="inputArea">
      <SliderArea index={0} mn={500} mx={10000} steps={50} value={props.monthlyInvestment} setValue={props.changeMonthlyInvestment}/>
      <SliderArea index={1} mn={1} mx={30} steps={1} value={props.investmentPeriod} setValue={props.changeInvestmentPeriod}/>
      <SliderArea index={2} mn={1} mx={30} steps={0.1} value={props.rateOfReturn} setValue={props.changeRateOfReturn}/>
      <SliderArea index={3} mn={1} mx={120} steps={1} value={props.delay} setValue={props.changeDelay}/>
    </div>
  )
}

export default InputArea