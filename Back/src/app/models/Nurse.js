import Sequelize, { Model }  from 'sequelize';
import bcryptjs from 'bcryptjs';
import Person from './Person';

class Nurse extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        cre: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        freezeTableName: true,
        underscored: true,
        tableName: 'nurse',
        sequelize
      }
    );

    this.addHook('beforeSave', async (nurse) => {
      if (nurse.password) {
        nurse.password_hash = await bcryptjs.hash(nurse.password, 8);
      }
    });

    return this;
  }
}

export default Nurse;
