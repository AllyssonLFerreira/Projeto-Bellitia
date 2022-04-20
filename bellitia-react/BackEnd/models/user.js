module.exports = (sequelize, DataType) => {
    const User = sequelize.define('User', {
        id_user:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nome: DataType.STRING,
        CPF: DataType.STRING,
        RG: DataType.STRING,
        D_Nascimento: DataType.DATE,
        Telefone: DataType.STRING,
        Email: DataType.STRING
    },{
        timestamps: false,
        tableName: 'users'
    })
    
    User.associate = (modelsList) => {
        User.belongsToMany(modelsList.Service,{
            through: modelsList.Schedule,
            foreignKey: 'nome',
            timestamps: false
        })
    }
    return User
};