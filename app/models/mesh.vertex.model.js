// TODO: Should Vertex store X,Y,Z to explode before shipping to client?
// belongsTo Mesh
module.exports = function(sequelize, DataTypes) {
	return sequelize.define("MeshVertex", {
        	x:   DataTypes.FLOAT,
        	y:   DataTypes.FLOAT,
        	z:   DataTypes.FLOAT,
	        index:  DataTypes.INTEGER
	});
};
