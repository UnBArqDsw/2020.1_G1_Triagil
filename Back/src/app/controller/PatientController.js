import Patient from '../models/Patient';

class PatientController {
  async store(req, res) {
    const patientExists = await Patient.findOne({ where: { email: req.body.email } });

    if (patientExists) {
      return res.status(400).json({ error: 'Patient already exists.' });
    }
    const patient = await Patient.create(req.body);

    return res.json({
      patient
    });
  }
}

export default new PatientController();
