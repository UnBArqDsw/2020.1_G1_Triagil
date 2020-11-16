import NurseRecord from '../models/NurseRecord';

class NurseRecordController {
  async store(req, res) {
    const NurseRecordExists = await NurseRecord.findOne({ where: { email: req.body.email } });

    if (NurseRecordExists) {
      return res.status(400).json({ error: 'Nurse record already exists.' });
    }
    const nurseRecord = await NurseRecord.create(req.body);

    return res.json({
        nurseRecord
    });
  }
  async show(req,res) {
    const allRecords = await NurseRecord.findAll();

    if (!allRecords) {
      return res.status(400).json({ error: 'There is no records saved.' });
    }


    return res.json({
      allRecords
    });
  }
}

export default new NurseRecordController();
