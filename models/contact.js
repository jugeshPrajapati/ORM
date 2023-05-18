
module.exports=(sequelize,DataTypes)=>{
    return sequelize.define(
        'Contacts',
        {
        address:{
            type : DataTypes.STRING,
            allowNull : false
        },
        phone:{
            type : DataTypes.BIGINT,
            unique:true,
            // validate:{
            //     is:/^{0-9}/i
            // },
        },
        user_id:DataTypes.BIGINT
          
        },
    // { tableName : 'users'} define table name
    {timestamps: false} // remove create / update time columns  
    );
}