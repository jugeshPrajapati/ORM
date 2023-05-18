const db = require("../models/index")

const User =db.user;
const Contact=db.contact;
// const addUser = async (req,res) =>{
//     const jane =await User.create({firstName : "jane"});
//     //create = build+save
//     // const jane = User.build({firstName : "jane"});
//     // await jane.save();
//     console.log(jane.firstName);
    
//     console.log(jane.toJSON());
//     res.status(200).json(jane.toJSON());
// }
const getUsers = async (req,res) =>{
    try {
        data= await User.findAll(
            //{attributes: ['fieldName',['name','alias']]}
             //{attributes: {exclude:['name']}}
        );
        res.status(200).json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json(error.message);
    }
}
const getUser = async (req,res) =>{
    try {
        data= await User.findOne(
            {where: {
                id:req.params.id}}
        );
        res.status(200).json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json(error.message);
    }
}
const postUser = async (req,res) =>{
    try {
        const postData = req.body; 
        const data =await User.create(postData);
        //User.bulkCreate();
        res.status(200).json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json(error.message);
    }
}
const deleteUser = async (req,res) =>{
    try {
        const data =await User.destroy({
            where:{
                id : req.params.id
            }
        })
        res.status(200).json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json(error.message);
    }
}
const updateUser = async (req,res) =>{
    try {
       const updateData=req.body;
       const data = await User.update(updateData,{
        where:{
            id:req.params.id
        }
       });
        res.status(200).json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json(error.message);
    }
}

const oneToOneUser = async (req,res) =>{
    try {
        //data inserted into first table even if table two give error instead of revert 
    //    const data =await User.create({firstName:'ok3',lastName:'l3ol'});
    //    if(data && data.id){
    //     await Contact.create({address:'xcv',phone:34562278902,'user_id':data.id});
    //    }
            const data = await User.findAll(
                {
                    attributes:['firstName','lastName'],
                    include:[{
                        model:Contact,
                        attributes:['address','phone']
                    }],
                    
                }
            )

        res.status(200).json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json(error.message);
    }
}
module.exports={
    // addUser,
    getUsers,
    getUser,
    postUser,
    deleteUser,
    updateUser,
    oneToOneUser
}