import Nurse from '../models/Nurse';
import bcryptjs from 'bcryptjs';

class NurseController {
  async store(req, res) {
    const nurseExists = await Nurse.findOne({ where: { email: req.body.email } });

    if (nurseExists) {
      return res.status(400).json({ error: 'Nurse already exists.' });
    }
    const nurse = await Nurse.create(req.body);

    return res.json({
      nurse
    });
  }
  async show(req,res) {
    const nurseExists = await Nurse.findOne({ where: { email: req.body.email } });

    if (!nurseExists) {
      return res.status(400).json({ error: 'Nurse does not exists.' });
    }

    const nursePasswordhash = nurseExists.password_hash;
    const checkPasswordNurse = bcryptjs.compare(req.body.password, nursePasswordhash);

    if(!(await checkPasswordNurse)){
      return res.status(400).json({ error: 'Password is wrong!'});
    }

    return res.json({
      nurseExists
    });

  }
}

export default new NurseController();
