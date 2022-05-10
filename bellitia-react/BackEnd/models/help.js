module.exports = (sequelize, DataType) => {
    const userHelp = sequelize.define('userHelp', {
        id:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        descricao: DataType.STRING,
        nome: DataType.STRING
    },{
        timestamps: false,
        tableName: 'users_help'
    })
    
    return userHelp
};