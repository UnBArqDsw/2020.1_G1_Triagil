import Sequelize from 'sequelize';
import { databaseConfig } from '../config/database';
import User from '../app/models/User';

const models = [User];

class Database {
  public connection!: Sequelize.Sequelize;

  constructor() {
    this.init();
  }

  init(): void {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
