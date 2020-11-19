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
      } else{
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
      } else{
        triageRecord.manchester_priority = 1;
      }

    }

    if (triageRecord.convulsion){

      if(triageRecord.comprometimentoViasAereas ||
        (triageRecord.alteracoesGlicemicasNumber < 70 && triageRecord.alteracoesGlicemicasNumber > 250) ||
        triageRecord.respiracaoInadequada || triageRecord.sinaisNeurologicosFocais
        || triageRecord.criseConvulsivaReentrante || triageRecord.menigismo){
        triageRecord.manchester_priority = 5;
      } else if(triageRecord.overdoseEnvenenamento || triageRecord.traumaCranianoRecente){
        triageRecord.manchester_priority = 4;
      } else if(triageRecord.posComicial || triageRecord.epilepsiaTratada || triageREcord.criseConvulsivaRecente){
        triageRecord.manchester_priority = 3;
      } else{
        triageRecord.manchester_priority = 2;
      }

    }

    if(triageRecord.fainting){

      if(triageRecord.alteracao_consciencia_fainting || triageRecord.comprometimento_vias_aereas_fainting ||
        (triageRecord.alteracoes_glicemicas_fainting && triageRecord.alteracoes_glicemicas_fainting) ||
        triageRecord.rigidez || triageRecord.sinais_de_choque_fainting){
        triageRecord.manchester_priority = 5;
      } else if( triageRecord.pulso_anormal || triageRecord.dor_toracica || triageRecord.disturbio_subito_equilibrio ||
        (triageRecord.pain_fainting >=7 && triageRecord.pain_fainting <= 10) || triageRecord.pos_comicial_fanting || triageRecord.dispneia_aguda ||
        (triageRecord.temperature > 35 && triageRecord.temperature <= 37.8 ) ||triageRecord.relato_alergia ||
        (triageRecord.cefaleia >= 7 && triageRecord.cefaleia <= 10) || triageRecord.deficit_neurologico || triageRecord.trauma_craniano_recente_fainting){
        triageRecord.manchester_priority = 4;
      } else if(triageRecord.inconsciencia_fainting || (triageRecord.pain_fainting >=4 && triageRecord.pain_fainting <= 6) ||
          triageRecord.primeira_convulsao || triageRecord.crise_convulsiva_recente_fainting) {
          triageRecord.manchester_priority = 3;
      } else if((triageRecord.pain_fainting >= 1 && triageRecord.pain_fainting <= 3) || triageRecord.parestesia){
          triageRecord.manchester_priority = 2;
      } else{
          triageRecord.manchester_priority = 1;
      }

    }


    if(triageRecord.diarrhea){

      if(triageRecord.vomito_com_sangue){
        triageRecord.manchester_priority = 5;
      } else if(triageRecord.dor_abdominal ||
        (triageRecord.alteracao_consciencia_diarrhea >= 9 && triageRecord.alteracao_consciencia_diarrhea <= 14) ||
        triageRecord.perfusao_periferica > 4){
          triageRecord.manchester_priority = 4;
      } else if(triageRecord.temperatura_diarrhhea || triageRecord.fezes_enegrecidas ||
        (triageRecord.pain_diarrhea >= 4 && triageRecord.pain_diarrhea <= 6) ||
        triageRecord.desidratacao){
        triageRecord.manchester_priority = 3;
      } else if((triageRecord.pain_diarrhea >= 1 && triageRecord.pain_diarrhea <= 3) ||
      triageRecord.vomitos_esparsos || triageRecord.evento_recente){
        triageRecord.manchester_priority = 2;
      } else{
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
