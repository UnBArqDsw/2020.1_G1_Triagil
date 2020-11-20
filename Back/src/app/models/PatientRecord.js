import Sequelize, { Model } from 'sequelize';

class PatientRecord extends Model {
  static init(sequelize) {
    super.init(
      {
        id_patient: Sequelize.INTEGER,
        name: Sequelize.STRING,
        mother_name: Sequelize.STRING,
        father_name: Sequelize.STRING,
        sex: Sequelize.STRING,
        birth: Sequelize.STRING,
        age: Sequelize.STRING,
        state_civil: Sequelize.STRING,
        rg: Sequelize.STRING,
        cpf: Sequelize.STRING,
        naturalness: Sequelize.STRING,
        professions: Sequelize.STRING,
        schooling: Sequelize.STRING,
        religions: Sequelize.STRING,
        nationality: Sequelize.STRING,
        race: Sequelize.STRING,
        blood_type: Sequelize.STRING,
        email: Sequelize.STRING,
      },
      {
        freezeTableName: true,
        underscored: true,
        tableName: 'patient-record',
        sequelize
      }
    );
  }
}

export default PatientRecord;
