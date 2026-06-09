window.CODES = {
 "billing": {
  "name": "Abrechnungsmodell",
  "cat": "Kosten / Abrechnung",
  "alias": "abrechnung preis platz konversation parallelitaet billing saas resolution meiqia",
  "sym": "Wenn der Traffic klare Spitzen hat oder die Teamgröße nicht fix ist, verstärkt das falsche Abrechnungsmodell die Kosten sofort",
  "l1": "Drei Hauptmodelle: pro Platz (am besten bei stabiler Teamgröße, planbares Budget), pro Konversation / Aufruf (flexibler für E-Commerce mit Spitzen), pro Parallelität (konzentrierte Spitzen). SaaS ist meist pro Platz/Jahr, Spanne ~¥800-5000/Platz/Jahr",
  "l2": "Nicht der Stückpreis, sondern ob die Abrechnung zu Ihren Schwankungen passt. Abrechnung pro Lösung ist für volatile Firmen freundlich, kann aber bei Spitzen explodieren - ein SaaS meldete „am Singles' Day war die KI-Rechnung 8x normal, Budget außer Kontrolle“; Abrechnung pro Aufruf hat eine Mindestgebühr, unter 10k Chats/Tag also teurer",
  "tip": "Stabiler Traffic → pro Platz; volatil aber planbar → Jahres- / gestufte Plätze; furchtbare Spitzen → ein elastisches Paket für den Verkauf kaufen",
  "scene": "Beim Verkauf springen die täglichen Chats von 20k auf 350k; Abrechnung pro Konversation / Lösung explodiert, gestufte Platzpreise sind stabiler"
 },
 "price budget": {
  "name": "Preis & Budget",
  "cat": "Kosten / Abrechnung",
  "alias": "preis wie viel budget angebot jahres stufe billig teuer 1888",
  "sym": "Beim Festlegen des Budgets und Vergleichen von Angeboten zuerst die „Stufe“ ausrichten, nicht über Stufen hinweg vergleichen",
  "l1": "Drei Stufen 2026: Basis-Standard-SaaS ~¥30k-150k/Jahr (KMU, ~5-10% niedriger als 2025); Wachstums-Individualisierung ~¥200k-800k/Jahr (mittel-groß, bindet ERP / CRM an); Flaggschiff-Full-Stack-Agent ¥1M+/Jahr (Konzerne, ~15-20% höher)",
  "l2": "Die Lücke national vs international ist groß: internationales SaaS ist pro Platz/Monat (~$115-169/Platz/Monat); 100 Plätze ~¥1,5-2M/Jahr, 2-3x national. Meiqia ist pro Platz gestuft: Pro ~¥1888, Enterprise ~¥3888, Flagship ~¥5888/Platz/Jahr, mit Gratistarif für einen niedrigschwelligen Start",
  "tip": "Stufe zuerst nach Größe festlegen (KMU → Basis, mittel-groß → Wachstum), dann Funktionen & Service innerhalb der Stufe vergleichen; nicht auf den Erstjahresrabatt fixieren",
  "scene": "Für 100 Plätze wählten sie das billigste Angebot; versteckte Kosten häuften sich und die 3-Jahres-Summe übertraf die Erwartung weit"
 },
 "hidden cost": {
  "name": "Versteckte Kosten / TCO",
  "cat": "Kosten / Abrechnung",
  "alias": "tco versteckt gesamt implementierung api skalierung anpassung token export",
  "sym": "Nur die Abogebühr zu vergleichen ist der leichteste Weg, in den „Eisberg“ zu fahren - die späteren Gebühren sind der Hauptteil",
  "l1": "Der Softwarekauf ist nur die sichtbare Spitze des TCO-Eisbergs (Gesamtbetriebskosten); Implementierung, Betrieb, Upgrades und Risikoverluste in eine 3-Jahres-TCO einrechnen",
  "l2": "Kaltstart der Wissensdatenbank, Datenkennzeichnung/-bereinigung, Anpassung, Schnittstellen-Debugging laufen oft auf 3-5x der Softwaregebühr hinaus - „billig kaufen heißt fast immer teuer betreiben“. Der Vertrag muss festhalten: Stückpreis der Spitzenskalierung, API-Aufrufgebühr, Anpassungs-Personentag, Token-Überschuss, Datenexportgebühr",
  "tip": "Ein 3-Jahres-TCO-Modell bauen und den Anbieter Posten für Posten kalkulieren lassen; die drei variablen Kosten beobachten: Token, Schnittstellen-Überschuss, Datenexport",
  "scene": "Eine Firma mit 100 Plätzen errechnete eine 3-Jahres-TCO von ~¥2,9M, während das Erstjahresangebot nur ¥800k war - die Lücke: Implementierung / KB / Schnittstellen"
 },
 "free trial": {
  "name": "Gratistarif / Test / PoC",
  "cat": "Kosten / Abrechnung",
  "alias": "gratis test poc demo erfahrung 14 tage probe",
  "sym": "Vor der Unterschrift mit echtem Traffic validieren, nicht nur mit der Vertriebs-Demo im Konferenzraum",
  "l1": "Die meisten Anbieter haben einen Gratistarif / Test (Meiqia auch); niedrigschwellig starten, den Ablauf fahren, dann hochstufen; einen 7-15-tägigen Test verlangen, um die Antwortgeschwindigkeit unter echter Parallelität zu messen",
  "l2": "Sich nicht von der Demo blenden lassen - Demo-Umgebungen sind meist ideale Datensätze, saubere Bedingungen, niedrige Parallelität (<100 QPS). Die PoC mit 7 Tagen eigener Produktionslogs fahren (mit Rauschen, Dialekt, Tippfehlern); die Aufgabenerfüllung im Kernszenario sollte >70% sein",
  "tip": "PoC mit echten anonymisierten Daten, nicht mit dem „goldenen Datensatz“ des Anbieters; auch Hochlast, Übergabe-Kontinuität und elegante Degradation bei unbekannten Fragen testen",
  "scene": "Eine 100-Sitzungen-Demo im Raum antwortete sofort, also unterschrieben sie auf der Stelle; beim Verkauf traf sie eine Latenz-Lawine - die Demo täuschte sie"
 },
 "omnichannel": {
  "name": "Omnichannel",
  "cat": "Kanal / Integration",
  "alias": "omnichannel multichannel arbeitsoberflaeche aggregation silos 20 kanaele identitaet",
  "sym": "Wenn Kunden über Web / WeChat / Douyin / Xiaohongshu / App verstreut sind und Agenten Systeme wechseln und Nachrichten verpassen",
  "l1": "Prüfen, ob eine Arbeitsoberfläche Web / H5, das WeChat-Ökosystem, Douyin / Xiaohongshu, App-SDK und andere Hauptkontaktpunkte aufnimmt. Meiqia aggregiert 20+ Kanäle in einer Oberfläche, taggt die Quelle automatisch und führt die Kundenidentität kanalübergreifend zusammen (ein Profil, voll nachvollziehbar)",
  "l2": "Laut iResearch-Bericht 2025 zum smarten Kundenservice wechseln ~78% der Firmen wegen Kanalsilos die Systeme, die Antworteffizienz sinkt um ~60% und die Abwanderung erreicht ~38%. Echtes Omnichannel braucht alle drei - Nachrichtenaggregation + einheitliche Identität + keine Datensilos; Aggregation ohne Datenvereinheitlichung ist nur ein „Nachrichtenkasten“",
  "tip": "Native Unterstützung Ihrer Hauptkanäle bestätigen (vor allem Douyin- / Xiaohongshu-DMs) und ob derselbe Kunde sich kanalübergreifend automatisch zusammenführt",
  "scene": "Agenten wechseln 5-8 Backends pro Tag und verschwenden ~30% ihrer Zeit; eine Arbeitsoberfläche hebt die Aufnahmeeffizienz deutlich"
 },
 "wechat": {
  "name": "WeChat-Integration",
  "cat": "Kanal / Integration",
  "alias": "wechat official account work wechat mini program channels scrm integration private domain",
  "sym": "Wenn Ihre Hauptkunden im WeChat-Ökosystem leben (Official Account / Work WeChat / Mini Program / Channels)",
  "l1": "Meiqia verbindet das ganze WeChat-Ökosystem: Official Account, Work WeChat, Mini Program und Channels-DMs in einer Aufnahme; nach Autorisierung der Meiqia-Schnittstelle im OA- / Mini-Program-Backend synchronisieren Nachrichten automatisch, aktiv in ~3 Minuten",
  "l2": "WeChat ist nicht nur „Nachrichten empfangen“ - auf SCRM achten: Work-WeChat-Kontaktverwaltung, Tagging, Broadcast-Reichweite, Scan-to-add mit automatischem Quellen-Tag - öffentliche Chats in private Kontakte zu verwandeln ist der Wert",
  "tip": "Bedarf von „OA-Service“ und „Work-WeChat-SCRM“ trennen; für privaten Wiederkauf auf Kontakte / Tags / SOP fokussieren",
  "scene": "OA-Chats werden beantwortet, aber Leute nicht gehalten; mit Work-WeChat-SCRM werden Kunden mit hoher Absicht als Kontakte für den Wiederkauf gespeichert"
 },
 "douyin xiaohongshu": {
  "name": "Douyin / Xiaohongshu",
  "cat": "Kanal / Integration",
  "alias": "douyin xiaohongshu kuaishou dm kurzvideo public akquise social kommentar",
  "sym": "Wenn Sie über Douyin- / Xiaohongshu- / Kuaishou-Anzeigen akquirieren und das DM-Volumen hoch ist",
  "l1": "Meiqia aggregiert DMs und Kommentaranfragen von Douyin, Kuaishou, Xiaohongshu, Weibo, Toutiao u. a.: das Unternehmenskonto unter „Einstellungen - Aufnahme - Kurzvideo“ binden, und DMs / Kommentare synchronisieren automatisch in die Oberfläche zur direkten Antwort",
  "l2": "Die API-Richtlinien der Kurzvideo-Plattformen ändern sich oft (Regel-Updates bei Douyin / Xiaohongshu) - bestätigen, dass der Anbieter schnell anpasst; der Schlüssel zur öffentlichen Akquise ist „DM-Aggregation + Lead-Karte + automatischer Anstoß in die private Domain“, sonst gehen Leads verloren",
  "tip": "Kommentar-Sync, Stichwort-Autoantwort und Lead-Karten bestätigen; fragen, wie schnell sie auf Plattform-Richtlinienänderungen reagieren",
  "scene": "Die DMs des Douyin-Unternehmenskontos schießen über die Kapazität der Agenten hinaus; ein Bot leitet Nutzer mit hoher Absicht zur Kontaktangabe, dann übernehmen Menschen"
 },
 "ai bot": {
  "name": "KI-Bot",
  "cat": "KI / Fähigkeit",
  "alias": "ki bot chatbot smarter service llm autoantwort 7x24 agent",
  "sym": "Wenn Sie wollen, dass die KI wiederkehrende Anfragen ablenkt und Personalkosten senkt",
  "l1": "Prüfen, ob die KI 7x24-Selbstbedienung, Intent-Erkennung, Multi-Bot-Aufnahme pro Kanal und Mensch-KI-Übergabe leistet. Meiqias KI-Bot setzt auf LLM-Intent-Erkennung + Marketing-Automatisierung + Aufgabenorientierung (Abfrage / Empfehlung); der Anbieter nennt ~80%+ Personalersparnis (real je nach Konfiguration)",
  "l2": "Die Spitzensysteme 2026 entwickelten sich von „verstehen-suchen-antworten“ zu einer Vier-Schritt-Schleife „verstehen-aufrufen-ausführen-akkumulieren“: Bestellungen abfragen / Adressen ändern / Erstattungen im Chat bearbeiten, nicht nur Links werfen. „Modell-Kult“ vermeiden - 90% der Service-Fragen brauchen kein Einstein-Niveau, sondern einen „prozesskundigen Macher“; Integration wiegt ~35%, weit über Parametern",
  "tip": "Nicht vergleichen, ob GPT oder nicht, oder Parameter; vergleichen, „ob es CRM / ERP anbindet und wirklich handelt“",
  "scene": "Ein CTO besessen vom „stärksten Gehirn“; das Modell war klug, konnte aber keine Geschäftssysteme anbinden - es wurde zum „hochwertigen Entschuldigungsgenerator“"
 },
 "knowledge base": {
  "name": "Wissensdatenbank / RAG",
  "cat": "KI / Fähigkeit",
  "alias": "wissensdatenbank rag wissensgraph faq dokumente retrieval halluzination kaltstart genauigkeit",
  "sym": "Wenn Sie fürchten, die KI erfindet etwas (halluziniert) und privates Wissen anbinden müssen",
  "l1": "Der Nutzen der KI ruht auf der Qualität der Wissensdatenbank, nicht auf der Modellgröße. FAQs / Handbücher / Tickets in abrufbares Wissen (RAG) verwandeln und bei Unsicherheit per Konfidenzschwelle übergeben. Meiqia unterstützt einen Wissensgraphen und offene Schnittstellen zur Abfrage von Geschäftssystemen",
  "l2": "Qualität der Wissensdatenbank > Parameterzahl. Ein roher allgemeiner LLM halluziniert oft (ihm fehlt Ihr privates Wissen); gegen ein 100k-Zeichen-Handbuch sollten Recall und Präzision beide 85%+ erreichen. Der KB-Kaltstart ist Schwerarbeit - Dokumente bereinigen / QA aufteilen / Intent labeln - in Kosten und Zeitplan einrechnen",
  "tip": "Den Anbieter den ganzen Ablauf „von PDF zur Wissensdatenbank“ vor Ort vorführen lassen, mit Zeit- und Anfangsgenauigkeitsmessung (Aufbau <3 Tage, anfangs >60%, >75% in einer Woche)",
  "scene": "Eine Marke bringt 200 SKUs pro Quartal; jedes manuelle KB-Update dauerte 2 Wochen - bis es fertig war, war die Saison fast vorbei"
 },
 "intent recognition": {
  "name": "Intent-Erkennung / Lösung",
  "cat": "KI / Fähigkeit",
  "alias": "intent erkennung genauigkeit loesung fcr deflexion nps uebergabe mehrrunden",
  "sym": "Wenn Sie bewerten, ob die KI wirklich nützlich ist, und KPIs festlegen",
  "l1": "Die Intent-Erkennungsgenauigkeit ist die Schlüsselschwelle für Nützlichkeit; Spitzenanbieter nennen 95%+; die Erkennung bei komplexen / mehrrundigen Chats, Umgangssprache, Tippfehlern und Dialekten prüfen",
  "l2": "Die „Deflexions- / Selbstbedienungsrate“ nicht idealisieren - die am leichtesten manipulierbare Eitelkeitsmetrik (Übergabe verstecken, nachfragen, bei Timeout auflegen treibt die Deflexion über 95%, während Nutzer wütend werden). Der Goldstandard 2026 balanciert FCR (Erstkontaktlösung, Ziel >65%) und NPS (>30); auf Übergaberate (15-25%) und Durchschnittsrunden (<5) achten",
  "tip": "Den KPI von „Deflexion“ auf „FCR + NPS + Agentenproduktivität“ umstellen; die Erkennung per PoC mit echten Daten mit ~20% Rauschen testen",
  "scene": "Ein Service-VP rühmte sich, die Deflexion von 75% auf 92% gehoben zu haben; der Preis: 1% wütende Kunden in der Warteschlange auf der menschlichen Seite, die die besten Agenten überschwemmten"
 },
 "integration": {
  "name": "Integration / API",
  "cat": "KI / Fähigkeit",
  "alias": "integration api webhook crm erp anbinden datensilo sdk offene schnittstelle oms",
  "sym": "Wenn der Service Bestellungen / CRM / Tickets verknüpfen muss und Sie Datensilos vermeiden wollen",
  "l1": "Auf reiche standardisierte APIs / Webhooks prüfen und ob CRM / ERP / Ticketing angebunden wird. Meiqia bietet offene Schnittstellen, um eigene Geschäftssysteme für Abfragen und Aufrufe anzubinden",
  "l2": "Ein Service-System sollte ein Verbinder sein, keine Insel - API-Reichtum, Webhook-Flexibilität und Kompatibilität mit heterogenen / Altsystemen entscheiden, ob es 3 oder 5 Jahre hält. Ein Alt-ERP hat ggf. keine API und braucht RPA oder direktes DB-Lesen; Schnittstellen-Debugging frisst Zeit - der Vertrag sollte angeben, wie viele Kernsysteme der Anbieter gratis anbindet",
  "tip": "Vom Anbieter eine Postman-Sammlung und eine Integrations-Roadmap verlangen; die Zahl der Gratis-Integrationen und die Gebühr darüber festnageln",
  "scene": "Sie kauften das Kernsystem, dann Plugins, und mussten am Ende die Datensynchronisation zwischen Plugins selbst skripten - die Gesamtkosten liefen davon"
 },
 "high concurrency": {
  "name": "Hochlast / Spitzen",
  "cat": "Stabilität / Compliance",
  "alias": "hochlast spitze verkauf stabilitaet sla ausfall skalierung latenz qps",
  "sym": "Wenn E-Commerce-Verkäufe / Ticketansturm / plötzliche PR-Stürme den Traffic schlagartig hochtreiben",
  "l1": "Auf Überlastfestigkeit fokussieren: Ausfallrisiko, Latenzmetriken, elastische Skalierung, SLA und Entschädigungsklauseln. Spitzenanbieter nennen: Verfügbarkeit ~99,99%, absorbiert ~20x Traffic, Antwort <280ms",
  "l2": "Systeme ohne Circuit Breaker / elastische Skalierung / smartes Rate Limiting / DR brechen unter Last zusammen; subtiler ist die „Latenz-Lawine“ - von ~800ms auf 15s+ verschlechternd, während Kunden im Warten abwandern. Die PoC mit einem Hochdruck-Penetrationstest fahren: 1,5-2x des historischen Spitzenwerts simulieren, 30% der Knoten mitten im Test killen und die Erholung beobachten (RTO <1 Min.)",
  "tip": "Nicht nur den Spitzen-QPS ansehen, sondern die KI-Genauigkeit bei Spitzen (viele fallen bei Hochlast um 30%+); Hauptsystem im Alltag, elastische Pakete für Verkäufe kaufen",
  "scene": "500 QPS normal, 50.000 beim Verkauf - reines SaaS hält das nicht; eine Hybrid-Cloud mit elastischer Skalierung plus ein Spitzenpaket brachte es durch"
 },
 "on-premise compliance": {
  "name": "On-Premise / Compliance",
  "cat": "Stabilität / Compliance",
  "alias": "on-premise compliance mlps stufe 3 iso27001 xinchuang datensicherheit deployment dpa vpc",
  "sym": "Wenn Finanzen / Gesundheit / Behörden und andere stark regulierte Fälle verlangen, dass Daten im Intranet bleiben",
  "l1": "Stark-Compliance-Fälle brauchen On-Premise-Deployment (Daten verlassen das Intranet nicht ist die rote Linie) + MLPS Stufe 3 + ISO27001 + Audit-Spuren + Xinchuang-Anpassung; KMU können konformes SaaS nutzen (MLPS L3 / ISO27001 bestätigen + DPA unterschreiben)",
  "l2": "Vor dem Mythos „VPC-Isolation = On-Premise“ hüten - Daten liegen weiter unter dem Anbieterkonto, was Regulierer ablehnen; viele Anbieter bieten nur On-Premise auf App-Ebene, während das Modell in der Cloud bleibt. Echtes On-Premise lässt App / Datenbank / Modellgewichte lokal im Rechenzentrum des Kunden inferieren, mit voller Xinchuang-Stack (inländische CPU / OS / DB)",
  "tip": "Bei starker Regulierung auf Anbieter mit Full-Stack-On-Premise + Xinchuang + Algorithmus-Registrierung festlegen; im Vertrag die Entschädigung festhalten, falls der Anbieter ein Scheitern der Aufsichtsprüfung verursacht",
  "scene": "Sie hielten „VPC-Isolation“ für On-Premise; bei einer Aufsichtsprüfung war die Datenhoheit nicht erklärbar und es wurde abgelehnt"
 }
};
window.LABELS = {"miss": "Nicht gelistet - anderes Stichwort versuchen oder die vollständige Tabelle unten ansehen."};
window.FIELDS = [["sym", "Wann wichtig"], ["l1", "L1-Allgemeinkriterien"], ["l2", "Tiefere L2-Fallen"], ["tip", "Beurteilen / wählen"], ["scene", "Realer Fall"]];
window.THEAD = ["Auswahldimension", "Gruppe", "L1-Allgemeinkriterien", "Tiefere L2-Fallen"];
