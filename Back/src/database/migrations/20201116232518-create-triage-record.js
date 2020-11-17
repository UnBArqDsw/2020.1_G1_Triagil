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
      sinaisDeChoque: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      sinaisDeChoqueNotes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      convulsion: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      sinaisNeurologicosFocais: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      sinaisNeurologicosFocaisNotes: {
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
      menigismo: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      menigismoNotes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pain: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      temperature: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      inconsciencia: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      inconscienciaNotes: {
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
      comprometimentoViasAereas: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      comprometimentoViasAereasNotes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pain: {
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
      temperatura: {
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
      comprometimentoViasAereas: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      comprometimentoViasAereasNotes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      alteracoesGlicemicas: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      alteracoesGlicemicasNumber: {
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
      sinaisNeurologicosFocais: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      sinaisNeurologicosFocaisNotes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      criseConvulsivaReentrante: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      menigismo: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      menigismoNotes: {
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
      traumaCranianoRecente: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      traumaCranianoRecenteNotes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      posComicial: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      posComicialNotes: {
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
      criseConvulsivaRecente: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      criseConvulsivaRecenteNotes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fainting: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      alteracaoConsciencia: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      comprometimentoViasAereas: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      comprometimentoViasAereasNotes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      alteracoesGlicemicas: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      alteracoesGlicemicasNumber: {
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
      sinaisDeChoque: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
      pain: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      posComicial: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      posComicialNotes: {
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
      traumaCranianoRecente: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      traumaCranianoRecenteNotes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      inconsciencia: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      primeiraConvulsao: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      criseConvulsivaRecente: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      criseConvulsivaRecenteNotes: {
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
      alteracaoConsciencia: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      perfusaoPeriferica: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      temperatura: {
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
      pain: {
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
