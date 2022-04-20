module.exports = (sequelize, DataType) => {
    const Address = sequelize.define('Address', {
        id_endereco:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cidade: DataType.STRING,
        uf: DataType.STRING,
        bairro: DataType.STRING,
        logradouro: DataType.STRING,
        numero: DataType.STRING,
        complemento: DataType.STRING,
        cep: DataType.STRING,
        fk_est_address: DataType.INTEGER
    },{
        timestamps: false,
        tableName: 'address'
    })
    Address.associate = (modelsList) => {
        Address.belongsTo(modelsList.Establishment, {
            foreignKey: "fk_est_address"
        })
    }
    return Address
};