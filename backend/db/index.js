const Sequelize = require('sequelize');
const sequelize = new Sequelize('decide', 'doadmin', 'rmdli1r5aie0v93u', {
    dialect: 'postgres',
    dialectOptions: {
      ssl: true
    },
    host: "db-postgresql-fra1-02285-do-user-4451433-0.db.ondigitalocean.com",
    port: 25060,
  })

//Models
const Projects = sequelize.define('projects', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bot: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    autor: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    order: {
        type: Sequelize.INTEGER
    }
}//, { force: true }
)

const Questions = sequelize.define('questions', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    projectId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    question: {
        type: Sequelize.STRING,
        allowNull: false
    }
}//, { force: true }
)

const Answers = sequelize.define('answers', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    answer: {
        type: Sequelize.STRING,
        allowNull: false
    },
    questionId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    nxt: {
        type: Sequelize.STRING,
        allowNull: false
    },
}//, { force: true }
)

const Conclusions = sequelize.define('conclusions', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
      type: Sequelize.STRING,
      allowNull: false
  },
  conclusion: {
      type: Sequelize.TEXT,
      allowNull: false
  },
  twittertext: {
      type: Sequelize.STRING,
      allowNull: false
    },
    projectId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }

}//, { force: true }
)

const Statistics = sequelize.define('statistics', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  item: {
      type: Sequelize.STRING,
      allowNull: false
  }
}, { force: true }
)

// relations
Projects.hasMany(Questions);
Questions.hasMany(Answers);

module.exports = {
    conn: sequelize,
    models: {
        Projects: Projects,
        Questions: Questions,
        Answers: Answers,
        Conclusions: Conclusions,
        Statistics: Statistics
    }
}