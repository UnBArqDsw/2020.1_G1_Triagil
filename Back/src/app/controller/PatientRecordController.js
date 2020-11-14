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
}

export default new PatientRecordController();
