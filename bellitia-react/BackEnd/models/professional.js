module.exports = (sequelize, DataType) => {
    const Professional = sequelize.define('Professional', {
        id_professional:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nome: DataType.STRING,
        Telefone: DataType.STRING,
        Email: DataType.STRING,
        Especialidade: DataType.STRING,
        fk_establishment: DataType.INTEGER
    },{
        timestamps: false,
        tableName: 'est_professionals'
    })

    Professional.associate = (modelsList) => {
        
        Professional.belongsTo(modelsList.Establishment,{
            foreignKey: 'fk_establishment'
        })
        
        Professional.belongsToMany(modelsList.Service,{
            through: modelsList.Schedule,
            foreignKey: 'profissional',
            timestamps: false
        })
    }

    return Professional
};