import React from "react";
import SliderArea from "./SliderArea";

function InputArea({
  monthlyInvestment,
  setMonthlyInvestment,
  investmentPeriod,
  setInvestmentPeriod,
  rateOfReturn,
  setRateOfReturn,
  delay,
  setDelay,
}) {
  return (
    <div class="inputArea">
      <SliderArea
        index={0}
        mn={500}
        mx={10000}
        steps={50}
        value={monthlyInvestment}
        setValue={setMonthlyInvestment}
      />
      <SliderArea
        index={1}
        mn={1}
        mx={30}
        steps={1}
        value={investmentPeriod}
        setValue={setInvestmentPeriod}
      />
      <SliderArea
        index={2}
        mn={1}
        mx={30}
        steps={0.1}
        value={rateOfReturn}
        setValue={setRateOfReturn}
      />
      <SliderArea
        index={3}
        mn={1}
        mx={120}
        steps={1}
        value={delay}
        setValue={setDelay}
      />
    </div>
  );
}

export default InputArea;
