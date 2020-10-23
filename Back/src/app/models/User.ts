import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export class User extends Model {
  public name!: string;
  public email!: string;
  public password!: string;
  public password_hash!: string;
  public cpf!: string;

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
        sequelize,
      }
    );

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });

    return this;
  }
}

export default User;
