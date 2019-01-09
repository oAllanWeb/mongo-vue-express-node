module.exports = (Model) => ( req, res, next) => {
    const query = {
        _id: req.params.id
    };
    console.log('----------------------');
    console.log('Delete: ', query);
    console.log('----------------------');
    Model.remove( query )
        .then( ( data ) => res.json( data ) )
        .catch( ( err ) => { 
            console.log( 'ERRO: ', err );
            return next(err);
        } );
};