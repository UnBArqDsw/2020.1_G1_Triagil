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
      manchesterPriority: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      mainComplain: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nurseNotes: {
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
      hasAlergies: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      alergies: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      painRule: {
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
      estadoMentalAlterado: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      estadoMentalAlteradoNotes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sinaisDeChoque_headache: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      sinaisDeChoqueNotes_headache: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      convulsion_headache: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      sinaisNeurologicosFocais_headache: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      sinaisNeurologicosFocaisNotes_headache: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      aumentoSubitoDaDor: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      aumentoSubitoDaDorNotes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      perdaAgudaCompletaVisao: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      menigismo_headache: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      menigismoNotes_headache: {
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
      inconscienciaNotes_headache: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      diminuicaoVisao: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      nauseaEVomito: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      soreThroat: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      comprometimentoViasAereas_soathroat: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      comprometimentoViasAereasNotes_soathroat: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pain_soathroat: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      estridorLaringeo: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      estridorLaringeoNotes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      viagemRecente: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      temperatura_soathroat: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      dificuldadeDeglutir: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      ardenciaGarganta: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      convulsion: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      convulsaoAtiva: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      comprometimentoViasAereas_convulsion: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      comprometimentoViasAereasNotes_convulsion: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      alteracoesGlicemicas_convulsion: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      alteracoesGlicemicasNumber_convulsion: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      respiracaoInadequada: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      respiracaoInadequadaNotes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sinaisNeurologicosFocais_convulsion: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      sinaisNeurologicosFocaisNotes_convulsion: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      criseConvulsivaReentrante: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      menigismo_convulsion: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      menigismoNotes_convulsion: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      overdoseEnvenenamento: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      overdoseEnvenenamentoNotes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      traumaCranianoRecente_convulsion: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      traumaCranianoRecenteNotes_convulsion: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      posComicial_convulsion: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      posComicialNotes_convulsion: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      epilepsiaTratada: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      epilepsiaTratadaNotes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      criseConvulsivaRecente_convulsion: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      criseConvulsivaRecenteNotes_convulsion: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fainting: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      alteracaoConsciencia_fainting: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      comprometimentoViasAereas_fainting: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      comprometimentoViasAereasNotes_fainting: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      alteracoesGlicemicas_fainting: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      alteracoesGlicemicasNumber_fainting: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      rigidez: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rigidezNotes: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      sinaisDeChoque_fainting: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      sinaisDeChoqueNotes_fainting: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pulsoAnormal: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dorToracica: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      dorToracicaNotes: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      disturbioSubitoEquilibrio: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      disturbioSubitoEquilibrioNotes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pain_fainting: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      posComicial_fanting: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      posComicialNotes_faiting: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      dispneiaAguda: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      temperature: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      relatoAlergia: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      relatoAlergiaNotes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cefaleia: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      deficitNeurologico: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      traumaCranianoRecente_fainting: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      traumaCranianoRecenteNotes_fainting: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      inconsciencia_fainting: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      primeiraConvulsao: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      criseConvulsivaRecente_fainting: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      criseConvulsivaRecenteNotes_fainting: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      parestesia: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      parestesiaNotes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      diarrhea: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      vomitoComSangue: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      vomitoComSangueNotes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dorAbdominal: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      alteracaoConsciencia_diarrhea: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      perfusaoPeriferica: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      temperatura_diarrhhea: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      fezesEnegrecidas: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      fezesEnegrecidasNotes: {
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
      desidratacaoNotes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      vomitosEsparsos: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      eventoRecente: {
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
