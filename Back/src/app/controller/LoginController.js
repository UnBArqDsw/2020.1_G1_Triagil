import Patient from '../models/Patient';
import Nurse from '../models/Nurse';

import bcryptjs from 'bcryptjs';


class LoginController {

  async show(req,res) {
    const accountExists = await Patient.findOne({ where: { email: req.body.email } });
    if (!accountExists) {
      //return res.status(400).json({ error: 'Patient does not exists.' });

      const accountExists = await Nurse.findOne({ where: { email: req.body.email } });

      if (!accountExists) {
        return res.status(400).json({ error: 'Person does not exists.' });
      }

      const nursePasswordhash = accountExists.password_hash;
      const checkPasswordNurse = bcryptjs.compare(req.body.password, nursePasswordhash);

      if(!(await checkPasswordNurse)){
        return res.status(400).json({ error: 'Password is wrong!'});
      }

      return res.json({
        accountExists
      });

    }

    const patientPasswordhash = accountExists.password_hash;
    const checkPasswordPatient = bcryptjs.compare(req.body.password, patientPasswordhash);

    if(!(await checkPasswordPatient)){
      return res.status(400).json({ error: 'Password is wrong!'});
    }

    return res.json({
      accountExists
    });

  }

}

export default new LoginController();
