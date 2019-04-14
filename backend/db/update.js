const db = require('./index.js');

db.conn.sync().then(() => {
  db.models.Conclusions.update(
    { conclusion: 'Natur pur-Ei' },
    { where: { id: 24 } }
  )
  db.models.Conclusions.update(
    { conclusion: 'Kinder-Überraschungs-Ei' },
    { where: { id: 25 } }
  )
  db.models.Conclusions.update(
    { conclusion: 'Too-much-opulentes-Ei' },
    { where: { id: 26 } }
  )
  db.models.Conclusions.update(
    { conclusion: 'Leeres Nest' },
    { where: { id: 27 } }
  )
  db.models.Conclusions.update(
    { conclusion: 'Fabergé-Ei' },
    { where: { id: 28 } }
  )
  db.models.Conclusions.update(
    { conclusion: 'Vorgefärbtes Supermarkt-Ei' },
    { where: { id: 29 } }
  )

});