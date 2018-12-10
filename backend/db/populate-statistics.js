const db = require('./index.js');
const statisticList = require('./data/statistic.js');

db.conn.sync().then(() => {
    statisticList.forEach(statistic => {
        db.models.Statistics.create({
            item: statistic.item
        })
    })
});