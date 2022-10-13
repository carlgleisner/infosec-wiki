---
title: Välj säkerhetsåtgärder och skapa skyddsnivåer
description: Den här vägledningen beskriver hur du väljer säkerhetsåtgärder för att skydda din organisations information. Den beskriver också hur du kan gruppera dessa i skyddsnivåer och koppla dem mot konsekvensnivåerna i organisationens klassningsmodell.
date: 2022-10-09
---

Den här vägledningen beskriver hur du väljer säkerhetsåtgärder för att skydda din organisations information. Den beskriver också hur du kan gruppera dessa i skyddsnivåer och koppla dem mot konsekvensnivåerna i organisationens klassningsmodell.{% .lead %}

---

## Vad är en säkerhetsåtgärd?

För att nå syftet med informationsklassningen, nämligen att informationen ska skyddas, behöver ni efter informationsklassningen genomföra riskbedömning och därefter införa tillräckliga säkerhetsåtgärder.

Enligt SIS TR50 är säkerhetsåtgärder en "identifierad uppsättning åtgärder för att möta en organisations risker". Det betyder att säkerhetsåtgärderna behöver anpassas utifrån vilken information organisationen har, hur och var den hanteras, samt riskerna med hanteringen.

I standarden (SS-EN ISO/IEC 27002:2017) finns ett antal säkerhetsåtgärder beskrivna. Vissa av dem kan ses om en del av styrningen av informationssäkerhetsarbetet medan andra är konkreta åtgärder för att ge skydd i hantering av information. En säkerhetsåtgärd kan vara:

- Organisatorisk: att man fördelar ansvar, roller och mandat i organisationen så att informationen skyddas mot felaktig hantering (vem gör vad för att undvika att saker hamnar mellan stolarna).
- Administrativ: att man skapar styrdokument, rutiner eller liknande samt genomför utbildningar som stöd för säker informationshantering.
- Fysisk: att ha lås, larm, dörrar, fönster och motsvarande som skyddar information och informationssystem mot obehörig fysisk åtkomst.
- Teknisk: att olika it-lösningar används för att skydda informationen, till exempel antivirus, behörighetssystem, säkerhetsloggning och säkerhetskopiering.

Olika säkerhetsåtgärder behöver ofta kombineras för att ge tillräckligt skydd till lägsta möjliga kostnad. Exempelvis kan man behöva kombinera utbildning (administrativ säkerhetsåtgärd) kring till exempel phishing via e-post med att införa skydd mot skadlig kod (teknisk säkerhetsåtgärd) som kan upptäcka och minska konsekvenserna av attacken om någon ändå skulle klicka på en skadlig länk.

En säkerhetsåtgärd kan skydda mot brister i alla tre aspekterna (konfidentialitet, riktighet och tillgänglighet) medan andra åtgärder skyddar mot brist i en eller två av aspekterna. När du identifierar säkerhetsåtgärder bedömer du vilken eller vilka av aspekterna som åtgärden skyddar mot brister i (Verktyget Utforma Skapa skyddsnivåer).

## Vad är en skyddsnivå?

Vi kallar att samla ett antal säkerhetsåtgärder som ger tillräckligt skydd för information som klassats till en viss konsekvensnivå för skyddsnivå. Det är viktigt att komma ihåg att även om säkerhetsåtgärderna i skyddsnivåerna är kopplade till klassningens konsekvensnivåer så är det riskbedömningen som avgör vilka säkerhetsåtgärder som ska införas.

Syftet med att samla säkerhetsåtgärder i skyddsnivåer är att underlätta förvaltning av säkerhetsåtgärderna. Skyddsnivåerna underlättar för organisationen att hitta de åtgärder som redan är godkända, istället för att behöva föreslå nya säkerhetsåtgärder för att ge tillräckligt skydd vid varje ny informationshantering. Organisationens resurser kommer kunna användas mer effektivt om inte varje ny informationshantering resulterar i nya säkerhetsåtgärder som behöver godkännas och förvaltas.

Det underlättar också för användarna att de efter informationsklassning och riskbedömning kan förutse vilka säkerhetsåtgärder de ska använda när information hanteras i olika situationer.

![Hur klassningsmatrisens konsekvensnivåer relaterar till säkerhetsåtgärder i skyddsnivåer](https://www.informationssakerhet.se/siteassets/metodstod-for-lis/4.-anvanda/klassning-skyddsnivaer.png 'Figur 1: Hur klassningsmatrisens konsekvensnivåer relaterar till säkerhetsåtgärder i skyddsnivåer')

Figur 1: Hur klassningsmodellens konsekvensnivåer relaterar till skyddsnivåer och hur man kan beskriva vilka säkerhetsåtgärder som gäller för olika skyddsnivåer och vilka aspekter säkerhetsåtgärden skyddar mot brister i.

## Ingångsvärden

Särskilt viktiga delar från Metodstödet är:

- Resultat från gapanalys och Uttalande om tillämplighet ( UoT/SOA) om sådant finns (Identifiera och analysera Gapanalys).
- Organisationens informationsklassningsmodell (Utforma Klassningsmodell).
- Resultat från riskbedömingar (Identifiera och analysera Riskanalys).
- Andra ingångsvärden är också de säkerhetsåtgärder organisationen redan infört.

## Att utforma skyddsnivåer

Man ska alltid införa säkerhetsåtgärder som skyddar informationen tillräckligt. Det går bra att för varje tillfälle välja vilka säkerhetsåtgärder som ska införas men det kan vara mer effektivt att strukturera godkända säkerhetsåtgärder i skyddsnivåer. Oavsett hur man väljer att göra så är riskbedömningen avgörande för vilka säkerhetsåtgärder man slutligen väljer att använda för att skydda informationen.

Här beskriver vi hur behovet av säkerhetsåtgärder som ger tillräckligt skydd väljs och hur dessa säkerhetsåtgärder kan organiseras i skyddsnivåer.

## Identifiera och förtydliga säkerhetsåtgärder

I standarden (SS-EN ISO/IEC 27001:2017, bilaga A och SS-EN ISO/IEC 27002:2017) beskrivs säkerhetsåtgärder för allt informationssäkerhetsarbete. Säkerhetsåtgärderna i standarden beskrivs i olika detaljeringsgrad. Vissa säkerhetsåtgärder ser likadana ut för all information, medan andra kommer att behöva variera i styrka beroende på skyddsbehov. Vissa säkerhetsåtgärder behöver ni förtydliga utifrån era förutsättningar medan ni kan ta andra direkt från standarden. Vissa säkerhetsåtgärder i standarden har mer att göra med styrningen av informationssäkerhetsarbetet medan andra syftar till att ge ett direkt skydd för informationen utifrån var och hur den hanteras.

Till exempel: Säkerhetsåtgärden "_A 5.1.1 Informationssäkerhetspolicy: Ett regelverk för informationssäkerhet som inkluderar informationssäkerhetspolicy ska [...]"_ har att göra med den övergripande styrningen av informationssäkerhetsarbetet och gäller all information. Organisationen ska ha ett gemensamt regelverk för informationssäkerhet och ansvaret att ta fram och förvalta det kan läggas på en roll, så som organisationens CISO.

Andra säkerhetsåtgärder, så som _"A 12.3.1 Säkerhetskopiering av information: Säkerhetskopior av information, program [...] i enlighet med överrenskomna regler för säkerhetskopiering_" varieras utifrån organisationens behov. Om organisationen har information med höga krav på riktighet eller tillgänglighet så behöver säkerhetsåtgärden anpassas efter det. Skyddsnivåerna underlättar då hanteringen. Om organisationens klassningsmodell har tre konsekvensnivåer skapar ni lämpligen tre skyddsnivåer och anpassar säkerhetsåtgärderna för säkerhetskopiering efter dessa genom att bestämma regler för när fullständig respektive begränsad säkerhetskopiering ska tas för olika information, program och system, samt hur och hur ofta säkerhetskopiorna ska verifieras. Genom era interna regler har ni i detta fall detaljerat era krav på säkerhetsåtgärder. Det behövs också regler för hur säkerhetskopiorna ska skyddas mot brister i konfidentialitet, riktighet och tillgänglighet. Hur skyddet utformas kan variera beroende på reslutatet av informationsklassning och riskbedömning.

## Säkerhetsåtgärder i skyddsnivåer

Din organisation har en klassningsmodell med ett visst antal konsekvensnivåer. För att säkerställa tillräckligt skydd för informationen inför du säkerhetsåtgärder. För att underlätta hanteringen av detta kan du välja att skapa skyddsnivåer som motsvarar klassningsmodellens konsekvensnivåer. I dessa skyddsnivåer för du sedan in säkerhetsåtgärder som ska ge information som klassats till respektive konsekvensnivå lämpligt skydd. Utifrån en organisations verksamhet kan det finnas anledning att ha flera skyddsnivåer kopplade till en konsekvensnivå i klassningsmodellen. Detta då klassningen ger en grov värdering av informationens skyddsbehov och organisationen har identifierat att det är mer effektivt för dem att ha fler specifika skyddsnivåer istället för att arbeta med villkor och undantag för olika informationshantering.

Ett sätt att identifiera vilka säkerhetsåtgärder som ger tillräckligt skydd för olika konsekvensnivåer i klassningsmodellen är att genomföra en workshop. Förutom CISO:s kunskap kan du behöva ta hjälp av till exempel it-säkerhetschef, säkerhetschef, annan säkerhetspersonal och specialister inom it och juridik. För att identifiera vissa säkerhetsåtgärder kan du arbeta tillsammans med chefer och specialister inom fastighet, HR och upphandling.

Fokusera på de säkerhetsåtgärder som direkt berör hantering av information. Både de där samma säkerhetsåtgärd ger tillräckligt skydd för all information och de säkerhetsåtgärder som behöver införas i olika grad (styrka) för olika skyddsnivåer. Tänk på att en säkerhetsåtgärd kan skydda mot brister i alla tre aspekterna (konfidentialitet, riktighet och tillgänglighet) medan andra åtgärder skyddar mot brist i en eller två av aspekterna. Att veta vilken aspekt som en säkerhetsåtgärd skyddar mot brister i underlättar vid val av säkerhetsåtgärder.

Till exempel: Säkerhetsåtgärden "_A 8.1.2 Ägarskap av tillgångar: Tillgångar som finns [...] ska tilldelas ägare_" är en säkerhetsåtgärd som ser likadan ut oberoende av nivå. Den innebär att det finns någon som har ansvar för att information som hanteras i en viss situation har tillräckligt skydd. Den här säkerhetsåtgärden kan man se som en del av styrningen av informationssäkerhetsarbetet, medan nästa krav i standarden *"A 8.1.3 Tillåten användning av tillgångar" *beskriver att säkerhetsåtgärderna behöver anpassas utifrån den information som hanteras. Den som ansvarar för informationshanteringen ansvarar då för att ta fram till exempel dokumentation som beskriver hur informationen får hanteras i det specifika fallet. Hur säkerhetsåtgärderna ska varieras i styrka utifrån de olika skyddsnivåerna så att de ger skydd mot brister i alla tre aspekterna (konfidentialitet, riktighet och tillgänglighet) behöver beskrivas. Exempel på regler gällande informationsbehandling vid posthantering skulle kunna innehålla krav på hur man ska kommunicera beroende på innehållet i det som ska skickas, alltså vilket skyddsbehov informationen har. Reglerna beskriver när man till exempel får skicka vanligt brev, när man ska använda sig av rekommenderat brev, och när man ska använda sig av personlig överlämning med identitetskontroll och signering.

I Verktyget Utforma Skyddsnivåer möjlighet att lägga till vilka aspekter (konfidentialitet, riktighet och tillgänglighet) respektive säkerhetsåtgärd skyddar mot brist i samt vilka säkerhetsåtgärder som kan varieras beroende på nivå och vilka som är generella och inte bör varieras.

## Om behovet av riskbedömning

Riskbedömningen för en viss informationshantering genomförs efter informationsklassningen och resulterar i att man väljer de säkerhetsåtgärder som ger informationen tillräckligt skydd i den specifika situationen. När man arbetar med skyddsnivåer gör man en riskbedömning i samband med att en säkerhetsåtgärd godkänns för en viss skyddsnivå. När man använder skyddsnivåer behöver man göra riskbedömning utifrån den informationshantering som ska genomföras och de säkerhetsåtgärder som är godkända för skyddsnivån. Syftet med riskbedömningen är att säkerställa att de godkända säkerhetsåtgärderna är tillräckliga för den information som hanteras i den specifika situationen. Gör informationshanteringen i den specifika situationen att en viss säkerhetsåtgärd inte behövs så kan riskbedömningen användas som underlag för att visa att säkerhetsåtgärden inte behövs.

![Olika arbetssätt för riskbedömning i förhållande till val av säkerhetsåtgärder](https://www.informationssakerhet.se/siteassets/metodstod-for-lis/3.-utforma/olika-arbetssatt-for-riskbedomning-i-forhallande-till-val-av-sakerhetsatgarder.png 'Figur 2: Olika arbetssätt för riskbedömning i förhållande till val av säkerhetsåtgärder')

Figur 2: Olika arbetssätt för när riskbedömning görs i förhållande till val av säkerhetsåtgärder beroende på om man har infört skyddsnivåer i organisationen eller inte.

## Vad är grundskydd?

Med grundskydd menar vi den nivå av säkerhetsåtgärder som organisationen beslutat ska införas om det inte ges särskilt undantag. Det kan vara administrativa säkerhetsåtgärder, till exempel rutiner om att man alltid ska genomföra en viss utibildning innan man får börja arbeta med en viss sorts information. Grundsskyddet kan också gälla för infrastruktur och it-system som då minst ska ha vissa säkerhetåtgärder införda om man inte särskilt utifrån informationsklassning och riskbedömning bedömer att en lägre nivå är tillräcklig. Det bör dock finnas mycket goda skäl och argument för att få frångå en grundskyddsnivå. Genom att besluta att en av skyddsnivåerna är en grundskyddsnivå så kan man effektivisera hanteringen genom att i grundskyddsnivån införa säkerhetsåtgärder som ska användas i första hand.

Vilka säkerhetsåtgärder som utgör grundskyddet varierar beroende på organisation. På vilken skyddsnivå en organisation väljer att lägga grundskyddet beror på hur mycket information med ett viss skyddsbehov man hanterar. De säkerhetsåtgärder som behövs och som inte erbjuds av grundskyddet måste införas vid varje informationshantering, både manuell och för enskilda it-system. Varje verksamhet behöver också utifrån informationsklassning och riskbedömning om de säkerhetsåtgärder som ingår i grundskyddet räcker eller om man måste tillföra egna säkerhetsåtgärder. Organisationen kan alltså välja att arbeta med tillägg och undantag gällande säkerhetsåtgärder. Vilka säkerhetsåtgärder som ska ingå i den skyddsnivå som organisationen valt som grundskyddsnivå och vilka som efter behov ska införas beror på en avvägning utifrån riskbedömning, nytta och kostnad. Exempel på säkerhetsåtgärder som kan ingå i grundskyddet är lagringsytor anpassade efter skyddsbehov, behörighetshantering och säkerhetsloggning.

## Utvärdera skyddsnivåerna

I Verktyget Utforma Skapa skyddsnivåer kan ni skriva in vilka säkerhetsåtgärder som ska gälla för respektive skyddsnivå. I kolumnen ID Säk.åtg. kan en referens skapas till aktuella säkerhetsåtgärder i Identifiera och analysera Gapanalys (UoT/SOA).

När ni har placerat era säkerhetsåtgärder i de olika skyddsnivåerna behöver ni avgöra om de är tillräckliga. För varje säkerhetsåtgärd som ni valt för en viss nivå bedöm om den:

- Skyddar tillräckligt utifrån klassningsmodellens konsekvensnivåer och de risker ni identifierat.
- Enskilt ger tillräckligt skydd eller behöver kombineras med annan/andra säkerhetsåtgärder (organisatorisk, administrativ, fysisk, teknisk säkerhetsåtgärd).
- Skyddar mot brister i en eller flera av aspekterna (konfidentialitet, riktighet och/eller tillgänglighet).
- Gäller för all informationshantering eller enbart i specifika situationer, som till exempel vid behandling av personuppgifter eller för it-system som är uppkopplat mot extern part.

Om en säkerhetsåtgärd inte är tillräcklig behöver den förbättras. Saknas säkerhetsåtgärder behöver de tas fram. Gå igenom de säkerhetsåtgärder ni har fastställt i Identifiera och Analysera Gapanalys (UoT/SoA) och som ni utifrån informationsklassning och riskbedömning identifierar behöver skalas upp i styrka, kombineras med annan säkerhetsåtgärd eller bytas ut.

## Att säkerställa skydd för information som delas med andra organisationer eller externa leverantörer

När information delas med eller förvaras hos en annan organisation eller en extern leverantör är det viktigt att se till att informationen inte får lägre skydd än den har eller skulle ha fått i er egen organisation. Det kan vara lätt att tänka att det är klassningsmodellen som ska jämföras men eftersom klassningsmodellen utformas utifrån orgnaisationernas olika behov (så att den är begriplig och användbar för organisationen som ska använda den) så är det bättre att titta på säkerhetsåtgärderna. Detta görs genom att man jämför de egna säkerhetsåtgärderna med den andra organisationens säkerhetsåtgärder för att säkerställa att skyddet är lika bra.

Innan ni ger någon annan organisation eller leverantör åtkomst till er information behöver ni identifiera vilka säkerhetsåtgärder ni själva ansvarar för och vilka säkerhetsåtgärder den andra parten ansvarar för. Det kan också tillkomma behov av nya säkerhetsåtgärder eftersom det innebär nya risker att lämna över information för teknisk bearbetning eller att dela information vid gemensamma projekt. I de flesta samarbeten behöver ni reglera vem som ansvarar för vilka säkerhetsåtgärder i avtal så att det tydligt framgår vem som ansvarar för vilka säkerhetsåtgärder, oavsett om säkerhetsåtgärderna är organisatoriska, administrativa, fysiska eller tekniska.

_Denna vägledning ska språkgranskas._
