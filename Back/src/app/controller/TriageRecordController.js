import TriageRecord from '../models/TriageRecord';

class TriageRecordController {
  async store(req, res) {


    let triageRecord = req.body;
    let  objectTriage = {};

    if(triageRecord.headache){

      objectTriage.estadomental_alterado = triageRecord.estadomental_alterado;
      objectTriage.estado_mental_alterado_notes = triageRecord.estado_mental_alterado_notes;
      objectTriage.sinais_de_choque_headache = triageRecord.sinais_de_choque_headache;
      objectTriage.sinaisdechoquenotes_headache = triageRecord.sinaisdechoquenotes_headache;
      objectTriage.convulsion_headache = triageRecord.convulsion_headache;
      objectTriage.sinais_neurologicos_focais_headache = triageRecord.sinais_neurologicos_focais_headache;
      objectTriage.sinais_neurologicos_focais_notes_headache = triageRecord.sinais_neurologicos_focais_notes_headache;
      objectTriage.aumento_subitodador = triageRecord.aumento_subitodador;
      objectTriage.aumento_subito_da_dornotes = triageRecord.aumento_subito_da_dornotes;
      objectTriage.perda_aguda_completa_visao = triageRecord.perda_aguda_completa_visao;
      objectTriage.menigismo_headache = triageRecord.menigismo_headache;
      objectTriage.menigismo_notes_headache = triageRecord.menigismo_notes_headache;
      objectTriage.pain_headache = triageRecord.pain_headache;
      objectTriage.temperature_headache = triageRecord.temperature_headache;
      objectTriage.inconsciencia_headache = triageRecord.inconsciencia_headache;
      objectTriage.inconsciencia_notes_headache = triageRecord.inconsciencia_notes_headache;
      objectTriage.diminuicao_visao = triageRecord.diminuicao_visao;
      objectTriage.nausea_e_vomito = triageRecord.nausea_e_vomito;

      if(objectTriage.estadomental_alterado || objectTriage.sinais_de_choque_headache
         || objectTriage.convulsion_headache || objectTriage.sinais_neurologicos_focais_headache ||
         objectTriage.aumento_subitodador){
          triageRecord.manchester_priority = 5;
      } else if(objectTriage.perda_aguda_completa_visao ||  objectTriage.menigismo_headache || objectTriage.pain_headache >= 7){
        triageRecord.manchester_priority = 4;
      } else if((objectTriage.temperature_headache >= 35.00 && objectTriage.temperature_headache <= 37.8) || objectTriage.inconsciencia_headach ||
          objectTriage.diminuicao_visao || (objectTriage.pain_headache >= 4 && objectTriage.pain_headache <= 6) ||
          objectTriage.nausea_e_vomito){
            triageRecord.manchester_priority = 3;
      } else if(objectTriage.pain_headache >= 1 && objectTriage.pain_headache <= 3){
            triageRecord.manchester_priority = 2;
      } else {
            triageRecord.manchester_priority = 1;
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
