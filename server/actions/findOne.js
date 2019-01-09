module.exports = (Model) => ( req, res, next, populate = [] ) => {
    const query = {
        _id: req.params.id
    };
    console.log('----------------------');
    console.log('FindOne: ', query, 'Populate: ', populate);
    console.log('----------------------');
    let find = Model.findOne( query );
    for (let i = 0; i < populate.length; i++) {
        find.populate(populate[i]);
    }
    find.then( ( data ) => res.json( data ) )
        .catch( ( err ) => { 
            console.log( 'ERRO: ', err );
            return next(err);
        } );
};