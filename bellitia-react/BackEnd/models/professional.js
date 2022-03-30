module.exports = (sequelize, DataType) => {
    const Professional = sequelize.define('Professional', {
        id_professional:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nome: DataType.STRING,
        D_Nascimento: DataType.DATE,
        Telefone: DataType.STRING,
        Email: DataType.STRING,
        Especialidade: DataType.STRING
    },{
        timestamps: false,
        tableName: 'est_professionals'
    })

    return Professional
};