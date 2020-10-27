import Nurse from '../models/Nurse';

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
}

export default new NurseController();
