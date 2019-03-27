const db = require('./index.js');
const statisticList = require('./data/stat.js');

let x = 0;
let test = function(t) {
    db.models.Statistics.create({
        item: statisticList[x].item
    })

    if (x < statisticList.length-1) {
        x++;
        setTimeout(function() {test();}, 100);
    }
}

db.conn.sync().then(() => {test()});

/*
db.conn.sync().then(() => {
    statisticList.forEach(statistic => {
            db.models.Statistics.create({
                item: statistic.item
            })
    })
});
*/