module.exports = (Model) => ( req, res, next) => {
    const body = req.body;
    console.log('----------------------');
    console.log('Create: ', body);
    console.log('----------------------');
    Model.create( body )
        .then( ( data ) => res.json( data ) )
        .catch( ( err ) => { 
            console.log( 'ERRO: ', err );
            return next(err);
        } );
};