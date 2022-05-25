module.exports = (sequelize, DataType) => {
    const Help = sequelize.define('Help', {
        id:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        descricao: DataType.STRING,
        nome: DataType.STRING,
        email: DataType.STRING,
    },{
        timestamps: false,
        tableName: 'help'
    }) 
    
    return Help
};