import TriageRecord from '../models/TriageRecord';

class TriageRecordController {
  async store(req, res) {

    let teste = req.body;

    let vetorExemplo = [];
    vetorExemplo.push(teste.headacheSigns);

      return res.json({
        vetorExemplo
    });
  }


  async show(req,res) {



    return res.json({
        triageRecord
    });
  }
}

export default new TriageRecordController();
