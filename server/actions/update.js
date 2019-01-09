module.exports = (Model) => ( req, res, next) => {
    const query = {
        _id: req.params.id
    };
    const mod = req.body;
    console.log('----------------------');
    console.log('Update: ', query, mod);
    console.log('----------------------');
    Model.update( query, mod )
        .then( ( data ) => res.json( data ) )
        .catch( ( err ) => { 
            console.log( 'ERRO: ', err );
            return next(err);
        } );
};