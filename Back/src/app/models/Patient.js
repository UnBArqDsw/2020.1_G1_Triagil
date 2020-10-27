import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';
import Person from './Person';

class Patient extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        cpf: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        freezeTableName: true,
        underscored: true,
        tableName: 'patient',
        sequelize
      }
    );

    this.addHook('beforeSave', async (patient) => {
      if (patient.password) {
        patient.password_hash = await bcryptjs.hash(patient.password, 8);
      }
    });

    return this;
  }
}

export default Patient;
