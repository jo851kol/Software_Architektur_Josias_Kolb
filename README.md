# Aufgabe 1

1. Wie beschreibt man eine technische Schnittstelle vollständig?

-> System-System-Schnittstellen
* Namen und Zweck der nach außen verfügbaren Funktionen/Methoden
* Name, Bedeutung und Wertebereiche von Übergabe- und Rückgabeparametern
* Performanz (Durchsatz der Schnittstelle, wie viele Anwender können die Schnittstelle gemeinsam benutzen)
* Sicherheit der Schnittstelle (Verschlüsselung, Authentifizierung, Verifizierung)
* Zuverlässigkeit/Robustheit ( z.B. Reaktion auf fehlerhafte Inputs)

2. Wie beschreibt man eine Benutzerschnittstelle?

-> GUI, User Interface
* Ermöglicht dem Benutzer die Interaktion mit der Anwendung
* Beschreibung der Eigenschaften/Funktionalen Anforderungen wie bei den technischen Schnittstellen

3. Welche weiteren Aspekte sollte eine vollständige Systemanforderung beschreiben?

* Spezifikation aller weiteren Schnittstellen (Datenschnittstellen, Schnittstellen zur Laufzeitumgebung)
* Pflichtenheft

4. Was sollte eine Systemanforderung beschreiben?

* Das gesamte System aus Black Box-Sicht, definiert über die Schnittstellen

5. Wie nennt man Systemanforderungen noch? Wie unterscheiden sie sich von Stakeholder-Anforderungen?

* SRS
* Stakeholderanforderungen beschreiben die individuellen Anforderungen der Stakeholder an das System, während die Systemanforderungen das System aus technischer Sicht beschreiben (z.B. aus Black-Box-Sicht)

# Aufgabe 2
1. Identifizieren Sie die Nutzer Gruppen.

Abonnenten/Kunden, Mitarbeiter

2. identifizieren Sie die Erfordernisse

Für Mitarbeiter: Digitale Verwaltungsmöglichkeit der Kunden in DB, Nachrichtensystem zwischen Kunden u. Mitarbeiter

Für Kunden: Digitale Registrierungsmöglichkeit + online Abrufbarkeit der News

3. Erheben Sie die Kernaufgaben.

|Vorbedingung|Kernaufgabe|Nachbedingung|
|:--|:--|:--|
|Kunden sind registriert | Mitarbeiter kann Kunden digital abrufen/verändern/löschen | Veränderungen werden wieder in DB persistiert|

|Kunde ist nicht registriert | Kunde registriert sich | Kunde ist registriert|

Kunde ist eingeloggt | Kunde ruft News ab | Kunde bekommt News angezeigt

Eingeloggt in Mailsystem |Kunde/Mitarbeiter sendet Nachricht | Nachricht wurde versendet

4. Leiten Sie die Teilaufgaben ab.

Kundenverwaltung:

Kunde suchen | Korrekte Kundendaten werden zurückgegeben

Kundendaten verändern | Kundendaten wurden verändert

Kundendaten speichern | Veränderte Kundendaten wurden gespeichert

Kundenregistrierung:

Kunde gibt Kundendaten ein | Kundendaten wurden in der Registrierungsmaske erfasst

Kunde betätigt den registrier-Button | Kunde wurde registriert und in Datenbank gespeichert sofern Kundendaten valide

Newsabruf:

Kunde loggt sich ein | Kunde ist eingeloggt

Kunde betätigt News-Button | Kunde wurde auf News-Seite weitergeleitet

Nachrichtensystem:

Kunde/Mitarbeiter loggt sich ein | Kunde/Mitarbeiter ist eingeloggt

Kunde/Mitarbeiter sendet Nachricht an validen Empfänger | Nachricht wurde gesendet

Kunde/Mitarbeiter empfängt Nachricht | Nachricht wird in Postfach angezeigt

Kunde/Mitarbeiter ruft empfangene Nachricht auf | Empfangene Nachricht wird angezeigt

5. Notieren Sie die Nutzungsanforderungen.

Kundenverwaltung:

Kunde suchen | Der Nutzer muss die Daten des Kunden für die Suche eingeben können.

Kundendaten verändern | Der Nutzer muss die vorhandenen Kundendaten verändern können

Kundendaten speichern | Der Nutzer muss die Kundendaten mithilfe eines Buttons persistieren können

Kundenregistrierung:

Kunde gibt Kundendaten ein | Kunde muss im System seine Daten eingeben können.

Kunde betätigt den registrier-Button | Registrier-Button muss vorhanden sein und den Kunden im System speichern

Newsabruf:

Kunde loggt sich ein | Kunde muss seine Login-Daten am System eingeben können.

Kunde betätigt News-Button | News-Button muss vorhanden sein und die News-Seite aufrufen.

Nachrichtensystem:

Kunde/Mitarbeiter loggt sich ein | Kunde/Mitarbeiter muss am System seine Login-Daten angeben können.

Kunde/Mitarbeiter sendet Nachricht an validen Empfänger | Kunde/Mitarbeiter muss Text in Form einer Nachricht am System eingeben und über einen Button versenden können.

Kunde/Mitarbeiter empfängt Nachricht | Kunde/Mitarbeiter muss Nachricht im Postfach angezeigt bekommen.

Kunde/Mitarbeiter ruft empfangene Nachricht auf | Ein Klick auf die empfangene Nachricht muss diese aufrufen und die korrekte Nachricht ausgeben.

# Aufgabe 3
Nach dem Sie die Anforderungen erhoben haben erstellen Sie exemplarisch für die wichtigsten beiden Kernaufgaben Mockups.

Gewählte Kernaufgaben: Kundenregistrierung und Kundenverwaltung/Bearbeitung

1. Mockups zur Kundenverwaltung/Bearbeitung: 

Search Customer

![Mockup_1_Search_Customer](https://github.com/jo851kol/Software_Architektur_Josias_Kolb/blob/master/Wireframe_1_Search_Customer.png)

Edit Customer

![Mockup_2_Edit_Customer](https://github.com/jo851kol/Software_Architektur_Josias_Kolb/blob/master/Wireframe_2_Edit_Customer.png)

Mockup zur Kundenregistrierung:

Register

![Mockup_1_Register](https://github.com/jo851kol/Software_Architektur_Josias_Kolb/blob/master/Wireframe_3_Register.png)

2. Wie kann eine SRS gegliedert sein?

* Einleitung (Projektbeschreibung/Zweck, Ziel)
* Beschreibung des zu entwickelnden Systems
  * Nutzergruppen (Stakeholder)
  * Kernaufgaben
  * Teilaufgaben
  * Nutzungsanforderungen
  * Systemanforderungen (Blackbox)
    * Mockups/Kontextdiagramme für statisches und dynamisches Verhalten
    * Schnittstellen (Daten/Technische/UI)
    * Laufzeitumgebung
    * Sonstige Anforderungen an das Produkt
      * Lizenzmanagement, Update/Upgrade
      * Gesetzliche Vorgaben
      
      
 3. Erstellen Sie eine komplette SRS.
 
Einleitung:

Aufgrund der deutlich schnelleren Zugriffszeiten und der wesentlich komfortableren und ressourcenschonenderen Verwaltungsmöglichkeiten digitaler Systeme hat sich die Nicht Moderne Firma für eine Digitalisierung ihres Systems entschieden. Im Vordergrund steht dabei die digitale Verwaltung der Kundensätze sowie eine digitale Registrierungsmöglichkeit für die Kunden. Zusätzlich soll ein digitales Nachrichtensystem zur Kommunikation zwischen Mitarbeitern und Kunden eingeführt werden und jeder Kunde soll seine News auch online über seinen digitalen Account abzurufen können.

Beschreibung des entwickelten Systems:

Siehe Aufgabe 2

Systemanforderungen:

Statisches Aussehen -> siehe 3.1 Mockups

Dynamisches Verhalten:

![Edit_Customer_Dynamic_Behaviour](https://github.com/jo851kol/Software_Architektur_Josias_Kolb/blob/master/Edit_Customer_dynamisches_Verhalten.png)

1 Durch Klick auf das Home-Symbol gelangt man zurück auf die Homepage der Nicht Modernen Firma, welche allgemeine, unternehmensinterne Informationen anzeigt.

2 Durch Klick auf das Einstellungssymbol öffnet sich ein Dropdown, in welchem man Accountinformationen wie z.B. das Passwort verändern und sich ausloggen kann.

3 Durch Anwählen von einem der Inputfelder kann man die Informationen des aktuell ausgewählten Kunden bearbeiten.

4 Durch Betätigung des Save-Buttons werden die vorgenommenen Änderungen gespeichert und in der Datenbank persistiert, sofern sie valide sind.

Schnittstellen:
* Benutzerschnittstelle über die Website (Für Mitarbeiter u. Kunden) 

 -> Sicherheitsmaßnahmen gegen Scripting-Attacks, Authentifizierung vor Datenzugriff sowie Verifizierung vor Kundenbearbeitung (Mitarbeiter)
 
  -> Performanz: Schnittstelle muss mindestens 500 000 Benutzer gleichzeitig ohne Performancebeeinträchtigungen bewältigen können
  
* Datenschnittstelle zwischen Anwendung und Kundendatenbank 

 -> Verschlüsselte Speicherung der Kundeninformationen, mind. 1000 TX/S
 
 * System-System-Schnittstelle zwischen Website und Nachrischtensystem, da es möglich sein soll die Nachrichten über die Website abzurufen
 
 -> IMAP-Behaviour, gelesene Nachrichten werden auch bei späterem reinem Zugriff über das Nachrichtensystem als gelesen markiert
  
Laufzeitumgebung: 

Die einzigen nötigen Laufzeitumgebungsanforderungen sollen ein Browser und eine intakte Internetverbindung sein.

Sonstige Anforderungen an das Produkt:

Gesetzliche Vorgaben -> Kunde muss innerhalb einer gesetzten Frist nach Kündigung des Abonnements aus der Datenbank gelöscht werden

Lizenzmanagement -> Das Nachrichtensystem sowie die Datenbank werden über Lizenzen für die nächsten 4 Jahre erworben
