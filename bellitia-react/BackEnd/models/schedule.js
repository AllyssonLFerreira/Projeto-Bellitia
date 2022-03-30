module.exports = (sequelize, DataType) => {
    const Schedule = sequelize.define('Schedule', {
        id_schedules:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        data: DataType.DATE,
        horario: DataType.TIME
    },{
        timestamps: false,
        tableName: 'schedules'
    })

    return Schedule
};