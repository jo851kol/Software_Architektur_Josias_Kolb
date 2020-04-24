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
Kunden sind registriert | Mitarbeiter kann Kunden digital abrufen/verändern/löschen | Veränderungen werden wieder in DB persistiert
Kunde ist nicht registriert | Kunde registriert sich | Kunde ist registriert
Kunde ist eingeloggt | Kunde ruft News ab | Kunde bekommt News angezeigt
Eingeloggt in Mailsystem |Kunde/Mitarbeiter sendet Nachricht | Nachricht wurde versendet
4. Leiten Sie die Teilaufgaben ab.
Kundenabruf:
Kunde wird gesucht | Korrekte Kundendaten werden zurückgegeben
Kundendaten werden verändert | Kundendaten wurden persistiert

5. Notieren Sie die Nutzungsanforderungen.
