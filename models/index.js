const {Sequelize,DataTypes} = require('sequelize');
const sequelize = new Sequelize('employee','postgres','0',{
    host: 'localhost',
    logging : false,
    dialect:'postgres'
})
try {
    sequelize.authenticate();
    console.log("connection has been establish");
} catch (error) {
    console.error(" unable to connect",error);
}
const db= {};
db.Sequelize = Sequelize;
db.sequelize =sequelize;
db.user= require('./user')(sequelize,DataTypes);
db.contact = require('./contact')(sequelize,DataTypes);

db.user.hasOne(db.contact,{foreignKey : 'user_id'});
db.contact.belongsTo(db.user);
db.sequelize.sync({alter:true});
//db.sequelize.sync({force:true});
module.exports = db;