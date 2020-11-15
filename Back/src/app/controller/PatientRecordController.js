import PatientRecord from '../models/PatientRecord';

class PatientRecordController {
  async store(req, res) {
    const PatientRecordExists = await PatientRecord.findOne({ where: { email: req.body.email } });

    if (PatientRecordExists) {
      return res.status(400).json({ error: 'Patient record already exists.' });
    }
    const patientRecord = await PatientRecord.create(req.body);

    return res.json({
        patientRecord
    });
  }
  async show(req,res) {
    const allRecords = await PatientRecord.findAll();

    if (!allRecords) {
      return res.status(400).json({ error: 'There is no records saved.' });
    }

    let cont = 0;
    let preferential = [];
    let noPreferential = [];

    while(cont !== allRecords.length){
      if(allRecords[cont].age >= 60){
        preferential.push(allRecords[cont]);
      } else {
        noPreferential.push(allRecords[cont]);
      }

      cont++;
    }

    return res.json({
      preferential,
      noPreferential
    });
  }
}

export default new PatientRecordController();
