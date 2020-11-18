import TriageRecord from '../models/TriageRecord';

class TriageRecordController {
  async store(req, res) {


    let teste = req.body;
    let vetorExemplo = [];

    if(teste.headache){
      vetorExemplo.push(teste.headacheSigns);
      delete teste.headacheSigns;
    } else if(teste.soreThroat){
        vetorExemplo.push(teste.soreThroatSigns);
        delete teste.soreThroatSigns;
    } else if(teste.convulsion){
        vetorExemplo.push(teste.convulsionSigns);
        delete teste.convulsionSigns;
    } else if(teste.fainting){
        vetorExemplo.push(teste.faintingSigns);
        delete teste.faintingSigns;
    } else if(teste.diarrhea){
        vetorExemplo.push(teste.diarrheaSigns);
        delete teste.diarrheaSigns;
    }

      return res.json({
        teste,
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
