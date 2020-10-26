import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

class Person extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        freezeTableName: true,
        underscored: true,
        tableName: 'person',
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

export default Person;
