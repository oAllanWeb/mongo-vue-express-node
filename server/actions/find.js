module.exports = (Model) => ( req, res, next, query = {} ) => {
    console.log('----------------------');
    console.log('Find: ', query);
    console.log('----------------------');
    Model.find( query )
        .then( ( data ) => res.json( data ) )
        .catch( ( err ) => { 
            console.log( 'ERRO: ', err );
            return next(err);
        } );
};