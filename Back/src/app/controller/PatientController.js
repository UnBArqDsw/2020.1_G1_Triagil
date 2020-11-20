import Patient from '../models/Patient';
import bcryptjs from 'bcryptjs';

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
  async show(req,res) {
    const patientExists = await Patient.findOne({ where: { email: req.body.email } });

    if (!patientExists) {
      return res.status(400).json({ error: 'Patient does not exists.' });
    }

    const patientPasswordhash = patientExists.password_hash;
    const checkPasswordPatient = bcryptjs.compare(req.body.password, patientPasswordhash);

    if(!(await checkPasswordPatient)){
      return res.status(400).json({ error: 'Password is wrong!'});
    }

    return res.json({
      patientExists
    });

  }
}

export default new PatientController();
