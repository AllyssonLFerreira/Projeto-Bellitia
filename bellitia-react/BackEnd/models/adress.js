module.exports = (sequelize, DataType) => {
    const Adress = sequelize.define('Adress', {
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
        cep: DataType.STRING
    },{
        timestamps: false,
        tableName: 'adress'
    })

    return Adress
};