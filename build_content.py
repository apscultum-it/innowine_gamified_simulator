import json
from pathlib import Path
ROOT=Path(__file__).parent
scenarios=[]

def A(en,it,feedback_en,feedback_it,grade): return {'label':{'en':en,'it':it}, 'feedback':{'en':feedback_en,'it':feedback_it},'grade':grade}
def Q(en,it,lesson_en,lesson_it,options):
 assert len(options)==3 and sorted(x['grade'] for x in options)==[0,1,2]
 return {'prompt':{'en':en,'it':it}, 'lesson':{'en':lesson_en,'it':lesson_it}, 'options':options}
def S(id,group,skill,title_en,title_it,summary_en,summary_it,brief_en,brief_it,questions):
 scenarios.append({'id':id, 'group':group,'skill':skill, 'title':{'en':title_en,'it':title_it}, 'summary':{'en':summary_en,'it':summary_it},'brief':{'en':brief_en,'it':brief_it},'steps':questions})

S('01','assess','trust','The first board meeting','La prima riunione strategica','Baseline · five high-stakes choices','Valutazione iniziale · cinque scelte chiave',
  'You join a cooperative preparing its first dealcoholised wine. The board needs a defensible launch plan before investing. Your five answers establish the baseline for your final assessment.',
  'Entri in una cooperativa che prepara il primo vino dealcolizzato. Il consiglio vuole un piano di lancio sostenibile prima di investire. Le cinque risposte costituiranno la valutazione iniziale.',[
 Q('The pilot batch tests above the threshold for a 0.0% statement. What do you print?','Il lotto pilota supera la soglia prevista per indicare 0,0%. Cosa stampi?',
   'A claim must reflect verified analytical alcohol content and the applicable legal category.','La dicitura deve riflettere il tenore alcolico analiticamente verificato e la categoria legale applicabile.',[
 A('Keep “0.0%”; it is close enough','Mantieni «0,0%»: è quasi uguale','Misleading. Numerical claims cannot be rounded into compliance.','Fuorviante: non si può ottenere la conformità con un arrotondamento.',0),
 A('Verify the batch and use a truthful, permitted designation','Verifica il lotto e usa una denominazione corretta','Sound decision: verification precedes any alcohol-free claim.','Decisione corretta: la verifica precede qualsiasi indicazione di assenza di alcol.',2),
 A('Remove all alcohol information','Elimina ogni riferimento all’alcol','Avoiding the claim does not remove mandatory labelling duties.','Eliminare la dicitura non elimina gli obblighi di etichettatura.',1)]),
 Q('A supplier promises “the greenest bottle in Europe”, without evidence. Your response?','Il fornitore promette «la bottiglia più green d’Europa», senza dati. Come rispondi?',
   'Measure relevant impacts and substantiate comparative environmental claims.','Misura gli impatti rilevanti e dimostra le affermazioni ambientali comparative.',[
 A('Use the slogan on the package','Usa lo slogan sul packaging','Unsubstantiated superlatives expose the brand to greenwashing risk.','I superlativi non dimostrati espongono al rischio di greenwashing.',0),
 A('Use the bottle but make no impact claims yet','Usa la bottiglia senza affermare benefici ambientali','Safer wording, but the actual impact still needs evaluation.','Comunicazione più prudente, ma l’impatto va comunque valutato.',1),
 A('Request lifecycle evidence and compare alternatives','Richiedi dati di ciclo di vita e confronta alternative','Excellent: decide on evidence, not on a supplier slogan.','Ottimo: decidi sulla base di evidenze, non di slogan.',2)]),
 Q('Early customers resist the intended retail price. What next?','I primi clienti giudicano elevato il prezzo previsto. Cosa fai?',
   'Combine willingness-to-pay evidence, tasting and segment testing.','Combina disponibilità a pagare, degustazioni e test dei segmenti.',[
 A('Launch nationally at the original price','Lancia ovunque al prezzo iniziale','A single untested price may fail across diverse audiences.','Un prezzo unico non testato può fallire su pubblici diversi.',0),
 A('Cut the price by 30% immediately','Riduci subito il prezzo del 30%','A discount may help trial, but it ignores margin and buyer differences.','Lo sconto può aiutare la prova, ma ignora margini e segmenti.',1),
 A('Test prices and tasting responses in defined segments','Testa prezzi e degustazioni in segmenti distinti','Excellent: the commercial decision is supported by evidence.','Ottimo: la decisione commerciale è supportata da evidenze.',2)]),
 Q('Your QR information page includes ingredients and a sales popup. What do you do?','La pagina QR riporta ingredienti ma anche un popup commerciale. Cosa fai?',
   'Where an e-label supplies mandatory EU information, keep it distinct from advertising and avoid user tracking.','Quando una e-label veicola informazioni obbligatorie UE, separale dalla pubblicità ed evita il tracciamento.',[
 A('Use one page and track all visitors','Usa una pagina unica e traccia tutte le visite','Mandatory e-label content must not become a marketing-tracking channel.','Le informazioni obbligatorie non devono diventare uno strumento di marketing e tracciamento.',0),
 A('Keep the ingredients but remove only the popup','Mantieni gli ingredienti e togli solo il popup','Improvement, but tracking and presentation must also be checked.','Migliora, ma vanno verificati anche tracking e presentazione.',1),
 A('Create a dedicated, accessible, non-tracking compliance page','Crea una pagina dedicata, accessibile e senza tracking','Best: make required information clear and separate from marketing.','Corretto: informazioni obbligatorie chiare e separate dal marketing.',2)]),
 Q('A tasting visitor does not drink alcohol. Which experience do you offer?','Una persona in visita non consuma alcol. Che esperienza proponi?',
   'Inclusive visitor design should allow informed participation without pressuring consumption.','Un’esperienza inclusiva deve consentire la partecipazione senza pressioni al consumo.',[
 A('A full sensory route with 0.0 options and clear product facts','Percorso sensoriale completo con opzioni 0,0 e informazioni chiare','Excellent: inclusion is part of the product and the experience.','Ottimo: l’inclusione è parte dell’esperienza e del prodotto.',2),
 A('The same tour, but skip the tasting','Stesso tour, ma senza degustazione','Participation remains possible, though the experience is unequal.','Si può partecipare, ma l’esperienza resta limitata.',1),
 A('Suggest they wait outside the tasting room','Suggerisci di aspettare fuori dalla sala degustazione','Exclusion loses a learning and commercial opportunity.','L’esclusione fa perdere un’opportunità formativa e commerciale.',0)])
])

S('02','production','quality','Choose the process','Scegliere il processo','Process technology and capacity','Tecnologia di processo e capacità',
 'A small winery must select a dealcoholisation pathway. Equipment costs, sensory quality and operational conditions all matter.',
 'Una piccola cantina deve scegliere una tecnologia di dealcolizzazione. Contano costi degli impianti, qualità sensoriale e condizioni operative.',[
 Q('Before buying equipment, what is the first action?','Prima di acquistare un impianto, qual è il primo passo?',
 'Technical feasibility includes quality, capacity, utilities, operating costs and supplier trials.','La fattibilità considera qualità, capacità, utenze, costi operativi e prove con i fornitori.',[
 A('Compare process trials against a common specification','Confronta prove di processo su specifiche comuni','Controlled trials reveal trade-offs before major investment.','Le prove controllate evidenziano i compromessi prima dell’investimento.',2),
 A('Choose the cheapest quoted machine','Scegli il macchinario con il preventivo più basso','Capex alone misses energy, maintenance and product performance.','Il solo investimento iniziale ignora consumi, manutenzione e qualità.',0),
 A('Ask for supplier presentations only','Richiedi soltanto presentazioni commerciali','Useful first contact, but insufficient to verify performance.','Primo contatto utile, ma non basta a verificare le prestazioni.',1)]),
 Q('The trial reduces alcohol but strips key aromas. Your response?','La prova riduce l’alcol ma impoverisce gli aromi. Come procedi?',
 'Optimise the overall process with sensory, chemical and stability verification.','Ottimizza il processo verificando sensorialità, analisi e stabilità.',[
 A('Accept it: alcohol is the only quality parameter','Accetta: conta solo il tenore alcolico','Product acceptance depends on more than ABV.','L’accettazione del prodotto dipende da più del grado alcolico.',0),
 A('Adjust process settings and repeat comparative sensory trials','Regola il processo e ripeti prove sensoriali comparative','A test-and-learn approach protects the product profile.','Un approccio sperimentale protegge il profilo del prodotto.',2),
 A('Add flavourings without technical or regulatory review','Aggiungi aromi senza verifiche tecniche o normative','Product changes require assessment of their suitability and legality.','Le modifiche al prodotto richiedono verifiche tecniche e legali.',1)]),
 Q('Orders may double next season. Which investment logic works best?','Gli ordini potrebbero raddoppiare. Quale logica d’investimento scegli?',
 'Match capacity with evidence and feasible scale-up options.','Dimensiona la capacità con dati e possibilità concrete di espansione.',[
 A('Build the largest possible plant immediately','Costruisci subito il più grande impianto possibile','Overcapacity can hurt the economics and resource efficiency.','La sovracapacità può danneggiare costi ed efficienza.',0),
 A('Choose a phased option with service and expansion plans','Scegli una soluzione per fasi con assistenza e piano di espansione','Good: scale follows verified demand and operating performance.','Bene: la crescita segue la domanda verificata e le prestazioni.',2),
 A('Use current capacity and ignore future constraints','Mantieni la capacità e ignora i vincoli futuri','Conservative, but it risks becoming a bottleneck.','Prudente, ma rischia di creare un collo di bottiglia.',1)])
])
S('03','production','quality','Protect the sensory profile','Proteggere il profilo sensoriale','Aroma, mouthfeel and trials','Aromi, struttura e prove',
 'Your first prototype meets an alcohol target but does not taste convincing. The quality team needs an improvement plan.',
 'Il primo prototipo rispetta l’obiettivo alcolico, ma non convince all’assaggio. Serve un piano di miglioramento.',[
 Q('The team reports that the wine tastes thin. What is useful evidence?','Il team riferisce che il vino è poco strutturato. Quali dati servono?',
 'Use sensory panels alongside relevant analytical measures; no single value explains the whole experience.','Usa panel sensoriali insieme a misure analitiche pertinenti; nessun dato spiega tutta l’esperienza.',[
 A('A blind, structured comparison with analytical measures','Un confronto alla cieca e strutturato con misure analitiche','Excellent: compare prototypes rigorously.','Ottimo: confronta i prototipi in modo rigoroso.',2),
 A('The cellar manager’s single tasting opinion','Solo il giudizio del responsabile di cantina','Expertise matters, but a single opinion is not reproducible evidence.','L’esperienza conta, ma un solo giudizio non è riproducibile.',1),
 A('Ignore taste until marketing begins','Ignora il gusto fino al lancio commerciale','Ignoring a known sensory weakness raises launch risk.','Ignorare un difetto noto aumenta il rischio al lancio.',0)]),
 Q('An appealing prototype becomes unstable in storage. What do you prioritise?','Un prototipo apprezzato presenta instabilità in conservazione. Cosa fai?',
 'Quality includes microbiological safety, stability and shelf-life validation.','La qualità include sicurezza microbiologica, stabilità e verifica della conservabilità.',[
 A('Accelerated and real-time stability tests with a safety review','Prove di stabilità accelerate e reali, con verifica della sicurezza','Correct: commercial release requires verified stability.','Corretto: la commercializzazione richiede stabilità verificata.',2),
 A('Reduce the advertised shelf life without testing','Riduci la shelf life dichiarata senza test','A shorter date alone does not establish safe performance.','Una data più breve non dimostra da sola la sicurezza.',1),
 A('Ship immediately because tasters liked it','Spedisci subito perché piace ai degustatori','A sensory score cannot substitute stability controls.','L’esito sensoriale non sostituisce i controlli di stabilità.',0)]),
 Q('A team member proposes a strong sweetness correction. Your next move?','Un collega propone una forte correzione della dolcezza. Come procedi?',
 'Formulation choices need controlled tests and clear nutrition communication.','Le modifiche di formulazione richiedono prove controllate e informazione nutrizionale chiara.',[
 A('Run dose-response tasting and update nutrition calculations','Testa dosaggi diversi e aggiorna i calcoli nutrizionali','Balances taste, consistency and informed consumer choice.','Bilancia gusto, coerenza e scelte informate.',2),
 A('Use a small adjustment and document it later','Fai una piccola correzione e documentala dopo','Incremental change helps, but documentation cannot be deferred.','Una modifica minima aiuta, ma la documentazione non va rinviata.',1),
 A('Maximise sweetness and advertise it as sugar-free','Aumenta molto la dolcezza e dichiara «senza zuccheri»','An inaccurate nutrition claim creates a major trust and compliance risk.','Una dichiarazione nutrizionale inesatta crea seri rischi.',0)])
])
S('04','production','quality','Release the batch','Autorizzare il lotto','Verification and traceability','Verifiche e tracciabilità',
 'A distributor requests 5,000 bottles. You are responsible for release documentation and traceability.',
 'Un distributore richiede 5.000 bottiglie. Sei responsabile della documentazione e tracciabilità del lotto.',[
 Q('Which data package best supports a release decision?','Quale pacchetto di dati supporta meglio lo svincolo del lotto?',
 'Link analytical checks, product specifications, records and responsible approval.','Collega analisi, specifiche, registrazioni e approvazione responsabile.',[
 A('Batch analyses, specification limits, traceability and sign-off','Analisi, limiti di specifica, tracciabilità e approvazione','Strong controls support reproducible quality decisions.','Controlli solidi sostengono decisioni riproducibili.',2),
 A('A tasting note and delivery order','Una nota di degustazione e l’ordine di consegna','Useful context, but insufficient as formal release evidence.','Elementi utili, ma insufficienti per lo svincolo.',1),
 A('Only the invoice','Soltanto la fattura','Commercial paperwork is not technical product verification.','La documentazione commerciale non verifica il prodotto.',0)]),
 Q('A measurement unexpectedly falls outside specification. What happens?','Una misura risulta fuori specifica. Cosa succede?',
 'Hold, investigate, document and repeat or extend tests according to procedures.','Blocca, indaga, documenta e ripeti/approfondisci i test secondo procedura.',[
 A('Release and quietly amend the spreadsheet','Rilascia e correggi il foglio di calcolo senza segnalarlo','Never hide an out-of-specification result.','Non occultare mai un risultato fuori specifica.',0),
 A('Place the batch on hold and investigate the deviation','Blocca il lotto e indaga la deviazione','Excellent: safety and traceability before shipment.','Ottimo: sicurezza e tracciabilità prima della spedizione.',2),
 A('Repeat only until a passing value appears','Ripeti solo finché appare un risultato conforme','Retesting must follow a documented, justified investigation.','Le ripetizioni devono seguire un’indagine documentata.',1)]),
 Q('A retailer asks you to prove which customers received a batch. Your tool?','Un rivenditore chiede di identificare i destinatari del lotto. Quale strumento usi?',
 'Lot-level traceability is essential for targeted corrective actions.','La tracciabilità di lotto è essenziale per interventi mirati.',[
 A('The company Instagram page','La pagina Instagram dell’azienda','Social posts do not provide reliable batch movements.','I social non documentano i movimenti di lotto.',0),
 A('A lot register linking production, stock and dispatch','Un registro lotti che collega produzione, magazzino e spedizione','Correct: demonstrate a traceable chain from batch to buyer.','Corretto: la filiera dal lotto al cliente è ricostruibile.',2),
 A('A handwritten list of key customers','Un elenco scritto dei clienti principali','Partial information may miss affected recipients.','Le informazioni parziali possono escludere destinatari.',1)])
])
S('05','impact','planet','The resource challenge','La sfida delle risorse','Energy, water and evidence','Energia, acqua ed evidenze',
 'Energy and water bills rise while the winery promises lower-impact production. You must choose what to improve first.',
 'Le bollette crescono mentre la cantina promette una produzione a minore impatto. Devi decidere cosa migliorare.',[
 Q('How should you identify the biggest improvement opportunity?','Come individui il miglior intervento?',
 'Measure resource use at meaningful process boundaries before selecting measures.','Misura i consumi per fase di processo prima di scegliere interventi.',[
 A('Map energy and water use per process and litre of product','Mappa consumi per processo e litro di prodotto','A measured baseline makes improvements verifiable.','Una baseline misurata rende i miglioramenti verificabili.',2),
 A('Replace all lighting first','Sostituisci subito tutte le luci','May help, but may not target the main production loads.','Può aiutare, ma potrebbe non intervenire sui carichi principali.',1),
 A('Claim “carbon neutral” without inventory','Dichiara «carbon neutral» senza inventario','A claim cannot replace measurement or substantiation.','Una dichiarazione non sostituisce misure e prove.',0)]),
 Q('A supplier proposes an energy-intensive solution with better aroma retention. What next?','Un fornitore propone più energia ma migliore resa aromatica. Che fai?',
 'Evaluate environmental and quality trade-offs together rather than assuming one metric dominates.','Valuta insieme impatto ambientale e qualità, senza ridurre tutto a un dato.',[
 A('Reject it automatically because electricity use is higher','Scarta subito perché usa più elettricità','A single indicator can conceal important system trade-offs.','Un solo indicatore può nascondere compromessi importanti.',1),
 A('Compare energy, sensory outcomes, losses and alternatives','Confronta energia, qualità sensoriale, perdite e alternative','Best: analyse the complete operational trade-off.','Meglio: analizzi il compromesso operativo completo.',2),
 A('Install it and describe the process as zero-impact','Installala e descrivi il processo come a impatto zero','More impact and an unsubstantiated claim are double risks.','Impatto maggiore e dichiarazione non provata: doppio rischio.',0)]),
 Q('Which performance indicator belongs in the monthly dashboard?','Quale indicatore va nella dashboard mensile?',
 'Use comparable intensity metrics with clear boundaries and periodic reviews.','Usa indicatori di intensità comparabili, con confini chiari e revisioni periodiche.',[
 A('A photo of the solar panels','Una foto dei pannelli solari','Visual evidence is not a performance metric.','Una foto non è un indicatore di prestazione.',0),
 A('Total electricity spend without production volumes','Spesa elettrica totale senza volumi prodotti','Cost alone can change because of tariffs or output.','La spesa varia anche per tariffe e volumi.',1),
 A('kWh and litres of water per litre of finished product','kWh e litri d’acqua per litro di prodotto finito','Normalised indicators allow meaningful comparison.','Gli indicatori normalizzati permettono confronti utili.',2)])
])
S('06','impact','planet','Nothing goes to waste?','Nulla si spreca?','Circular choices and side-streams','Economia circolare e sottoprodotti',
 'The cellar has grape and processing side-streams. A local startup offers to valorise them.',
 'La cantina produce sottoprodotti dell’uva e del processo. Una startup propone di valorizzarli.',[
 Q('Before sending a side-stream to another business, what must you check?','Prima di cedere un sottoprodotto a un’altra impresa, cosa controlli?',
 'Material classification, safety, traceability and feasible use come before circular claims.','Classificazione, sicurezza, tracciabilità e destinazione precedono le dichiarazioni di circolarità.',[
 A('Legal status, safety and a documented destination','Status giuridico, sicurezza e destinazione documentata','Responsible valorisation begins with verification.','La valorizzazione responsabile inizia dalla verifica.',2),
 A('Whether the startup has a good-looking website','Se la startup ha un bel sito web','Reputation can support due diligence but cannot substitute it.','La reputazione non sostituisce la dovuta verifica.',1),
 A('Send the material without records','Invia il materiale senza registrazioni','Untracked transfer creates significant control risks.','Il trasferimento senza tracce crea rischi importanti.',0)]),
 Q('The startup offers a premium but requires long-distance transport. Your evaluation?','La startup paga bene ma richiede lunghi trasporti. Come valuti?',
 'Circularity requires a system-wide view of logistics, avoided impacts and economics.','La circolarità richiede una visione di trasporti, impatti evitati e costi.',[
 A('Accept because any reuse is automatically sustainable','Accetta: ogni riuso è automaticamente sostenibile','Reuse is not automatically the lowest-impact option.','Il riuso non è automaticamente la soluzione meno impattante.',0),
 A('Compare alternative outlets with transport and process impacts','Confronta destinazioni e impatti di trasporto/processo','A sound decision uses net benefits, not labels.','Una buona decisione valuta benefici netti, non etichette.',2),
 A('Accept only if the sales price rises','Accetta solo se il prezzo di vendita aumenta','Economics matter, but so do environmental and compliance factors.','L’economia conta, ma anche impatti e conformità.',1)]),
 Q('How do you communicate a verified circular solution?','Come comunichi una pratica circolare verificata?',
 'Specific, bounded claims supported by documents are more credible than absolute language.','Le affermazioni specifiche e documentate sono più credibili di slogan assoluti.',[
 A('“Our winery has zero waste”','«La nostra cantina non produce rifiuti»','An absolute claim requires extraordinary evidence.','Una dichiarazione assoluta richiede prove molto forti.',0),
 A('Describe the side-stream, route and evidence clearly','Descrivi sottoprodotto, processo ed evidenze','Specific transparency is credible and teachable.','La trasparenza specifica è credibile e formativa.',2),
 A('Say only “we care about the planet”','Scrivi soltanto «ci sta a cuore il pianeta»','Generic values do not explain the actual achievement.','I valori generici non spiegano il risultato concreto.',1)])
])
S('07','digital','trust','Can you say “0.0”?','Puoi dire «0,0»?','Alcohol claims and product facts','Tenore alcolico e informazioni prodotto',
 'The marketing team wants a prominent zero-alcohol claim. Your laboratory results and records must support it.',
 'Il marketing vuole una grande indicazione «zero alcol». Analisi e registrazioni devono supportarla.',[
 Q('A verified result is 0.08% vol. Under EU Regulation 2026/471, can the product carry “0.0%”?','Il risultato verificato è 0,08% vol. Secondo il Reg. UE 2026/471 può indicare «0,0%»?',
 'The specific “0.0%” expression requires an actual alcohol strength not exceeding 0.05% vol.','La dicitura «0,0%» richiede un tenore alcolico effettivo non superiore a 0,05% vol.',[
 A('Yes, because it is below 0.5%','Sì, perché è sotto lo 0,5%','Below 0.5% may qualify for “alcohol-free”, not automatically for “0.0%”.','Sotto 0,5% può valere «alcohol-free», non automaticamente «0,0%».',0),
 A('No: verify category and use the legally supported terminology','No: verifica la categoria e usa una denominazione consentita','Correct: numerical distinctions matter for truthful labels.','Corretto: le soglie numeriche contano per l’etichettatura.',2),
 A('Print 0.0% but add a small footnote','Stampa «0,0%» con una piccola nota','A footnote cannot cure a false leading statement.','Una nota non corregge una dichiarazione principale inesatta.',1)]),
 Q('The label designer proposes one visual that hides mandatory information. What do you prioritise?','Il designer nasconde le informazioni obbligatorie nel layout. Cosa fai?',
 'Branding cannot override mandatory product information and legibility.','Il branding non può prevalere su informazioni obbligatorie e leggibilità.',[
 A('Approve the design: premium bottles need minimal text','Approva: il premium deve avere poco testo','Design-led omission creates compliance and trust problems.','Omettere informazioni crea problemi di conformità e fiducia.',0),
 A('Redesign the hierarchy around mandatory information','Ridisegna la gerarchia visiva intorno ai dati obbligatori','Good design integrates legal information accessibly.','Il buon design integra i dati obbligatori in modo accessibile.',2),
 A('Place all required information in microscopic text','Sposta tutto in microtesto','Presence alone is not enough if information is illegible.','La sola presenza non basta se il testo è illeggibile.',1)]),
 Q('A foreign distributor requests “certified 0.0%” without showing a certification. Your decision?','Un distributore chiede «0,0% certificato» senza alcuna certificazione. Cosa fai?',
 'Check every certification, endorsement and market-specific requirement before using the claim.','Verifica certificazioni, approvazioni e requisiti del mercato di destinazione.',[
 A('Ask for documentary proof and legal review before printing','Richiedi prove documentali e verifica legale prima della stampa','Evidence-led wording protects commercial credibility.','Una comunicazione basata su prove tutela la credibilità.',2),
 A('Use the word because it sounds reassuring','Usa il termine perché rassicura','Unverified certification language is misleading.','Un riferimento a certificazione non verificata è fuorviante.',0),
 A('Replace “certified” with “guaranteed”','Sostituisci «certificato» con «garantito»','Changing the word may leave the implied claim unsupported.','Cambiare parola può lasciare una promessa non dimostrata.',1)])
])
S('08','digital','trust','Build the smart label','Progettare la smart label','QR, accessibility and privacy','QR, accessibilità e privacy',
 'A designer, compliance officer and marketer disagree about the QR code. You decide the digital architecture.',
 'Designer, responsabile compliance e marketing non sono d’accordo sul QR. Decidi l’architettura digitale.',[
 Q('Where should mandatory nutrition and ingredient information lead?','Dove deve portare il QR per ingredienti e dichiarazione nutrizionale obbligatori?',
 'Dedicated electronic labelling must be accessible and kept separate from marketing and user tracking.','L’etichetta elettronica obbligatoria deve essere accessibile e separata dal marketing e dal tracking.',[
 A('A dedicated accessible, non-tracking product information page','Una pagina prodotto dedicata, accessibile e senza tracking','Correct: transparent product facts come first.','Corretto: prima le informazioni chiare sul prodotto.',2),
 A('A campaign landing page with a product-data tab','Una landing pubblicitaria con una scheda prodotto','Advertising and compliance content should not be intermingled.','Pubblicità e informazioni obbligatorie vanno separate.',1),
 A('A shop page requiring sign-in','Uno shop che richiede l’accesso','Login requirements and promotion obstruct compliance access.','Login e promozioni ostacolano l’accesso alle informazioni.',0)]),
 Q('A visitor scans the QR on an older phone in a rural area. What helps?','Una persona scansiona il QR con un telefono datato in area rurale. Cosa aiuta?',
 'Mobile performance, readable text and low-bandwidth layouts improve inclusion.','Prestazioni su mobile, testo leggibile e pagine leggere migliorano l’inclusione.',[
 A('A text-first, fast-loading responsive page','Pagina responsive, leggera e centrata sul testo','Low-bandwidth design helps real users access information.','Una pagina leggera aiuta l’accesso reale.',2),
 A('A high-definition autoplay video before the facts','Video HD automatico prima dei dati','Video-heavy gates exclude users with limited connectivity.','I video obbligatori escludono connessioni limitate.',0),
 A('A desktop page that can be zoomed','Una pagina desktop ingrandibile','Possible to use, but less comfortable and accessible.','Utilizzabile, ma meno pratica e accessibile.',1)]),
 Q('The marketing team wants visitor analytics on the compliance page. What is the safer architecture?','Il marketing vuole tracciare gli utenti della pagina obbligatoria. Qual è la scelta più sicura?',
 'EU rules restrict tracking on mandatory electronic wine labels. Keep promotional analytics elsewhere.','Le regole UE limitano il tracking sulle etichette elettroniche obbligatorie. Tieni le analytics commerciali altrove.',[
 A('Track behaviour with cookies before showing ingredients','Usa cookie prima di mostrare gli ingredienti','Tracking obstructs legally required access and conflicts with the e-label rules.','Il tracking ostacola l’accesso e contrasta con le regole e-label.',0),
 A('Separate mandatory information from optional marketing experiences','Separa le informazioni obbligatorie dalle esperienze promozionali facoltative','Best: different purposes, different digital spaces.','Meglio: scopi diversi in spazi digitali diversi.',2),
 A('Remove cookies but still fingerprint devices','Togli i cookie ma usa il fingerprinting','Avoiding cookies does not make tracking appropriate.','Eliminare i cookie non rende opportuno il tracciamento.',1)])
])
S('09','impact','planet','The packaging decision','La decisione sul packaging','Materials, logistics and design','Materiali, logistica e design',
 'Two bottle proposals look sustainable for different reasons. The actual footprint depends on the full delivery system.',
 'Due proposte di bottiglia sembrano sostenibili per ragioni diverse. L’impatto dipende dall’intero sistema logistico.',[
 Q('A heavy bottle looks premium, but transport emissions may rise. How do you decide?','Una bottiglia pesante sembra premium, ma i trasporti pesano. Come decidi?',
 'Assess materials, weight, logistics, breakage and end-of-life together.','Valuta materiali, peso, logistica, rotture e fine vita insieme.',[
 A('Compare packaging options using consistent lifecycle boundaries','Confronta alternative con confini di ciclo di vita coerenti','A system view reveals material and transport trade-offs.','Una visione sistemica mostra i compromessi.',2),
 A('Always choose the heaviest bottle as premium','Scegli sempre quella più pesante: è premium','Perceived value does not prove lower impact.','Il valore percepito non dimostra un impatto minore.',0),
 A('Pick the lightest without performance tests','Scegli la più leggera senza prove tecniche','Weight matters, but durability and product protection do too.','Conta il peso, ma anche protezione e durata.',1)]),
 Q('A recycled-content claim appears on the label. What makes it defensible?','Una dicitura su contenuto riciclato compare in etichetta. Cosa la rende difendibile?',
 'Use supplier documentation and the correct metric and scope.','Usa documentazione del fornitore e indica quantità e ambito corretti.',[
 A('An estimate made by the design team','Una stima elaborata dal team grafico','Unsupported estimates undermine trust.','Le stime senza prove minano la fiducia.',0),
 A('A supplier certificate plus a consistent calculation and claim','Certificazione del fornitore e calcolo/dicitura coerenti','Strong substantiation improves transparency.','Una prova solida migliora la trasparenza.',2),
 A('A general recycling icon with no explanation','Un simbolo di riciclo senza spiegazione','The symbol may be unclear and not support a specific percentage.','Il simbolo può essere ambiguo e non provare una percentuale.',1)]),
 Q('A bottle redesign might reduce breakage but uses more material. Which test?','Il nuovo design riduce le rotture ma usa più materiale. Quale test?',
 'Packaging performance and environmental footprint should be tested on the same functional basis.','Prestazioni e impatto vanno valutati sulla stessa unità funzionale.',[
 A('A/B test shipping damage alongside material and delivery impacts','Test A/B di rotture e impatti di materiali e consegne','Measures the actual trade-off in the distribution chain.','Misura il vero compromesso distributivo.',2),
 A('Choose based only on shelf appearance','Scegli solo in base alla presenza sullo scaffale','Visual appeal cannot capture losses and resource use.','L’estetica non misura perdite e risorse.',0),
 A('Use extra cushioning in every shipment','Aggiungi sempre più materiale protettivo','May reduce loss but increases material use without optimisation.','Può ridurre i danni ma aumenta i materiali senza ottimizzare.',1)])
])
S('10','market','market','Price without guessing','Prezzi senza indovinare','Willingness to pay and margins','Disponibilità a pagare e margini',
 'Your pilot performs well in tastings. The next challenge is finding a price that customers accept and the winery can sustain.',
 'Il pilot piace nelle degustazioni. Ora serve un prezzo che i clienti accettino e l’azienda possa sostenere.',[
 Q('Which research design best informs the first price?','Quale metodo informa meglio il primo prezzo?',
 'Use price scenarios by segment, not one universal assumption.','Usa scenari di prezzo per segmento, non un’ipotesi universale.',[
 A('Test willingness to pay and tasting by segment','Testa disponibilità a pagare e assaggio per segmento','A tested range helps reduce pricing uncertainty.','Un intervallo testato riduce l’incertezza sul prezzo.',2),
 A('Copy the leading alcoholic wine price','Copia il prezzo del vino alcolico leader','Category expectations and costs may differ.','Aspettative e costi di categoria possono differire.',1),
 A('Set the highest price that looks premium','Imposta il prezzo più alto perché premium','An untested premium can deter trial.','Un premium non testato può scoraggiare la prova.',0)]),
 Q('Trial demand rises after a deep discount, but margin disappears. What next?','Con un forte sconto aumenta la prova, ma il margine sparisce. Cosa fai?',
 'Test contribution margins, repeat purchase and acquisition strategy together.','Valuta margini di contribuzione, riacquisto e acquisizione insieme.',[
 A('Keep discounting indefinitely','Continua a scontare senza limite','Volume growth without contribution can be unsustainable.','Crescere senza margini può essere insostenibile.',0),
 A('Compare targeted trial promotions with repeat-purchase metrics','Confronta promozioni mirate e metriche di riacquisto','Better evidence separates trial from profitable demand.','Distingui prova da domanda sostenibile.',2),
 A('Remove every promotion at once','Elimina tutte le promozioni subito','May protect margin, but misses useful controlled trial.','Protegge i margini ma rinuncia a test mirati.',1)]),
 Q('Two export markets produce different responses to the same price. Your strategy?','Due mercati esteri reagiscono diversamente allo stesso prezzo. La strategia?',
 'Validate local costs and customer preferences before harmonising pricing.','Valida costi locali e preferenze prima di uniformare i prezzi.',[
 A('Use identical prices and positioning everywhere','Stesso prezzo e posizionamento ovunque','Cross-market variation makes a universal approach risky.','Le differenze fra mercati rendono rischioso un approccio unico.',0),
 A('Create market-specific tests and document assumptions','Prepara test per mercato e documenta le ipotesi','Market evidence supports differentiated decisions.','L’evidenza di mercato supporta strategie differenziate.',2),
 A('Set prices purely from distributor advice','Definisci prezzi soltanto su consiglio del distributore','Distributor knowledge helps, but needs validation.','L’esperienza del distributore aiuta, ma va verificata.',1)])
])
S('11','market','market','Crossing borders','Entrare nei mercati esteri','Exports, partners and evidence','Esportazioni, partner ed evidenze',
 'A Dutch buyer is interested in your wine. You must prepare a credible, scalable entry into a new market.',
 'Un buyer olandese è interessato al vino. Devi preparare un ingresso credibile e sostenibile sul mercato.',[
 Q('What belongs in the initial distributor brief?','Cosa inserisci nel primo dossier per il distributore?',
 'Provide product evidence, intended positioning, logistics and claims review.','Fornisci evidenze di prodotto, posizionamento, logistica e verifica dei claim.',[
 A('Validated specs, target segment, commercial terms and compliance checks','Specifiche validate, target, condizioni e verifica conformità','A strong dossier lets buyers evaluate real opportunity.','Un dossier solido consente una valutazione reale.',2),
 A('Only a promotional video','Solo un video promozionale','Attention alone does not answer technical and commercial questions.','L’attenzione non risponde ai quesiti tecnici e commerciali.',1),
 A('Unverified health and wellness promises','Promesse salutistiche non verificate','Unsubstantiated health positioning adds major risks.','Promesse salutistiche non provate creano rischi.',0)]),
 Q('The importer wants a big first order before trial. How do you reduce risk?','L’importatore vuole un grande ordine prima di testare. Come riduci il rischio?',
 'Stage commitments and verify customer response and operational capacity.','Procedi per fasi e verifica domanda e capacità produttiva.',[
 A('Accept all volume immediately','Accetta subito tutti i volumi','Unverified orders strain quality and working capital.','Ordini non verificati mettono sotto pressione qualità e liquidità.',0),
 A('Propose a pilot with agreed validation milestones','Proponi un pilot con traguardi di validazione','Phased scale-up balances ambition and control.','Una crescita per fasi bilancia ambizione e controllo.',2),
 A('Decline any export opportunity','Rifiuta ogni opportunità di export','Avoids exposure but prevents useful learning.','Evita il rischio ma impedisce di imparare.',1)]),
 Q('How do you adapt the story to a different culture?','Come adatti la narrazione a una cultura diversa?',
 'Translate and validate meaning without changing verified product facts.','Traduce e valida i messaggi senza alterare i fatti di prodotto.',[
 A('Localise language and check claims with local partners','Adatta la lingua e verifica i claim con partner locali','Contextual relevance plus factual consistency builds trust.','Rilevanza locale e coerenza fattuale creano fiducia.',2),
 A('Reuse the home-market copy without review','Riusa il testo nazionale senza revisione','May be understandable, but risks missing local meaning and rules.','Può funzionare, ma rischia incomprensioni e disallineamenti.',1),
 A('Promise benefits the product cannot demonstrate','Prometti benefici che il prodotto non dimostra','Changing claims to fit a market undermines trust.','Modificare i fatti per il mercato mina la fiducia.',0)])
])
S('12','market','trust','Tell the true story','Raccontare una storia vera','Positioning and transparent narratives','Posizionamento e narrazione trasparente',
 'Your agency proposes three stories: luxury, health and responsible craftsmanship. Only evidence-led communication is credible.',
 'L’agenzia propone lusso, salute e artigianalità responsabile. È credibile solo una comunicazione basata sui fatti.',[
 Q('The copy says “healthy wine for everyone”. What should you do?','Il copy dice «vino salutare per tutti». Cosa fai?',
 'Avoid broad or unauthorised health claims; communicate verifiable product characteristics.','Evita claim salutistici generici o non autorizzati; comunica caratteristiche verificabili.',[
 A('Use the claim because the product has less alcohol','Usa il claim perché contiene meno alcol','Lower alcohol content does not justify broad health promises.','Meno alcol non giustifica promesse salutistiche generiche.',0),
 A('Focus on verified composition and intended occasions','Concentrati su composizione verificata e occasioni d’uso','Clear factual communication supports informed choice.','Informazioni fattuali favoriscono scelte consapevoli.',2),
 A('Replace “healthy” with “guilt-free”','Sostituisci «salutare» con «senza sensi di colpa»','Still implies an unverified normative health narrative.','Resta una narrazione allusiva e non verificata.',1)]),
 Q('Consumers say the dealcoholisation process sounds unnatural. What is the best response?','I consumatori trovano innaturale la dealcolizzazione. Come rispondi?',
 'Explain the process clearly and allow questions, rather than hiding it.','Spiega con chiarezza il processo e lascia spazio alle domande.',[
 A('Avoid mentioning the production method','Non citare il metodo di produzione','Hiding the process reinforces confusion.','Nascondere il processo rafforza la confusione.',0),
 A('Offer a plain-language process explanation and FAQ','Offri spiegazione semplice del processo e FAQ','Transparency helps consumers form their own judgment.','La trasparenza aiuta i consumatori a decidere.',2),
 A('Use technical jargon throughout','Usa solo gergo tecnico','Technical accuracy without accessibility can alienate users.','L’accuratezza senza chiarezza può allontanare il pubblico.',1)]),
 Q('Your vineyard story features environmental achievements. What proof do you need?','Il racconto della vigna cita risultati ambientali. Quali prove servono?',
 'Tie each claim to a method, baseline, period and accountable record.','Collega ogni claim a metodo, baseline, periodo e documenti.',[
 A('A beautiful landscape photo','Una bella foto del paesaggio','A visual can evoke place, but not validate impact.','Una foto comunica il territorio, non prova gli impatti.',1),
 A('No evidence: authenticity is enough','Nessuna prova: basta l’autenticità','Authenticity does not exempt factual claims from evidence.','L’autenticità non esime dalla verifica.',0),
 A('Specific metrics with method, period and evidence','Metriche specifiche con metodo, periodo ed evidenze','Auditable storytelling is more robust and useful.','Una narrazione verificabile è più solida e utile.',2)])
])
S('13','experience','access','The inclusive cellar','La cantina inclusiva','Wine tourism and accessibility','Enoturismo e accessibilità',
 'The winery is designing an experience that includes non-drinkers, visitors with disabilities and international groups.',
 'La cantina progetta un’esperienza per astemi, persone con disabilità e gruppi internazionali.',[
 Q('How should a 0.0 tasting be designed?','Come progetti la degustazione 0,0?',
 'Treat low/no-alcohol tasting as a complete sensory and educational experience.','Tratta la degustazione low/no alcol come esperienza completa e formativa.',[
 A('Offer a guided sensory route with product and process information','Offri percorso sensoriale guidato con informazioni di prodotto','A complete experience increases accessibility and learning.','Un’esperienza completa migliora inclusione e apprendimento.',2),
 A('Allow non-drinkers to watch others','Lascia che gli astemi guardino gli altri','Some participation exists, but it is not equitable.','La partecipazione è possibile ma non paritaria.',1),
 A('Exclude visitors who do not drink alcohol','Escludi chi non consuma alcol','Exclusion undermines both hospitality and learning.','L’esclusione danneggia ospitalità e apprendimento.',0)]),
 Q('Visitors use wheelchairs and require step-free access. What do you plan?','Arrivano visitatori in carrozzina. Cosa organizzi?',
 'Accessibility needs advance route design and a genuinely comparable experience.','L’accessibilità richiede percorsi progettati e attività comparabili.',[
 A('A verified step-free route and alternative equivalent stations','Percorso senza barriere verificato e tappe equivalenti','Inclusion is built into delivery, not left to improvisation.','L’inclusione si progetta, non si improvvisa.',2),
 A('Ask visitors to decide on arrival','Chiedi ai visitatori di arrangiarsi all’arrivo','Last-minute workarounds add barriers and uncertainty.','Le soluzioni improvvisate creano nuove barriere.',1),
 A('Cancel their booking','Cancella la prenotazione','Discriminatory exclusion is unacceptable.','L’esclusione discriminatoria è inaccettabile.',0)]),
 Q('How do you evaluate the visitor experience after the tour?','Come valuti l’esperienza dei visitatori dopo il tour?',
 'Use accessible feedback and document improvements rather than collecting praise alone.','Raccogli feedback accessibili e documenta i miglioramenti, non solo apprezzamenti.',[
 A('Ask a few friends whether they had fun','Chiedi agli amici se si sono divertiti','Informal feedback does not represent all participants.','Il feedback informale non rappresenta tutti.',1),
 A('Collect anonymous accessible feedback and track changes','Raccogli feedback anonimi accessibili e monitora cambiamenti','Structured feedback supports continuous improvement.','Il feedback strutturato alimenta il miglioramento.',2),
 A('Only collect five-star public reviews','Raccogli solo recensioni da cinque stelle','Selective reviews bias the evidence.','Le recensioni selezionate distorcono i dati.',0)])
])
S('14','experience','quality','The unexpected incident','L’imprevisto in cantina','Risk management and response','Gestione del rischio e risposta',
 'A retailer reports inconsistent batches during a tourism weekend. The team must handle operations, customers and partners.',
 'Un rivenditore segnala lotti disomogenei durante un weekend turistico. Il team gestisce operazioni, clienti e partner.',[
 Q('A complaint suggests a possible quality deviation. Your first move?','Un reclamo segnala una possibile non conformità. Primo passo?',
 'Contain, trace and investigate before continuing distribution.','Contieni, traccia e indaga prima di continuare a distribuire.',[
 A('Quarantine potentially affected lots and initiate investigation','Isola i lotti coinvolti e avvia un’indagine','Protects users and creates evidence for an appropriate response.','Tutela gli utenti e crea evidenze per la risposta.',2),
 A('Wait for more social media comments','Aspetta altri commenti sui social','Delaying containment can widen exposure.','Rinviare il contenimento può ampliare il problema.',0),
 A('Offer a discount on the complained-about product','Offri uno sconto sul prodotto contestato','Customer service cannot replace risk assessment.','L’assistenza non sostituisce la valutazione del rischio.',1)]),
 Q('Your operations team wants to erase the suspect record. What do you decide?','Il team vuole cancellare una registrazione sospetta. Che fai?',
 'Preserve evidence and document corrections transparently.','Conserva le prove e documenta chiaramente le correzioni.',[
 A('Delete the record and re-enter a passing value','Cancella il dato e inserisci un valore conforme','Data falsification prevents reliable investigation.','La falsificazione impedisce un’indagine affidabile.',0),
 A('Preserve the original record and add an auditable correction','Conserva l’originale e aggiungi una rettifica tracciabile','Traceable changes protect integrity and accountability.','Le rettifiche tracciate tutelano integrità e responsabilità.',2),
 A('Ignore the record in future reports','Ignora il dato nei rapporti futuri','Avoiding a record hides a potentially relevant finding.','Ignorare un dato occulta informazioni rilevanti.',1)]),
 Q('What should you tell a distributor while the investigation is ongoing?','Cosa comunichi al distributore durante l’indagine?',
 'Communicate verified facts, containment measures and the next update.','Comunica fatti verificati, misure attuate e prossimo aggiornamento.',[
 A('Promise there is no issue before tests are complete','Assicura che non ci siano problemi prima delle analisi','Premature reassurance may be misleading.','Rassicurazioni premature possono essere fuorvianti.',0),
 A('Share confirmed facts, actions and a realistic update point','Condividi fatti accertati, azioni e prossima comunicazione','Clear, measured communication supports trust.','Comunicazione chiara e misurata sostiene la fiducia.',2),
 A('Say nothing until the next quarter','Non comunicare nulla fino al trimestre successivo','Silence can worsen uncertainty and relationships.','Il silenzio può peggiorare incertezza e rapporti.',1)])
])
S('15','assess','trust','The final board meeting','La riunione finale','Final assessment · five matched decisions','Valutazione finale · cinque scelte comparabili',
 'The board reviews a second launch opportunity. Apply what you learned. These five decisions use the same competency areas as the opening assessment.',
 'Il consiglio valuta una seconda opportunità di lancio. Applica quanto imparato: le cinque scelte coprono le stesse competenze della valutazione iniziale.',[
 Q('The new batch is measured at 0.07% vol. How do you handle the 0.0% headline?','Il nuovo lotto misura 0,07% vol. Come gestisci la dicitura «0,0%»?',
 'EU Regulation 2026/471 distinguishes the “0.0%” expression from the broader alcohol-free threshold.','Il Regolamento UE 2026/471 distingue la dicitura «0,0%» dalla soglia più ampia «alcohol-free».',[
 A('Print 0.0% anyway','Stampa comunque «0,0%»','The measured value is above the specific 0.05% threshold.','Il valore misurato supera la soglia specifica di 0,05%.',0),
 A('Check the permitted label category and use verified wording','Verifica la denominazione consentita e usa parole corrette','A defensible claim starts with tested product facts.','Un claim difendibile parte dai dati analitici.',2),
 A('Use 0.0% with a disclaimer','Usa «0,0%» con una nota','The headline still suggests a threshold not met.','La dicitura principale continuerebbe a indicare una soglia non rispettata.',1)]),
 Q('A logistics partner proposes a “100% climate-positive shipment” badge with no methodology. What do you do?','Un corriere propone un badge «trasporto 100% climate-positive» senza metodo. Che fai?',
 'Environmental claims require defined scope, evidence and appropriate comparisons.','I claim ambientali richiedono ambito, prove e confronti adeguati.',[
 A('Accept the badge as a marketing differentiator','Accetta il badge perché differenzia','The statement is unsupported and potentially misleading.','La dichiarazione non è dimostrata ed è potenzialmente fuorviante.',0),
 A('Use a simpler “eco-friendly” badge','Usa un badge generico «eco-friendly»','Softening the adjective does not establish evidence.','Cambiare aggettivo non produce evidenze.',1),
 A('Request auditable evidence and compare transport options','Richiedi prove verificabili e confronta i trasporti','Comparative data is better than an absolute slogan.','I dati comparativi valgono più di uno slogan assoluto.',2)]),
 Q('A foreign buyer asks for a high-volume discount. Your commercial decision?','Un buyer estero chiede un forte sconto per molti volumi. Come decidi?',
 'Test demand with margin, repeat-purchase and market-level evidence.','Verifica domanda, margini, riacquisto ed evidenze per mercato.',[
 A('Agree to every discount to increase bottle count','Accetta ogni sconto per vendere più bottiglie','Volume without sustainable margins can destroy value.','Volumi senza margini sostenibili distruggono valore.',0),
 A('Negotiate a staged test with margin and repeat-purchase metrics','Negozia un test progressivo con margini e riacquisto','Commercial learning and risk control can coexist.','Apprendimento commerciale e controllo del rischio convivono.',2),
 A('Copy the price from a different market','Copia il prezzo di un altro mercato','Transfer may fail when segments and costs differ.','La replica può fallire se cambiano segmenti e costi.',1)]),
 Q('A QR code opens a page combining mandatory ingredients with targeted advertising. Your response?','Il QR apre ingredienti obbligatori e pubblicità mirata. Come intervieni?',
 'Keep the mandatory digital-label function separate from marketing and tracking.','Separa etichetta elettronica obbligatoria da marketing e tracking.',[
 A('Retain everything and add a cookie notice','Mantieni tutto e aggiungi il banner cookie','Consent banners do not cure the mandatory e-label separation issue.','Il banner non risolve la separazione richiesta.',0),
 A('Remove ads, but keep visitor tracking','Togli pubblicità, ma mantieni il tracciamento','The tracking issue remains unresolved.','Il problema del tracciamento resta.',1),
 A('Publish a dedicated accessible page without promotional tracking','Pubblica una pagina dedicata, accessibile e senza tracking promozionale','Correct: accurate information remains immediately available.','Corretto: le informazioni restano subito accessibili.',2)]),
 Q('A group with diverse needs books a 0.0 vineyard tour. What is your plan?','Un gruppo con esigenze diverse prenota un tour 0,0. Qual è il piano?',
 'Accessibility requires a comparable visitor experience and clear product information.','L’accessibilità richiede un’esperienza comparabile e informazioni chiare.',[
 A('Offer an accessible route, clear information and equivalent sensory options','Offri percorso accessibile, informazioni chiare e opzioni sensoriali equivalenti','Excellent: anticipate diverse participation needs.','Ottimo: anticipi bisogni di partecipazione diversi.',2),
 A('Run the normal tour and improvise on arrival','Fai il tour normale e improvvisa','Some needs can be met late, but important barriers remain.','Alcuni bisogni si possono affrontare, ma restano barriere.',1),
 A('Recommend the group visit another winery','Suggerisci di scegliere un’altra cantina','Unnecessary exclusion damages accessibility and hospitality.','Escludere danneggia accessibilità e accoglienza.',0)])
])

assert len(scenarios)==15
assert sum(len(s['steps']) for s in scenarios)==49
assert all(len(q['options'])==3 for s in scenarios for q in s['steps'])
(ROOT/'content.js').write_text('/* INNOWINE D3.5 educational content – bilingual, partner review pending */\nwindow.INNOWINE_SCENARIOS = '+json.dumps(scenarios,ensure_ascii=False,indent=2)+';\n',encoding='utf-8')
print('Built',len(scenarios),'scenarios and',sum(len(s['steps']) for s in scenarios),'decisions')
