const db = require('./index.js');

db.conn.sync().then(() => {
  db.models.Conclusions.update(
    { conclusion: 'Du bist ein Natur pur-Ei' },
    { where: { id: 24 } }
  )
  db.models.Conclusions.update(
    { conclusion: 'Du bist ein Kinder-Überraschungs-Ei' },
    { where: { id: 25 } }
  )
  db.models.Conclusions.update(
    { conclusion: 'Du bist ein Too-much-opulentes-Ei' },
    { where: { id: 26 } }
  )
  db.models.Conclusions.update(
    { conclusion: 'Du bist ein leeres Nest' },
    { where: { id: 27 } }
  )
  db.models.Conclusions.update(
    { conclusion: 'Du bist ein Fabergé-Ei' },
    { where: { id: 28 } }
  )
  db.models.Conclusions.update(
    { conclusion: 'Du bist ein vorgefärbtes Supermarkt-Ei' },
    { where: { id: 29 } }
  )

});