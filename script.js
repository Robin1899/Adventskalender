// Warten, bis die Seite vollständig geladen ist
document.addEventListener("DOMContentLoaded", () => {
    const kalender = document.getElementById("kalender");

    // Array mit 24 Sprüchen
    const sprueche = [
        "Auch wenn es nur Sprüche sind, hoffe ich, dass dir der Adventskalender trotzdem gefällt.Ich liebe dich über alles und freue mich auf frohe Weihnachten mit dir.",
        "Ticket für 1x Massage",
        "Ein Kuss von dir, so still, so zart, wie Schnee, der die Erde sanft bewahrt.",
        "In deinem Lächeln liegt das Licht,das für mich selbst die längste dunkle Nacht durchbricht.",
        "Ein Flüstern: „Ich liebe dich so sehr“,wie Schneeflocken, leicht, doch bedeutet es mir von dir so viel mehr.",
        "Ticket: Getränk + Snack auf dem Weihnachtsmarkt",
        "Deine Liebe ist wie ein warmer Tee, sie umhüllt mein Herz im Winterweh. - Ich bin dankbar für dich und wie sehr du mir bei allen Problemen hilfst.",
        "Du bist wie Schokolade, süß und fein, deshalb möchte ich immer bei dir sein.",
        "Die Kälte draußen ist mir egal, bei dir im Herzen ist es warm und ideal.",
        "Ticket für ein drei Gänge Menü. Die Karte zur Vorauswahl wird Dir noch zugesendet.",
        "Mit dir sind alle Farben hell, du machst mein Leben zu einem Advents-Karusell.",
        "Was ist Advent? Was bedeutet eigentlich Weihnachten? Ich habs erkannt: deine Hand in meiner.",
        "Ein Tag ohne dich ist wie Winter ohne Weiß, leer und traurig - mein Herz aus Eis",
        "Ticket für einen winterlichen Spa-Day",
        "Kein Frost, kein Wind kann uns trennen, meine Liebe wird für dich immer brennen.",
        "Die Zeit verfliegt, doch eins bleibt stehen: Ich will nur mit dir durchs Leben gehen.",
        "Die Tage im Advent sind kalt, doch dein Herz schenkt mir Wärme, die ewig bleibt.",
        "Ticket für Special Frühstück auf der Couch.",
        "Jeder Tag mit dir ist ein Geschenk, so viel mehr, als das Herz je denkt.",
        "Weihnachten ist, mein Herz ist dein, du bist mein Zuhause - mein Sonnenschein.",
        "Deine Nähe macht mich reich, du bist mein Wundermärchen - liebevoll und weich.",
        "Ticket für eine Tanzstunde",
        "Ein Flockentanz, ein zarter Traum, mein Herz schlägt nur in deinem Raum.",
        "24 Tage und es ist endlich soweit. Ich möchte mich ganz herzlich bei Dir bedanken, dass Du mir wieder so ein schönes Weihnachtsfest beschert hast. Ohne dich wäre die Weihnachtszeit nicht so schön. Ich liebe dich über alles. Danke, dass du in meinem Leben bist!"
    ];

    // 24 Türchen generieren
    for (let i = 1; i <= 24; i++) {
        const tuerchen = document.createElement("div");
        tuerchen.classList.add("tuerchen");
        tuerchen.textContent = i; // Nummer auf dem Türchen

        // Klick-Event hinzufügen
        tuerchen.addEventListener("click", () => {
            if (!tuerchen.classList.contains("geoeffnet")) {
                tuerchen.classList.add("geoeffnet");
                alert(sprueche[i - 1]); // Spruch anzeigen
            }
        });

        // Türchen dem Kalender-Container hinzufügen
        kalender.appendChild(tuerchen);
    }
});
