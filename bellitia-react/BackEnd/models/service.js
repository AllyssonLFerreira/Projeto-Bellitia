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
        fk_est_service: DataType.INTEGER
    },{
        timestamps: false,
        tableName: 'est_services'
    })
    Service.associate = (modelsList) => {
        Service.belongsTo(modelsList.Establishment, {
            foreignKey: "fk_est_service"
        })

        Service.belongsToMany(modelsList.Professional, {
            through: modelsList.Schedule,
            foreignKey: 'servico',
            timestamps: false
        })

        Service.belongsToMany(modelsList.User, {
            through: modelsList.Schedule,
            foreignKey: 'servico',
            timestamps: false
        })

    }
    return Service
};