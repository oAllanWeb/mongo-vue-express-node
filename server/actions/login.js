const token = require("../lib/token")

module.exports = (Model) => (req, res, next, ) => {
    console.log('----------------------');
    console.log("Find: ", req.body);
    console.log('----------------------');
    Model.find(req.body)
      .then(data => {
        var tdata =  data[0]
        delete tdata.password; 
        res.json({ token: token.generate(tdata), user: tdata }); 
      })
      .catch(err => {
        console.log("ERRO: ", err);
        return next(err);
      });
};