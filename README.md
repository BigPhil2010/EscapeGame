# EscapeGame
https://bigphil2010.github.io/EscapeGame/

Das Geheimnis der Schlossruine

Es war ein ganz normaler Schultag am Ursulinengymnasium in Werl – bis wir in der Schulbibliothek ein altes, verstaubtes Buch entdeckten. Das Seltsame daran? Es trug genau unseren Namen auf dem Einband. Neugierig schlugen wir es auf, und plötzlich begann die Schrift auf den Seiten zu leuchten. Ein grelles Licht hüllte uns ein, und als wir die Augen wieder öffneten, standen wir – mitten in der alten Schlossruine!

Die Mauern waren von Ranken überwuchert, der Wind pfiff durch die zerbrochenen Fenster. Doch das Merkwürdigste war die Tür vor uns: Sie war mit einem alten Zahlenschloss gesichert. An der Wand daneben stand eine rätselhafte Botschaft:

"Nur wer die Geheimnisse der Vergangenheit entschlüsselt, wird den Weg in die Zukunft finden."

War das eine Prüfung? Ein Spiel? Oder steckte etwas viel Größeres dahinter?

Mit jeder gelösten Aufgabe kamen wir tiefer in das Schloss hinein. Alte Gemälde schienen uns zu beobachten, auf vergilbten Pergamenten fanden wir Hinweise, die uns zu geheimen Gängen führten. Schließlich entdeckten wir eine versteckte Kammer. In der Mitte stand ein alter Holzschrank, darin eine Truhe mit einem weiteren Buch. Doch diesmal war es noch älter – und enthielt eine unglaubliche Enthüllung:

Das Schloss war einst der geheime Treffpunkt eines Geheimbundes, der über Wissen verfügte, das die Welt hätte verändern können. Doch irgendwann verschwand der letzte Hüter des Geheimnisses spurlos … und nun waren wir hier. Waren wir die Auserwählten, das Rätsel endgültig zu lösen?

Doch bevor wir weiter überlegen konnten, begann das Licht erneut zu flackern – und plötzlich fanden wir uns zurück in der Schulbibliothek wieder. Das Buch lag geschlossen vor uns. War das alles echt gewesen? Oder nur Einbildung?

Eine letzte Notiz auf der letzten Seite ließ uns schaudern:

"Wer das Buch öffnet, hat das Spiel begonnen. Der Weg zurück in die Ruine steht jederzeit offen … wenn du dich traust."




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aspect Ratio Div</title>
    <style>
        .aspect-ratio-box {
            width: 100vw; /* Verwendung des gesamten verfügbaren Viewport-Bereichs */
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .content {
            width: 100%;
            height: 100%;
            max-width: 133.33vh; /* 4/3 = 1.333... */
            max-height: 75vw; /* 3/4 = 0.75 */
        }

        .resizeable-div {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    </style>
</head>
<body>
    <div class="aspect-ratio-box">
        <div class="content">
            <!-- Dein Inhalt hier, z.B. ein Bild oder Video -->
            <img class="resizeable-div" src="dein-bild.jpg" alt="Bildbeschreibung">
        </div>
    </div>
</body>
</html>
