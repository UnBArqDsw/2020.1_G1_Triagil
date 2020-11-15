import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Person from '../app/models/Person';
import Patient from '../app/models/Patient';
import Nurse from '../app/models/Nurse';
import PatientRecord from '../app/models/PatientRecord';
import NurseRecord from '../app/models/NurseRecord';

const modelsPerson = [Person];
const modelsPatient = [Patient];
const modelsNurse = [Nurse];
const modelsPatientRecord = [PatientRecord];
const modelsNurseRecord = [NurseRecord];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    modelsPerson.map((modelPerson) => modelPerson.init(this.connection));
    modelsPatient.map((modelPatient) => modelPatient.init(this.connection));
    modelsNurse.map((modelNurse) => modelNurse.init(this.connection));
    modelsPatientRecord.map((modelPatientRecord) => modelPatientRecord.init(this.connection));
    modelsNurseRecord.map((modelNurseRecord) => modelNurseRecord.init(this.connection));
  }
}

export default new Database();
