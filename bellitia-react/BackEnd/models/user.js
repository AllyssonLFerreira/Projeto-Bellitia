module.exports = (sequelize, DataType) => {
    const User = sequelize.define('User', {
        id_user:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataType.STRING,
        cpf: DataType.STRING,
        nascimento: DataType.DATE,
        telefone: DataType.STRING,
        email: DataType.STRING,
        senha: DataType.STRING
    },{
        timestamps: false,
        tableName: 'users'
    })
    
     User.associate = (modelsList) => {
        User.hasMany(modelsList.Schedule, {
          foreignKey: 'nome'
        })
     } 
    return User
}