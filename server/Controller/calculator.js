const service = require("../Services/calculator")

const isValid = (request) => {
    const monthlyInvestment = Number(request.monthlyInvestment);
    const investmentPeriod = Number(request.investmentPeriod);
    const expectedRateOfReturn = Number(request.expectedRateOfReturn);
    const delay = Number(request.delay);

    if(monthlyInvestment<500 || monthlyInvestment>10000){
        return false;
    }

    if(investmentPeriod<1 || investmentPeriod>30){
        return false;
    }

    if(expectedRateOfReturn<1 || expectedRateOfReturn>30){
        return false;
    }

    if(delay<1 || delay>120){
        return false;
    }
   
    return true;
}

const badRequest = {
    status: -1,
    message: "Something is not good"
};

const calculate = async (req, res)=>{

    if(!isValid(req.query)){
        res.send(badRequest);
        return; 
    }

    const result = await service.calculate(req.query);
    res.send(result);

}

module.exports = {calculate};