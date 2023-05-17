
module.exports=(sequelize,DataTypes)=>{
    return sequelize.define(
        'Contacts',
        {
        address:{
            type : DataTypes.STRING,
            allowNull : false
        },
        phone:{
            type : DataTypes.BIGINT
          
        }},
    // { tableName : 'users'} define table name
    {timestamps: false} // remove create / update time columns  
    );
}