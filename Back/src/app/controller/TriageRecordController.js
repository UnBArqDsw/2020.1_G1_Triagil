import TriageRecord from '../models/TriageRecord';

class TriageRecordController {
  async store(req, res) {



      return res.json({
        triageRecord
    });
  }
  
  
  async show(req,res) {
    


    return res.json({
        triageRecord
    });
  }
}

export default new TriageRecordController();
