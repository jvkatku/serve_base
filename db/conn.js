const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('bd_dados','root','senai',{
    host: 'localhost',
    dialect: 'mysql'
})
// })
// sequelize.authenticate().then(()=>{
//     console.log('conexão realizada com sucesso ...')
// }).catch((error)=>{
//     console.error('não deu, copia mais que vai melhorar')

module.exports = sequelize
