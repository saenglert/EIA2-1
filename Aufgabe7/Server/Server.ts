import * as Http from "http";//Er importiert das Modul HTTP aus der Node.ts-Datei, "http" Objekte werden als HTTP Objekte deklariert. Das HTTP Objekt ist �hnlich wie z.B. Math.random. Es besitzt mehrere Klassen, welche ebenso importiert werden
import * as Url from "url"
namespace L07_SendData {
    console.log("Starting server"); 

    let address: string = "http://localhost:8100";
    let port: number = process.env.PORT; // Die Variable Port wird als Number deklariert, welchen den Wert des Ports des Heroku-Server hat. Process ist ebenso ein Objekt von Node.d.ts
    if (port == undefined) //Wenn der Port nicht definiert ist...
         port = 8100;   //wird dieser auf 8100 gesetzt (f�hrt zu EIA2 im Heroku)

    let server: Http.Server = Http.createServer(); //Die Variable Server wird als Http.Server definiert und benutzt die Method Http.createrServer() um einen lokalen Server auf dem Computer zu erstellen
    server.addListener("request", handleRequest); //Ein Listener wird dem Server hinzugef�gt. Wenn der Server nun einen "Request" erh�lt, also einen Anruf, wird die Funktion handleRequest ausgef�hrt
    server.addListener("listening", handleListen); //Ein weiterer Listener wird hinzugef�gt. Solange der Nutzer drauf zugreift, wird die handleListen Funktion ausgef�hrt
    server.listen(port); //Der Server h�rt auf den vorher deklarierten Port
    

    function handleListen(): void {
        console.log("Listening"); //die Funktion gibt in der Konsole "Listening" aus
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //Die Funktion erh�lt die Parameter _request:Http.IncomingMessage (Welches dem Event request entspricht) und  _response: Http.ServerResponse
        console.log(_request.url); //Konsole gibt "I hear voices!" aus

        _response.setHeader("content-type", "text/html; charset=utf-8"); //die Variable _response setzt in den Header der HTML-Datei "content-type","text/html:charset=utf-8"
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Access-Control-Allow-Origin wird ebenso im Header gesetzt. Es dient dazu, die Antwort des Servers mit dem abgerufenen Code der Quelle zu teilen
       
        let url: Url.Url = Url.parse(_request.url, true);
        for (let key in url.query)
            _response.write(key + ":" + url.query[key] + "<br/>");
       // _response.write(_request.url); //mit_response.write wird auf die _request.url zugegriffen
        
        _response.end(); //response wird beendet
    }
}