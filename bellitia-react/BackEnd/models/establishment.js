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
        nome_proprietario: DataType.STRING,
        telefone: DataType.STRING,
        email: DataType.STRING
    },{
        timestamps: false,
        tableName: 'establishments'
    })

    return Establishment
};