
/*
 * GET users listing.
 */

exports.list = function(req, res){
  //res.send("respond with a resource");

  res.json([{
  	id: 1,
  	username: "dave"
  }, {
  	id: 2,
  	username: "superdave"
  }]);
};