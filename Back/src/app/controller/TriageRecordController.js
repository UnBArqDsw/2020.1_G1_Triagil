import TriageRecord from '../models/TriageRecord';

class TriageRecordController {
  async store(req, res) {


    let triageRecord = req.body;

    if(triageRecord.headache){

      if(triageRecord.estadomental_alterado || triageRecord.sinais_de_choque_headache
         || triageRecord.convulsion_headache || triageRecord.sinais_neurologicos_focais_headache ||
         triageRecord.aumento_subitodador){
           triageRecord.manchester_priority = 5;
      } else if(triageRecord.perda_aguda_completa_visao ||  triageRecord.menigismo_headache || triageRecord.pain_headache >= 7){
        triageRecord.manchester_priority = 4;
      } else if((triageRecord.temperature_headache >= 35.00 && triageRecord.temperature_headache <= 37.8) || 
      triageRecord.inconsciencia_headach || triageRecord.diminuicao_visao || 
      (triageRecord.pain_headache >= 4 && triageRecord.pain_headache <= 6) || triageRecord.nausea_e_vomito){
        triageRecord.manchester_priority = 3;
      } else if(triageRecord.pain_headache >= 1 && triageRecord.pain_headache <= 3){
        triageRecord.manchester_priority = 2;
      } else {
        triageRecord.manchester_priority = 1;
      }
    }

    if(triageRecord. sore_throat){

      if(triageRecord.comprometimento_vias_aereas_soathroat ){
          triageRecord.manchester_priority = 5;
      } else if(triageRecord.pain_soathroat >= 7  || triageRecord.estridor_laringeo){
          triageRecord.manchester_priority = 4;
      } else if(triageRecord.viagem_recente || (triageRecord.pain_soathroat >= 4 && triageRecord.pain_soathroat <= 6)
      || (triageRecord.temperatura_soathroat >= 35.00 && triageRecord.temperatura_soathroat <= 37.8)){
          triageRecord.manchester_priority = 3;
      } else if(triageRecord.dificuldade_deglutir || (triageRecord.pain_soathroat >= 1 && triageRecord.pain_soathroat <= 3)
      ||  triageRecordardencia_garganta){
          triageRecord.manchester_priority = 2;
      } else {
        triageRecord.manchester_priority = 1;
      }

    }

    if (triageRecord.convulsion){

      if(triageRecord.comprometimentoViasAereas || 
        (triageRecord.alteracoesGlicemicasNumber < 70 && triageRecord.alteracoesGlicemicasNumber > 250) || 
        triageRecord.respiracaoInadequada || triageRecord.sinaisNeurologicosFocais 
        || triageRecord.criseConvulsivaReentrante || triageRecord.menigismo) {
        triageRecord.manchester_priority = 5;
      } else if(triageRecord.overdoseEnvenenamento || triageRecord.traumaCranianoRecente) {
        triageRecord.manchester_priority = 4;
      } else if(triageRecord.posComicial || triageRecord.epilepsiaTratada || triageREcord.criseConvulsivaRecente){
        triageRecord.manchester_priority = 3;
      } else {
        triageRecord.manchester_priority = 2;
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
