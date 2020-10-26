import Sequelize from 'sequelize';
import bcryptjs from 'bcryptjs';
import Person from './Person';

class Nurse extends Person {
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

    this.addHook('beforeSave', async (person) => {
      if (person.password) {
        person.password_hash = await bcryptjs.hash(person.password, 8);
      }
    });

    return this;
  }
}

export default Nurse;
