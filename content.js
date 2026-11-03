/* INNOWINE D3.5 educational content – bilingual, partner review pending */
window.INNOWINE_SCENARIOS = [
  {
    "id": "01",
    "group": "assess",
    "skill": "trust",
    "title": {
      "en": "The first board meeting",
      "it": "La prima riunione strategica"
    },
    "summary": {
      "en": "Baseline · five high-stakes choices",
      "it": "Valutazione iniziale · cinque scelte chiave"
    },
    "brief": {
      "en": "You join a cooperative preparing its first dealcoholised wine. The board needs a defensible launch plan before investing. Your five answers establish the baseline for your final assessment.",
      "it": "Entri in una cooperativa che prepara il primo vino dealcolizzato. Il consiglio vuole un piano di lancio sostenibile prima di investire. Le cinque risposte costituiranno la valutazione iniziale."
    },
    "steps": [
      {
        "prompt": {
          "en": "The pilot batch tests above the threshold for a 0.0% statement. What do you print?",
          "it": "Il lotto pilota supera la soglia prevista per indicare 0,0%. Cosa stampi?"
        },
        "lesson": {
          "en": "A claim must reflect verified analytical alcohol content and the applicable legal category.",
          "it": "La dicitura deve riflettere il tenore alcolico analiticamente verificato e la categoria legale applicabile."
        },
        "options": [
          {
            "label": {
              "en": "Keep “0.0%”; it is close enough",
              "it": "Mantieni «0,0%»: è quasi uguale"
            },
            "feedback": {
              "en": "Misleading. Numerical claims cannot be rounded into compliance.",
              "it": "Fuorviante: non si può ottenere la conformità con un arrotondamento."
            },
            "grade": 0
          },
          {
            "label": {
              "en": "Verify the batch and use a truthful, permitted designation",
              "it": "Verifica il lotto e usa una denominazione corretta"
            },
            "feedback": {
              "en": "Sound decision: verification precedes any alcohol-free claim.",
              "it": "Decisione corretta: la verifica precede qualsiasi indicazione di assenza di alcol."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "Remove all alcohol information",
              "it": "Elimina ogni riferimento all’alcol"
            },
            "feedback": {
              "en": "Avoiding the claim does not remove mandatory labelling duties.",
              "it": "Eliminare la dicitura non elimina gli obblighi di etichettatura."
            },
            "grade": 1
          }
        ]
      },
      {
        "prompt": {
          "en": "A supplier promises “the greenest bottle in Europe”, without evidence. Your response?",
          "it": "Il fornitore promette «la bottiglia più green d’Europa», senza dati. Come rispondi?"
        },
        "lesson": {
          "en": "Measure relevant impacts and substantiate comparative environmental claims.",
          "it": "Misura gli impatti rilevanti e dimostra le affermazioni ambientali comparative."
        },
        "options": [
          {
            "label": {
              "en": "Use the slogan on the package",
              "it": "Usa lo slogan sul packaging"
            },
            "feedback": {
              "en": "Unsubstantiated superlatives expose the brand to greenwashing risk.",
              "it": "I superlativi non dimostrati espongono al rischio di greenwashing."
            },
            "grade": 0
          },
          {
            "label": {
              "en": "Use the bottle but make no impact claims yet",
              "it": "Usa la bottiglia senza affermare benefici ambientali"
            },
            "feedback": {
              "en": "Safer wording, but the actual impact still needs evaluation.",
              "it": "Comunicazione più prudente, ma l’impatto va comunque valutato."
            },
            "grade": 1
          },
          {
            "label": {
              "en": "Request lifecycle evidence and compare alternatives",
              "it": "Richiedi dati di ciclo di vita e confronta alternative"
            },
            "feedback": {
              "en": "Excellent: decide on evidence, not on a supplier slogan.",
              "it": "Ottimo: decidi sulla base di evidenze, non di slogan."
            },
            "grade": 2
          }
        ]
      },
      {
        "prompt": {
          "en": "Early customers resist the intended retail price. What next?",
          "it": "I primi clienti giudicano elevato il prezzo previsto. Cosa fai?"
        },
        "lesson": {
          "en": "Combine willingness-to-pay evidence, tasting and segment testing.",
          "it": "Combina disponibilità a pagare, degustazioni e test dei segmenti."
        },
        "options": [
          {
            "label": {
              "en": "Launch nationally at the original price",
              "it": "Lancia ovunque al prezzo iniziale"
            },
            "feedback": {
              "en": "A single untested price may fail across diverse audiences.",
              "it": "Un prezzo unico non testato può fallire su pubblici diversi."
            },
            "grade": 0
          },
          {
            "label": {
              "en": "Cut the price by 30% immediately",
              "it": "Riduci subito il prezzo del 30%"
            },
            "feedback": {
              "en": "A discount may help trial, but it ignores margin and buyer differences.",
              "it": "Lo sconto può aiutare la prova, ma ignora margini e segmenti."
            },
            "grade": 1
          },
          {
            "label": {
              "en": "Test prices and tasting responses in defined segments",
              "it": "Testa prezzi e degustazioni in segmenti distinti"
            },
            "feedback": {
              "en": "Excellent: the commercial decision is supported by evidence.",
              "it": "Ottimo: la decisione commerciale è supportata da evidenze."
            },
            "grade": 2
          }
        ]
      },
      {
        "prompt": {
          "en": "Your QR information page includes ingredients and a sales popup. What do you do?",
          "it": "La pagina QR riporta ingredienti ma anche un popup commerciale. Cosa fai?"
        },
        "lesson": {
          "en": "Where an e-label supplies mandatory EU information, keep it distinct from advertising and avoid user tracking.",
          "it": "Quando una e-label veicola informazioni obbligatorie UE, separale dalla pubblicità ed evita il tracciamento."
        },
        "options": [
          {
            "label": {
              "en": "Use one page and track all visitors",
              "it": "Usa una pagina unica e traccia tutte le visite"
            },
            "feedback": {
              "en": "Mandatory e-label content must not become a marketing-tracking channel.",
              "it": "Le informazioni obbligatorie non devono diventare uno strumento di marketing e tracciamento."
            },
            "grade": 0
          },
          {
            "label": {
              "en": "Keep the ingredients but remove only the popup",
              "it": "Mantieni gli ingredienti e togli solo il popup"
            },
            "feedback": {
              "en": "Improvement, but tracking and presentation must also be checked.",
              "it": "Migliora, ma vanno verificati anche tracking e presentazione."
            },
            "grade": 1
          },
          {
            "label": {
              "en": "Create a dedicated, accessible, non-tracking compliance page",
              "it": "Crea una pagina dedicata, accessibile e senza tracking"
            },
            "feedback": {
              "en": "Best: make required information clear and separate from marketing.",
              "it": "Corretto: informazioni obbligatorie chiare e separate dal marketing."
            },
            "grade": 2
          }
        ]
      },
      {
        "prompt": {
          "en": "A tasting visitor does not drink alcohol. Which experience do you offer?",
          "it": "Una persona in visita non consuma alcol. Che esperienza proponi?"
        },
        "lesson": {
          "en": "Inclusive visitor design should allow informed participation without pressuring consumption.",
          "it": "Un’esperienza inclusiva deve consentire la partecipazione senza pressioni al consumo."
        },
        "options": [
          {
            "label": {
              "en": "A full sensory route with 0.0 options and clear product facts",
              "it": "Percorso sensoriale completo con opzioni 0,0 e informazioni chiare"
            },
            "feedback": {
              "en": "Excellent: inclusion is part of the product and the experience.",
              "it": "Ottimo: l’inclusione è parte dell’esperienza e del prodotto."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "The same tour, but skip the tasting",
              "it": "Stesso tour, ma senza degustazione"
            },
            "feedback": {
              "en": "Participation remains possible, though the experience is unequal.",
              "it": "Si può partecipare, ma l’esperienza resta limitata."
            },
            "grade": 1
          },
          {
            "label": {
              "en": "Suggest they wait outside the tasting room",
              "it": "Suggerisci di aspettare fuori dalla sala degustazione"
            },
            "feedback": {
              "en": "Exclusion loses a learning and commercial opportunity.",
              "it": "L’esclusione fa perdere un’opportunità formativa e commerciale."
            },
            "grade": 0
          }
        ]
      }
    ]
  },
  {
    "id": "02",
    "group": "production",
    "skill": "quality",
    "title": {
      "en": "Choose the process",
      "it": "Scegliere il processo"
    },
    "summary": {
      "en": "Process technology and capacity",
      "it": "Tecnologia di processo e capacità"
    },
    "brief": {
      "en": "A small winery must select a dealcoholisation pathway. Equipment costs, sensory quality and operational conditions all matter.",
      "it": "Una piccola cantina deve scegliere una tecnologia di dealcolizzazione. Contano costi degli impianti, qualità sensoriale e condizioni operative."
    },
    "steps": [
      {
        "prompt": {
          "en": "Before buying equipment, what is the first action?",
          "it": "Prima di acquistare un impianto, qual è il primo passo?"
        },
        "lesson": {
          "en": "Technical feasibility includes quality, capacity, utilities, operating costs and supplier trials.",
          "it": "La fattibilità considera qualità, capacità, utenze, costi operativi e prove con i fornitori."
        },
        "options": [
          {
            "label": {
              "en": "Compare process trials against a common specification",
              "it": "Confronta prove di processo su specifiche comuni"
            },
            "feedback": {
              "en": "Controlled trials reveal trade-offs before major investment.",
              "it": "Le prove controllate evidenziano i compromessi prima dell’investimento."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "Choose the cheapest quoted machine",
              "it": "Scegli il macchinario con il preventivo più basso"
            },
            "feedback": {
              "en": "Capex alone misses energy, maintenance and product performance.",
              "it": "Il solo investimento iniziale ignora consumi, manutenzione e qualità."
            },
            "grade": 0
          },
          {
            "label": {
              "en": "Ask for supplier presentations only",
              "it": "Richiedi soltanto presentazioni commerciali"
            },
            "feedback": {
              "en": "Useful first contact, but insufficient to verify performance.",
              "it": "Primo contatto utile, ma non basta a verificare le prestazioni."
            },
            "grade": 1
          }
        ]
      },
      {
        "prompt": {
          "en": "The trial reduces alcohol but strips key aromas. Your response?",
          "it": "La prova riduce l’alcol ma impoverisce gli aromi. Come procedi?"
        },
        "lesson": {
          "en": "Optimise the overall process with sensory, chemical and stability verification.",
          "it": "Ottimizza il processo verificando sensorialità, analisi e stabilità."
        },
        "options": [
          {
            "label": {
              "en": "Accept it: alcohol is the only quality parameter",
              "it": "Accetta: conta solo il tenore alcolico"
            },
            "feedback": {
              "en": "Product acceptance depends on more than ABV.",
              "it": "L’accettazione del prodotto dipende da più del grado alcolico."
            },
            "grade": 0
          },
          {
            "label": {
              "en": "Adjust process settings and repeat comparative sensory trials",
              "it": "Regola il processo e ripeti prove sensoriali comparative"
            },
            "feedback": {
              "en": "A test-and-learn approach protects the product profile.",
              "it": "Un approccio sperimentale protegge il profilo del prodotto."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "Add flavourings without technical or regulatory review",
              "it": "Aggiungi aromi senza verifiche tecniche o normative"
            },
            "feedback": {
              "en": "Product changes require assessment of their suitability and legality.",
              "it": "Le modifiche al prodotto richiedono verifiche tecniche e legali."
            },
            "grade": 1
          }
        ]
      },
      {
        "prompt": {
          "en": "Orders may double next season. Which investment logic works best?",
          "it": "Gli ordini potrebbero raddoppiare. Quale logica d’investimento scegli?"
        },
        "lesson": {
          "en": "Match capacity with evidence and feasible scale-up options.",
          "it": "Dimensiona la capacità con dati e possibilità concrete di espansione."
        },
        "options": [
          {
            "label": {
              "en": "Build the largest possible plant immediately",
              "it": "Costruisci subito il più grande impianto possibile"
            },
            "feedback": {
              "en": "Overcapacity can hurt the economics and resource efficiency.",
              "it": "La sovracapacità può danneggiare costi ed efficienza."
            },
            "grade": 0
          },
          {
            "label": {
              "en": "Choose a phased option with service and expansion plans",
              "it": "Scegli una soluzione per fasi con assistenza e piano di espansione"
            },
            "feedback": {
              "en": "Good: scale follows verified demand and operating performance.",
              "it": "Bene: la crescita segue la domanda verificata e le prestazioni."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "Use current capacity and ignore future constraints",
              "it": "Mantieni la capacità e ignora i vincoli futuri"
            },
            "feedback": {
              "en": "Conservative, but it risks becoming a bottleneck.",
              "it": "Prudente, ma rischia di creare un collo di bottiglia."
            },
            "grade": 1
          }
        ]
      }
    ]
  },
  {
    "id": "03",
    "group": "production",
    "skill": "quality",
    "title": {
      "en": "Protect the sensory profile",
      "it": "Proteggere il profilo sensoriale"
    },
    "summary": {
      "en": "Aroma, mouthfeel and trials",
      "it": "Aromi, struttura e prove"
    },
    "brief": {
      "en": "Your first prototype meets an alcohol target but does not taste convincing. The quality team needs an improvement plan.",
      "it": "Il primo prototipo rispetta l’obiettivo alcolico, ma non convince all’assaggio. Serve un piano di miglioramento."
    },
    "steps": [
      {
        "prompt": {
          "en": "The team reports that the wine tastes thin. What is useful evidence?",
          "it": "Il team riferisce che il vino è poco strutturato. Quali dati servono?"
        },
        "lesson": {
          "en": "Use sensory panels alongside relevant analytical measures; no single value explains the whole experience.",
          "it": "Usa panel sensoriali insieme a misure analitiche pertinenti; nessun dato spiega tutta l’esperienza."
        },
        "options": [
          {
            "label": {
              "en": "A blind, structured comparison with analytical measures",
              "it": "Un confronto alla cieca e strutturato con misure analitiche"
            },
            "feedback": {
              "en": "Excellent: compare prototypes rigorously.",
              "it": "Ottimo: confronta i prototipi in modo rigoroso."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "The cellar manager’s single tasting opinion",
              "it": "Solo il giudizio del responsabile di cantina"
            },
            "feedback": {
              "en": "Expertise matters, but a single opinion is not reproducible evidence.",
              "it": "L’esperienza conta, ma un solo giudizio non è riproducibile."
            },
            "grade": 1
          },
          {
            "label": {
              "en": "Ignore taste until marketing begins",
              "it": "Ignora il gusto fino al lancio commerciale"
            },
            "feedback": {
              "en": "Ignoring a known sensory weakness raises launch risk.",
              "it": "Ignorare un difetto noto aumenta il rischio al lancio."
            },
            "grade": 0
          }
        ]
      },
      {
        "prompt": {
          "en": "An appealing prototype becomes unstable in storage. What do you prioritise?",
          "it": "Un prototipo apprezzato presenta instabilità in conservazione. Cosa fai?"
        },
        "lesson": {
          "en": "Quality includes microbiological safety, stability and shelf-life validation.",
          "it": "La qualità include sicurezza microbiologica, stabilità e verifica della conservabilità."
        },
        "options": [
          {
            "label": {
              "en": "Accelerated and real-time stability tests with a safety review",
              "it": "Prove di stabilità accelerate e reali, con verifica della sicurezza"
            },
            "feedback": {
              "en": "Correct: commercial release requires verified stability.",
              "it": "Corretto: la commercializzazione richiede stabilità verificata."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "Reduce the advertised shelf life without testing",
              "it": "Riduci la shelf life dichiarata senza test"
            },
            "feedback": {
              "en": "A shorter date alone does not establish safe performance.",
              "it": "Una data più breve non dimostra da sola la sicurezza."
            },
            "grade": 1
          },
          {
            "label": {
              "en": "Ship immediately because tasters liked it",
              "it": "Spedisci subito perché piace ai degustatori"
            },
            "feedback": {
              "en": "A sensory score cannot substitute stability controls.",
              "it": "L’esito sensoriale non sostituisce i controlli di stabilità."
            },
            "grade": 0
          }
        ]
      },
      {
        "prompt": {
          "en": "A team member proposes a strong sweetness correction. Your next move?",
          "it": "Un collega propone una forte correzione della dolcezza. Come procedi?"
        },
        "lesson": {
          "en": "Formulation choices need controlled tests and clear nutrition communication.",
          "it": "Le modifiche di formulazione richiedono prove controllate e informazione nutrizionale chiara."
        },
        "options": [
          {
            "label": {
              "en": "Run dose-response tasting and update nutrition calculations",
              "it": "Testa dosaggi diversi e aggiorna i calcoli nutrizionali"
            },
            "feedback": {
              "en": "Balances taste, consistency and informed consumer choice.",
              "it": "Bilancia gusto, coerenza e scelte informate."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "Use a small adjustment and document it later",
              "it": "Fai una piccola correzione e documentala dopo"
            },
            "feedback": {
              "en": "Incremental change helps, but documentation cannot be deferred.",
              "it": "Una modifica minima aiuta, ma la documentazione non va rinviata."
            },
            "grade": 1
          },
          {
            "label": {
              "en": "Maximise sweetness and advertise it as sugar-free",
              "it": "Aumenta molto la dolcezza e dichiara «senza zuccheri»"
            },
            "feedback": {
              "en": "An inaccurate nutrition claim creates a major trust and compliance risk.",
              "it": "Una dichiarazione nutrizionale inesatta crea seri rischi."
            },
            "grade": 0
          }
        ]
      }
    ]
  },
  {
    "id": "04",
    "group": "production",
    "skill": "quality",
    "title": {
      "en": "Release the batch",
      "it": "Autorizzare il lotto"
    },
    "summary": {
      "en": "Verification and traceability",
      "it": "Verifiche e tracciabilità"
    },
    "brief": {
      "en": "A distributor requests 5,000 bottles. You are responsible for release documentation and traceability.",
      "it": "Un distributore richiede 5.000 bottiglie. Sei responsabile della documentazione e tracciabilità del lotto."
    },
    "steps": [
      {
        "prompt": {
          "en": "Which data package best supports a release decision?",
          "it": "Quale pacchetto di dati supporta meglio lo svincolo del lotto?"
        },
        "lesson": {
          "en": "Link analytical checks, product specifications, records and responsible approval.",
          "it": "Collega analisi, specifiche, registrazioni e approvazione responsabile."
        },
        "options": [
          {
            "label": {
              "en": "Batch analyses, specification limits, traceability and sign-off",
              "it": "Analisi, limiti di specifica, tracciabilità e approvazione"
            },
            "feedback": {
              "en": "Strong controls support reproducible quality decisions.",
              "it": "Controlli solidi sostengono decisioni riproducibili."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "A tasting note and delivery order",
              "it": "Una nota di degustazione e l’ordine di consegna"
            },
            "feedback": {
              "en": "Useful context, but insufficient as formal release evidence.",
              "it": "Elementi utili, ma insufficienti per lo svincolo."
            },
            "grade": 1
          },
          {
            "label": {
              "en": "Only the invoice",
              "it": "Soltanto la fattura"
            },
            "feedback": {
              "en": "Commercial paperwork is not technical product verification.",
              "it": "La documentazione commerciale non verifica il prodotto."
            },
            "grade": 0
          }
        ]
      },
      {
        "prompt": {
          "en": "A measurement unexpectedly falls outside specification. What happens?",
          "it": "Una misura risulta fuori specifica. Cosa succede?"
        },
        "lesson": {
          "en": "Hold, investigate, document and repeat or extend tests according to procedures.",
          "it": "Blocca, indaga, documenta e ripeti/approfondisci i test secondo procedura."
        },
        "options": [
          {
            "label": {
              "en": "Release and quietly amend the spreadsheet",
              "it": "Rilascia e correggi il foglio di calcolo senza segnalarlo"
            },
            "feedback": {
              "en": "Never hide an out-of-specification result.",
              "it": "Non occultare mai un risultato fuori specifica."
            },
            "grade": 0
          },
          {
            "label": {
              "en": "Place the batch on hold and investigate the deviation",
              "it": "Blocca il lotto e indaga la deviazione"
            },
            "feedback": {
              "en": "Excellent: safety and traceability before shipment.",
              "it": "Ottimo: sicurezza e tracciabilità prima della spedizione."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "Repeat only until a passing value appears",
              "it": "Ripeti solo finché appare un risultato conforme"
            },
            "feedback": {
              "en": "Retesting must follow a documented, justified investigation.",
              "it": "Le ripetizioni devono seguire un’indagine documentata."
            },
            "grade": 1
          }
        ]
      },
      {
        "prompt": {
          "en": "A retailer asks you to prove which customers received a batch. Your tool?",
          "it": "Un rivenditore chiede di identificare i destinatari del lotto. Quale strumento usi?"
        },
        "lesson": {
          "en": "Lot-level traceability is essential for targeted corrective actions.",
          "it": "La tracciabilità di lotto è essenziale per interventi mirati."
        },
        "options": [
          {
            "label": {
              "en": "The company Instagram page",
              "it": "La pagina Instagram dell’azienda"
            },
            "feedback": {
              "en": "Social posts do not provide reliable batch movements.",
              "it": "I social non documentano i movimenti di lotto."
            },
            "grade": 0
          },
          {
            "label": {
              "en": "A lot register linking production, stock and dispatch",
              "it": "Un registro lotti che collega produzione, magazzino e spedizione"
            },
            "feedback": {
              "en": "Correct: demonstrate a traceable chain from batch to buyer.",
              "it": "Corretto: la filiera dal lotto al cliente è ricostruibile."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "A handwritten list of key customers",
              "it": "Un elenco scritto dei clienti principali"
            },
            "feedback": {
              "en": "Partial information may miss affected recipients.",
              "it": "Le informazioni parziali possono escludere destinatari."
            },
            "grade": 1
          }
        ]
      }
    ]
  },
  {
    "id": "05",
    "group": "impact",
    "skill": "planet",
    "title": {
      "en": "The resource challenge",
      "it": "La sfida delle risorse"
    },
    "summary": {
      "en": "Energy, water and evidence",
      "it": "Energia, acqua ed evidenze"
    },
    "brief": {
      "en": "Energy and water bills rise while the winery promises lower-impact production. You must choose what to improve first.",
      "it": "Le bollette crescono mentre la cantina promette una produzione a minore impatto. Devi decidere cosa migliorare."
    },
    "steps": [
      {
        "prompt": {
          "en": "How should you identify the biggest improvement opportunity?",
          "it": "Come individui il miglior intervento?"
        },
        "lesson": {
          "en": "Measure resource use at meaningful process boundaries before selecting measures.",
          "it": "Misura i consumi per fase di processo prima di scegliere interventi."
        },
        "options": [
          {
            "label": {
              "en": "Map energy and water use per process and litre of product",
              "it": "Mappa consumi per processo e litro di prodotto"
            },
            "feedback": {
              "en": "A measured baseline makes improvements verifiable.",
              "it": "Una baseline misurata rende i miglioramenti verificabili."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "Replace all lighting first",
              "it": "Sostituisci subito tutte le luci"
            },
            "feedback": {
              "en": "May help, but may not target the main production loads.",
              "it": "Può aiutare, ma potrebbe non intervenire sui carichi principali."
            },
            "grade": 1
          },
          {
            "label": {
              "en": "Claim “carbon neutral” without inventory",
              "it": "Dichiara «carbon neutral» senza inventario"
            },
            "feedback": {
              "en": "A claim cannot replace measurement or substantiation.",
              "it": "Una dichiarazione non sostituisce misure e prove."
            },
            "grade": 0
          }
        ]
      },
      {
        "prompt": {
          "en": "A supplier proposes an energy-intensive solution with better aroma retention. What next?",
          "it": "Un fornitore propone più energia ma migliore resa aromatica. Che fai?"
        },
        "lesson": {
          "en": "Evaluate environmental and quality trade-offs together rather than assuming one metric dominates.",
          "it": "Valuta insieme impatto ambientale e qualità, senza ridurre tutto a un dato."
        },
        "options": [
          {
            "label": {
              "en": "Reject it automatically because electricity use is higher",
              "it": "Scarta subito perché usa più elettricità"
            },
            "feedback": {
              "en": "A single indicator can conceal important system trade-offs.",
              "it": "Un solo indicatore può nascondere compromessi importanti."
            },
            "grade": 1
          },
          {
            "label": {
              "en": "Compare energy, sensory outcomes, losses and alternatives",
              "it": "Confronta energia, qualità sensoriale, perdite e alternative"
            },
            "feedback": {
              "en": "Best: analyse the complete operational trade-off.",
              "it": "Meglio: analizzi il compromesso operativo completo."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "Install it and describe the process as zero-impact",
              "it": "Installala e descrivi il processo come a impatto zero"
            },
            "feedback": {
              "en": "More impact and an unsubstantiated claim are double risks.",
              "it": "Impatto maggiore e dichiarazione non provata: doppio rischio."
            },
            "grade": 0
          }
        ]
      },
      {
        "prompt": {
          "en": "Which performance indicator belongs in the monthly dashboard?",
          "it": "Quale indicatore va nella dashboard mensile?"
        },
        "lesson": {
          "en": "Use comparable intensity metrics with clear boundaries and periodic reviews.",
          "it": "Usa indicatori di intensità comparabili, con confini chiari e revisioni periodiche."
        },
        "options": [
          {
            "label": {
              "en": "A photo of the solar panels",
              "it": "Una foto dei pannelli solari"
            },
            "feedback": {
              "en": "Visual evidence is not a performance metric.",
              "it": "Una foto non è un indicatore di prestazione."
            },
            "grade": 0
          },
          {
            "label": {
              "en": "Total electricity spend without production volumes",
              "it": "Spesa elettrica totale senza volumi prodotti"
            },
            "feedback": {
              "en": "Cost alone can change because of tariffs or output.",
              "it": "La spesa varia anche per tariffe e volumi."
            },
            "grade": 1
          },
          {
            "label": {
              "en": "kWh and litres of water per litre of finished product",
              "it": "kWh e litri d’acqua per litro di prodotto finito"
            },
            "feedback": {
              "en": "Normalised indicators allow meaningful comparison.",
              "it": "Gli indicatori normalizzati permettono confronti utili."
            },
            "grade": 2
          }
        ]
      }
    ]
  },
  {
    "id": "06",
    "group": "impact",
    "skill": "planet",
    "title": {
      "en": "Nothing goes to waste?",
      "it": "Nulla si spreca?"
    },
    "summary": {
      "en": "Circular choices and side-streams",
      "it": "Economia circolare e sottoprodotti"
    },
    "brief": {
      "en": "The cellar has grape and processing side-streams. A local startup offers to valorise them.",
      "it": "La cantina produce sottoprodotti dell’uva e del processo. Una startup propone di valorizzarli."
    },
    "steps": [
      {
        "prompt": {
          "en": "Before sending a side-stream to another business, what must you check?",
          "it": "Prima di cedere un sottoprodotto a un’altra impresa, cosa controlli?"
        },
        "lesson": {
          "en": "Material classification, safety, traceability and feasible use come before circular claims.",
          "it": "Classificazione, sicurezza, tracciabilità e destinazione precedono le dichiarazioni di circolarità."
        },
        "options": [
          {
            "label": {
              "en": "Legal status, safety and a documented destination",
              "it": "Status giuridico, sicurezza e destinazione documentata"
            },
            "feedback": {
              "en": "Responsible valorisation begins with verification.",
              "it": "La valorizzazione responsabile inizia dalla verifica."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "Whether the startup has a good-looking website",
              "it": "Se la startup ha un bel sito web"
            },
            "feedback": {
              "en": "Reputation can support due diligence but cannot substitute it.",
              "it": "La reputazione non sostituisce la dovuta verifica."
            },
            "grade": 1
          },
          {
            "label": {
              "en": "Send the material without records",
              "it": "Invia il materiale senza registrazioni"
            },
            "feedback": {
              "en": "Untracked transfer creates significant control risks.",
              "it": "Il trasferimento senza tracce crea rischi importanti."
            },
            "grade": 0
          }
        ]
      },
      {
        "prompt": {
          "en": "The startup offers a premium but requires long-distance transport. Your evaluation?",
          "it": "La startup paga bene ma richiede lunghi trasporti. Come valuti?"
        },
        "lesson": {
          "en": "Circularity requires a system-wide view of logistics, avoided impacts and economics.",
          "it": "La circolarità richiede una visione di trasporti, impatti evitati e costi."
        },
        "options": [
          {
            "label": {
              "en": "Accept because any reuse is automatically sustainable",
              "it": "Accetta: ogni riuso è automaticamente sostenibile"
            },
            "feedback": {
              "en": "Reuse is not automatically the lowest-impact option.",
              "it": "Il riuso non è automaticamente la soluzione meno impattante."
            },
            "grade": 0
          },
          {
            "label": {
              "en": "Compare alternative outlets with transport and process impacts",
              "it": "Confronta destinazioni e impatti di trasporto/processo"
            },
            "feedback": {
              "en": "A sound decision uses net benefits, not labels.",
              "it": "Una buona decisione valuta benefici netti, non etichette."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "Accept only if the sales price rises",
              "it": "Accetta solo se il prezzo di vendita aumenta"
            },
            "feedback": {
              "en": "Economics matter, but so do environmental and compliance factors.",
              "it": "L’economia conta, ma anche impatti e conformità."
            },
            "grade": 1
          }
        ]
      },
      {
        "prompt": {
          "en": "How do you communicate a verified circular solution?",
          "it": "Come comunichi una pratica circolare verificata?"
        },
        "lesson": {
          "en": "Specific, bounded claims supported by documents are more credible than absolute language.",
          "it": "Le affermazioni specifiche e documentate sono più credibili di slogan assoluti."
        },
        "options": [
          {
            "label": {
              "en": "“Our winery has zero waste”",
              "it": "«La nostra cantina non produce rifiuti»"
            },
            "feedback": {
              "en": "An absolute claim requires extraordinary evidence.",
              "it": "Una dichiarazione assoluta richiede prove molto forti."
            },
            "grade": 0
          },
          {
            "label": {
              "en": "Describe the side-stream, route and evidence clearly",
              "it": "Descrivi sottoprodotto, processo ed evidenze"
            },
            "feedback": {
              "en": "Specific transparency is credible and teachable.",
              "it": "La trasparenza specifica è credibile e formativa."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "Say only “we care about the planet”",
              "it": "Scrivi soltanto «ci sta a cuore il pianeta»"
            },
            "feedback": {
              "en": "Generic values do not explain the actual achievement.",
              "it": "I valori generici non spiegano il risultato concreto."
            },
            "grade": 1
          }
        ]
      }
    ]
  },
  {
    "id": "07",
    "group": "digital",
    "skill": "trust",
    "title": {
      "en": "Can you say “0.0”?",
      "it": "Puoi dire «0,0»?"
    },
    "summary": {
      "en": "Alcohol claims and product facts",
      "it": "Tenore alcolico e informazioni prodotto"
    },
    "brief": {
      "en": "The marketing team wants a prominent zero-alcohol claim. Your laboratory results and records must support it.",
      "it": "Il marketing vuole una grande indicazione «zero alcol». Analisi e registrazioni devono supportarla."
    },
    "steps": [
      {
        "prompt": {
          "en": "A verified result is 0.08% vol. Under EU Regulation 2026/471, can the product carry “0.0%”?",
          "it": "Il risultato verificato è 0,08% vol. Secondo il Reg. UE 2026/471 può indicare «0,0%»?"
        },
        "lesson": {
          "en": "The specific “0.0%” expression requires an actual alcohol strength not exceeding 0.05% vol.",
          "it": "La dicitura «0,0%» richiede un tenore alcolico effettivo non superiore a 0,05% vol."
        },
        "options": [
          {
            "label": {
              "en": "Yes, because it is below 0.5%",
              "it": "Sì, perché è sotto lo 0,5%"
            },
            "feedback": {
              "en": "Below 0.5% may qualify for “alcohol-free”, not automatically for “0.0%”.",
              "it": "Sotto 0,5% può valere «alcohol-free», non automaticamente «0,0%»."
            },
            "grade": 0
          },
          {
            "label": {
              "en": "No: verify category and use the legally supported terminology",
              "it": "No: verifica la categoria e usa una denominazione consentita"
            },
            "feedback": {
              "en": "Correct: numerical distinctions matter for truthful labels.",
              "it": "Corretto: le soglie numeriche contano per l’etichettatura."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "Print 0.0% but add a small footnote",
              "it": "Stampa «0,0%» con una piccola nota"
            },
            "feedback": {
              "en": "A footnote cannot cure a false leading statement.",
              "it": "Una nota non corregge una dichiarazione principale inesatta."
            },
            "grade": 1
          }
        ]
      },
      {
        "prompt": {
          "en": "The label designer proposes one visual that hides mandatory information. What do you prioritise?",
          "it": "Il designer nasconde le informazioni obbligatorie nel layout. Cosa fai?"
        },
        "lesson": {
          "en": "Branding cannot override mandatory product information and legibility.",
          "it": "Il branding non può prevalere su informazioni obbligatorie e leggibilità."
        },
        "options": [
          {
            "label": {
              "en": "Approve the design: premium bottles need minimal text",
              "it": "Approva: il premium deve avere poco testo"
            },
            "feedback": {
              "en": "Design-led omission creates compliance and trust problems.",
              "it": "Omettere informazioni crea problemi di conformità e fiducia."
            },
            "grade": 0
          },
          {
            "label": {
              "en": "Redesign the hierarchy around mandatory information",
              "it": "Ridisegna la gerarchia visiva intorno ai dati obbligatori"
            },
            "feedback": {
              "en": "Good design integrates legal information accessibly.",
              "it": "Il buon design integra i dati obbligatori in modo accessibile."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "Place all required information in microscopic text",
              "it": "Sposta tutto in microtesto"
            },
            "feedback": {
              "en": "Presence alone is not enough if information is illegible.",
              "it": "La sola presenza non basta se il testo è illeggibile."
            },
            "grade": 1
          }
        ]
      },
      {
        "prompt": {
          "en": "A foreign distributor requests “certified 0.0%” without showing a certification. Your decision?",
          "it": "Un distributore chiede «0,0% certificato» senza alcuna certificazione. Cosa fai?"
        },
        "lesson": {
          "en": "Check every certification, endorsement and market-specific requirement before using the claim.",
          "it": "Verifica certificazioni, approvazioni e requisiti del mercato di destinazione."
        },
        "options": [
          {
            "label": {
              "en": "Ask for documentary proof and legal review before printing",
              "it": "Richiedi prove documentali e verifica legale prima della stampa"
            },
            "feedback": {
              "en": "Evidence-led wording protects commercial credibility.",
              "it": "Una comunicazione basata su prove tutela la credibilità."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "Use the word because it sounds reassuring",
              "it": "Usa il termine perché rassicura"
            },
            "feedback": {
              "en": "Unverified certification language is misleading.",
              "it": "Un riferimento a certificazione non verificata è fuorviante."
            },
            "grade": 0
          },
          {
            "label": {
              "en": "Replace “certified” with “guaranteed”",
              "it": "Sostituisci «certificato» con «garantito»"
            },
            "feedback": {
              "en": "Changing the word may leave the implied claim unsupported.",
              "it": "Cambiare parola può lasciare una promessa non dimostrata."
            },
            "grade": 1
          }
        ]
      }
    ]
  },
  {
    "id": "08",
    "group": "digital",
    "skill": "trust",
    "title": {
      "en": "Build the smart label",
      "it": "Progettare la smart label"
    },
    "summary": {
      "en": "QR, accessibility and privacy",
      "it": "QR, accessibilità e privacy"
    },
    "brief": {
      "en": "A designer, compliance officer and marketer disagree about the QR code. You decide the digital architecture.",
      "it": "Designer, responsabile compliance e marketing non sono d’accordo sul QR. Decidi l’architettura digitale."
    },
    "steps": [
      {
        "prompt": {
          "en": "Where should mandatory nutrition and ingredient information lead?",
          "it": "Dove deve portare il QR per ingredienti e dichiarazione nutrizionale obbligatori?"
        },
        "lesson": {
          "en": "Dedicated electronic labelling must be accessible and kept separate from marketing and user tracking.",
          "it": "L’etichetta elettronica obbligatoria deve essere accessibile e separata dal marketing e dal tracking."
        },
        "options": [
          {
            "label": {
              "en": "A dedicated accessible, non-tracking product information page",
              "it": "Una pagina prodotto dedicata, accessibile e senza tracking"
            },
            "feedback": {
              "en": "Correct: transparent product facts come first.",
              "it": "Corretto: prima le informazioni chiare sul prodotto."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "A campaign landing page with a product-data tab",
              "it": "Una landing pubblicitaria con una scheda prodotto"
            },
            "feedback": {
              "en": "Advertising and compliance content should not be intermingled.",
              "it": "Pubblicità e informazioni obbligatorie vanno separate."
            },
            "grade": 1
          },
          {
            "label": {
              "en": "A shop page requiring sign-in",
              "it": "Uno shop che richiede l’accesso"
            },
            "feedback": {
              "en": "Login requirements and promotion obstruct compliance access.",
              "it": "Login e promozioni ostacolano l’accesso alle informazioni."
            },
            "grade": 0
          }
        ]
      },
      {
        "prompt": {
          "en": "A visitor scans the QR on an older phone in a rural area. What helps?",
          "it": "Una persona scansiona il QR con un telefono datato in area rurale. Cosa aiuta?"
        },
        "lesson": {
          "en": "Mobile performance, readable text and low-bandwidth layouts improve inclusion.",
          "it": "Prestazioni su mobile, testo leggibile e pagine leggere migliorano l’inclusione."
        },
        "options": [
          {
            "label": {
              "en": "A text-first, fast-loading responsive page",
              "it": "Pagina responsive, leggera e centrata sul testo"
            },
            "feedback": {
              "en": "Low-bandwidth design helps real users access information.",
              "it": "Una pagina leggera aiuta l’accesso reale."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "A high-definition autoplay video before the facts",
              "it": "Video HD automatico prima dei dati"
            },
            "feedback": {
              "en": "Video-heavy gates exclude users with limited connectivity.",
              "it": "I video obbligatori escludono connessioni limitate."
            },
            "grade": 0
          },
          {
            "label": {
              "en": "A desktop page that can be zoomed",
              "it": "Una pagina desktop ingrandibile"
            },
            "feedback": {
              "en": "Possible to use, but less comfortable and accessible.",
              "it": "Utilizzabile, ma meno pratica e accessibile."
            },
            "grade": 1
          }
        ]
      },
      {
        "prompt": {
          "en": "The marketing team wants visitor analytics on the compliance page. What is the safer architecture?",
          "it": "Il marketing vuole tracciare gli utenti della pagina obbligatoria. Qual è la scelta più sicura?"
        },
        "lesson": {
          "en": "EU rules restrict tracking on mandatory electronic wine labels. Keep promotional analytics elsewhere.",
          "it": "Le regole UE limitano il tracking sulle etichette elettroniche obbligatorie. Tieni le analytics commerciali altrove."
        },
        "options": [
          {
            "label": {
              "en": "Track behaviour with cookies before showing ingredients",
              "it": "Usa cookie prima di mostrare gli ingredienti"
            },
            "feedback": {
              "en": "Tracking obstructs legally required access and conflicts with the e-label rules.",
              "it": "Il tracking ostacola l’accesso e contrasta con le regole e-label."
            },
            "grade": 0
          },
          {
            "label": {
              "en": "Separate mandatory information from optional marketing experiences",
              "it": "Separa le informazioni obbligatorie dalle esperienze promozionali facoltative"
            },
            "feedback": {
              "en": "Best: different purposes, different digital spaces.",
              "it": "Meglio: scopi diversi in spazi digitali diversi."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "Remove cookies but still fingerprint devices",
              "it": "Togli i cookie ma usa il fingerprinting"
            },
            "feedback": {
              "en": "Avoiding cookies does not make tracking appropriate.",
              "it": "Eliminare i cookie non rende opportuno il tracciamento."
            },
            "grade": 1
          }
        ]
      }
    ]
  },
  {
    "id": "09",
    "group": "impact",
    "skill": "planet",
    "title": {
      "en": "The packaging decision",
      "it": "La decisione sul packaging"
    },
    "summary": {
      "en": "Materials, logistics and design",
      "it": "Materiali, logistica e design"
    },
    "brief": {
      "en": "Two bottle proposals look sustainable for different reasons. The actual footprint depends on the full delivery system.",
      "it": "Due proposte di bottiglia sembrano sostenibili per ragioni diverse. L’impatto dipende dall’intero sistema logistico."
    },
    "steps": [
      {
        "prompt": {
          "en": "A heavy bottle looks premium, but transport emissions may rise. How do you decide?",
          "it": "Una bottiglia pesante sembra premium, ma i trasporti pesano. Come decidi?"
        },
        "lesson": {
          "en": "Assess materials, weight, logistics, breakage and end-of-life together.",
          "it": "Valuta materiali, peso, logistica, rotture e fine vita insieme."
        },
        "options": [
          {
            "label": {
              "en": "Compare packaging options using consistent lifecycle boundaries",
              "it": "Confronta alternative con confini di ciclo di vita coerenti"
            },
            "feedback": {
              "en": "A system view reveals material and transport trade-offs.",
              "it": "Una visione sistemica mostra i compromessi."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "Always choose the heaviest bottle as premium",
              "it": "Scegli sempre quella più pesante: è premium"
            },
            "feedback": {
              "en": "Perceived value does not prove lower impact.",
              "it": "Il valore percepito non dimostra un impatto minore."
            },
            "grade": 0
          },
          {
            "label": {
              "en": "Pick the lightest without performance tests",
              "it": "Scegli la più leggera senza prove tecniche"
            },
            "feedback": {
              "en": "Weight matters, but durability and product protection do too.",
              "it": "Conta il peso, ma anche protezione e durata."
            },
            "grade": 1
          }
        ]
      },
      {
        "prompt": {
          "en": "A recycled-content claim appears on the label. What makes it defensible?",
          "it": "Una dicitura su contenuto riciclato compare in etichetta. Cosa la rende difendibile?"
        },
        "lesson": {
          "en": "Use supplier documentation and the correct metric and scope.",
          "it": "Usa documentazione del fornitore e indica quantità e ambito corretti."
        },
        "options": [
          {
            "label": {
              "en": "An estimate made by the design team",
              "it": "Una stima elaborata dal team grafico"
            },
            "feedback": {
              "en": "Unsupported estimates undermine trust.",
              "it": "Le stime senza prove minano la fiducia."
            },
            "grade": 0
          },
          {
            "label": {
              "en": "A supplier certificate plus a consistent calculation and claim",
              "it": "Certificazione del fornitore e calcolo/dicitura coerenti"
            },
            "feedback": {
              "en": "Strong substantiation improves transparency.",
              "it": "Una prova solida migliora la trasparenza."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "A general recycling icon with no explanation",
              "it": "Un simbolo di riciclo senza spiegazione"
            },
            "feedback": {
              "en": "The symbol may be unclear and not support a specific percentage.",
              "it": "Il simbolo può essere ambiguo e non provare una percentuale."
            },
            "grade": 1
          }
        ]
      },
      {
        "prompt": {
          "en": "A bottle redesign might reduce breakage but uses more material. Which test?",
          "it": "Il nuovo design riduce le rotture ma usa più materiale. Quale test?"
        },
        "lesson": {
          "en": "Packaging performance and environmental footprint should be tested on the same functional basis.",
          "it": "Prestazioni e impatto vanno valutati sulla stessa unità funzionale."
        },
        "options": [
          {
            "label": {
              "en": "A/B test shipping damage alongside material and delivery impacts",
              "it": "Test A/B di rotture e impatti di materiali e consegne"
            },
            "feedback": {
              "en": "Measures the actual trade-off in the distribution chain.",
              "it": "Misura il vero compromesso distributivo."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "Choose based only on shelf appearance",
              "it": "Scegli solo in base alla presenza sullo scaffale"
            },
            "feedback": {
              "en": "Visual appeal cannot capture losses and resource use.",
              "it": "L’estetica non misura perdite e risorse."
            },
            "grade": 0
          },
          {
            "label": {
              "en": "Use extra cushioning in every shipment",
              "it": "Aggiungi sempre più materiale protettivo"
            },
            "feedback": {
              "en": "May reduce loss but increases material use without optimisation.",
              "it": "Può ridurre i danni ma aumenta i materiali senza ottimizzare."
            },
            "grade": 1
          }
        ]
      }
    ]
  },
  {
    "id": "10",
    "group": "market",
    "skill": "market",
    "title": {
      "en": "Price without guessing",
      "it": "Prezzi senza indovinare"
    },
    "summary": {
      "en": "Willingness to pay and margins",
      "it": "Disponibilità a pagare e margini"
    },
    "brief": {
      "en": "Your pilot performs well in tastings. The next challenge is finding a price that customers accept and the winery can sustain.",
      "it": "Il pilot piace nelle degustazioni. Ora serve un prezzo che i clienti accettino e l’azienda possa sostenere."
    },
    "steps": [
      {
        "prompt": {
          "en": "Which research design best informs the first price?",
          "it": "Quale metodo informa meglio il primo prezzo?"
        },
        "lesson": {
          "en": "Use price scenarios by segment, not one universal assumption.",
          "it": "Usa scenari di prezzo per segmento, non un’ipotesi universale."
        },
        "options": [
          {
            "label": {
              "en": "Test willingness to pay and tasting by segment",
              "it": "Testa disponibilità a pagare e assaggio per segmento"
            },
            "feedback": {
              "en": "A tested range helps reduce pricing uncertainty.",
              "it": "Un intervallo testato riduce l’incertezza sul prezzo."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "Copy the leading alcoholic wine price",
              "it": "Copia il prezzo del vino alcolico leader"
            },
            "feedback": {
              "en": "Category expectations and costs may differ.",
              "it": "Aspettative e costi di categoria possono differire."
            },
            "grade": 1
          },
          {
            "label": {
              "en": "Set the highest price that looks premium",
              "it": "Imposta il prezzo più alto perché premium"
            },
            "feedback": {
              "en": "An untested premium can deter trial.",
              "it": "Un premium non testato può scoraggiare la prova."
            },
            "grade": 0
          }
        ]
      },
      {
        "prompt": {
          "en": "Trial demand rises after a deep discount, but margin disappears. What next?",
          "it": "Con un forte sconto aumenta la prova, ma il margine sparisce. Cosa fai?"
        },
        "lesson": {
          "en": "Test contribution margins, repeat purchase and acquisition strategy together.",
          "it": "Valuta margini di contribuzione, riacquisto e acquisizione insieme."
        },
        "options": [
          {
            "label": {
              "en": "Keep discounting indefinitely",
              "it": "Continua a scontare senza limite"
            },
            "feedback": {
              "en": "Volume growth without contribution can be unsustainable.",
              "it": "Crescere senza margini può essere insostenibile."
            },
            "grade": 0
          },
          {
            "label": {
              "en": "Compare targeted trial promotions with repeat-purchase metrics",
              "it": "Confronta promozioni mirate e metriche di riacquisto"
            },
            "feedback": {
              "en": "Better evidence separates trial from profitable demand.",
              "it": "Distingui prova da domanda sostenibile."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "Remove every promotion at once",
              "it": "Elimina tutte le promozioni subito"
            },
            "feedback": {
              "en": "May protect margin, but misses useful controlled trial.",
              "it": "Protegge i margini ma rinuncia a test mirati."
            },
            "grade": 1
          }
        ]
      },
      {
        "prompt": {
          "en": "Two export markets produce different responses to the same price. Your strategy?",
          "it": "Due mercati esteri reagiscono diversamente allo stesso prezzo. La strategia?"
        },
        "lesson": {
          "en": "Validate local costs and customer preferences before harmonising pricing.",
          "it": "Valida costi locali e preferenze prima di uniformare i prezzi."
        },
        "options": [
          {
            "label": {
              "en": "Use identical prices and positioning everywhere",
              "it": "Stesso prezzo e posizionamento ovunque"
            },
            "feedback": {
              "en": "Cross-market variation makes a universal approach risky.",
              "it": "Le differenze fra mercati rendono rischioso un approccio unico."
            },
            "grade": 0
          },
          {
            "label": {
              "en": "Create market-specific tests and document assumptions",
              "it": "Prepara test per mercato e documenta le ipotesi"
            },
            "feedback": {
              "en": "Market evidence supports differentiated decisions.",
              "it": "L’evidenza di mercato supporta strategie differenziate."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "Set prices purely from distributor advice",
              "it": "Definisci prezzi soltanto su consiglio del distributore"
            },
            "feedback": {
              "en": "Distributor knowledge helps, but needs validation.",
              "it": "L’esperienza del distributore aiuta, ma va verificata."
            },
            "grade": 1
          }
        ]
      }
    ]
  },
  {
    "id": "11",
    "group": "market",
    "skill": "market",
    "title": {
      "en": "Crossing borders",
      "it": "Entrare nei mercati esteri"
    },
    "summary": {
      "en": "Exports, partners and evidence",
      "it": "Esportazioni, partner ed evidenze"
    },
    "brief": {
      "en": "A Dutch buyer is interested in your wine. You must prepare a credible, scalable entry into a new market.",
      "it": "Un buyer olandese è interessato al vino. Devi preparare un ingresso credibile e sostenibile sul mercato."
    },
    "steps": [
      {
        "prompt": {
          "en": "What belongs in the initial distributor brief?",
          "it": "Cosa inserisci nel primo dossier per il distributore?"
        },
        "lesson": {
          "en": "Provide product evidence, intended positioning, logistics and claims review.",
          "it": "Fornisci evidenze di prodotto, posizionamento, logistica e verifica dei claim."
        },
        "options": [
          {
            "label": {
              "en": "Validated specs, target segment, commercial terms and compliance checks",
              "it": "Specifiche validate, target, condizioni e verifica conformità"
            },
            "feedback": {
              "en": "A strong dossier lets buyers evaluate real opportunity.",
              "it": "Un dossier solido consente una valutazione reale."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "Only a promotional video",
              "it": "Solo un video promozionale"
            },
            "feedback": {
              "en": "Attention alone does not answer technical and commercial questions.",
              "it": "L’attenzione non risponde ai quesiti tecnici e commerciali."
            },
            "grade": 1
          },
          {
            "label": {
              "en": "Unverified health and wellness promises",
              "it": "Promesse salutistiche non verificate"
            },
            "feedback": {
              "en": "Unsubstantiated health positioning adds major risks.",
              "it": "Promesse salutistiche non provate creano rischi."
            },
            "grade": 0
          }
        ]
      },
      {
        "prompt": {
          "en": "The importer wants a big first order before trial. How do you reduce risk?",
          "it": "L’importatore vuole un grande ordine prima di testare. Come riduci il rischio?"
        },
        "lesson": {
          "en": "Stage commitments and verify customer response and operational capacity.",
          "it": "Procedi per fasi e verifica domanda e capacità produttiva."
        },
        "options": [
          {
            "label": {
              "en": "Accept all volume immediately",
              "it": "Accetta subito tutti i volumi"
            },
            "feedback": {
              "en": "Unverified orders strain quality and working capital.",
              "it": "Ordini non verificati mettono sotto pressione qualità e liquidità."
            },
            "grade": 0
          },
          {
            "label": {
              "en": "Propose a pilot with agreed validation milestones",
              "it": "Proponi un pilot con traguardi di validazione"
            },
            "feedback": {
              "en": "Phased scale-up balances ambition and control.",
              "it": "Una crescita per fasi bilancia ambizione e controllo."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "Decline any export opportunity",
              "it": "Rifiuta ogni opportunità di export"
            },
            "feedback": {
              "en": "Avoids exposure but prevents useful learning.",
              "it": "Evita il rischio ma impedisce di imparare."
            },
            "grade": 1
          }
        ]
      },
      {
        "prompt": {
          "en": "How do you adapt the story to a different culture?",
          "it": "Come adatti la narrazione a una cultura diversa?"
        },
        "lesson": {
          "en": "Translate and validate meaning without changing verified product facts.",
          "it": "Traduce e valida i messaggi senza alterare i fatti di prodotto."
        },
        "options": [
          {
            "label": {
              "en": "Localise language and check claims with local partners",
              "it": "Adatta la lingua e verifica i claim con partner locali"
            },
            "feedback": {
              "en": "Contextual relevance plus factual consistency builds trust.",
              "it": "Rilevanza locale e coerenza fattuale creano fiducia."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "Reuse the home-market copy without review",
              "it": "Riusa il testo nazionale senza revisione"
            },
            "feedback": {
              "en": "May be understandable, but risks missing local meaning and rules.",
              "it": "Può funzionare, ma rischia incomprensioni e disallineamenti."
            },
            "grade": 1
          },
          {
            "label": {
              "en": "Promise benefits the product cannot demonstrate",
              "it": "Prometti benefici che il prodotto non dimostra"
            },
            "feedback": {
              "en": "Changing claims to fit a market undermines trust.",
              "it": "Modificare i fatti per il mercato mina la fiducia."
            },
            "grade": 0
          }
        ]
      }
    ]
  },
  {
    "id": "12",
    "group": "market",
    "skill": "trust",
    "title": {
      "en": "Tell the true story",
      "it": "Raccontare una storia vera"
    },
    "summary": {
      "en": "Positioning and transparent narratives",
      "it": "Posizionamento e narrazione trasparente"
    },
    "brief": {
      "en": "Your agency proposes three stories: luxury, health and responsible craftsmanship. Only evidence-led communication is credible.",
      "it": "L’agenzia propone lusso, salute e artigianalità responsabile. È credibile solo una comunicazione basata sui fatti."
    },
    "steps": [
      {
        "prompt": {
          "en": "The copy says “healthy wine for everyone”. What should you do?",
          "it": "Il copy dice «vino salutare per tutti». Cosa fai?"
        },
        "lesson": {
          "en": "Avoid broad or unauthorised health claims; communicate verifiable product characteristics.",
          "it": "Evita claim salutistici generici o non autorizzati; comunica caratteristiche verificabili."
        },
        "options": [
          {
            "label": {
              "en": "Use the claim because the product has less alcohol",
              "it": "Usa il claim perché contiene meno alcol"
            },
            "feedback": {
              "en": "Lower alcohol content does not justify broad health promises.",
              "it": "Meno alcol non giustifica promesse salutistiche generiche."
            },
            "grade": 0
          },
          {
            "label": {
              "en": "Focus on verified composition and intended occasions",
              "it": "Concentrati su composizione verificata e occasioni d’uso"
            },
            "feedback": {
              "en": "Clear factual communication supports informed choice.",
              "it": "Informazioni fattuali favoriscono scelte consapevoli."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "Replace “healthy” with “guilt-free”",
              "it": "Sostituisci «salutare» con «senza sensi di colpa»"
            },
            "feedback": {
              "en": "Still implies an unverified normative health narrative.",
              "it": "Resta una narrazione allusiva e non verificata."
            },
            "grade": 1
          }
        ]
      },
      {
        "prompt": {
          "en": "Consumers say the dealcoholisation process sounds unnatural. What is the best response?",
          "it": "I consumatori trovano innaturale la dealcolizzazione. Come rispondi?"
        },
        "lesson": {
          "en": "Explain the process clearly and allow questions, rather than hiding it.",
          "it": "Spiega con chiarezza il processo e lascia spazio alle domande."
        },
        "options": [
          {
            "label": {
              "en": "Avoid mentioning the production method",
              "it": "Non citare il metodo di produzione"
            },
            "feedback": {
              "en": "Hiding the process reinforces confusion.",
              "it": "Nascondere il processo rafforza la confusione."
            },
            "grade": 0
          },
          {
            "label": {
              "en": "Offer a plain-language process explanation and FAQ",
              "it": "Offri spiegazione semplice del processo e FAQ"
            },
            "feedback": {
              "en": "Transparency helps consumers form their own judgment.",
              "it": "La trasparenza aiuta i consumatori a decidere."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "Use technical jargon throughout",
              "it": "Usa solo gergo tecnico"
            },
            "feedback": {
              "en": "Technical accuracy without accessibility can alienate users.",
              "it": "L’accuratezza senza chiarezza può allontanare il pubblico."
            },
            "grade": 1
          }
        ]
      },
      {
        "prompt": {
          "en": "Your vineyard story features environmental achievements. What proof do you need?",
          "it": "Il racconto della vigna cita risultati ambientali. Quali prove servono?"
        },
        "lesson": {
          "en": "Tie each claim to a method, baseline, period and accountable record.",
          "it": "Collega ogni claim a metodo, baseline, periodo e documenti."
        },
        "options": [
          {
            "label": {
              "en": "A beautiful landscape photo",
              "it": "Una bella foto del paesaggio"
            },
            "feedback": {
              "en": "A visual can evoke place, but not validate impact.",
              "it": "Una foto comunica il territorio, non prova gli impatti."
            },
            "grade": 1
          },
          {
            "label": {
              "en": "No evidence: authenticity is enough",
              "it": "Nessuna prova: basta l’autenticità"
            },
            "feedback": {
              "en": "Authenticity does not exempt factual claims from evidence.",
              "it": "L’autenticità non esime dalla verifica."
            },
            "grade": 0
          },
          {
            "label": {
              "en": "Specific metrics with method, period and evidence",
              "it": "Metriche specifiche con metodo, periodo ed evidenze"
            },
            "feedback": {
              "en": "Auditable storytelling is more robust and useful.",
              "it": "Una narrazione verificabile è più solida e utile."
            },
            "grade": 2
          }
        ]
      }
    ]
  },
  {
    "id": "13",
    "group": "experience",
    "skill": "access",
    "title": {
      "en": "The inclusive cellar",
      "it": "La cantina inclusiva"
    },
    "summary": {
      "en": "Wine tourism and accessibility",
      "it": "Enoturismo e accessibilità"
    },
    "brief": {
      "en": "The winery is designing an experience that includes non-drinkers, visitors with disabilities and international groups.",
      "it": "La cantina progetta un’esperienza per astemi, persone con disabilità e gruppi internazionali."
    },
    "steps": [
      {
        "prompt": {
          "en": "How should a 0.0 tasting be designed?",
          "it": "Come progetti la degustazione 0,0?"
        },
        "lesson": {
          "en": "Treat low/no-alcohol tasting as a complete sensory and educational experience.",
          "it": "Tratta la degustazione low/no alcol come esperienza completa e formativa."
        },
        "options": [
          {
            "label": {
              "en": "Offer a guided sensory route with product and process information",
              "it": "Offri percorso sensoriale guidato con informazioni di prodotto"
            },
            "feedback": {
              "en": "A complete experience increases accessibility and learning.",
              "it": "Un’esperienza completa migliora inclusione e apprendimento."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "Allow non-drinkers to watch others",
              "it": "Lascia che gli astemi guardino gli altri"
            },
            "feedback": {
              "en": "Some participation exists, but it is not equitable.",
              "it": "La partecipazione è possibile ma non paritaria."
            },
            "grade": 1
          },
          {
            "label": {
              "en": "Exclude visitors who do not drink alcohol",
              "it": "Escludi chi non consuma alcol"
            },
            "feedback": {
              "en": "Exclusion undermines both hospitality and learning.",
              "it": "L’esclusione danneggia ospitalità e apprendimento."
            },
            "grade": 0
          }
        ]
      },
      {
        "prompt": {
          "en": "Visitors use wheelchairs and require step-free access. What do you plan?",
          "it": "Arrivano visitatori in carrozzina. Cosa organizzi?"
        },
        "lesson": {
          "en": "Accessibility needs advance route design and a genuinely comparable experience.",
          "it": "L’accessibilità richiede percorsi progettati e attività comparabili."
        },
        "options": [
          {
            "label": {
              "en": "A verified step-free route and alternative equivalent stations",
              "it": "Percorso senza barriere verificato e tappe equivalenti"
            },
            "feedback": {
              "en": "Inclusion is built into delivery, not left to improvisation.",
              "it": "L’inclusione si progetta, non si improvvisa."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "Ask visitors to decide on arrival",
              "it": "Chiedi ai visitatori di arrangiarsi all’arrivo"
            },
            "feedback": {
              "en": "Last-minute workarounds add barriers and uncertainty.",
              "it": "Le soluzioni improvvisate creano nuove barriere."
            },
            "grade": 1
          },
          {
            "label": {
              "en": "Cancel their booking",
              "it": "Cancella la prenotazione"
            },
            "feedback": {
              "en": "Discriminatory exclusion is unacceptable.",
              "it": "L’esclusione discriminatoria è inaccettabile."
            },
            "grade": 0
          }
        ]
      },
      {
        "prompt": {
          "en": "How do you evaluate the visitor experience after the tour?",
          "it": "Come valuti l’esperienza dei visitatori dopo il tour?"
        },
        "lesson": {
          "en": "Use accessible feedback and document improvements rather than collecting praise alone.",
          "it": "Raccogli feedback accessibili e documenta i miglioramenti, non solo apprezzamenti."
        },
        "options": [
          {
            "label": {
              "en": "Ask a few friends whether they had fun",
              "it": "Chiedi agli amici se si sono divertiti"
            },
            "feedback": {
              "en": "Informal feedback does not represent all participants.",
              "it": "Il feedback informale non rappresenta tutti."
            },
            "grade": 1
          },
          {
            "label": {
              "en": "Collect anonymous accessible feedback and track changes",
              "it": "Raccogli feedback anonimi accessibili e monitora cambiamenti"
            },
            "feedback": {
              "en": "Structured feedback supports continuous improvement.",
              "it": "Il feedback strutturato alimenta il miglioramento."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "Only collect five-star public reviews",
              "it": "Raccogli solo recensioni da cinque stelle"
            },
            "feedback": {
              "en": "Selective reviews bias the evidence.",
              "it": "Le recensioni selezionate distorcono i dati."
            },
            "grade": 0
          }
        ]
      }
    ]
  },
  {
    "id": "14",
    "group": "experience",
    "skill": "quality",
    "title": {
      "en": "The unexpected incident",
      "it": "L’imprevisto in cantina"
    },
    "summary": {
      "en": "Risk management and response",
      "it": "Gestione del rischio e risposta"
    },
    "brief": {
      "en": "A retailer reports inconsistent batches during a tourism weekend. The team must handle operations, customers and partners.",
      "it": "Un rivenditore segnala lotti disomogenei durante un weekend turistico. Il team gestisce operazioni, clienti e partner."
    },
    "steps": [
      {
        "prompt": {
          "en": "A complaint suggests a possible quality deviation. Your first move?",
          "it": "Un reclamo segnala una possibile non conformità. Primo passo?"
        },
        "lesson": {
          "en": "Contain, trace and investigate before continuing distribution.",
          "it": "Contieni, traccia e indaga prima di continuare a distribuire."
        },
        "options": [
          {
            "label": {
              "en": "Quarantine potentially affected lots and initiate investigation",
              "it": "Isola i lotti coinvolti e avvia un’indagine"
            },
            "feedback": {
              "en": "Protects users and creates evidence for an appropriate response.",
              "it": "Tutela gli utenti e crea evidenze per la risposta."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "Wait for more social media comments",
              "it": "Aspetta altri commenti sui social"
            },
            "feedback": {
              "en": "Delaying containment can widen exposure.",
              "it": "Rinviare il contenimento può ampliare il problema."
            },
            "grade": 0
          },
          {
            "label": {
              "en": "Offer a discount on the complained-about product",
              "it": "Offri uno sconto sul prodotto contestato"
            },
            "feedback": {
              "en": "Customer service cannot replace risk assessment.",
              "it": "L’assistenza non sostituisce la valutazione del rischio."
            },
            "grade": 1
          }
        ]
      },
      {
        "prompt": {
          "en": "Your operations team wants to erase the suspect record. What do you decide?",
          "it": "Il team vuole cancellare una registrazione sospetta. Che fai?"
        },
        "lesson": {
          "en": "Preserve evidence and document corrections transparently.",
          "it": "Conserva le prove e documenta chiaramente le correzioni."
        },
        "options": [
          {
            "label": {
              "en": "Delete the record and re-enter a passing value",
              "it": "Cancella il dato e inserisci un valore conforme"
            },
            "feedback": {
              "en": "Data falsification prevents reliable investigation.",
              "it": "La falsificazione impedisce un’indagine affidabile."
            },
            "grade": 0
          },
          {
            "label": {
              "en": "Preserve the original record and add an auditable correction",
              "it": "Conserva l’originale e aggiungi una rettifica tracciabile"
            },
            "feedback": {
              "en": "Traceable changes protect integrity and accountability.",
              "it": "Le rettifiche tracciate tutelano integrità e responsabilità."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "Ignore the record in future reports",
              "it": "Ignora il dato nei rapporti futuri"
            },
            "feedback": {
              "en": "Avoiding a record hides a potentially relevant finding.",
              "it": "Ignorare un dato occulta informazioni rilevanti."
            },
            "grade": 1
          }
        ]
      },
      {
        "prompt": {
          "en": "What should you tell a distributor while the investigation is ongoing?",
          "it": "Cosa comunichi al distributore durante l’indagine?"
        },
        "lesson": {
          "en": "Communicate verified facts, containment measures and the next update.",
          "it": "Comunica fatti verificati, misure attuate e prossimo aggiornamento."
        },
        "options": [
          {
            "label": {
              "en": "Promise there is no issue before tests are complete",
              "it": "Assicura che non ci siano problemi prima delle analisi"
            },
            "feedback": {
              "en": "Premature reassurance may be misleading.",
              "it": "Rassicurazioni premature possono essere fuorvianti."
            },
            "grade": 0
          },
          {
            "label": {
              "en": "Share confirmed facts, actions and a realistic update point",
              "it": "Condividi fatti accertati, azioni e prossima comunicazione"
            },
            "feedback": {
              "en": "Clear, measured communication supports trust.",
              "it": "Comunicazione chiara e misurata sostiene la fiducia."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "Say nothing until the next quarter",
              "it": "Non comunicare nulla fino al trimestre successivo"
            },
            "feedback": {
              "en": "Silence can worsen uncertainty and relationships.",
              "it": "Il silenzio può peggiorare incertezza e rapporti."
            },
            "grade": 1
          }
        ]
      }
    ]
  },
  {
    "id": "15",
    "group": "assess",
    "skill": "trust",
    "title": {
      "en": "The final board meeting",
      "it": "La riunione finale"
    },
    "summary": {
      "en": "Final assessment · five matched decisions",
      "it": "Valutazione finale · cinque scelte comparabili"
    },
    "brief": {
      "en": "The board reviews a second launch opportunity. Apply what you learned. These five decisions use the same competency areas as the opening assessment.",
      "it": "Il consiglio valuta una seconda opportunità di lancio. Applica quanto imparato: le cinque scelte coprono le stesse competenze della valutazione iniziale."
    },
    "steps": [
      {
        "prompt": {
          "en": "The new batch is measured at 0.07% vol. How do you handle the 0.0% headline?",
          "it": "Il nuovo lotto misura 0,07% vol. Come gestisci la dicitura «0,0%»?"
        },
        "lesson": {
          "en": "EU Regulation 2026/471 distinguishes the “0.0%” expression from the broader alcohol-free threshold.",
          "it": "Il Regolamento UE 2026/471 distingue la dicitura «0,0%» dalla soglia più ampia «alcohol-free»."
        },
        "options": [
          {
            "label": {
              "en": "Print 0.0% anyway",
              "it": "Stampa comunque «0,0%»"
            },
            "feedback": {
              "en": "The measured value is above the specific 0.05% threshold.",
              "it": "Il valore misurato supera la soglia specifica di 0,05%."
            },
            "grade": 0
          },
          {
            "label": {
              "en": "Check the permitted label category and use verified wording",
              "it": "Verifica la denominazione consentita e usa parole corrette"
            },
            "feedback": {
              "en": "A defensible claim starts with tested product facts.",
              "it": "Un claim difendibile parte dai dati analitici."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "Use 0.0% with a disclaimer",
              "it": "Usa «0,0%» con una nota"
            },
            "feedback": {
              "en": "The headline still suggests a threshold not met.",
              "it": "La dicitura principale continuerebbe a indicare una soglia non rispettata."
            },
            "grade": 1
          }
        ]
      },
      {
        "prompt": {
          "en": "A logistics partner proposes a “100% climate-positive shipment” badge with no methodology. What do you do?",
          "it": "Un corriere propone un badge «trasporto 100% climate-positive» senza metodo. Che fai?"
        },
        "lesson": {
          "en": "Environmental claims require defined scope, evidence and appropriate comparisons.",
          "it": "I claim ambientali richiedono ambito, prove e confronti adeguati."
        },
        "options": [
          {
            "label": {
              "en": "Accept the badge as a marketing differentiator",
              "it": "Accetta il badge perché differenzia"
            },
            "feedback": {
              "en": "The statement is unsupported and potentially misleading.",
              "it": "La dichiarazione non è dimostrata ed è potenzialmente fuorviante."
            },
            "grade": 0
          },
          {
            "label": {
              "en": "Use a simpler “eco-friendly” badge",
              "it": "Usa un badge generico «eco-friendly»"
            },
            "feedback": {
              "en": "Softening the adjective does not establish evidence.",
              "it": "Cambiare aggettivo non produce evidenze."
            },
            "grade": 1
          },
          {
            "label": {
              "en": "Request auditable evidence and compare transport options",
              "it": "Richiedi prove verificabili e confronta i trasporti"
            },
            "feedback": {
              "en": "Comparative data is better than an absolute slogan.",
              "it": "I dati comparativi valgono più di uno slogan assoluto."
            },
            "grade": 2
          }
        ]
      },
      {
        "prompt": {
          "en": "A foreign buyer asks for a high-volume discount. Your commercial decision?",
          "it": "Un buyer estero chiede un forte sconto per molti volumi. Come decidi?"
        },
        "lesson": {
          "en": "Test demand with margin, repeat-purchase and market-level evidence.",
          "it": "Verifica domanda, margini, riacquisto ed evidenze per mercato."
        },
        "options": [
          {
            "label": {
              "en": "Agree to every discount to increase bottle count",
              "it": "Accetta ogni sconto per vendere più bottiglie"
            },
            "feedback": {
              "en": "Volume without sustainable margins can destroy value.",
              "it": "Volumi senza margini sostenibili distruggono valore."
            },
            "grade": 0
          },
          {
            "label": {
              "en": "Negotiate a staged test with margin and repeat-purchase metrics",
              "it": "Negozia un test progressivo con margini e riacquisto"
            },
            "feedback": {
              "en": "Commercial learning and risk control can coexist.",
              "it": "Apprendimento commerciale e controllo del rischio convivono."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "Copy the price from a different market",
              "it": "Copia il prezzo di un altro mercato"
            },
            "feedback": {
              "en": "Transfer may fail when segments and costs differ.",
              "it": "La replica può fallire se cambiano segmenti e costi."
            },
            "grade": 1
          }
        ]
      },
      {
        "prompt": {
          "en": "A QR code opens a page combining mandatory ingredients with targeted advertising. Your response?",
          "it": "Il QR apre ingredienti obbligatori e pubblicità mirata. Come intervieni?"
        },
        "lesson": {
          "en": "Keep the mandatory digital-label function separate from marketing and tracking.",
          "it": "Separa etichetta elettronica obbligatoria da marketing e tracking."
        },
        "options": [
          {
            "label": {
              "en": "Retain everything and add a cookie notice",
              "it": "Mantieni tutto e aggiungi il banner cookie"
            },
            "feedback": {
              "en": "Consent banners do not cure the mandatory e-label separation issue.",
              "it": "Il banner non risolve la separazione richiesta."
            },
            "grade": 0
          },
          {
            "label": {
              "en": "Remove ads, but keep visitor tracking",
              "it": "Togli pubblicità, ma mantieni il tracciamento"
            },
            "feedback": {
              "en": "The tracking issue remains unresolved.",
              "it": "Il problema del tracciamento resta."
            },
            "grade": 1
          },
          {
            "label": {
              "en": "Publish a dedicated accessible page without promotional tracking",
              "it": "Pubblica una pagina dedicata, accessibile e senza tracking promozionale"
            },
            "feedback": {
              "en": "Correct: accurate information remains immediately available.",
              "it": "Corretto: le informazioni restano subito accessibili."
            },
            "grade": 2
          }
        ]
      },
      {
        "prompt": {
          "en": "A group with diverse needs books a 0.0 vineyard tour. What is your plan?",
          "it": "Un gruppo con esigenze diverse prenota un tour 0,0. Qual è il piano?"
        },
        "lesson": {
          "en": "Accessibility requires a comparable visitor experience and clear product information.",
          "it": "L’accessibilità richiede un’esperienza comparabile e informazioni chiare."
        },
        "options": [
          {
            "label": {
              "en": "Offer an accessible route, clear information and equivalent sensory options",
              "it": "Offri percorso accessibile, informazioni chiare e opzioni sensoriali equivalenti"
            },
            "feedback": {
              "en": "Excellent: anticipate diverse participation needs.",
              "it": "Ottimo: anticipi bisogni di partecipazione diversi."
            },
            "grade": 2
          },
          {
            "label": {
              "en": "Run the normal tour and improvise on arrival",
              "it": "Fai il tour normale e improvvisa"
            },
            "feedback": {
              "en": "Some needs can be met late, but important barriers remain.",
              "it": "Alcuni bisogni si possono affrontare, ma restano barriere."
            },
            "grade": 1
          },
          {
            "label": {
              "en": "Recommend the group visit another winery",
              "it": "Suggerisci di scegliere un’altra cantina"
            },
            "feedback": {
              "en": "Unnecessary exclusion damages accessibility and hospitality.",
              "it": "Escludere danneggia accessibilità e accoglienza."
            },
            "grade": 0
          }
        ]
      }
    ]
  }
];
