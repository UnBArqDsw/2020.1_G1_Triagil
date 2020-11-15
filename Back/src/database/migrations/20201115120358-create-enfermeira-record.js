module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('nurse-record', {
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
      id_patient_recordt: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'patient-record',
          key: 'id'
        }
      },
      classification_summary: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      priority: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      main_complaint: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      note: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      medicines: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      symptom_flowchart: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      discriminators: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      specialty: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      allergies: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pa: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fc: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      t: {
        type: Sequelize.STRING,
        allowNull: false,
      },
       sat: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fr: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pain: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pain_level: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      responsible_nurse: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('nurse-record');
  }
};
