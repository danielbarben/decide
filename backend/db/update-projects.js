const db = require('./index.js');

db.conn.sync().then(() => {
  //Ostern
  db.models.Projects.update(
    { order: 1,
    status: 'online'},
    { where: { id: 5 } }
  )
  //Dinner for one
  db.models.Projects.update(
    { order: 2,
    status: 'online'},
    { where: { id: 3 } }
  )
  //Krippenspiel
  db.models.Projects.update(
    { order: 3,
    status: 'online'},
    { where: { id: 1 } }
  )
  //Drei Nüsse
  db.models.Projects.update(
    { order: 4,
    status: 'online'},
    { where: { id: 2 } }
  )

});