module.exports = (sequelize, DataType) => {
    const Service = sequelize.define('Service', {
        id_service:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        especificacao: DataType.STRING,
        duracao: DataType.STRING,
        valor: DataType.DECIMAL,
    },{
        timestamps: false,
        tableName: 'est_services'
    })

    return Service
};