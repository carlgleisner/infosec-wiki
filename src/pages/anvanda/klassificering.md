---
title: Klassificering
description: I den här vägledningen beskrivs hur arbetet med att klassa organisationens information genomförs. Klassningen baseras på organisationens klassningsmodell. Hur resultatet av klassningen omhändertas beskrivs också.
date: 2022-10-12
---

I den här vägledningen beskrivs hur arbetet med att klassa organisationens information genomförs. Klassningen baseras på organisationens klassningsmodell. Hur resultatet av klassningen omhändertas beskrivs också.{% .lead %}

---

## Vad är informationsklassning?

Informationsklassning innebär att man värderar organisationens information utifrån vilka konsekvenser otillräckligt skydd för informationens konfidentialitet, riktighet och tillgänglighet skulle kunna få. Klassningen görs utifrån er framtagna klassningsmodell (se Utforma Klassningsmodell).

Vad är syftet med att klassa information?

Klassning av information har två syften:

1. Att öka medvetenheten om vilka negativa konsekvenser som kan drabba er organisation om tillräckligt skydd av informationens konfidentialitet, riktighet eller tillgänglighet inte upprätthålls.

2. Att förstå och fastställa skyddsbehovet för den klassade informationen.

Klassningsresultatet, tillsammans med genomförd riskbedömning, ger underlag för att välja säkerhetsåtgärder så att informationen inte får otillräckligt skydd eller överskyddas med höga kostnader som följd.

## Ingångsvärden

Ingångsvärden till er klassning är resultaten från arbetet som ni har gjort i faserna Identifiera och analysera samt Utforma. Särskilt viktiga ingångsvärden är:

- Kritiska informationstillgångar och interna krav från Identifiera och analysera Verksamhet.
- Rättsliga krav och andra externa krav från Identifiera och analysera Omvärld.
- Organisationens klassningsmodell från Utforma Klassningsmodell.
- Styrdokument som rör klassning från Utforma Styrdokument.
- Roller och ansvar för informationssäkerhet från Utforma Organisation.

## Vad ska klassas?

Det som ska klassas är *information. *Ibland förvaras och hanteras många olika typer av information i ett it-system. Då är det viktigt att ge den samlade mängden information ett tillräckligt skydd. Vissa organisationer klassar de resurser som hanterar information, till exempel datorer, it-system och databaser. Klassning av resurser som hanterar information görs utifrån den information som it-resursen hanterar. Andra organisationer menar att it-resurserna inte ska klassas utan ges en skyddsnivå utifrån utifrån den klassning som informationen som hanteras där har fått (se Utforma Välj säkerhetsåtgärder och skapa skyddsnivåer). I metodstödet utgår vi från ett arbetssätt där man klassar informationen och ger de resurser som hanterar informationen en skyddsnivå som tar hänsyn till all information som hanteras där, men det är inte fel att klassa även de resurser som hanterar information.

Den information som ni ska klassa vid ett specifikt tillfälle samlas i ett _klassningsobjekt_. Ett klassningsobjekt utgörs av en meningsfull del i organisationen där information hanteras, exempelvis information som hanteras i en viss verksamhet, en enhet eller avdelning, en process, en tjänst, eller ett it-system. Ett klassningsobjekt kan innehåll en eller flera informationsmängder och informationstyper.

En _informationsmängd_ är en gruppering av information, exempelvis i form av ett dokument, en databas eller liknande. En informationsmängd innehåller en eller flera informationstyper. En informationsmängd utgör minsta möjliga meningsfulla del, till exempel ska en PDF ska inte delas upp i dess olika informationstyper utan ses som en informationsmängd. Ett klassningsobjekt innehåller normalt ett flertal informationsmängder.

En _informationstyp_ är information av ett visst slag. Man kan välja att definiera en informationstyp som en informationsmängd och klassa den. Om och vilka informationstyper en organisation väljer att definiera som en informationsmängd och klassa beror på organisationens behov. Att identifiera informationstyper som är viktiga kan underlätta klassningen, till exempel när en viss typ av information är spridd i stora delar av organisationen, så som personuppgifter, eller är av särskild betydelse för organisationen. Exempel på informationstyper som kan vara av särskild betydelse för en organisation är kundregister, ekonomisk redovisning, riskanalyser, källkod, ritningar, forskningsresultat eller liknande beroende på vilken verksamhet som bedrivs. Informationstyper som finns på många ställen i er organisation eller som är särskilt viktiga för hela organisationen kan klassas organisationsgemensamt, för att undvika att olika verksamheter lägger tid på att klassa samma informationstyp flera gånger (se _Roller och ansvar_ nedan).

![Hur begreppen klassningsobjekt, informationsmängs och informationstyp förhåller sig till varandra](https://www.informationssakerhet.se/siteassets/metodstod-for-lis/4.-anvanda/hur-begreppen-klassningsobjekt-informationsmangd-och-informationstyp-forhaller-sig-till-varandra..png 'Figur 1: Hur begreppen förhåller sig till varandra')

Figur 1: Hur begreppen "Klassningsobjekt, informationsmängd och informationstyp" förhåller sig till varandra.

Särskilt om klassning och säkerhetsskyddslagen

Säkerhetsskyddsklassificerade uppgifter, det vill säga uppgifter som rör säkerhetskänslig verksamhet, ska klassas i enlighet med säkerhetsskyddslagstiftningen. Om ni identifierar information som ni misstänker kan innehålla säkerhetsskyddsklassificerade uppgifter behöver ni kontakta organisationens säkerhetsskyddschef.

Mer information om säkerhetsskyddslagen och aktuella föreskrifter och vägledningar finner du på Försvarsmaktens och Säkerhetspolisens hemsidor.

## När klassning ska ske

Klassning av information behöver göras minst en gång per klassningsobjekt men man behöver regelbundet kontrollera att klassningen fortfarande gäller. Detta eftersom informationens värde för organisationen kan ändras över tid. Lämpligt är därför att klassningen ses över årligen som en del av organisationens årshjul för informationssäkerhetsarbetet.

Vid utveckling, större förändringar eller anskaffning av nya it-system eller andra resurser som hanterar information behöver klassning genomföras för att ge underlag till kravställningen.

### Att börja med

Om er organisation inte tidigare har klassat någon information så står ni inför valet av vad som ska klassas först. Rekommendationen är då att ni börjar med information i era viktigaste verksamheter, det vill säga de som måste fungera för att organisationen ska kunna bedriva sin verksamhet, eller där felaktig hantering av informationen kan innebära oacceptabla konsekvenser. Som grund för detta kan ni använda den förteckning över informationstillgångar som tagits fram i Identifiera och analysera Verksamhet och börja med de kritiska.

När ni ska klassa för första gången kan ni göra det i form av ett pilotprojekt. Då kan klassningsmodellen och arbetssättet för klassningen utvärderas. När ni ska genomföra er pilot är det bra att välja en kritisk verksamhet, men också en verksamhet som är intresserad och inte allt för komplex. Risken är annars att arbetet fastnar i pilotprojektet och att man får svårt att komma vidare.

Det kan också vara lämpligt att tidigt i klassningsarbetet klassa informationstyper som är spridda i stora delar av organisationen eller som är av särskild betydelse för en verksamhet (läs mer nedan _Om organisationsgemensam respektive verksamhetsanpassad klassning_).

## Roller och ansvar

Verksamhetsansvariga, exempelvis linjechefer, processägare, projektägare och informationsägare, ansvarar för att den egna informationen klassas och har ett tillräckligt skydd (se Utforma Organisation). Verksamhetsansvarigas ansvar för klassning bör tydligt regleras i era styrdokument för informationssäkerhet (se Utforma Organisation och Utforma Styrdokument). Att ha ansvar innebär att ha befogenheter och resurser men inte att man behöver göra klassningarna själv. Som ansvarig kan man se till att någon med rätt kompetens genomför själva klassningen. I stora organisationer kan det finnas resurser i den egna verksamheten eller i stödverksamhet som hjälper till att leda genomförandet av informationsklassningar.

Som CISO är din roll att stödja och hålla samman arbetet med klassning. Du bör ha en aktiv roll initialt, och är förmodligen den som leder inledande workshops, exempelvis i en eller flera piloter (se ovan). Efterhand kan vägledningar, lathundar och utbildning tas fram som möjliggör att verksamheter själva eller med hjälp av stödverksamheter kan genomföra klassningar.

Andra roller och funktioner som man kan ha stor hjälp av, särskilt när klassningsarbetet påbörjas, är bland andra arkivarie, informationshantering/dokumentcontroller och jurist.

### Dokumentera

När klassningar har kommit igång i er organisation bör ni hålla ordning på vad som klassats och resultatet av klassningen. Ni bör därför skapa rutiner för att godkänna/besluta och att dokumentera klassad information i en förteckning.

### Om organisationsgemensam respektive verksamhetsanpassad klassning

För att underlätta klassningen kan organisationer bestämma sig för att klassa viss information gemensamt. Då identifierar man information som förekommer ofta i organisationen eller som är av särskild betydelse för hela organisationen, klassar dem i enlighet med organisationens klassningsmodell och beslutar därmed att de ska ges säkerhetsåtgärder motsvarande en viss skyddsnivå. En riskbedömning ska alltid komplettera klassningen för att säkerställa att informationen får rätt skydd. Anledningen till att man använder sig av organisationsgemensamma klassningar är för att effektivisera klassingen och valet av säkerhetsåtgärder. Verksamheter kan i vissa organisationer ha rätt att höja och ibland även sänka klassningen för dessa beroende på i vilket sammanhang informationen hanteras.

Klassning av organisationsgemensam information görs genom att:

1.  Identifiera vilken information som ska klassas organisationsgemensamt.
2.  Klassa informationen utifrån er klassningsmodell.
3.  Dokumentera vilken information som har fått en organisationsgemensam klassning och huruvida klassningen får sänkas av verksamheten.
4.  Säkerställ att verksamheterna känner till resultatet av den organisationsgemensamma klassningen när de ska klassa sin information.

![Arbetssätt för klassning där det finns orgnaisationsgemensamt klassad information](https://www.informationssakerhet.se/siteassets/metodstod-for-lis/4.-anvanda/arbetssatt-for-klassning.png 'Figur 2: Arbetssätt för klassning där det finns organisationsgemensamt klassad information')

Figur 2: Arbetssätt för klassning av information där det finns organisationsgemensamt klassad information och där verksamheten kan höja och sänka konsekvensnivån beroende på den egna verksamheten.

Klassningen av organisationsgemensam information behöver godkännas. Det kan göras av ett informationssäkerhetsråd eller motsvarande (se Utforma Organisation) beroende på hur det ser ut i organisationen. Detta råd skulle också kunna godkänna klassningar där verksamheten sänker konsekvensnivån för en organisationsgemensam informationsklassning och utifrån genomförd riskbedömning kan visa att informationen skyddas tillräckligt med en lägre nivå av skydd. Saknas ett informationssäkerhetsråd i organisationen kan det vara lämpligt att samla berörda informationsägare för att godkänna det organisationsgemensamma klassningsresultatet, eller för godkännande då en verksamhet sänkt klassningen av information som tidigare klassats organisationsgemensamt.

## Arbetssätt vid klassning

I det här avsnittet beskrivs ett förslag till arbetssätt med olika aktiviteter för informationsklassning som ni kan använda er av. Arbetssättet illustreras i Figur 3. Arbetet bedrivs i workshopform och utgår från organisationens beslutade klassningsmodell. Om organisationen är ovan vid att klassa information är det bättre att definiera mindre klassningsobjekt och ha kortade klassningstillfällen, än att börja med för stora klassningsobjekt. Om klassningen blir för komplicerad och tar för lång tid är risken stor att verksamheten blir avskräckt och det blir svårt att få igång ett effektivt klassningsarbete.![Ett arbetssätt för klassning](https://www.informationssakerhet.se/siteassets/metodstod-for-lis/4.-anvanda/ett-arbetssatt-for-klassning..png 'Figur 3: Ett arbetssätt för klassning')

Figur 3: Ett arbetssätt för klassning.

Följande avsnitt ger vägledning för de olika aktiviteterna i klassningsarbetet.

## 1. Definiera klassningsobjekt

Innan ni börjar klassa behöver klassningsobjektets omfattning och avgränsning definieras. Det innebär att ni bestämmer vilken information som ingår i klassningsobjektet och vilken information som inte ingår.

Ett klassningsobjekt bör utgöras av en meningsfull del i organisationen där information hanteras, exempelvis en verksamhet, en enhet eller avdelning, en process, eller en tjänst. Det kan exempelvis vara information som hanteras i ett lokalkontor, en bygglovsprocess i en kommun, en tentamen på ett universitet, en upphandlingsprocess eller en tillverkningsavdelning. Klassningsobjektet kan också vara en viss informationstyp, som exempelvis känsliga personuppgifter.

## 2. Förbered Workshop

När klassningsobjektet är definierat ska själva workshopen förberedas. Beroende på omfattning och komplexitet hos klassningsobjektet kan klassningen ta olika lång tid. Om klassningsobjektet är allt för omfattande, försök att dela upp det i hanterbara delobjekt. Genom att identifiera relevant material och förbereda deltagarna kan klassningstillfället hållas fokuserat.

Inför ett klassningstillfälle behöver du som ska hålla i workshopen förbereda dig. Det är bra om du har en grundläggande förståelse för den verksamhet vars information ska klassas.

Material som kan vara bra att läsa in sig på är till exempel:

- Analyser, till exempel Verksamhet, Omvärld, Risk om sådana finns.
- Existerande inventeringar av information.
- Processbeskrivningar.
- Rättsliga krav.

Du kan också ta hjälp av organisationens arkivarie, informationshanteringsfunktion/dokumentcontroller och jurist för att få större kunskap om verksamhetens behov.

Har organisationen organisationsgemensamt klassad information behöver detta ingå som underlag när man genomför klassning.

Förbered deltagarna i god tid innan workshopen genom att informera om:

- Vad som ska göras.
- Vad klassning går ut på.
- Hur klassningsobjektet är definierat.
- Vad som förväntas av deltagarna.

Eftersom det är bra för deltagarna att veta vem det är som vill att informationen ska klassas bör den som ansvarar för klassningsobjektet, det vill säga informationsägaren, stå som avsändare av inbjudan till workshopen. Det är viktigt att workshopen genomförs med rätt deltagare exempelvis:

- _Workshopledare_ med kunskap om klassningsmodellen, arbetssätt för klassning av information och informationssäkerhet generellt. Initialt är det lämpligen CISO som har denna roll.
- _Chefer_, vilka är ansvariga för det aktuella klassningsobjektet, och _medarbetare_ _med verksamhetskompetens_ som tillsammans besitta kunskap om vilken information som finns i klassningsobjektet och vilka konsekvenser som brister i konfidentialitet, riktighet och tillgänglighet kan innebära.
- *Jurister *eller* andra personer* _med kunskap om rättsliga krav_ på klassningsobjektet

Beroende på klassningsobjekt, situation och hur verksamheten ser ut kan även andra kompetenser behöva medverka i klassningen till exempel representant från närliggande verksamheter som har stort informationsutbyte med klassningsobjektet. Det är också bra att be någon om hjälp att föra anteckningar under workshopen eftersom det kan vara svårt att göra det själv samtidigt som du leder arbetet. Gör avvägningen mellan behovet av viss kompetens och antal medverkande i workshopen så att gruppen inte blir större än att alla som deltar har möjlighet att komma till tals.

Det kan också vara bra att förbereda ett kort exempel på hur en klassning går till, som du sedan inleder workshoptillfället med, för att hjälpa deltagarna att förstå metodiken.

Nu är det dags för själva workshopen (steg 3 och 4)

## 3. Inventera information och beskriv klassningsobjektet

Det första steget i workshopen är att beskriva klassningsobjektet och den information som ingår. Här bidrar deltagarna med sin kunskap om klassningsobjektet och dess information genom att lägga till och justera objektets omfattning och ingående information. När ni vet vilken information som ingår i objektet hjälps deltagarna åt att skapa meningsfulla informationsmängder. Ibland kan det vara svårt att veta vilken detaljeringsgrad man behöver ha när man definierar informationsmängder. Grundregeln är att informationen som utgör en informationsmängd är den minsta sammansatta grupperingen av information som hanteras i klassningsobjektet.

Exempel: Om ett system skapar en PDF-fil med ett visst innehåll, som aldrig delas upp i mindre informationsmängder, så kan PDF-filen betraktas som en informationsmängd.

För att underlätta arbetet med att identifiera relevanta informationsmängder kan man också tänka i termer av var organisationens, verksamhetens eller ett it-systems information hanteras, till exempel vilken information matas in - indata, vilken information lagras, och vilken information kan vi få ut - utdata.

Informationen i klassningsobjektet kan finnas i digital form i it-system, eller i pappersform. Ibland behöver man även klassa information som bara förekommer i muntlig form. Ofta kan samma informationsmängd förekomma i mer än en form, exempelvis kan en Word-fil lagras digitalt, skrivas ut, och informationen kan läsas och kommuniceras muntligt. Hur informationen klassas skiljer sig inte åt, däremot kan informationen behöva skyddas på olika sätt beroende på i vilken form den förekommer.

Om det redan finns inventeringar och kartläggningar av information är det naturligtvis bra att ni använder dessa. Saknas inventeringar kan ni under workshopen ta hjälp av till exempel MSB:s och Riksarkivets _"_[_Vägledning för processorienterad informationskartläggning_](https://rib.msb.se/filer/pdf/26410.pdf 'Vägledning för processorienterad informationskartläggning')".

Skriv in den inventerade informationen i kolumnerna *Informationsmängd *och _Beskrivning/innehåll_ i metodstödets tillhörande Verktyg Använda Informationsklassning.

## 4. Klassa information

Att klassa information innebär att man gör en konsekvensbedömning för vad som kan hända om informationens konfidentialitet, riktighet och tillgänglighet inte upprätthålls i den utsträckning verksamheten behöver. Exempel på frågor ni kan ställa er är:

1.  Vad kan konsekvenserna bli om informationen kommer obehöriga till del (Konfidentialitet)?
2.  Vad kan konsekvenserna bli om informationen är manipulerad eller förstörd (Riktighet)?
3.  Vad kan konsekvenserna bli om någon (som är behörig) inte får tillgång till informationen (Tillgänglighet)?

Använd konsekvensnivåerna från er klassningsmodell som stöd vid konsekvensbedömningen. Utgå från samtliga konsekvenskategorier och bedöm konsekvensnivå för respektive kategori. Låt den allvarligaste konsekvensen vara avgörande för i vilken klass informationen ska hamna.

Kontrollera om klassningsobjektet innehåller information som redan är organisationsgemensamt klassad. Ta med den organisationsgemensamma bedömningen när ni klassar er informationsmängd.

När ni har klassat en informationsmängd får den en klassningsprofil. En viss informationsmängd kan exempelvis få en hög konsekvensnivå gällande konfidentialitet och riktighet men en lägre gällande tillgänglighet. För in resultatet av klassningen av varje informationsmängd för varje aspekt i respektive kolumn i Verktyg Använda Informationsklassning.

## 5. Dokumentera

Resultatet av klassningen kan med fördel dokumenteras under pågående workshop. Därför kan det vara bra att ni har en utsedd person som dokumenterar ert resultat. Dokumentationen kan göras i Verktyg Använda Informationsklassning.

Med detta steg är själva arbetet med klassningen av ett specifikt klassningsobjekt klart. I nästa avsnitt ges vägledning för hur resultatet på olika sätt kan användas som underlag för att välja säkerhetsåtgärder. För mer information se vägledningen Utforma Välj säkerhetsåtgärder och skapa skyddsnivåer.

## Användning av klassningsresultatet

Resultatet av klassningen ger en ökad förståelse för informationens värde och vilka konsekvenser det får om informationen skulle läcka ut till obehöriga, förändras okontrollerat eller vara otillgänglig. Klassningen är också ingångsvärde till den riskbedömning som fastställer _skyddsbehovet_ hos informationen.

### Krav på säkerhetsåtgärder

Det skyddsbehov som framkommit vid klassning och riskbedömning av informationen behöver omhändertas av informationsägaren genom att införa tillräckliga säkerhetsåtgärder.Dessa kan vara administrativa, tekniska och fysiska.De organisationer som har samlat säkerhetsåtgärder i skyddsnivåer för respektive klassningsnivå ska använda dessa (se Utforma Välj säkerhetsåtgärder och skapa skyddsnivåer). Varje skyddsnivå kommer att innehålla ett antal säkerhetsåtgärder som är olika relevanta beroende på det sammanhang som informationen hanteras i.

Det är med andra ord inte alltid så att alla säkerhetsåtgärder i en skyddsnivå behöver införas i alla situationer. Varje klassningsobjekt kan ha specifika förutsättningar för det sammanhang som just den informationen används i. Säkerhetsåtgärderna i skyddsnivåerna kan ibland användas av alla verksamheter men ibland kan verksamhetsspecifika åtgärder behövas utvecklas, till exempel särskilda rutiner. Det är riskbedömningen som avgör om säkerhetsåtgärderna i skyddnivåerna är tillämpliga, tillräckliga eller till och med överflödiga (till exempel för att exponeringen är låg eller för att de täcks av andra säkerhetsåtgärder i verksamheten).

![Klassningsmatrisens konsekvensnivåer relaterar till säkerhetsåtgärder i skyddsnivåer](https://www.informationssakerhet.se/siteassets/metodstod-for-lis/4.-anvanda/klassning-skyddsnivaer.png 'Figur 4: Hur klassningsmatrisens konsekvensnivåer relaterar till säkerhetsåtgärder i skyddsnivåer')

Figur 4: Hur klassningsmodellens konsekvensnivåer relaterar till skyddsnivåer och hur man kan beskriva vilka säkerhetsåtgärder som gäller för olika skyddsnivåer och vilka aspekter säkerhetsåtgärden skyddar mot brister i.

På detta sätt blir det tydligt för olika roller i organisationen vilka krav på skydd som ställs utifrån hur informationen är klassad och de risker som identifierats.

Har organisationen definierat en grundskyddsnivå av säkerhetsåtgärder och resultatet av er klassning och riskbedömning tillsammans visar på ett lägre skyddsbehov kan det ibland ändå vara bättre att välja de säkerhetsåtgärder som är godkända och förvaltas inom ramen för grundskyddsnivån framför att införa nya säkerhetsåtgärder med lägre skydd. Är en säkerhetsåtgärd onödig så behöver det finnas arbetssätt för att söka undantag för att inte införa säkerhetsåtgärden i enlighet med er organisations rutiner för detta (se Utforma Välj säkerhetsåtgärder och skapa skyddsnivåer).

Till exempel kan information ha värdet (K1) fast den till synes är öppen information (K0). För att ändra värdet från K1 (i modellen är detta då grundskydd) till K0 (betyder i modellen att detta får publiceras externt) finns krav på att organisationens rutiner för detta används, till exempel rutiner för publicering, sekretessbedömning och utlämning eller motsvarande.

### Skyddsnivåer för it-system

Om klassningsobjektet innehåller it-system så ska it-systemet få en skyddsnivå med säkerhetsåtgärder som motsvarar hur den mest känsliga informationen i systemet är klassad och resultatet av riskbedömningen. Grunden är att it-systemet lägst ska ha en skyddsnivå och de säkerhetsåtgärder som motsvarar behovet av de ingående informationsmängdernas högsta klassning och som ger tillräckligt skydd utifrån genomförda riskbedömningar. Ni bör dock tänka på att ett it-system av flera anledningar kan behöva få en skyddsnivå som är högre än klassningen hos den ingående informationen. Orsaker till det kan vara att:

- Stora mängder information lagras i systemet (ackumulering).
- Flera olika informationsmängder som när de sammanförs skapar känsligare information vilket innebär ett högre skyddsbehov (aggregering).
- Systemet är integrerat med andra system med högre skyddsnivå och där informationsutbyte sker så att information med högre klassning kommer in i det system som har en lägre skyddsnivå.

I vissa fall kan ett och samma it-system användas av många verksamheter i organisationen eller av flera organisationer, som exempelvis ett ärendehanteringssystem. Då bör ni prioritera att genomföra klassning och riskbedömning i de verksamheter som ni tror har mest skyddsvärd information och ge it-systemet en skyddsnivå därefter.

Observera att ett it-system med en viss skyddsnivå inte utan klassning, riskbedömning och beslut kan lagra annan information som behöver skyddas på samma nivå, detta då mängden information kan öka skyddsvärdet och fler eller andra säkerhetsåtgärder behöver tillföras (se ovan om aggregering och ackumulering). Riskbedömning måste alltid genomföras när en ny informationshantering tillförs ett it-system för att avgöra om krav på ytterligare säkerhetsåtgärder finns.

### Säkerhetsåtgärder hos andra funktioner i organisationen

Olika stödfunkioner ansvarar för att införa en stor del av organisationens säkerhetsåtgärder, exempelvis personalavdelning (bakgrundskontroller vid nyanställning) och fastighetsavdelning (behörigheter för tillträde till lokaler). Många säkerhetsåtgärder ska införas av den it-driften, oavsett om den är intern eller extern. Det handlar då om exempelvis säkerhetskopiering, kryptering och stark autentisering så att säkerhetsåtgärderna i it-systemet motsvarar informationens skyddsbehov.

### Krav på externa aktörer

När information ska hanteras av externa leverantörer behöver ni ställa krav på att de skyddar er information tillräckligt. Genom att skriva upphandlingskrav som utgår från era säkerhetsåtgärder får ni en kravkatalalog. Kraven i denna kan ni sedan använda vid projekt med extern part, upphandling och/eller inköp av produkter och tjänster. Här är det viktigt att samverka med upphandlings- eller inköpsavdelningen så att rätt krav kommer med i upphandling eller inköp, samt att dessa krav följs upp under kontraktstiden. Att identifiera vilken information, klassa den och genomföra riskbedöming för att identifiera vilka säkerhetsåtgärder som behövs i den specifika situationen måste alltid göras.

Referens till standarder i 27000-serien:

SS-EN ISO/IEC 27002:2017: avsnitt 8.2 Informationsklassning.

_Denna vägledning ska språkgranskas._
