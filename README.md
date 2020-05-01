# Aufgabenblatt 1
## Aufgabe 1

### 1. Wie beschreibt man eine technische Schnittstelle vollständig?

-> System-System-Schnittstellen
* Namen und Zweck der nach außen verfügbaren Funktionen/Methoden
* Name, Bedeutung und Wertebereiche von Übergabe- und Rückgabeparametern
* Performanz (Durchsatz der Schnittstelle, wie viele Anwender können die Schnittstelle gemeinsam benutzen)
* Sicherheit der Schnittstelle (Verschlüsselung, Authentifizierung, Verifizierung)
* Zuverlässigkeit/Robustheit ( z.B. Reaktion auf fehlerhafte Inputs)

### 2. Wie beschreibt man eine Benutzerschnittstelle?

-> GUI, User Interface
* Ermöglicht dem Benutzer die Interaktion mit der Anwendung
* Beschreibung der Eigenschaften/Funktionalen Anforderungen wie bei den technischen Schnittstellen

### 3. Welche weiteren Aspekte sollte eine vollständige Systemanforderung beschreiben?

* Spezifikation aller weiteren Schnittstellen (Datenschnittstellen, Schnittstellen zur Laufzeitumgebung)
* Pflichtenheft

### 4. Was sollte eine Systemanforderung beschreiben?

* Das gesamte System aus Black Box-Sicht, definiert über die Schnittstellen

### 5. Wie nennt man Systemanforderungen noch? Wie unterscheiden sie sich von Stakeholder-Anforderungen?

* SRS-> Systemanforderungen sind Teilmenge von SRS
* Stakeholderanforderungen beschreiben die individuellen Anforderungen der Stakeholder an das System, während die Systemanforderungen das System aus technischer Sicht beschreiben (z.B. aus Black-Box-Sicht)

## Aufgabe 2

### 1. Identifizieren Sie die Nutzer Gruppen.

Abonnenten/Kunden, Mitarbeiter

### 2. identifizieren Sie die Erfordernisse

* Der Mitarbeiter muss mindestens ein Kundenmerkmal eines Kunden kennen, um eine Suche nach diesem starten zu können.<br>
* Der Mitarbeiter muss die aktualisierten Kundendaten eines Kunden kennen, um diesen im System verändern zu können.<br>
* Der Mitarbeiter muss die Mailaddresse eines Kunden kennen, um diesem eine Nachricht schicken zu können.<br>

* Der Kunde muss die Mailaddresse eines Mitarbeiters kennen, um diesem eine Nachricht schicken zu können.<br>
* Der Kunde muss seine Kundendaten kennen, um sich im System registrieren zu können.<br>
* Der Kunde muss seine Mailaddresse und sein Passwort kennen, um sich am System einloggen zu können.
* Der Kunde muss über einen Account verfügen, um die News am System abrufen zu können.

Für Kunden: Digitale Registrierungsmöglichkeit + online Abrufbarkeit der News

### 3. Erheben Sie die Kernaufgaben.

|Vorbedingung|Kernaufgabe|Nachbedingung|
|:--|:--|:--|
|Kunden ist registriert | Kunde verwalten | Veränderungen werden wieder in DB persistiert|
|Kunde ist nicht registriert | Kunde registriert sich | Kunde ist registriert|
|Kunde ist eingeloggt | News abrufen | News werden angezeigt|
|Eingeloggt in Mailsystem |Kunde/Mitarbeiter sendet Nachricht | Nachricht wurde versendet|

### 4. Leiten Sie die Teilaufgaben ab.

Kundenverwaltung:
|Teilaufgabe|Nachbedingung|
|:--|:--|
|Kunde suchen | Korrekte Kundendaten werden zurückgegeben|
|Kundendaten bearbeiten | Änderungen sind übernommen|
|Kundendaten speichern | Kunde wurde in Datenbank persistiert|

Kundenregistrierung:
|Teilaufgabe|Nachbedingung|
|:--|:--|
|Kunde gibt Kundendaten ein | Kundendaten wurden in der Registrierungsmaske erfasst|
|Kunde betätigt den registrier-Button | Kunde wurde registriert und in Datenbank gespeichert sofern Kundendaten valide|

Newsabruf:
|Teilaufgabe|Nachbedingung|
|:--|:--|
|Kunde loggt sich ein | Kunde ist eingeloggt|
|Kunde betätigt News-Button | Kunde wurde auf News-Seite weitergeleitet|

Nachrichtensystem:
|Teilaufgabe|Nachbedingung|
|:--|:--|
|Kunde/Mitarbeiter loggt sich ein | Kunde/Mitarbeiter ist eingeloggt|
|Kunde/Mitarbeiter sendet Nachricht an validen Empfänger | Nachricht wurde gesendet|
|Kunde/Mitarbeiter empfängt Nachricht | Nachricht wird in Postfach angezeigt|
|Kunde/Mitarbeiter ruft empfangene Nachricht auf | Empfangene Nachricht wird angezeigt|

### 5. Notieren Sie die Nutzungsanforderungen.

Kundenverwaltung:
|Teilaufgabe|Nutzungsanforderung|
|:--|:--|
|Kunde suchen | Der Nutzer muss am System die Daten des Kunden eingeben können.|
|Kundendaten bearbeiten | Der Nutzer muss am System die aktualisierten Kundendaten eingeben können.|
|Kundendaten speichern | Der Nutzer muss am System den Button zum Persistieren der Daten auswählen können.|

Kundenregistrierung:
|Teilaufgabe|Nutzungsanforderung|
|:--|:--|
|Kunde gibt Kundendaten ein | Der Nuzter muss am System seine Daten eingeben können.|
|Kunde betätigt den Button zur Registrierung | Der Nutzter muss am System den Button zum Registrieren auswählen können.|

Newsabruf:
|Teilaufgabe|Nutzungsanforderung|
|:--|:--|
|Kunde loggt sich ein | Der Nutzer muss am System seine Login-Daten eingeben können.|
|Kunde ruft News ab | Der Nutzer muss am System die News auswählen können.|

Nachrichtensystem:
|Teilaufgabe|Nutzungsanforderung|
|:--|:--|
|Kunde/Mitarbeiter loggt sich ein | Der Nutzer muss am System seine Login-Daten eingeben können.|
|Kunde/Mitarbeiter sendet Nachricht | Der Nutzer muss am System eine Nachricht eingeben können.|
|Kunde/Mitarbeiter ruft empfangene Nachricht | Der Nutzer muss am System eine empfangene Nachricht auswählen können.|

## Aufgabe 3
Nach dem Sie die Anforderungen erhoben haben erstellen Sie exemplarisch für die wichtigsten beiden Kernaufgaben Mockups.

Gewählte Kernaufgaben: Kundenregistrierung und Kundenverwaltung/Bearbeitung

### 1. Mockups zur Kundenverwaltung/Bearbeitung: 

Search Customer

![Mockup_1_Search_Customer](https://github.com/jo851kol/Software_Architektur_Josias_Kolb/blob/master/Wireframe_1_Search_Customer.png)

Edit Customer

![Mockup_2_Edit_Customer](https://github.com/jo851kol/Software_Architektur_Josias_Kolb/blob/master/Wireframe_2_Edit_Customer.png)

Mockup zur Kundenregistrierung:

Register

![Mockup_1_Register](https://github.com/jo851kol/Software_Architektur_Josias_Kolb/blob/master/Wireframe_3_Register.png)

### 2. Wie kann eine SRS gegliedert sein?

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
      
      
### 3. Erstellen Sie eine komplette SRS.
 
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

* Benutzerschnittstelle über die Website (Für Mitarbeiter u. Kunden) <br>
 -> Sicherheitsmaßnahmen gegen Scripting-Attacks, Authentifizierung vor Datenzugriff sowie Verifizierung vor Kundenbearbeitung (Mitarbeiter)<br>
  -> Performanz: Schnittstelle muss mindestens 500 000 Benutzer gleichzeitig ohne Performancebeeinträchtigungen bewältigen können
  
* Datenschnittstelle zwischen Anwendung und Kundendatenbank <br>
 -> Verschlüsselte Speicherung der Kundeninformationen, mind. 1000 TX/S
 
 * System-System-Schnittstelle zwischen Website und Nachrischtensystem, da es möglich sein soll die Nachrichten über die Website abzurufen<br>
 -> IMAP-Behaviour, gelesene Nachrichten werden auch bei späterem reinem Zugriff über das Nachrichtensystem als gelesen markiert
  
Laufzeitumgebung:<br>
-> Frontend: unterstützte Browser sind Chrome, Firefox und Internet Explorer, eine intakte Internetverbindung muss zu jedem Zeitpunkt vorhanden sein<br>
-> Backend: aktive Verbindung zur Datenbank und zum Nachrichtensystem muss sichergestellt werden

Sonstige Anforderungen an das Produkt:

Gesetzliche Vorgaben:<br>
-> Kunde muss innerhalb einer gesetzten Frist nach Kündigung des Abonnements aus der Datenbank gelöscht werden<br>
-> Kunde muss über Datenspeicherung informiert werden

Lizenzmanagement:
-> Das Nachrichtensystem sowie die Datenbank werden über Lizenzen für die nächsten 4 Jahre erworben

# Aufgabenblatt 1
## Aufgabe 4:

In welchen Phasen eines Entwicklungsprozesses ist ein Software-Architekt tätig? 

Phase des technischen Systementwurfs
Phase der Komponenten Spezifikation, Erstellung des detaillierten Designs


