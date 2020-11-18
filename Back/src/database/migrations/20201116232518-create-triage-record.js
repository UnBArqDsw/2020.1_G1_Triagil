module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('triage-record', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_patient: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'patient',
          key: 'id'
        }
      },
      id_nurse: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'nurse',
          key: 'id'
        }
      },
      id_patient_record: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'patient-record',
          key: 'id'
        }
      },
      manchester_priority: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      main_complain: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nurse_notes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      drugs: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      discriminators: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      has_alergies: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      alergies: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pain_rule: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      covid19: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      fc: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      fr: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      pas: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      pad: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      spo2: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      weight: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      headache: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      estadomental_alterado: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      estado_mental_alterado_notes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sinais_de_choque_headache: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      sinaisdechoquenotes_headache: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      convulsion_headache: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      sinais_neurologicos_focais_headache: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      sinais_neurologicos_focais_notes_headache: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      aumento_subitodador: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      aumento_subito_da_dornotes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      perda_aguda_completa_visao: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      menigismo_headache: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      menigismo_notes_headache: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pain_headache: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      temperature_headache: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      inconsciencia_headache: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      inconsciencia_notes_headache: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      diminuicaoVisao: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      nausea_e_vomito: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      sore_throat: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      comprometimento_vias_aereas_soathroat: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      comprometimento_vias_aereas_notes_soathroat: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pain_soathroat: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      estridor_laringeo: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      estridor_laringeo_notes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      viagem_recente: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      temperatura_soathroat: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      dificuldade_deglutir: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      ardencia_garganta: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      convulsion: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      convulsao_ativa: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      comprometimento_vias_aereas_convulsion: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      comprometimento_vias_aereas_notes_convulsion: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      alteracoes_glicemicas_convulsion: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      alteracoes_glicemicas_number_convulsion: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      respiracao_inadequada: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      respiracao_inadequada_notes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sinais_neurologicos_focais_convulsion: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      sinais_neurologicos_focais_notes_convulsion: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      crise_convulsiva_reentrante: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      menigismo_convulsion: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      menigismo_notes_convulsion: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      overdose_envenenamento: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      overdose_envenenamento_notes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      trauma_craniano_recente_convulsion: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      trauma_craniano_recente_notes_convulsion: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pos_comicial_convulsion: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      pos_comicial_notes_convulsion: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      epilepsia_tratada: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      epilepsia_tratada_notes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      crise_convulsiva_recente_convulsion: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      crise_convulsiva_recente_notes_convulsion: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fainting: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      alteracao_consciencia_fainting: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      comprometimento_vias_aereas_fainting: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      comprometimento_vias_areas_notes_fainting: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      alteracoes_glicemicas_fainting: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      alteracoes_glicemicas_number_fainting: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      rigidez: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rigidez_notes: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      sinais_de_choque_fainting: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      sinais_de_choque_notes_fainting: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pulso_anormal: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dor_toracica: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      dor_toracica_notes: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      disturbio_subito_equilibrio: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      disturbio_subito_equilibrio_notes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pain_fainting: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      pos_comicial_fanting: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      pos_comicial_notes_faiting: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      dispneia_aguda: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      temperature: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      relato_alergia: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      relato_alergia_notes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cefaleia: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      deficit_neurologico: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      trauma_craniano_recente_fainting: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      trauma_craniano_recente_notes_fainting: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      inconsciencia_fainting: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      primeira_convulsao: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      crise_convulsiva_recente_fainting: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      crise_convulsiva_recente_notes_fainting: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      parestesia: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      parestesia_notes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      diarrhea: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      vomito_com_sangue: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      vomito_com_sangue_notes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dor_abdominal: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      alteracao_consciencia_diarrhea: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      perfusao_periferica: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      temperatura_diarrhhea: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      fezes_enegrecidas: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      fezes_enegrecidas_notes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pain_diarrhea: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      desidratacao: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      desidratacao_notes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      vomitos_esparsos: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      evento_recente: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('triage-record');
  }
};
