import Sequelize, { Model } from 'sequelize';

class TriageRecord extends Model {
  static init(sequelize) {
    super.init(
      {
        id_patient: Sequelize.INTEGER,
        id_nurse: Sequelize.INTEGER,
        id_patient_record: Sequelize.INTEGER,
        manchester_priority: Sequelize.INTEGER,
        main_complain: Sequelize.STRING,
        nurse_notes: Sequelize.STRING,
        drugs: Sequelize.STRING,
        discriminators: Sequelize.STRING,
        has_alergies: Sequelize.BOOLEAN,
        alergies: Sequelize.STRING,
        pain_rule: Sequelize.INTEGER,
        covid19: Sequelize.INTEGER,
        fc: Sequelize.FLOAT,
        fr: Sequelize.FLOAT,
        pas: Sequelize.FLOAT,
        pad: Sequelize.FLOAT,
        spo2: Sequelize.FLOAT,
        weight: Sequelize.FLOAT,
        headache: Sequelize.BOOLEAN,
        estadomental_alterado: Sequelize.BOOLEAN,
        estado_mental_alterado_notes: Sequelize.STRING,
        sinais_de_choque_headache: Sequelize.BOOLEAN,
        sinaisdechoquenotes_headache: Sequelize.STRING,
        convulsion_headache: Sequelize.BOOLEAN,
        sinais_neurologicos_focais_headache: Sequelize.BOOLEAN,
        sinais_neurologicos_focais_notes_headache: Sequelize.STRING,
        aumento_subitodador: Sequelize.BOOLEAN,
        aumento_subito_da_dornotes: Sequelize.STRING,
        perda_aguda_completa_visao: Sequelize.BOOLEAN,
        menigismo_headache: Sequelize.BOOLEAN,
        menigismo_notes_headache: Sequelize.STRING,
        pain_headache: Sequelize.INTEGER,
        temperature_headache: Sequelize.FLOAT,
        inconsciencia_headache: Sequelize.BOOLEAN,
        inconsciencia_notes_headache: Sequelize.STRING,
        diminuicao_visao: Sequelize.BOOLEAN,
        nausea_e_vomito: Sequelize.BOOLEAN,
        sore_throat: Sequelize.BOOLEAN,
        comprometimento_vias_aereas_soathroat: Sequelize.BOOLEAN,
        comprometimento_vias_aereas_notes_soathroat: Sequelize.STRING,
        pain_soathroat: Sequelize.INTEGER,
        estridor_laringeo: Sequelize.BOOLEAN,
        estridor_laringeo_notes: Sequelize.STRING,
        viagem_recente: Sequelize.BOOLEAN,
        temperatura_soathroat: Sequelize.FLOAT,
        dificuldade_deglutir: Sequelize.BOOLEAN,
        ardencia_garganta: Sequelize.BOOLEAN,
        convulsion: Sequelize.BOOLEAN,
        convulsao_ativa: Sequelize.BOOLEAN,
        comprometimento_vias_aereas_convulsion: Sequelize.BOOLEAN,
        comprometimento_vias_aereas_notes_convulsion: Sequelize.STRING,
        alteracoes_glicemicas_convulsion: Sequelize.BOOLEAN,
        alteracoes_glicemicas_number_convulsion: Sequelize.INTEGER,
        respiracao_inadequada: Sequelize.BOOLEAN,
        respiracao_inadequada_notes: Sequelize.STRING,
        sinais_neurologicos_focais_convulsion: Sequelize.BOOLEAN,
        sinais_neurologicos_focais_notes_convulsion: Sequelize.STRING,
        crise_convulsiva_reentrante: Sequelize.BOOLEAN,
        menigismo_convulsion: Sequelize.BOOLEAN,
        menigismo_notes_convulsion: Sequelize.STRING,
        overdose_envenenamento: Sequelize.BOOLEAN,
        overdose_envenenamento_notes: Sequelize.STRING,
        trauma_craniano_recente_convulsion: Sequelize.BOOLEAN,
        trauma_craniano_recente_notes_convulsion: Sequelize.STRING,
        pos_comicial_convulsion: Sequelize.BOOLEAN,
        pos_comicial_notes_convulsion: Sequelize.STRING,
        epilepsia_tratada: Sequelize.BOOLEAN,
        epilepsia_tratada_notes: Sequelize.STRING,
        crise_convulsiva_recente_convulsion: Sequelize.BOOLEAN,
        crise_convulsiva_recente_notes_convulsion: Sequelize.STRING,
        fainting: Sequelize.BOOLEAN,
        alteracao_consciencia_fainting: Sequelize.INTEGER,
        comprometimento_vias_aereas_fainting: Sequelize.BOOLEAN,
        comprometimento_vias_areas_notes_fainting: Sequelize.STRING,
        alteracoes_glicemicas_fainting: Sequelize.BOOLEAN,
        alteracoes_glicemicas_number_fainting: Sequelize.INTEGER,
        rigidez: Sequelize.STRING,
        rigidez_notes: Sequelize.BOOLEAN,
        sinais_de_choque_fainting: Sequelize.BOOLEAN,
        sinais_de_choque_notes_fainting: Sequelize.STRING,
        pulso_anormal: Sequelize.STRING,
        dor_toracica: Sequelize.BOOLEAN,
        dor_toracica_notes: Sequelize.BOOLEAN,
        disturbio_subito_equilibrio: Sequelize.BOOLEAN,
        disturbio_subito_equilibrio_notes: Sequelize.STRING,
        pain_fainting: Sequelize.INTEGER,
        pos_comicial_fanting: Sequelize.BOOLEAN,
        pos_comicial_notes_faiting: Sequelize.STRING,
        dispneia_aguda: Sequelize.BOOLEAN,
        temperature: Sequelize.FLOAT,
        relato_alergia: Sequelize.BOOLEAN,
        relato_alergia_notes: Sequelize.STRING,
        cefaleia: Sequelize.INTEGER,
        deficit_neurologico: Sequelize.BOOLEAN,
        trauma_craniano_recente_fainting: Sequelize.BOOLEAN,
        trauma_craniano_recente_notes_fainting: Sequelize.STRING,
        inconsciencia_fainting: Sequelize.BOOLEAN,
        primeira_convulsao: Sequelize.BOOLEAN,
        crise_convulsiva_recente_fainting: Sequelize.BOOLEAN,
        crise_convulsiva_recente_notes_fainting: Sequelize.STRING,
        parestesia: Sequelize.BOOLEAN,
        parestesia_notes: Sequelize.STRING,
        diarrhea: Sequelize.BOOLEAN,
        vomito_com_sangue: Sequelize.BOOLEAN,
        vomito_com_sangue_notes: Sequelize.STRING,
        dor_abdominal: Sequelize.BOOLEAN,
        alteracao_consciencia_diarrhea: Sequelize.INTEGER,
        perfusao_periferica: Sequelize.INTEGER,
        temperatura_diarrhhea: Sequelize.FLOAT,
        fezes_enegrecidas: Sequelize.BOOLEAN,
        fezes_enegrecidas_notes: Sequelize.STRING,
        pain_diarrhea: Sequelize.INTEGER,
        desidratacao: Sequelize.BOOLEAN,
        desidratacao_notes: Sequelize.STRING,
        vomitos_esparsos: Sequelize.BOOLEAN,
        evento_recente: Sequelize.BOOLEAN,
      },
      {
        freezeTableName: true,
        underscored: true,
        tableName: 'triage-record',
        sequelize
      }
    );
  }
}
export default TriageRecord;