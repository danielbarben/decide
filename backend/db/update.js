const db = require('./index.js');

db.conn.sync().then(() => {
  db.models.Conclusions.update(
    { conclusion: 'Du bist ein Natur pur-Ei. Der ganze Konsumtrubel rund um Ostern ist Dir ein Dorn im Auge, aber das Fest, das liebst Du! Deshalb frönst Du der Tradition mit Selbstgemachtem. Schliesslich haben das schon Dein Vater und Deine Grossmutter so gehandhabt. Und so lässt Du jede Ostern die gute alte Zwiebelschalensud-Färberei auferstehen.',
    twittertext: "Ich bin ein Natur pur-Ei, sagt das BZ-Osterorakel. Und Du? Finde es heraus: https://digitalorakel.ch"},
    { where: { id: 24 } }
  )
  db.models.Conclusions.update(
    { conclusion: 'Du bist ein Kinder-Überraschungs-Ei. Wenn Du kein Kind bist, dann fühlst Du wie eines, oder Du führst Dich auf wie eines. Wenn Deine Erziehungsberechtigten Dich zu Ostern mittels Zuckerüberdosis zu bändigen versuchen, hast Du nichts dagegen. Auch wenn Du nicht weisst, was Ostern ist: Du ahnst, dass es um etwas Wichtiges geht: Um Schokolade nämlich.',
    twittertext: "Ich bin ein Kinder-Überraschungs-Ei, sagt das BZ-Osterorakel. Und Du? Finde es heraus: https://digitalorakel.ch"},
    { where: { id: 25 } }
  )
  db.models.Conclusions.update(
    { conclusion: 'Du bist ein opulentes Ei. Mehr ist mehr, das weisst Du, denn Du lebst überschwänglich und/oder bist Katholik. Nicht nur an Ostern: Du lässt Dich nicht durch elitäre Stilpäpste zur Besonnenheit verdonnern, davon zeugen eventuell auch die farbigen Highlights Deiner aufgestellten Kurzhaarfrisur. Lass es krachen!',
  twittertext: "Ich bin ein opulentes Ei, sagt das BZ-Osterorakel. Und Du? Finde es heraus: https://digitalorakel.ch"},
    { where: { id: 26 } }
  )
  db.models.Conclusions.update(
    { conclusion: 'Du bist ein leeres Nest. Dein Osternestchen bleibt leider leer, denn entweder hast Du es nicht anders verdient, Du Osterbanause! Oder aber Du findest, die armen Tiere hätten es nicht verdient, für Deinen Genuss den Kopf hinzuhalten. Verdient oder unverdient: Du überlasst das Feiern gerne anderen und hast sicher Besseres vor.',
  twittertext: "Ich bin ein leeres Nest, sagt das BZ-Osterorakel. Und Du? Finde es heraus: https://digitalorakel.ch"},
    { where: { id: 27 } }
  )
  db.models.Conclusions.update(
    { conclusion: 'Du bist ein Fabergé-Ei. Deine Erwartung ans Osternestchen fallen eher unbescheiden aus. Klar, man pflegt einen angemessenen Lebenswandel, Deine Durchlaucht hat sich diesen Status schliesslich schwer erarbeitet oder ihn schwer geerbt. Überheblich? Das sagen jetzt alle Neider, klar. Wenn die wüssten, welche Last so ein Nestchen mit sich bringt!',
    twittertext: "Ich bin ein Fabergé-Ei, sagt das BZ-Osterorakel. Und Du? Finde es heraus: https://digitalorakel.ch"},
    { where: { id: 28 } }
  )
  db.models.Conclusions.update(
    { conclusion: 'Du bist ein vorgefärbtes Supermarkt-Ei! Ein Ei ist ein Ei und alles andere ist einerlei. Du weisst, dass man sich kein Bein auszureissen braucht, ein ganz gewöhnliches Osterei vom Grossverteiler tuts auch, alles andere ist Schönfärberei. Hauptsache beim Eiertütschen beweist Dein Ei den dickeren Schädel. (Tipp: die roten sind die Besten!)',
    twittertext: "Ich bin ein vorgefärbtes Supermarkt-Ei, sagt das BZ-Osterorakel. Und Du? Finde es heraus: https://digitalorakel.ch"},
    { where: { id: 29 } }
  )
});