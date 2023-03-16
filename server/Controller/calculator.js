const service = require("../Services/calculator")

const calculate = async (req, res)=>{
    const result = await service.calculate(req.query);
    res.send(result);

}

module.exports = {calculate};