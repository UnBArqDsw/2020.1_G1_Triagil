import Sequelize, { Model } from 'sequelize';

class NurseRecord extends Model {
  static init(sequelize) {
    super.init(
      {
        id_patient: Sequelize.STRING,
        id_patient_record: Sequelize.STRING,
        classification_summary: Sequelize.STRING,
        priority: Sequelize.STRING,
        main_complaint: Sequelize.STRING,
        note: Sequelize.STRING,
        medicines: Sequelize.STRING,
        symptom_flowchart: Sequelize.STRING,
        discriminators: Sequelize.STRING,
        specialty: Sequelize.STRING,
        allergies: Sequelize.STRING,
        pa: Sequelize.STRING,
        fc: Sequelize.STRING,
        t: Sequelize.STRING,
        sat: Sequelize.STRING,
        fr: Sequelize.STRING,
        pain: Sequelize.STRING,
        pain_level: Sequelize.STRING,
        responsible_nurse: Sequelize.STRING
      },
      {
        freezeTableName: true,
        underscored: true,
        tableName: 'nurse-record',
        concurrently: false,
        sequelize
      }
    );
  }
}

export default NurseRecord;
