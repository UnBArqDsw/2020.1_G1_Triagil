import TriageRecord from '../models/TriageRecord';

class TriageRecordController {
  async store(req, res) {


    let triageRecord = req.body;
    let  objectTriage = {};

    if(triageRecord.headache){

      objectTriage.estadoMentalAlterado = triageRecord.estadoMentalAlterado;
      objectTriage.estadoMentalAlteradoNotes = triageRecord.estadoMentalAlteradoNotes;
      objectTriage.sinaisDeChoque_headache = triageRecord.sinaisDeChoque_headache;
      objectTriage.sinaisDeChoqueNotes_headache = triageRecord.sinaisDeChoqueNotes_headache;
      objectTriage.convulsion_headache = triageRecord.convulsion_headache;
      objectTriage.sinaisNeurologicosFocais_headache = triageRecord.sinaisNeurologicosFocais_headache;
      objectTriage.sinaisNeurologicosFocaisNotes_headache = triageRecord.sinaisNeurologicosFocaisNotes_headache;
      objectTriage.aumentoSubitoDaDor = triageRecord.aumentoSubitoDaDor;
      objectTriage.aumentoSubitoDaDorNotes = triageRecord.aumentoSubitoDaDorNotes;
      objectTriage.perdaAgudaCompletaVisao = triageRecord.perdaAgudaCompletaVisao;
      objectTriage.menigismo_headache = triageRecord.menigismo_headache;
      objectTriage.menigismoNotes_headache = triageRecord.menigismoNotes_headache;
      objectTriage.pain_headache = triageRecord.pain_headache;
      objectTriage.temperature_headache = triageRecord.temperature_headache;
      objectTriage.inconsciencia_headache = triageRecord.inconsciencia_headache;
      objectTriage.inconscienciaNotes_headache = triageRecord.inconscienciaNotes_headache;
      objectTriage.diminuicaoVisao = triageRecord.diminuicaoVisao;
      objectTriage.nauseaEVomito = triageRecord.nauseaEVomito;

      if(objectTriage.estadoMentalAlterado || objectTriage.sinaisDeChoque_headache
         || objectTriage.convulsion_headache || objectTriage.sinaisNeurologicosFocais_headache ||
         objectTriage.aumentoSubitoDaDor){
          triageRecord.manchesterPriority = 5;
      } else if(objectTriage.perdaAgudaCompletaVisao ||  objectTriage.menigismo_headache || objectTriage.pain_headache >= 7){
        triageRecord.manchesterPriority = 4;
      } else if((objectTriage.temperature_headache >= 35.00 && objectTriage.temperature_headache <= 37.8) || objectTriage.inconsciencia_headach ||
          objectTriage.diminuicaoVisao || (objectTriage.pain_headache >= 4 && objectTriage.pain_headache <= 6) ||
          objectTriage.nauseaEVomito){
            triageRecord.manchesterPriority = 3;
      } else if(objectTriage.pain_headache >= 1 && objectTriage.pain_headache <= 3){
            triageRecord.manchesterPriority = 2;
      } else {
            triageRecord.manchesterPriority = 1;
      }
    }
    const record = await TriageRecord.create(triageRecord);

      return res.json({
        record
    });
  }

  async show(req,res) {
    return res.json({
        triageRecord
    });
  }
}

export default new TriageRecordController();
