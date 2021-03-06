module.exports = (sequelize, DataType) => {
    const Establishment = sequelize.define('Establishment', {
        id_establishment:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        razao_social: DataType.STRING,
        nome_fantasia: DataType.STRING,
        cnpj: DataType.STRING,
        telefone: DataType.STRING,
        email: DataType.STRING,
        nome_proprietario: DataType.STRING,
        cpf_proprietario: DataType.STRING,
        email_proprietario: DataType.STRING,
        telefone_proprietario: DataType.STRING,
        senha: DataType.STRING
    },{
        timestamps: false,
        tableName: 'establishments'
    })
    Establishment.associate = (modelsList) => {

        Establishment.hasMany(modelsList.Address, {
            foreignKey: 'fk_est_address'
        });

        Establishment.hasMany(modelsList.Service, {
            foreignKey: 'id_establishment'
        })

        Establishment.hasMany(modelsList.Professional, {
            foreignKey: 'id_establishment'
        })
    }
    return Establishment
};