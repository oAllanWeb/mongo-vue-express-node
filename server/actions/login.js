const token = require("../lib/token")

module.exports = (Model) => (req, res, next ) => {
    console.log('----------------------');
    console.log("Find: ", req.body);
    console.log('----------------------');
    Model.find(req.body)
      .then(data => {
        if(data.length){
          var tdata =  data[0]
          res.json({user: tdata, token: token.generate(tdata)}); 
        }else{
          res.status(401)
          res.json({erro:"Senhas invalida"})
        }
      })
      .catch(err => {
        next(err)
        
      });
};