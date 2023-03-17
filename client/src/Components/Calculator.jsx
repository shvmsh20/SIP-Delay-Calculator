import React, { useState, useEffect } from "react";
import axios from "axios";
import InputArea from "./InputArea";
import GraphArea from "./GraphArea";
import ErrorPage from "./ErrorPage";

function Calculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(500);
  function changeMonthlyInvestment(val) {
    setMonthlyInvestment(val);
  }
  const [investmentPeriod, setInvestmentPeriod] = useState(1);
  function changeInvestmentPeriod(val) {
    setInvestmentPeriod(val);
  }
  const [rateOfReturn, setRateOfReturn] = useState(1);
  function changeRateOfReturn(val) {
    setRateOfReturn(val);
  }
  const [delay, setDelay] = useState(1);
  function changeDelay(val) {
    setDelay(val);
  }
  const [startToday, setStartToday] = useState();
  const [delayedStart, setDelayedStart] = useState();
  const [notionalLoss, setNotionalLoss] = useState();

  //For  api
  const [err, setErr] = useState();

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/getResults", {
        params: {
          monthlyInvestment: monthlyInvestment,
          investmentPeriod: investmentPeriod,
          rateOfReturn: rateOfReturn,
          delay: delay,
        },
      });
      const response = res.data.result;
      if (res.data.status == 0) {
        setStartToday(response.startToday);
        setDelayedStart(response.delayedStart);
        setNotionalLoss(response.notionalLoss);
        setErr(false);
      }
      if (res.data.status == -1) {
        setErr(true);
      }
    }
    fetchData();
  }, [monthlyInvestment, investmentPeriod, rateOfReturn, delay]);

  return (
    <div className="calculator">
      <h2 className="heading"> SIP Delay Calculator</h2>

      <h5 className="info">
        It tells you how much wealth you can create by making monthly investment
      </h5>
      <div className="container">
        <InputArea
          monthlyInvestment={monthlyInvestment}
          changeMonthlyInvestment={changeMonthlyInvestment}
          investmentPeriod={investmentPeriod}
          changeInvestmentPeriod={changeInvestmentPeriod}
          rateOfReturn={rateOfReturn}
          changeRateOfReturn={changeRateOfReturn}
          delay={delay}
          changeDelay={changeDelay}
        />
        {err ? (
          <ErrorPage />
        ) : (
          <GraphArea
            monthlyInvestment={monthlyInvestment}
            investmentPeriod={investmentPeriod}
            startToday={startToday}
            delayedStart={delayedStart}
            notionalLoss={notionalLoss}
          />
        )}
      </div>
    </div>
  );
}

export default Calculator;
