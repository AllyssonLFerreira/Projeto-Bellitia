module.exports = (sequelize, DataType) => {
    const Schedule = sequelize.define('Schedule', {
        id_schedules:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        data: DataType.DATE,
        servico: DataType.INTEGER,
        profissional: DataType.INTEGER,
        estabelecimento: DataType.INTEGER,
        nome: DataType.INTEGER,
        horario: DataType.TIME,
        fk_user: DataType.INTEGER
    },{
        timestamps: false,
        tableName: 'schedules'
    })

    return Schedule
};