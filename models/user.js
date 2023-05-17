module.exports= (sequelize,DataTypes)=>{
   return sequelize.define(
        'Users',
        {
        firstName:{
            type : DataTypes.STRING,
            allowNull : false
        },
        lastName:{
            type : DataTypes.STRING,
            defaultValue :"Kumar"
        }
    
    },
    // { tableName : 'users'} define table name
    {timestamps: false} // remove create / update time columns
    );
   
}
//sequelize.define(modelName, attributes, options)
// const {DataTypes} =require('sequelize');
// const sequelize =require('./index');
// //sequelize.define(modelName, attributes, options)
// const User = sequelize.define('Users',{
//     firstName:{
//         type : DataTypes.STRING,
//         allowNull : false
//     },
//     lastName:{
//         type : DataTypes.STRING,
//         defaultValue :"Kumar"
//     }

// },
// // { tableName : 'users'} define table name
// {timestamps: false} // remove create / update time columns

// );
// console.log(User===sequelize.models.User);
// module.exports=User;
