---
title: Riskanalys
description: Den här vägledningen beskriver hur du som ska leda en riskanalys planerar, genomför, och omhändertar resultatet av en sådan. Riskanalysen genomförs utifrån den riskanalysmodell som organisationen har tagit fram (se Utforma Riskhantering). Modellen kan användas vid genomförande av alla typer av riskanalyser, inte bara informationssäkerhetsrisker, och för analysobjekt med olika omfattning, exempelvis för hela organisationen, en verksamhet, en delverksamhet, ett system eller en process.
date: 2022-10-12
---

Den här vägledningen beskriver hur du som ska leda en riskanalys planerar, genomför, och omhändertar resultatet av en sådan. Riskanalysen genomförs utifrån den riskanalysmodell som organisationen har tagit fram (se Utforma Riskhantering). Modellen kan användas vid genomförande av alla typer av riskanalyser, inte bara informationssäkerhetsrisker, och för analysobjekt med olika omfattning, exempelvis för hela organisationen, en verksamhet, en delverksamhet, ett system eller en process.{% .lead %}

---

Som stöd för att dokumentera riskanalysen finns ett riskverktyg i Excel, se Verktyg Använda Dokumentera riskanalys. Verktyget kan, och behöver, anpassas till organisationens riskanalysmodell.

Eftersom risker för information är del av organisationens riskhantering bör informationssäkerhetsrisker analyseras och hanteras som övriga risker i organisationen. Vägledning för hur organisationens riskhantering kan utformas, inklusive ansvar och roller, omfattning, kriterier för riskbedömning med mera ges i vägledningen Utforma Riskhantering.

Denna vägledning innehåller:

- Varför genomföra en riskanalys?
- Planering och förberedelser.
- Genomförande:
  - Identifiera risker
  - Värdera risker
  - Föreslå åtgärder.
  - Hantera riskanalysens resultat.

För beskrivningar av de begrepp som används i vägledningen, se Utforma Riskhantering.

## Varför genomföra en riskanalys?

En riskanalys är ett strukturerat sätt att identifiera och värdera risker som kan förknippas med ett visst område -- analysobjekt -- som exempelvis en organisation, en verksamhet, en process, ett projekt eller ett it-system.

Syftet med en riskanalys är att:

- Identifiera förhållanden där organisationen riskerar att inte uppnå sina mål.
- Ta fram underlag för val av säkerhetsåtgärder som behöver vidtas.
- Skapa en medvetenhet om risker kopplade till det aktuella analysobjektet.

En riskanalys går ut på att svara på följande frågor:

- Vilka oönskade händelser kan inträffa?
- Vad blir konsekvenserna?
- Hur troligt är det?

Detta görs genom att beskriva konsekvenserna av och sannolikheten för att en oönskad händelse inträffar.

### När ska en riskanalys genomföras?

Riskanalyser bör genomföras inför en ny situation eller en förändring, men också regelbundet även om det verkar som att ingen förändring har skett. Att genomföra riskanalyser är extra viktigt för kritiska verksamheter (se Identifiera och analysera Verksamhetsanalys) då konsekvenserna av oönskade händelser i sådan verksamhet kan bli högre än vad organisationen klarar. När och hur ofta riskanalyser ska genomföras bör regleras i styrdokument, i organisationens riskhantering och/eller i en årskalender för det systematiska informationssäkerhetsarbetet eller motsvarande.

Exempel på tillfällen som motiverar en riskanalys är:

- Vid anskaffning eller upphandling av it-relaterade system och tjänster.
  - Vid förändringar som kan påverka säkerheten i it- system och tjänster.
  - När it-drift ska läggas ut/outsourcas.
  - Förändringar i organisationen (t.ex. arbetssätt, personal, lokaler).
  - Förändringar i omvärlden (tex förändrad hotbild, nyupptäckta sårbarheter).
  - Nya eller förändrade uppdrag/tjänster/uppgifter.

Riskanalyser behöver också genomföras i samband med informationsklassning för att komma fram till vilka säkerhetsåtgärder som behöver införas. En riskanalys kan synliggöra förhållanden kring det specifika analysobjektet som gör att generella krav på säkerhetsåtgärder kopplade till klassningsnivåer inte är tillräckliga eller inte behövs (se Utforma Klassningsmodell, Utforma Välj säkerhetsåtgärder och skapa skyddsnivåer och Använda Klassning av information).

## Planering och förberedelser

För att riskanalysen ska genomföras med god kvalitet är det viktigt att planera och förbereda den väl. Den som ansvarar för att riskanalysen förbereds, genomförs och resultatet omhändertas kallar vi analysledare. Viktiga aktiviteter är att definiera analysobjektet och syftet med riskanalysen, bestämma hur riskanalysen ska genomföras, utse och kalla deltagare samt att förse deltagarna med underlag så som organisationens riskbild om organisationen har en sådan.

Ett analysobjekt kan vara olika stort och omfatta olika saker exempelvis hela organisationens informationsbehandling, en del av organisationen så som en avdelning eller enhet, en process, ett it-system, ett projekt, ett fysiskt område så som en serverhall, eller en verksamhetsförändring. Riskanalysen kan avse en befintlig verksamhet eller system eller något som planeras att anskaffas. Att fastställa vad som ska analyseras och varför, det vill säga avgränsa analysobjektet, är grundläggande i att genomföra en riskanalys.

Riskanalyser kan genomföras utifrån olika syften. Syftet kan exempelvis vara att identifiera organisationens övergripande risker, få fram krav på en leverantör inför en utkontraktering av information, undvika problem vid en flytt av eller inför utveckling av ett informationssystem.

Riskägaren behöver kunna beskriva vad riskanalysen ska omfatta och vad syftet är, så att det är tydligt vad man ska fokusera på och hur djup analysen behöver vara. Här har riskägaren ett stort ansvar att förmedla vad riskanalysen ska omfatta. Är det endast informationssäkerhetsrisker eller även andra verksamhetsrisker? Vad som ska analyseras och varför behöver vid genomförandet vara tydligt för alla deltagare så att de har samma bild.

Ett av de mest vanliga misstag man gör är att genomföra riskanalyser som blir för omfattande. Om analysobjektet är stort och syftet är att identifiera alla risker på en detaljerad nivå blir analysarbetet svåröverskådligt och tidsödande. Det kan vara bättre att dela upp och avgränsa mer omfattande analysobjekt i flera mindre delar som analyseras var för sig och därefter se över helheten.

Att avgränsa ett analysobjekt är inte detsamma som att avgränsa riskerna. Det kan man aldrig göra. Även om riskanalysen görs på ett avgränsat analysobjekt, kan riskers konsekvenser drabba andra delar av organisationen och aktörer utanför den egna organisationen, så som till exempel kunder och allmänheten.

Enligt de flesta projektstyrningsmodeller ska riskanalyser genomföras. Att göra en riskanalys för ett projekt är något annat än att göra en riskanalys för resultatet av ett projekt. För ett projekt är syftet att fokusera på risker med själva projektet, exempelvis att projektet blir försenat eller går över budget. Det som är intressant ur ett informationssäkerhetsperspektiv i ett projekt är hur informationen hanteras på ett säkert sätt eller ännu mer vilka effekter som resultatet av ett projekt, till exempel byte av ett it-system, kan medföra för risker för organisationen, exempelvis att it-systemet läcker information eller gör den otillgänglig.

### Bestäm hur riskanalysen ska genomföras

En riskanalys kan antingen genomföras med hjälp av en workshop där flera personer deltar men kan även (för mindre analysobjekt) genomföras i "skrivbordsform" med enbart en eller ett par personer. Det är bra att tänka igenom hur riskanalysen ska genomföras så att det blir så effektivt som möjligt utan att göra avkall på kvaliteten. Det är avgörande att rätt mängd resurser med rätt kompetens deltar. Tänk på att för stora grupper inte alltid arbetar effektivt och att man då kan behöva dela in gruppen i undergrupper.

### Utse och kalla deltagare

När en riskanalys genomförs är det viktigt att rätt roller deltar. De som deltar behöver tillsammans ha den kompetens som krävs för att bedöma risker för det aktuella analysobjektet. Det kan vara chefer och ansvariga för analysobjektet, till exempel informationsägare, systemägare, processägare, men även de som arbetar dagligen och operativt i den aktuella verksamheten.

Utöver dessa krävs i regel experter inom juridik, it och säkerhet, samt kanske specialkompetens om en viss typ av anläggning eller utrustning. Om dessa deltar i riskanalysen kan man snabbt lösa frågeställningar inom deras kompetensområde. Har de inte möjlighet att delta får man stämma av frågor i efterhand och eventuellt komplettera riskanalysen utifrån de svar man får.

Deltagarna måste innan analystillfället förstå syftet med, och sin roll i, riskanalysen. Finns underlag som deltagarna behöver läsa på innan behöver de i god tid få ta del av det. Behöver deltagarna bidra med underlag behöver de också få god tid på sig att ta fram detta, till exempel fakta om analysobjektet. Uppmana deltagarna att inom sina respektive kompetensområden att söka mer kunskap om det område som ska analyseras -- till exempel inom forskning, i medier eller hos myndigheter.

Ibland kan en riskanalys ligga till grund för en annan, till exempel kan en verksamhet göra en riskanalys inför upphandling av ett nytt it-system. De risker de identifierar som berör den tekniska lösningen blir underlag för it-avdelningens riskanalys. Först en generell för den typ av system som verksamheten efterfrågar och senare en mer detaljerad utifrån den tekniska lösning som väljs.

### Ta fram underlag

Om organisationen tagit fram en riskbild är det ett viktigt underlag till riskanalyser som görs inom organisationen. Rätt utförd visar den ett antal riskområden för organisationen i stort, och som mer eller mindre har bäring på det aktuella analysobjektet. Riskbilden måste i de flesta fall kompletteras med mer specifika underlag för det aktuella analysobjektet.

Till exempel: om riskanalysen avser ett HR-system så kan det finnas specifika hot, sårbarheter och andra förutsättningar som är kopplade till just personalhantering.

Följande underlag med relevans för analysobjektet kan vara lämpliga att ha med vid riskanalyser:

- Rättsliga krav.
- Informationstillgångar och resultat av informationsklassning.
- Kunskap om andra tillgångar så som t.ex. lokaler, utrustning, och dess betydelse, värde, exponering med mera.
- Användare/personal och dess kunskap, erfarenhet med mera.
- Dokumentation över teknisk plattform.

Dessutom utgör resultat från granskningar och relaterade analyser viktiga underlag, exempelvis från revisioner, tidigare genomförda riskanalyser och inte minst inträffade incidenter.

Om det inte finns en riskbild och man vill ha mer underlag kan en hotanalys genomföras. En hotanalys fokuserar på att identifiera vilka hot som finns mot verksamheten. Man kan också genomföra en riskanalys enbart utifrån den kunskap som deltagarna har om analysobjektet.

### Se över kriterier och nivåer för riskvärdering i riskverktyget

Innan ni genomför riskanalysen bör kriterier och nivåer för riskvärdering vara fastställda eftersom de används under riskanalysen. Detta bör vara gjort inom ramen för organisationens riskhantering och vara dokumenterad i organisationens riskanalysmodell. Saknas detta behöver kriterier och nivåer tas fram och beslutas inför den aktuella riskanalysen. Vägledning för detta finns i Utforma Riskhantering.

Verktyget Använda Dokumentera riskanalys kan användas under riskanalysen eller för att i efterhand dokumentera resultatet av riskanalysen.

## Genomförande

Genomförandet av en riskanalys består av tre delar: identifiering av risker, värdering av risker och föreslå åtgärdsförslag. En riskanalys i workshopform bör inledas med att analysledaren håller en inledande presentation med agenda, beskrivning av riskanalysmetoden, en sammanfattning av underlag, beskrivning av analysobjektet och syftet med riskanalysen så att eventuella missförstånd kan redas ut eller förtydliganden göras. Som stöd kan det vara bra att rita upp analysobjektet och saker i dess omgivning som påverkar det på ett övergripande sätt för att tydligt visualisera för alla under analystillfället vad det är som ska analyseras. Det är inte ovanligt att deltagarna behöver justera analysobjektet något under riskanalystillfället baserat på deras specifika kunskaper om det som ska analyseras. Vad som ska analyseras och varför behöver vid genomförandet vara tydligt för alla deltagare så att de har samma bild.

### Identifiera risker

Identifiering av risker görs lämpligen i form av brainstorming, en strukturerad kreativ process, där deltagarna tar fram tänkbara hot och oönskade händelser relaterade till analysobjektet. Ofta är det fördelaktigt att brainstormingen sker parvis eller i mindre grupper. Beroende på analysobjektets storlek och komplexitet kan tiden för brainstorming variera, men ofta är 20--30 minuter lämpligt. Analysledaren kan gärna inleda brainstormingen med att visa på bredden av hot för att deltagarna inte ska låsa sig vid endast en typ av hot (till exempel riktade attacker).

Exempel på ursprung till hot och hot kan vara:

- Människa (avsiktliga hot: riktade och oriktade attacker, interna och externa hot, olika typer av motiv m.m. oavsiktliga hot: brister i utbildning, felaktigt handhavande, stress, slarv med mera)
  - Teknik (fel och buggar i mjukvara/hårdvara, installationsfel, fel i konfiguration, elavbrott med mera)
  - Natur (brand, översvämning, storm, kyla med mera.)
  - Administration (brister i, eller avsaknad av, interna styrdokument och rutiner, oklar ansvarsfördelning, felaktiga beslut med mera.)

I en grupp som tycker att risk är svårt kan det underlätta om analysledaren ställer frågor som till exempel "Vad kan bli ett problem?", "Vad skulle vara obehagligt om det hände?", "Vad skulle göra att du inte sov gott på natten?". Det är inte säkert att svaren på dessa frågor blir specifika risker, men kan vara något att utgå från när man sedan skriver om och preciserar ner det till risker.

När brainstormingen är klar går deltagarna tillsammans igenom riskerna. Analysledaren behöver se till att riskerna formuleras så specifikt som möjligt och som _händelser_, och inte som allmänna tillstånd eller företeelser. Detta är en förutsättning för att konsekvens och sannolikhet ska kunna bedömas. Deltagarna hjälps åt att skriva riskerna i formatet:

På grund av (orsaker) inträffar risken (händelse) vilket leder till (konsekvenser).

Istället för att skriva "hackers" bör man exempelvis skriva:

På grund av _en felaktigt konfigurerad brandvägg_ inträffar risken _att en extern angripare hackar sig in i systemet x och får del av uppgifterna y_ vilket leder till _att känsliga uppgifter kommer obehörig till del_.

Sannolikt har flera personer eller grupper identifierat samma eller liknande risker och då behöver analysledaren vid genomgången sortera bort dubbletter. Tänk på att varje risk kan ha flera orsaker och/eller flera konsekvenser. Skriv in en risk per rad så länge så kan risker eventuellt sorteras, delas upp, slås samman och så vidare längre fram.

De risker som identifieras kan dokumenteras i riskverktyget (Se Verktyg Använda Dokumentera riskanalys). Under workshopen behöver ni inte dokumentera direkt i riskverkyget. Ibland är det enklare för deltagarna att skriva sina risker på till exempel post-it lappar och att någon dokumenterar era diskussioner kring orsak och konsekvens av risken så att du som analysledare i efterhand kan föra in dem i verktyget.

### Värdera risker

Vid riskvärderingen använder ni kriterierna för konsekvens och sannolikhet som er organisation har fastställt. Diskutera gemensamt konsekvensen och sannolikheten för varje risk och välj det som känns rimligt utifrån deltagarnas kunskaper. Här är det bra att påminna sig om att i de allra flesta fall så är bedömningarna ungefärliga eftersom det ofta saknas underlag. Riskanalys som metod fungerar trots att bedömningarna av konsekvens och sannolikhet är ungefärliga.

För in värderingar av riskernas konsekvens och sannolikhet i riskverktyget eller dokumentera på annat sätt för att sedan föra in i verktyget i efterhand. Placera in respektive risk i riskmatrisen i verktyget eller sätt post-it lappar på en uppritad matris på whiteboarden. Detta kan gärna visas för alla så att deltagarna får en gemensam bild av riskernas värdering (se Figur 1).

![Figur 1: Värderade risker placerade i riskmatrisen.](https://www.informationssakerhet.se/siteassets/metodstod-for-lis/4.-anvanda/figur-1_-varderade-risker-placerade-i-riskmatrisen..png)

Figur 1: Värderade risker placerade i riskmatrisen.

När fler risker värderas kan en risk relateras till andra riskers värderingar och på så sätt jämföras med varandra. Diskutera riskernas förhållande till varandra löpande och flytta dem i matrisen vid behov.

Det är också vanligt att man ger risken ett riskvärde utan att jämföra med andra risker och hanterar då risken utifrån dess eget riskvärde och inte i relation till andra risker.

### Föreslå åtgärder

Syftet med att göra riskanalyser är att bland annat att identifiera åtgärder för att hantera riskerna. Workshopdeltagarna är oftast de som är bäst lämpade att föreslå vilka åtgärder som kan införas för att minska riskens konsekvens och/eller sannolikhet. Ta gärna tillvara på det här genom att i slutet av riskanalysen be deltagarna föreslå åtgärder för riskbehandling. Om deltagarna identifierat risker som behöver åtgärdas av någon annan kan det vara svårt för deltagarna att föreslå åtgärder. Som analysledare får du då kontakta dem som vet vilka åtgärder som är möjliga och därefter diskutera dem med workshopsdeltagarna vid ett senare tillfälle för att välja det alternativ som fungerar bäst för verksamheten.

För mer vägledning kring att välja säkerhetsåtgärder, se Identifiera och analysera Gapanalys och Utforma Välj säkerhetsåtgärder och skapa skyddsnivåer.

## Hantera riskanalysens resultat

När workshopen är genomförd har ni kommit fram till ett antal beskrivna och värderade risker, och detta är dokumenterat till exempel i riskverktyget, (se Verktyg Använda Dokumentera riskanalys). Dokumentationen bör även innehålla information avseende vem som är riskägare och vilka som deltagit i riskanalysen. Dokumentationen kan även innehålla förslag på säkerhetsåtgärder. Har man inte tagit fram förslag på åtgärder för riskbehandling behöver detta göras på något annat sätt.

Riskägarna är ansvariga för att riskerna inom sitt ansvarsområde åtgärdas. Men det är inte alltid riskägaren själv kan ansvara för att införa alla åtgärder. Då kan det vara någon annan i organisationen som är åtgärdsansvarig för en eller flera av åtgärderna.

Till exempel: i riskanalysen framgår att verksamheten önskar ett nytt informationssystem som behandlar information som klassats som K4, R3, T4 (Se Använda Klassning av information). Riskägaren, i det här fallet även informationsägaren, ansvarar för att ta fram rutiner så att verksamheten hanterar informationen på ett säkert sätt. Åtgärdsansvarig för de tekniska åtgärderna är it-avdelningen.

Risker kan åtgärdas på flera olika sätt; de kan accepteras, undvikas, överföras eller reduceras. En risk som _accepteras_ gör man ingenting åt. En risk _undviks_ genom att man inte alls gör det som man hade tänkt göra, som i exemplet ovan så väljer man att inte införa det här nya informationssystemet. En risk _överförs_ genom att någon annan tar risken, till exempel att ett försäkringsbolag tar kostnaderna om risken inträffar. En risk _reduceras_ genom att införa en eller flera säkerhetsåtgärder så att risken reduceras till en acceptabel nivå eller elimineras helt.

Alla åtgärder som ska införas behöver dokumenteras i en åtgärdsplan och ska ha en utsedd åtgärdsansvarig. Denna kan vara riskägaren, om åtgärden ligger inom dennes ansvarsområde och kontroll. I annat fall har riskägaren en kravställande roll gentemot den åtgärdsansvarige. Riskbehandling för en risk kan vara komplex och innefatta flera åtgärder. Åtgärdsplanen kan innehålla många åtgärder med olika åtgärdsansvariga. En åtgärdsplan bör innehålla: åtgärden, vem som är ansvarig, när åtgärden ska vara införd, samt möjlighet att följa upp status kring införandet av olika åtgärder som minskar riskerna.

I riskverktyget (se Verktyg Använda Dokumentera riskanalys) finns stöd för en åtgärdsplan där riskägarens beslut om vilka åtgärder som ska införas utifrån föreslagna åtgärder dokumenteras. Det är även lämpligt att motivera vald riskbehandling, till exempel om en risk accepteras så kan det motiveras med att dess konsekvens är så låg att organisationen tillåter den att inträffa. Hur och när en risk får accepteras framgår av organisationens kriterier för riskacceptans (se Utforma Riskhantering).

Riskverktyget (se Verktyg Använda Dokumentera riskanalys) har också en statuskolumn med fyra nivåer som kan användas vid uppföljning av riskbehandlingen. Riskverktyget kan naturligtvis anpassas, utvecklas och automatiseras på olika sätt.

Utifrån era förutsättningar samt resultatet av riskanalysen behöver ni bedöma vilka intressenter som ska få ta del av resultatet samt i vilket format. Tänk på att information i en riskanalys kan vara mycket känslig och behöver hanteras utifrån det.

Riskägaren ansvarar för att föra in resultatet av genomförda riskanalyser i lämpligt riskregister. Riskägaren behöver föra ett eget riskregister och/eller använda organisationens centrala riskregister. En mall för riskregister att utgå från finns i verktyget Verktyg Använda Riskregister.
