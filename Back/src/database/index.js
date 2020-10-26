import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Person from '../app/models/Person';
import Patient from '../app/models/Patient';
import Nurse from '../app/models/Nurse';

const modelsPerson = [Person];
const modelsPatient = [Patient];
const modelsNurse = [Nurse];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    modelsPerson.map((modelPerson) => modelPerson.init(this.connection));
    modelsPatient.map((modelPatient) => modelPatient.init(this.connection));
    modelsNurse.map((modelNurse) => modelNurse.init(this.connection));
  }
}

export default new Database();
