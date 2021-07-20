const {Sequelize } =require('sequelize')
const sequelize=  new Sequelize('job-portal','root','root',{
dialect:'mysql'
})


module.exports=sequelize