/* Plantão Fisio — banco de casos.
   Cada caso: monitor (sinais vitais), situação, pergunta, pontos-chave (rubrica),
   gabarito, dica e referência. Os termos "k" são radicais sem acento usados pela
   correção local quando não há IA configurada. */

window.JORNADAS = [
  {
    id: "iniciante",
    nivel: "Iniciante",
    titulo: "Plantão na Enfermaria",
    setor: "Clínica cirúrgica · 6 leitos",
    problema:
      "Seu primeiro plantão sozinha na enfermaria. Seis leitos, uma equipe enxuta e nenhuma intercorrência pode passar despercebida. Vá leito a leito e chegue ao fim do turno sem perder ninguém.",
    xp: 100,
    casos: [
      {
        leito: "Leito 3",
        paciente: "Sr. Antônio, 64 anos",
        tag: "Pós-operatório",
        vitais: { FC: 98, SpO2: "93", FR: 24, PA: "132/84", extra: "Dor 7/10" },
        situacao:
          "Primeiro dia de pós-operatório de colecistectomia por laparotomia, incisão subcostal. Está restrito ao leito, com respiração superficial e rápida, evita tossir por causa da dor. Na ausculta, murmúrio vesicular diminuído nas bases. Em ar ambiente.",
        pergunta: "Qual é o principal risco respiratório desse paciente e quais condutas fisioterapêuticas você faz hoje?",
        pontos: [
          { t: "Identificar risco de atelectasia / complicação pulmonar pós-operatória", k: ["atelect", "colapso", "complicacao pulmonar", "complicacoes pulmonares", "hipoventila", "pneumonia"] },
          { t: "Garantir analgesia adequada antes da fisioterapia", k: ["analges", "dor", "analgesico", "medicacao para dor"] },
          { t: "Exercícios de expansão pulmonar / respiração profunda", k: ["expansa", "respiracao profunda", "inspiracao profunda", "padrao ventilatorio", "diafragm", "inspiracao sustentada", "inspiracoes profundas", "reexpans", "fracionad"] },
          { t: "Incentivador inspiratório como adjunto", k: ["incentiv", "respiron", "voldyne", "espirometr"] },
          { t: "Mobilização precoce: sedestação e deambulação", k: ["mobiliz", "deambul", "sedest", "sentar", "tirar do leito", "fora do leito", "poltrona", "caminhar", "ortostat"] },
          { t: "Proteger a incisão ao tossir (travesseiro/splinting) e estimular tosse", k: ["travesseiro", "proteger a incisao", "proteção da incisao", "protecao da incisao", "splint", "apoio na incisao", "tosse", "huff"] }
        ],
        minimo: 4,
        dica: "Pense no que a incisão alta e a dor fazem com o volume pulmonar, e no que você precisa resolver antes de pedir para ele respirar fundo.",
        gabarito:
          "O principal risco é atelectasia e outras complicações pulmonares pós-operatórias, pela hipoventilação causada pela dor da incisão abdominal alta e pela imobilidade. Primeiro garanto analgesia adequada com a equipe. Depois faço exercícios de expansão pulmonar com inspirações profundas e sustentadas, padrão diafragmático e incentivador inspiratório como adjunto. Tiro do leito o quanto antes: sedestação, poltrona e deambulação. Ensino tosse ou huffing protegendo a incisão com um travesseiro e mantenho a cabeceira elevada.",
        ref: "Diretrizes de fisioterapia em cirurgia abdominal alta; prevenção de complicações pulmonares pós-operatórias."
      },
      {
        leito: "Leito 5",
        paciente: "D. Cida, 72 anos",
        tag: "DPOC",
        vitais: { FC: 88, SpO2: "99", FR: 14, PA: "128/76", extra: "O₂ 4 L/min" },
        situacao:
          "DPOC conhecida, internada por pneumonia. Está em cateter nasal a 4 L/min com saturação de 99%. A acompanhante diz que ela está cada vez mais sonolenta desde a manhã.",
        pergunta: "O que te preocupa nesse leito e o que você faz com o oxigênio?",
        pontos: [
          { t: "Saturação acima do alvo para DPOC (alvo 88–92%)", k: ["88", "92", "oitenta e oito", "noventa e dois", "alvo", "acima do ideal", "alta demais", "saturacao alta", "hiperoxi"] },
          { t: "Risco de hipercapnia / retenção de CO₂ (sonolência)", k: ["hipercap", "co2", "retencao", "carbonarc", "narcose", "gas carbonico", "dioxido de carbono", "retentor"] },
          { t: "Reduzir/titular o O₂ ou usar Venturi (FiO₂ controlada)", k: ["reduzir", "diminuir", "baixar", "titular", "desmamar o oxigenio", "venturi", "fio2 control", "abaixar"] },
          { t: "Solicitar gasometria arterial", k: ["gasometr", "gaso", "gas arterial"] },
          { t: "Avaliar nível de consciência e comunicar a equipe médica", k: ["consciencia", "glasgow", "sonolen", "rebaix", "comunicar", "medico", "avisar", "equipe"] }
        ],
        minimo: 3,
        dica: "Em DPOC, saturação alta não é sinônimo de paciente bem. E sonolência é um sinal clínico importante.",
        gabarito:
          "A saturação de 99% está acima do alvo para DPOC, que é de 88 a 92%. Oxigênio em excesso pode piorar a retenção de CO₂, e a sonolência progressiva sugere hipercapnia. Reduzo e titulo o oxigênio para o alvo, de preferência com máscara de Venturi para FiO₂ controlada, solicito gasometria arterial, avalio o nível de consciência e comunico a equipe médica. Se houver acidose respiratória, ela pode precisar de VNI.",
        ref: "BTS Guideline for oxygen use in adults (2017); GOLD."
      },
      {
        leito: "Leito 1",
        paciente: "Sr. José, 58 anos",
        tag: "Secreção",
        vitais: { FC: 102, SpO2: "91", FR: 26, PA: "140/90", extra: "O₂ 2 L/min" },
        situacao:
          "AVC prévio com hemiparesia, internado por pneumonia. Tosse fraca e ineficaz, secreção espessa e amarelada. Na ausculta, roncos difusos bilaterais. Está alerta e colaborativo.",
        pergunta: "Como você avalia e quais técnicas de higiene brônquica você usa nesse paciente?",
        pontos: [
          { t: "Avaliar: ausculta, tosse, padrão respiratório (roncos = secreção em vias aéreas maiores)", k: ["auscult", "avaliar", "avaliacao", "roncos", "pico de fluxo", "cough peak"] },
          { t: "Fluidificar: hidratação, umidificação ou inalação", k: ["hidrat", "umidific", "inala", "nebuliz", "fluidific", "soro"] },
          { t: "Técnicas de remoção: AFE, vibrocompressão, drenagem postural, huffing/TEF", k: ["afe", "aumento do fluxo", "fluxo expirat", "vibrocompress", "vibra", "drenagem postural", "huff", "tef", "expiracao forcada", "percuss", "tapotagem", "oscilac", "shaker", "flutter", "elta", "elpr"] },
          { t: "Tosse assistida ou estimulada", k: ["tosse assistida", "tosse dirigida", "estimular a tosse", "estimulo de tosse", "tosse provocada", "tosse estimulada", "tosse manualmente"] },
          { t: "Aspiração de vias aéreas se a tosse continuar ineficaz", k: ["aspira", "sonda", "nasotraq"] },
          { t: "Reavaliar após a intervenção (ausculta e SpO₂)", k: ["reavali", "depois da", "apos a", "ao final", "comparar"] }
        ],
        minimo: 4,
        dica: "Divida em três etapas: o que você ouve, como você solta a secreção, e como você tira ela de lá.",
        gabarito:
          "Começo avaliando: ausculta com roncos difusos indica secreção em vias aéreas de maior calibre, tosse ineficaz e padrão respiratório. Garanto hidratação e umidificação ou inalação para fluidificar. Uso técnicas de remoção como aumento do fluxo expiratório, vibrocompressão, drenagem postural se tolerar, e huffing. Estimulo e assisto a tosse. Se continuar ineficaz, faço aspiração de vias aéreas. No final reavalio a ausculta e a saturação para ver se houve ganho.",
        ref: "Diretrizes de fisioterapia respiratória — técnicas de higiene brônquica."
      },
      {
        leito: "Leito 2",
        paciente: "Sra. Marta, 55 anos",
        tag: "Mobilização",
        vitais: { FC: 118, SpO2: "95", FR: 22, PA: "92/60", extra: "Basal 120/80" },
        situacao:
          "Terceiro dia de internação, há dias restrita ao leito. Na primeira vez que fica em pé com você, relata tontura e visão escurecida, fica pálida e sudoreica. A pressão caiu de 120/80 para 92/60 e a frequência cardíaca subiu de 80 para 118.",
        pergunta: "O que está acontecendo e qual é a sua conduta agora e nas próximas sessões?",
        pontos: [
          { t: "Reconhecer hipotensão ortostática (queda ≥20 PAS ou ≥10 PAD)", k: ["hipotensao ortost", "hipotensao postural", "ortostatic", "queda de pressao", "hipotensao", "intolerancia ortost"] },
          { t: "Interromper e posicionar: sentar/deitar com membros inferiores elevados", k: ["interromp", "parar", "sentar", "deitar", "elevar as pernas", "elevar os membros", "trendelen", "voltar para o leito", "membros inferiores elevados", "pernas para cima"] },
          { t: "Monitorar sinais vitais até recuperar", k: ["monitor", "aferir", "sinais vitais", "pressao de novo", "reavaliar a pressao", "acompanhar"] },
          { t: "Comunicar a equipe", k: ["comunicar", "avisar", "medico", "enfermag", "equipe"] },
          { t: "Progressão gradual: sedestação com pernas pendentes, bomba muscular de panturrilha antes de levantar", k: ["gradual", "progress", "pendente", "beira do leito", "beira leito", "panturrilha", "bomba muscular", "tornozelo", "aos poucos", "devagar", "prancha"] },
          { t: "Medidas de suporte com a equipe (hidratação, meia compressiva)", k: ["hidrat", "meia", "compressiv", "faixa", "volume"] }
        ],
        minimo: 4,
        dica: "Compare os números antes e depois de ficar em pé. Depois pense em como evitar isso na próxima tentativa.",
        gabarito:
          "É hipotensão ortostática: queda da pressão sistólica maior que 20 e da diastólica maior que 10 ao ficar em pé, com taquicardia compensatória e sintomas. Interrompo imediatamente, sento ou deito a paciente com membros inferiores elevados e monitoro os sinais vitais até ela recuperar. Comunico a equipe. Nas próximas sessões faço progressão gradual: cabeceira elevada, sedestação à beira do leito com pernas pendentes, exercícios de panturrilha e tornozelo antes de levantar, e avalio com a equipe hidratação e meia compressiva.",
        ref: "Critérios de segurança para mobilização precoce (consenso de especialistas, Hodgson 2014)."
      },
      {
        leito: "Leito 6",
        paciente: "Sr. Pedro, 49 anos",
        tag: "Oxigenoterapia",
        vitais: { FC: 112, SpO2: "89", FR: 28, PA: "126/80", extra: "O₂ 5 L/min" },
        situacao:
          "Pneumonia comunitária. Está em cateter nasal a 5 L/min e mesmo assim satura 89%, frequência respiratória 28. A enfermagem pergunta se pode subir o cateter para 8 L/min.",
        pergunta: "Esse dispositivo dá conta? Qual FiO₂ aproximada ele oferece e qual o seu próximo passo?",
        pontos: [
          { t: "Cateter nasal tem limite (~5–6 L/min); subir mais não traz ganho real e resseca", k: ["limite", "6 l", "seis litros", "5 l", "cinco litros", "nao subir", "nao aumentar", "resseca", "maximo", "nao adianta"] },
          { t: "FiO₂ aproximada ~40% (≈21% + 3–4% por litro)", k: ["40", "quarenta", "41", "44", "4% por litro", "4 por cento", "3 a 4", "21 mais"] },
          { t: "Trocar para Venturi ou máscara com reservatório", k: ["venturi", "reservatorio", "nao reinalante", "nao-reinalante", "mascara"] },
          { t: "Avaliar desconforto respiratório e pedir gasometria", k: ["desconforto", "trabalho respiratorio", "musculatura acessoria", "gasometr", "gaso"] },
          { t: "Comunicar a equipe e considerar suporte (CNAF/VNI) se piorar", k: ["cnaf", "alto fluxo", "vni", "ventilacao nao invasiva", "comunicar", "medico", "suporte ventilatorio"] }
        ],
        minimo: 3,
        dica: "Lembre a conta rápida de FiO₂ do cateter nasal e onde ela para de subir.",
        gabarito:
          "Não dá conta. O cateter nasal oferece em torno de 21% mais 3 a 4% por litro, chegando perto de 40% com 5 litros, e acima de 5 a 6 L/min não há ganho real de FiO₂, só ressecamento e desconforto. Troco para máscara de Venturi com FiO₂ definida ou máscara com reservatório, avalio sinais de desconforto como a frequência de 28, peço gasometria e comunico a equipe. Se não melhorar, discuto cateter nasal de alto fluxo ou VNI.",
        ref: "Diretrizes de oxigenoterapia; BTS 2017."
      },
      {
        leito: "Leito 3 · 16h",
        paciente: "Sr. Antônio, 64 anos",
        tag: "Intercorrência",
        chefe: true,
        vitais: { FC: 128, SpO2: "86", FR: 34, PA: "150/95", extra: "Venturi 50%" },
        situacao:
          "O paciente da manhã piorou. Agora está com frequência respiratória 34, saturação 86% em Venturi 50%, uso de musculatura acessória, fala entrecortada e agitação.",
        pergunta: "Quais são as suas prioridades nos primeiros minutos?",
        pontos: [
          { t: "Reconhecer insuficiência respiratória aguda / desconforto grave", k: ["insuficiencia respirat", "desconforto", "ira", "falencia respirat", "piora respirat"] },
          { t: "Chamar ajuda: médico / time de resposta rápida", k: ["chamar", "acionar", "medico", "time de resposta", "codigo", "ajuda", "plantonista", "equipe"] },
          { t: "Posicionar: cabeceira elevada / sentado", k: ["cabeceira", "sentad", "fowler", "posicion", "elevar"] },
          { t: "Aumentar oferta de O₂ (máscara com reservatório)", k: ["reservatorio", "nao reinalante", "aumentar o oxigenio", "aumentar a oferta", "fio2", "100%", "cem por cento"] },
          { t: "Monitorizar e colher gasometria", k: ["monitor", "gasometr", "gaso", "sinais vitais", "consciencia"] },
          { t: "Preparar suporte ventilatório (CNAF, VNI ou intubação conforme critérios)", k: ["cnaf", "alto fluxo", "vni", "nao invasiva", "intub", "iot", "suporte ventilatorio", "ventilacao mecanica", "uti"] }
        ],
        minimo: 4,
        dica: "Pense em ordem: reconhecer, chamar, posicionar, oxigenar, monitorar, escalar o suporte.",
        gabarito:
          "É insuficiência respiratória aguda com sinais de gravidade. Chamo ajuda na hora: médico plantonista ou time de resposta rápida. Posiciono com cabeceira elevada, aumento a oferta de oxigênio com máscara com reservatório, monitorizo saturação, frequência, pressão e nível de consciência e colho gasometria. Já preparo o suporte ventilatório: cateter de alto fluxo ou VNI se não houver contraindicação, ou intubação se houver rebaixamento, instabilidade ou falha, com transferência para a UTI.",
        ref: "Abordagem ABCDE da insuficiência respiratória aguda."
      }
    ]
  },
  {
    id: "intermediario",
    nivel: "Intermediário",
    titulo: "UTI Respiratória",
    setor: "UTI adulto · Leito 8",
    problema:
      "Sr. Raimundo, 68 anos, DPOC grave, chegou do pronto-socorro em exacerbação. Seu objetivo é tirá-lo da crise e levá-lo até a alta da UTI. Se precisar intubar, extube com segurança.",
    xp: 150,
    casos: [
      {
        leito: "Leito 8 · Admissão",
        paciente: "Sr. Raimundo, 68 anos",
        tag: "Gasometria",
        vitais: { FC: 110, SpO2: "86", FR: 30, PA: "150/90", extra: "O₂ 2 L/min" },
        situacao:
          "DPOC GOLD 3 em exacerbação. Gasometria arterial em cateter nasal 2 L/min: pH 7,28; PaCO₂ 64 mmHg; HCO₃ 29 mEq/L; PaO₂ 55 mmHg.",
        pergunta: "Interprete essa gasometria.",
        pontos: [
          { t: "Acidemia (pH < 7,35)", k: ["acidemi", "acidose", "ph baixo", "ph acido", "7,28", "7.28"] },
          { t: "Distúrbio respiratório (PaCO₂ elevada)", k: ["respiratori", "co2 alt", "co2 elevad", "hipercap", "pco2 alt", "paco2 alt", "paco2 elevad", "pco2 elevad"] },
          { t: "Aguda sobre crônica / parcialmente compensada (HCO₃ elevado)", k: ["cronic", "parcialmente compensad", "compensacao", "agudiz", "bicarbonato alto", "bicarbonato elevad", "hco3 alt", "hco3 elevad", "metabolica compensat"] },
          { t: "Hipoxemia", k: ["hipoxem", "po2 baix", "pao2 baix", "hipoxi"] },
          { t: "Indica suporte ventilatório (VNI)", k: ["vni", "nao invasiva", "bipap", "suporte ventilatorio"] }
        ],
        minimo: 4,
        dica: "Siga a ordem: pH, componente respiratório, componente metabólico, oxigenação. O bicarbonato está normal?",
        gabarito:
          "Acidemia, pH 7,28, por acidose respiratória com PaCO₂ de 64. O bicarbonato de 29 está acima do normal, o que mostra compensação renal de um quadro crônico: é uma acidose respiratória aguda sobre crônica, parcialmente compensada. A PaO₂ de 55 mostra hipoxemia. Num DPOC exacerbado com pH abaixo de 7,35 e PaCO₂ acima de 45, há indicação de ventilação não invasiva.",
        ref: "Interpretação de gasometria arterial; GOLD."
      },
      {
        leito: "Leito 8 · VNI",
        paciente: "Sr. Raimundo, 68 anos",
        tag: "VNI",
        vitais: { FC: 108, SpO2: "87", FR: 30, PA: "148/88", extra: "pH 7,28" },
        situacao:
          "O intensivista concorda com VNI e pede que você instale. Paciente alerta, colaborativo, sem vômitos, hemodinamicamente estável.",
        pergunta: "Qual modo, interface e parâmetros iniciais você usa, e como define se está dando certo?",
        pontos: [
          { t: "Modo com dois níveis de pressão (BiPAP / PSV + PEEP)", k: ["bipap", "bilevel", "dois niveis", "binivel", "psv", "pressao de suporte", "s/t", "spontaneous"] },
          { t: "Interface oronasal/facial", k: ["oronasal", "orofacial", "facial", "full face", "total face", "mascara"] },
          { t: "IPAP inicial ~10–12 cmH₂O, titulando por volume e FR", k: ["ipap", "10", "12", "dez", "doze", "pressao inspirat", "delta"] },
          { t: "EPAP ~4–6 cmH₂O", k: ["epap", "4", "5", "6", "quatro", "cinco", "seis", "peep"] },
          { t: "FiO₂ para SpO₂ 88–92%", k: ["88", "92", "oitenta e oito", "noventa e dois", "fio2", "alvo"] },
          { t: "Reavaliar gasometria em 1–2 h e sinais de falha", k: ["1 a 2", "uma a duas", "1-2", "duas horas", "2 horas", "uma hora", "reavali", "gasometr", "falha", "melhora do ph"] }
        ],
        minimo: 4,
        dica: "Dois níveis de pressão. Pense no que o EPAP faz pelo DPOC e em quando você checa o pH de novo.",
        gabarito:
          "Uso modo com dois níveis de pressão, BiPAP ou pressão de suporte com PEEP, com máscara oronasal. Começo com IPAP em torno de 10 a 12 cmH₂O, titulando de 2 em 2 para volume corrente de 6 a 8 mL/kg e queda da frequência, e EPAP de 4 a 6 para contrabalançar a auto-PEEP. FiO₂ para saturação entre 88 e 92%. Fico à beira do leito ajustando vazamento e sincronia, e reavalio a gasometria em 1 a 2 horas: queda da PaCO₂, melhora do pH e da frequência indicam sucesso.",
        ref: "ERS/ATS Guideline on NIV (2017); Diretrizes Brasileiras de VM (AMIB/SBPT)."
      },
      {
        leito: "Leito 8 · 2 horas depois",
        paciente: "Sr. Raimundo, 68 anos",
        tag: "Falha da VNI",
        vitais: { FC: 124, SpO2: "84", FR: 36, PA: "160/95", extra: "Glasgow 10" },
        situacao:
          "Nova gasometria: pH 7,22; PaCO₂ 78. Está mais sonolento (Glasgow 10), com assincronia importante e já não tolera a máscara.",
        pergunta: "Qual a decisão e, se ele for ventilado invasivamente, como você ajusta o ventilador nesse DPOC?",
        pontos: [
          { t: "Falha da VNI: não postergar a intubação", k: ["falha", "intub", "iot", "nao postergar", "nao atrasar", "invasiv"] },
          { t: "Volume corrente baixo (~6–8 mL/kg peso predito)", k: ["6 a 8", "6 ml", "8 ml", "seis", "oito", "volume corrente baixo", "peso predito", "ideal"] },
          { t: "Frequência baixa e tempo expiratório longo (I:E ≥ 1:3)", k: ["tempo expiratorio", "i:e", "1:3", "1 para 3", "um para tres", "frequencia baixa", "reduzir a frequencia", "expiracao longa", "fluxo alto", "fluxo inspiratorio alto"] },
          { t: "Monitorar auto-PEEP (pausa expiratória)", k: ["auto-peep", "auto peep", "autopeep", "peep intrinseca", "aprisionamento", "hiperinsufla", "pausa expirat"] },
          { t: "Hipercapnia permissiva / não normalizar a PaCO₂ rápido", k: ["hipercapnia permissiva", "permissiv", "nao normalizar", "alcalose", "basal dele", "aos poucos"] }
        ],
        minimo: 3,
        dica: "O problema dele é colocar o ar para fora. Tudo no ventilador deve favorecer a expiração.",
        gabarito:
          "É falha da VNI: piora do pH e da PaCO₂, rebaixamento e intolerância. Não posso postergar a intubação, porque atrasar aumenta a mortalidade. No ventilador uso volume corrente de 6 a 8 mL/kg de peso predito, frequência baixa e fluxo inspiratório alto para alongar o tempo expiratório, com relação I:E de 1:3 ou mais. Monitoro auto-PEEP com pausa expiratória e aceito hipercapnia permissiva, sem normalizar a PaCO₂ rapidamente, mirando o pH e o CO₂ basal dele para evitar alcalose pós-hipercápnica.",
        ref: "Diretrizes Brasileiras de VM (AMIB/SBPT) — VM no DPOC."
      },
      {
        leito: "Leito 8 · Dia 2",
        paciente: "Sr. Raimundo, 68 anos",
        tag: "Alarme",
        vitais: { FC: 112, SpO2: "90", FR: 14, PA: "138/80", extra: "VCV" },
        situacao:
          "Intubado em volume controlado. O ventilador dispara alarme de pressão alta. A pressão de pico subiu de 28 para 42 cmH₂O, mas a pressão de platô continua quase igual: de 18 para 20 cmH₂O.",
        pergunta: "Raciocine esse alarme: qual o mecanismo, as causas prováveis e o que você faz?",
        pontos: [
          { t: "Pico sobe com platô estável = aumento de resistência de vias aéreas", k: ["resistenc", "via aerea", "vias aereas", "pico menos plato", "diferenca entre pico", "gradiente"] },
          { t: "Causas: secreção/rolha, broncoespasmo, tubo dobrado ou mordido", k: ["secrec", "rolha", "broncoespasm", "sibil", "dobr", "mordend", "mordid", "obstruc", "tubo"] },
          { t: "Checar circuito/tubo e aspirar", k: ["aspira", "sonda", "checar o tubo", "verificar o tubo", "circuito", "cânula", "canula", "pervied"] },
          { t: "Auscultar e discutir broncodilatador", k: ["auscult", "broncodilat", "salbutamol", "fenoterol", "beta"] },
          { t: "Diferenciar de queda de complacência (pico e platô altos) / se instável, ventilar manualmente (DOPE)", k: ["complacen", "pneumotorax", "seletiv", "dope", "ambu", "ventilar manual", "desconect", "platô alto", "plato alto"] }
        ],
        minimo: 3,
        dica: "Pico menos platô é a parte resistiva. Platô reflete a parte elástica. Qual delas mudou?",
        gabarito:
          "Se o pico sobe e o platô fica estável, o problema é de resistência das vias aéreas, não de complacência. As causas prováveis são secreção ou rolha, broncoespasmo, tubo dobrado ou paciente mordendo o tubo. Checo o circuito e o tubo, passo a sonda e aspiro, ausculto procurando sibilos e discuto broncodilatador com a equipe. Se pico e platô subissem juntos, pensaria em queda de complacência: pneumotórax, intubação seletiva, atelectasia ou edema. Se houver instabilidade, desconecto e ventilo manualmente seguindo o DOPE.",
        ref: "Monitorização da mecânica respiratória na VM."
      },
      {
        leito: "Leito 8 · Dia 5",
        paciente: "Sr. Raimundo, 68 anos",
        tag: "Desmame",
        vitais: { FC: 92, SpO2: "93", FR: 20, PA: "126/74", extra: "PSV 8 · PEEP 6" },
        situacao:
          "Causa da insuficiência controlada. Em PSV 8, PEEP 6, FiO₂ 35%, relação PaO₂/FiO₂ 240. Sem vasopressor, desperto, obedece comandos e tem tosse presente na aspiração.",
        pergunta: "Ele está pronto para o teste de respiração espontânea? Como você faz o teste e o que te faria interromper?",
        pontos: [
          { t: "Critérios de prontidão atendidos (causa resolvida, P/F >150–200, PEEP ≤8, FiO₂ ≤0,4, estável, desperto)", k: ["pronto", "apto", "criterios", "p/f", "relacao", "240", "peep menor", "fio2 menor", "estavel"] },
          { t: "TRE em PSV 5–7 cmH₂O ou tubo T", k: ["tubo t", "tubo em t", "psv 5", "psv 7", "pressao de suporte de 5", "pressao de suporte de 7", "suporte de 5", "suporte de 7", "cinco", "sete"] },
          { t: "Duração de 30 a 120 minutos", k: ["30", "trinta", "120", "duas horas", "2 horas", "meia hora"] },
          { t: "Critérios de falha: FR >35, SpO₂ <90%, FC >140, PAS >180 ou <90, desconforto, sudorese, agitação", k: ["35", "trinta e cinco", "90%", "140", "180", "sudorese", "agita", "desconforto", "musculatura acessoria", "taquicard", "dessatur"] },
          { t: "Avaliar índice de respiração rápida e superficial (<105) e proteção de via aérea (tosse, secreção, consciência)", k: ["irrs", "tobin", "105", "rapida e superficial", "tosse", "secrec", "consciencia", "cuff leak", "vazamento"] }
        ],
        minimo: 3,
        dica: "Repasse a lista de prontidão e depois os critérios que interrompem o teste. São números clássicos.",
        gabarito:
          "Sim, preenche os critérios de prontidão: causa controlada, P/F acima de 150 a 200, PEEP até 8, FiO₂ até 40%, estabilidade hemodinâmica sem vasopressor e drive com despertar. Faço o TRE em PSV de 5 a 7 cmH₂O ou em tubo T por 30 a 120 minutos. Interrompo se a frequência passar de 35, saturação abaixo de 90%, frequência cardíaca acima de 140 ou variação maior que 20%, PAS acima de 180 ou abaixo de 90, ou sinais de desconforto como agitação, sudorese e musculatura acessória. Também avalio índice de respiração rápida e superficial abaixo de 105, tosse, secreção e nível de consciência antes de extubar.",
        ref: "Diretrizes Brasileiras de VM (AMIB/SBPT); Boles et al., ERJ 2007."
      },
      {
        leito: "Leito 8 · Extubação",
        paciente: "Sr. Raimundo, 68 anos",
        tag: "Pós-extubação",
        chefe: true,
        vitais: { FC: 96, SpO2: "91", FR: 22, PA: "130/78", extra: "Extubado" },
        situacao:
          "Passou no TRE e foi extubado agora. É DPOC hipercápnico, com 68 anos e uma falha prévia de VNI nesta internação.",
        pergunta: "Qual suporte você indica logo após a extubação, por quê, e o que monitora nas próximas 48 horas?",
        pontos: [
          { t: "Reconhecer alto risco de falha de extubação (DPOC, hipercapnia, >65 anos)", k: ["alto risco", "risco de falha", "risco de reintub", "hipercap", "idade", "65"] },
          { t: "VNI profilática imediatamente após extubar", k: ["vni", "nao invasiva", "bipap", "profilatic", "preventiv"] },
          { t: "Cateter nasal de alto fluxo como alternativa/intercalado", k: ["alto fluxo", "cnaf", "high flow", "intercal", "alternar"] },
          { t: "Monitorar sinais de falha nas 48–72 h e não usar VNI para atrasar reintubação", k: ["48", "72", "quarenta e oito", "sinais de falha", "nao atrasar", "nao postergar", "reintub", "estridor"] },
          { t: "Fisioterapia: higiene brônquica, posicionamento, mobilização precoce", k: ["higiene", "secrec", "tosse", "posicion", "mobiliz", "sedest", "deambul"] }
        ],
        minimo: 3,
        dica: "Prevenir falha é diferente de resgatar falha. Um desses usos da VNI tem evidência, o outro pode atrasar a reintubação.",
        gabarito:
          "Ele é de alto risco para falha de extubação: DPOC hipercápnico, acima de 65 anos e com falha prévia. Indico VNI profilática logo após a extubação, que reduz reintubação em hipercápnicos, podendo intercalar com cateter nasal de alto fluxo nos intervalos. Monitoro nas próximas 48 a 72 horas frequência, saturação, gasometria, trabalho respiratório e estridor. Se ele desenvolver insuficiência respiratória estabelecida, não uso VNI como resgate para atrasar a reintubação. Sigo com higiene brônquica, posicionamento e mobilização precoce.",
        ref: "ERS/ATS NIV Guideline (2017); estudos de VNI profilática pós-extubação em hipercápnicos."
      }
    ]
  },
  {
    id: "especialista",
    nivel: "Especialista",
    titulo: "SDRA na Madrugada",
    setor: "UTI adulto · Leito 12",
    problema:
      "Carla, 41 anos, 165 cm, pneumonia por influenza evoluindo para síndrome do desconforto respiratório agudo. Você é a fisioterapeuta de referência da madrugada. Mantenha a ventilação protetora e leve a paciente viva até o desmame.",
    xp: 200,
    casos: [
      {
        leito: "Leito 12 · 23h",
        paciente: "Carla, 41 anos · 165 cm",
        tag: "Ventilação protetora",
        vitais: { FC: 118, SpO2: "90", FR: 26, PA: "112/68", extra: "Peso real 92 kg" },
        situacao:
          "Acabou de ser intubada. Mulher, 165 cm de altura, peso real 92 kg. O residente programou volume corrente de 550 mL.",
        pergunta: "Calcule o peso predito e o volume corrente inicial. Que fórmula você usa e o que diz ao residente?",
        pontos: [
          { t: "Fórmula feminina: 45,5 + 0,91 × (altura − 152,4)", k: ["45,5", "45.5", "quarenta e cinco", "0,91", "0.91", "152,4", "152.4", "152"] },
          { t: "Peso predito ≈ 57 kg", k: ["57", "cinquenta e sete", "56,9", "56.9", "56", "cinquenta e seis"] },
          { t: "Volume corrente 6 mL/kg ≈ 340 mL (faixa 4–8)", k: ["340", "342", "345", "trezentos e quarenta", "6 ml", "seis ml", "6 mililitros", "seis mililitros", "seis por quilo"] },
          { t: "Não usar o peso real; 550 mL é lesivo (~9,6 mL/kg)", k: ["peso real", "nao usar o peso", "nao pelo peso", "alto demais", "muito alto", "lesiv", "550", "reduzir", "volutrauma", "vili"] }
        ],
        minimo: 3,
        dica: "O pulmão cresce com a altura, não com o peso. Use a fórmula do peso predito para mulher.",
        gabarito:
          "Uso o peso predito, que para mulher é 45,5 mais 0,91 vezes a altura em centímetros menos 152,4. Para 165 cm: 45,5 + 0,91 × 12,6, cerca de 57 kg. Volume corrente inicial de 6 mL/kg, aproximadamente 340 mL, dentro da faixa de 4 a 8. Explico ao residente que 550 mL corresponde a quase 10 mL/kg de peso predito: o peso real não entra na conta e esse volume aumenta o risco de lesão pulmonar induzida pela ventilação.",
        ref: "ARDSNet, NEJM 2000; Diretrizes Brasileiras de VM."
      },
      {
        leito: "Leito 12 · 01h",
        paciente: "Carla, 41 anos",
        tag: "Mecânica",
        vitais: { FC: 116, SpO2: "91", FR: 28, PA: "108/66", extra: "PEEP 10 · FiO₂ 70%" },
        situacao:
          "Em VCV com 340 mL, PEEP 10, FiO₂ 70%. Gasometria: PaO₂ 84 mmHg. Pausa inspiratória mostra platô de 29 cmH₂O.",
        pergunta: "Classifique a SDRA e avalie a mecânica. A ventilação está realmente protetora?",
        pontos: [
          { t: "P/F = 120 → SDRA moderada (100–200, Berlim)", k: ["120", "cento e vinte", "moderad"] },
          { t: "Driving pressure = platô − PEEP = 19 (acima de 15)", k: ["driving", "pressao de distensao", "19", "dezenove", "delta p", "pressao motriz"] },
          { t: "Platô ≤30 isolado não garante proteção; driving alto", k: ["nao esta protetor", "nao e protetor", "nao esta protetora", "acima de 15", "maior que 15", "15", "quinze", "plato abaixo", "plato menor", "30"] },
          { t: "Complacência estática baixa (~18 mL/cmH₂O)", k: ["complacen", "18", "dezoito"] },
          { t: "Conduta: reduzir VC (4–5 mL/kg) e/ou titular PEEP; compensar FR; hipercapnia permissiva", k: ["reduzir o volume", "diminuir o volume", "baixar o volume", "4 ml", "5 ml", "quatro", "cinco", "titular", "titulacao", "aumentar a frequencia", "hipercapnia permissiva", "permissiv"] }
        ],
        minimo: 3,
        dica: "Faça duas contas: PaO₂ dividido pela FiO₂, e platô menos PEEP. O platô sozinho conta a história toda?",
        gabarito:
          "PaO₂/FiO₂ de 84 dividido por 0,7 dá 120: SDRA moderada pela definição de Berlim, entre 100 e 200. O platô de 29 está abaixo de 30, mas a driving pressure é 29 menos 10, igual a 19 cmH₂O, acima do alvo de 15, com complacência estática baixa, em torno de 18 mL/cmH₂O. Então não está plenamente protetora. Reduzo o volume corrente para 5 ou até 4 mL/kg, titulo a PEEP buscando melhor complacência, aumento a frequência para compensar o volume minuto e aceito hipercapnia permissiva desde que o pH se mantenha aceitável.",
        ref: "Amato et al., NEJM 2015 (driving pressure); Definição de Berlim (JAMA 2012)."
      },
      {
        leito: "Leito 12 · 04h",
        paciente: "Carla, 41 anos",
        tag: "Prona",
        vitais: { FC: 120, SpO2: "88", FR: 30, PA: "104/62", extra: "P/F 110" },
        situacao:
          "Seis horas depois, mesmo com VC de 5 mL/kg, PEEP 14 e FiO₂ 80%, a relação P/F está em 110.",
        pergunta: "Qual a próxima intervenção com maior evidência? Detalhe critério, duração e cuidados.",
        pontos: [
          { t: "Posição prona", k: ["prona", "pronar", "pronacao", "decubito ventral"] },
          { t: "Critério: P/F <150 com FiO₂ ≥0,6 e PEEP ≥5, de forma precoce", k: ["150", "cento e cinquenta", "precoce", "48", "36", "fio2 maior", "60%"] },
          { t: "Sessões longas: ≥16 h consecutivas", k: ["16", "dezesseis", "16 horas", "longa", "prolongad"] },
          { t: "Equipe treinada, checklist, fixação do tubo e cateteres, FiO₂ 100% antes", k: ["equipe", "checklist", "fixa", "tubo", "cateter", "drenos", "100%", "pre-oxigen", "pre oxigen", "cinco pessoas", "5 pessoas"] },
          { t: "Proteger proeminências, face e olhos; posição do nadador alternando", k: ["proemin", "lesao por pressao", "olhos", "face", "coxim", "nadador", "alternar", "rodizio"] },
          { t: "Critério de suspensão: P/F ≥150 com PEEP ≤10 e FiO₂ ≤0,6 após voltar a supino", k: ["suspender", "parar a prona", "interromper", "supino", "manter acima de 150", "estabilidade da oxigen"] }
        ],
        minimo: 4,
        dica: "Um estudo francês de 2013 mudou essa conduta. Lembre do corte de P/F e de quantas horas.",
        gabarito:
          "A intervenção é a posição prona, com redução de mortalidade no estudo PROSEVA. Indicada de forma precoce em SDRA com P/F abaixo de 150 com FiO₂ de pelo menos 60% e PEEP de pelo menos 5, após otimização. Sessões de pelo menos 16 horas consecutivas. Uso equipe treinada com checklist, cinco pessoas, garanto fixação do tubo, cateteres e drenos e pré-oxigeno com FiO₂ 100%. Protejo proeminências ósseas, face e olhos com coxins e alterno a posição do nadador a cada duas horas. Suspendo a prona quando, de volta em supino, o P/F se mantém acima de 150 com PEEP até 10 e FiO₂ até 60% por pelo menos 4 horas.",
        ref: "Guérin et al., PROSEVA, NEJM 2013."
      },
      {
        leito: "Leito 12 · 05h",
        paciente: "Carla, 41 anos",
        tag: "Emergência",
        vitais: { FC: 138, SpO2: "76", FR: 30, PA: "74/40", extra: "Em prona" },
        situacao:
          "Em prona há uma hora. De repente a saturação despenca para 76%, a pressão cai para 74/40 e, no ventilador, pico e platô sobem juntos bruscamente.",
        pergunta: "Qual a sua hipótese principal e o que você faz agora?",
        pontos: [
          { t: "Pico e platô juntos = queda súbita de complacência", k: ["complacen", "pico e plato", "os dois subiram", "ambos"] },
          { t: "Hipótese: pneumotórax hipertensivo (barotrauma) ou intubação seletiva/deslocamento do tubo", k: ["pneumotorax", "barotrauma", "seletiv", "deslocamento", "desloc", "extubac", "tubo"] },
          { t: "FiO₂ 100% e chamar o médico imediatamente", k: ["100%", "cem por cento", "fio2", "chamar", "medico", "acionar", "ajuda"] },
          { t: "DOPE: checar tubo, obstrução, pneumotórax, equipamento; ventilar manualmente", k: ["dope", "ambu", "manual", "desconect", "equipamento", "obstruc"] },
          { t: "Confirmar (USG: ausência de deslizamento pleural) e preparar descompressão/drenagem, retornando a supino", k: ["usg", "ultrassom", "ultrassonografia", "deslizamento", "drenag", "dreno", "descompress", "puncao", "supino", "despronar", "virar"] }
        ],
        minimo: 3,
        dica: "Quando pico e platô sobem juntos o problema é elástico. Some isso à hipotensão súbita.",
        gabarito:
          "Pico e platô subindo juntos indicam queda súbita de complacência. Com hipotensão e dessaturação grave, a hipótese principal é pneumotórax hipertensivo por barotrauma; também penso em intubação seletiva ou deslocamento do tubo. Coloco FiO₂ em 100% e chamo o médico imediatamente. Sigo o DOPE: deslocamento do tubo, obstrução, pneumotórax e equipamento, desconectando e ventilando manualmente se preciso. Confirmo com ultrassom, ausência de deslizamento pleural, e preparo o retorno a supino para descompressão e drenagem torácica pela equipe médica.",
        ref: "Abordagem DOPE; complicações da VM na SDRA."
      },
      {
        leito: "Leito 12 · Dia 3",
        paciente: "Carla, 41 anos",
        tag: "Assincronia",
        vitais: { FC: 104, SpO2: "93", FR: 32, PA: "118/70", extra: "VC 5 mL/kg" },
        situacao:
          "Bloqueador neuromuscular suspenso. Na curva de fluxo × tempo você vê dois ciclos seguidos sem expiração completa entre eles, e o volume exalado nesses momentos quase dobra.",
        pergunta: "Qual assincronia é essa, por que ela é perigosa nessa paciente e o que você ajusta?",
        pontos: [
          { t: "Duplo disparo (double triggering / empilhamento)", k: ["duplo disparo", "double trigger", "disparo duplo", "empilhament", "stacking", "dois disparos"] },
          { t: "Causa: drive alto / tempo inspiratório neural maior que o do ventilador", k: ["drive", "fome de ar", "tempo inspiratorio neural", "demanda", "esforco", "tempo inspiratorio curto", "volume insuficiente"] },
          { t: "Risco: volume efetivo dobrado, perde a proteção (VILI)", k: ["dobr", "volume alto", "perde a protecao", "lesao", "vili", "volutrauma", "nao protetor"] },
          { t: "Ajustes: aumentar tempo inspiratório/pausa, ajustar VC se platô e driving permitirem, modo PCV", k: ["tempo inspirat", "pausa", "aumentar o volume", "ajustar o volume", "pcv", "pressao controlada", "fluxo"] },
          { t: "Tratar a causa e ajustar sedação/analgesia; bloqueio se persistir", k: ["sedac", "analges", "febre", "acidose", "dor", "bloque", "curariz", "causa"] }
        ],
        minimo: 3,
        dica: "Dois ciclos colados sem expiração no meio. O paciente quer mais do que você está entregando.",
        gabarito:
          "É duplo disparo: o paciente tem drive alto e o tempo inspiratório neural dura mais que o do ventilador, então dispara um segundo ciclo antes de expirar. É perigoso porque o volume efetivo quase dobra e a ventilação deixa de ser protetora, aumentando a lesão pulmonar. Ajusto aumentando o tempo inspiratório ou colocando pausa, considero aumentar levemente o volume corrente se platô e driving permitirem, ou trocar para pressão controlada. Trato causas do drive alto como febre, acidose e dor, ajusto sedação e analgesia, e se persistir em SDRA grave discuto bloqueio neuromuscular.",
        ref: "Literatura de assincronias paciente-ventilador; Diretrizes Brasileiras de VM."
      },
      {
        leito: "Leito 12 · Dia 14",
        paciente: "Carla, 41 anos",
        tag: "Desmame difícil",
        chefe: true,
        vitais: { FC: 98, SpO2: "95", FR: 24, PA: "120/72", extra: "MRC 36/60" },
        situacao:
          "Pulmão melhorou, mas ela falhou em dois testes de respiração espontânea, o primeiro há 4 dias. MRC 36/60 e PImáx de −22 cmH₂O.",
        pergunta: "Classifique o desmame, interprete os achados e trace o seu plano fisioterapêutico.",
        pontos: [
          { t: "Desmame difícil (até 3 TREs ou até 7 dias após o primeiro)", k: ["dificil", "desmame dificil"] },
          { t: "Fraqueza adquirida na UTI (MRC <48)", k: ["fraqueza adquirida", "fauti", "polineuropat", "miopat", "48", "quarenta e oito", "fraqueza"] },
          { t: "PImáx reduzida: fraqueza muscular inspiratória", k: ["pimax", "pi max", "forca inspiratoria", "musculatura inspiratoria", "musculos inspiratorios", "fraqueza inspirat", "-30", "menos 30", "30"] },
          { t: "Treinamento muscular inspiratório com carga (~30–50% da PImáx)", k: ["treinamento muscular", "tmi", "powerbreathe", "threshold", "carga", "resistor", "sensibilidade"] },
          { t: "Mobilização precoce progressiva (cicloergômetro, sedestação, ortostatismo)", k: ["mobiliz", "cicloergom", "sedest", "ortostat", "prancha", "deambul", "fortalec", "eletroestim", "fes"] },
          { t: "Estratégia ventilatória: repouso e TRE diários; considerar traqueostomia", k: ["repouso", "diario", "diariamente", "todo dia", "traqueost", "tqt", "progressiv"] }
        ],
        minimo: 4,
        dica: "Conte as falhas e os dias para classificar. Depois olhe os dois números de força: membro e diafragma.",
        gabarito:
          "É desmame difícil: falhou em até três testes e está dentro de 7 dias do primeiro. O MRC de 36, abaixo de 48, define fraqueza adquirida na UTI, e a PImáx de −22 cmH₂O mostra fraqueza muscular inspiratória, abaixo do valor associado a sucesso. Meu plano: treinamento muscular inspiratório com carga em torno de 30 a 50% da PImáx, mobilização precoce progressiva com cicloergômetro, sedestação e ortostatismo, alternância entre períodos de treino e repouso ventilatório noturno para evitar fadiga, TRE diário e discussão de traqueostomia se o desmame se prolongar.",
        ref: "Boles et al., ERJ 2007 (classificação); diretrizes de fraqueza adquirida na UTI e TMI."
      }
    ]
  }
];

/* Texto para narração: troca siglas e símbolos pelo que se fala em voz alta. */
window.FALAR = function (t) {
  const R = [
    [/PaO₂\/FiO₂/g, "relação P sobre F"], [/P\/F/g, "P sobre F"],
    [/mL\/cmH₂O/g, "mililitros por centímetro de água"], [/cmH₂O/g, "centímetros de água"],
    [/mL\/kg/g, "mililitros por quilo"], [/mmHg/g, "milímetros de mercúrio"], [/mEq\/L/g, "miliequivalentes por litro"],
    [/L\/min/g, "litros por minuto"], [/PImáx/g, "P I máxima"], [/SpO₂/g, "saturação"], [/FiO₂/g, "fração inspirada de oxigênio"],
    [/PaCO₂/g, "P A C O 2"], [/PaO₂/g, "P A O 2"], [/HCO₃/g, "bicarbonato"], [/CO₂/g, "gás carbônico"], [/O₂/g, "oxigênio"],
    [/\bTREs\b/g, "testes de respiração espontânea"], [/\bTRE\b/g, "teste de respiração espontânea"],
    [/\bPSV\b/g, "P S V"], [/\bVCV\b/g, "V C V"], [/\bPCV\b/g, "P C V"], [/\bVC\b/g, "volume corrente"], [/\bFR\b/g, "frequência respiratória"],
    [/\bFC\b/g, "frequência cardíaca"], [/\bPAS\b/g, "pressão sistólica"], [/\bPAD\b/g, "pressão diastólica"], [/\bMRC\b/g, "M R C"],
    [/\bUTI\b/g, "U T I"], [/\bAVC\b/g, "A V C"], [/\bAA\b/g, "ar ambiente"], [/\bPOI\b/g, "pós-operatório imediato"],
    [/(\d)\s?[–-]\s?(\d)/g, "$1 a $2"], [/≥/g, " maior ou igual a "], [/≤/g, " menor ou igual a "], [/</g, " menor que "], [/>/g, " maior que "],
    [/×/g, " vezes "], [/−\s?/g, "menos "], [/~/g, "cerca de "], [/(\d):(\d)/g, "$1 para $2"], [/(\d+)\/(\d+)/g, "$1 por $2"],
    [/\s+/g, " "]
  ];
  let s = String(t);
  R.forEach(([a, b]) => { s = s.replace(a, b); });
  return s.trim();
};

/* Textos fixos com áudio gravado. */
window.FALAS_FIXAS = {
  "fx-correta": "Correta! Mandou muito bem.",
  "fx-parcial": "Quase lá. Você está no caminho certo.",
  "fx-incorreta": "Ainda não. Vamos rever esse raciocínio juntas.",
  "fx-fim": "Parabéns! Jornada concluída. Plantão encerrado com sucesso.",
  "fx-gameover": "Plantão interrompido. Revise as respostas-modelo e tente de novo.",
  "fx-teste": "Oi! Essa é a voz que vai narrar os seus casos no plantão."
};

/* Perguntas rápidas: intercorrências (com tempo) e rodadas Raio-X. c = índice da alternativa correta. */
window.RAPIDAS = {
  iniciante: [
    { q: "Qual o alvo de saturação para um paciente DPOC retentor de CO₂?", o: ["88 a 92%", "94 a 98%", "85 a 88%", "Acima de 95%"], c: 0, e: "No retentor, mirar 88–92% evita piorar a hipercapnia." },
    { q: "Cateter nasal a 3 L/min oferece FiO₂ aproximada de:", o: ["Cerca de 32%", "Cerca de 24%", "Cerca de 45%", "Cerca de 60%"], c: 0, e: "Regra prática: 21% + 3 a 4% por litro." },
    { q: "Qual ruído adventício sugere secreção em vias aéreas de grande calibre?", o: ["Roncos", "Estertores finos", "Atrito pleural", "Estridor"], c: 0, e: "Roncos são graves e mudam com a tosse: secreção em vias maiores." },
    { q: "Hipotensão ortostática é definida por queda de:", o: ["PAS ≥ 20 ou PAD ≥ 10 mmHg", "PAS ≥ 10 mmHg", "PAD ≥ 5 mmHg", "FC ≥ 10 bpm"], c: 0, e: "Queda de 20 na sistólica ou 10 na diastólica em até 3 minutos em pé." },
    { q: "Paciente no pós-operatório com dor 9/10 recusa a fisioterapia. Primeiro passo:", o: ["Acionar a equipe para analgesia e voltar depois", "Fazer os exercícios mesmo assim", "Registrar recusa e não voltar", "Fazer só o incentivador"], c: 0, e: "Dor não controlada impede expansão e mobilização: analgesia primeiro." },
    { q: "A principal vantagem da máscara de Venturi é:", o: ["FiO₂ precisa e constante", "Oferecer FiO₂ de 100%", "Maior umidificação", "Permitir comer com ela"], c: 0, e: "O sistema de alto fluxo com arrastamento de ar garante FiO₂ definida." },
    { q: "Na deambulação a SpO₂ cai de 94 para 85% e não sobe. O que fazer?", o: ["Parar, sentar, ajustar O₂ e reavaliar", "Continuar mais devagar", "Aumentar o ritmo para terminar", "Ignorar, deve ser o sensor"], c: 0, e: "Dessaturação sustentada é critério de interrupção." },
    { q: "O huffing é:", o: ["Expiração forçada com a glote aberta", "Tosse com a glote fechada", "Inspiração forçada máxima", "Apneia pós-inspiratória"], c: 0, e: "TEF/huffing mobiliza secreção com menos colapso dinâmico." },
    { q: "Qual incentivador privilegia inspiração lenta e sustentada?", o: ["A volume", "A fluxo", "Os dois igualmente", "Nenhum deles"], c: 0, e: "O incentivador a volume favorece inspiração lenta e profunda." },
    { q: "Qual achado indica aumento do trabalho respiratório?", o: ["Tiragem e musculatura acessória", "Fala frases completas", "FR de 14 com conforto", "SpO₂ 98% em ar ambiente"], c: 0, e: "Tiragem e uso de acessória são sinais de esforço." },
    { q: "Contraindicação para drenagem postural com cabeça para baixo:", o: ["Hipertensão intracraniana", "Pneumonia", "DPOC estável", "Pós-operatório de joelho"], c: 0, e: "Trendelenburg eleva a pressão intracraniana." },
    { q: "Pneumonia unilateral, respiração espontânea. Qual decúbito melhora a oxigenação?", o: ["Pulmão sadio para baixo", "Pulmão doente para baixo", "Supino reto", "Trendelenburg"], c: 0, e: "Com o pulmão sadio para baixo, perfusão e ventilação ficam no lado bom." }
  ],
  intermediario: [
    { q: "pH 7,30, PaCO₂ 60, HCO₃ 26. Qual o distúrbio?", o: ["Acidose respiratória aguda", "Acidose respiratória crônica", "Acidose metabólica", "Alcalose respiratória"], c: 0, e: "PaCO₂ alta com bicarbonato quase normal: ainda sem compensação renal." },
    { q: "Indicação de VNI com melhor evidência:", o: ["DPOC exacerbado com acidose respiratória", "Rebaixamento com vômitos", "Parada cardiorrespiratória", "Pneumotórax não drenado"], c: 0, e: "É a indicação clássica, com redução de intubação e mortalidade." },
    { q: "Qual é contraindicação para VNI?", o: ["Incapacidade de proteger a via aérea", "FR de 28 irpm", "SpO₂ de 89%", "PaCO₂ de 55"], c: 0, e: "Rebaixamento e risco de aspiração contraindicam VNI." },
    { q: "No DPOC, o EPAP serve principalmente para:", o: ["Contrabalançar a auto-PEEP", "Aumentar o volume corrente", "Reduzir a FiO₂", "Corrigir acidose metabólica"], c: 0, e: "Reduz o esforço para disparar o ciclo." },
    { q: "Pico alto com platô normal no VCV sugere:", o: ["Aumento de resistência", "Queda de complacência", "Pneumotórax", "Vazamento no circuito"], c: 0, e: "Pico menos platô reflete o componente resistivo." },
    { q: "Índice de respiração rápida e superficial que favorece o sucesso:", o: ["Menor que 105", "Maior que 105", "Maior que 150", "Exatamente 80"], c: 0, e: "f/VT abaixo de 105 associa-se a sucesso no desmame." },
    { q: "Duração recomendada do teste de respiração espontânea:", o: ["30 a 120 minutos", "5 minutos", "6 horas", "24 horas"], c: 0, e: "Entre 30 e 120 minutos em PSV baixa ou tubo T." },
    { q: "Qual sinal indica falha no TRE?", o: ["FR maior que 35 sustentada", "FR de 22", "SpO₂ de 94%", "FC de 95"], c: 0, e: "Taquipneia acima de 35 é critério clássico de falha." },
    { q: "O cuff leak test avalia:", o: ["Risco de edema laríngeo pós-extubação", "Força muscular inspiratória", "Complacência pulmonar", "Drive respiratório"], c: 0, e: "Vazamento baixo sugere risco de estridor." },
    { q: "Como medir a auto-PEEP?", o: ["Pausa expiratória", "Pausa inspiratória", "Pressão de pico", "Manovacuometria"], c: 0, e: "A pausa ao fim da expiração revela a PEEP intrínseca." },
    { q: "Alcalose pós-hipercápnica acontece quando:", o: ["A PaCO₂ do retentor é normalizada rápido", "Se usa PEEP alta", "Se aumenta a FiO₂", "O paciente hiperventila sozinho"], c: 0, e: "O bicarbonato compensatório fica sobrando." },
    { q: "Um benefício do cateter nasal de alto fluxo:", o: ["Lavagem do espaço morto com FiO₂ alta", "Ventilação invasiva", "Substituir sempre a intubação", "FiO₂ máxima de 40%"], c: 0, e: "Fluxo alto aquecido gera lavagem do espaço morto e leve PEEP." }
  ],
  especialista: [
    { q: "Peso predito de um homem com 180 cm:", o: ["Cerca de 75 kg", "Cerca de 68 kg", "Cerca de 82 kg", "Cerca de 90 kg"], c: 0, e: "50 + 0,91 × (180 − 152,4) ≈ 75 kg." },
    { q: "Driving pressure alvo na SDRA:", o: ["Até 15 cmH₂O", "Até 25 cmH₂O", "Até 30 cmH₂O", "Até 5 cmH₂O"], c: 0, e: "Valores acima de 15 associam-se a maior mortalidade." },
    { q: "P/F de 180 com PEEP ≥ 5 classifica a SDRA como:", o: ["Moderada", "Leve", "Grave", "Não é SDRA"], c: 0, e: "Berlim: leve 200–300, moderada 100–200, grave ≤ 100." },
    { q: "Duração das sessões de prona no PROSEVA:", o: ["Pelo menos 16 horas", "4 horas", "1 hora", "8 horas"], c: 0, e: "Sessões longas, de no mínimo 16 horas consecutivas." },
    { q: "Complacência estática é calculada por:", o: ["VC ÷ (Platô − PEEP)", "VC ÷ (Pico − PEEP)", "(Pico − Platô) ÷ fluxo", "VC × FR"], c: 0, e: "Usa o platô, que reflete só o componente elástico." },
    { q: "Resistência de vias aéreas é calculada por:", o: ["(Pico − Platô) ÷ fluxo", "VC ÷ (Platô − PEEP)", "Platô − PEEP", "Pico ÷ FR"], c: 0, e: "A diferença pico-platô dividida pelo fluxo inspiratório." },
    { q: "Na hipercapnia permissiva, costuma-se tolerar pH até cerca de:", o: ["7,20", "7,35", "7,00", "6,90"], c: 0, e: "Aceita-se pH em torno de 7,20 para preservar a proteção pulmonar." },
    { q: "Paciente faz esforço e o ventilador não dispara. Qual assincronia?", o: ["Esforço ineficaz", "Duplo disparo", "Autodisparo", "Ciclagem precoce"], c: 0, e: "Comum com auto-PEEP e sensibilidade inadequada." },
    { q: "Causa frequente de autodisparo:", o: ["Vazamento ou sensibilidade excessiva", "Auto-PEEP elevada", "Sedação profunda", "Fluxo inspiratório baixo"], c: 0, e: "O ventilador interpreta o vazamento como esforço." },
    { q: "Ausência de deslizamento pleural com ponto pulmonar no ultrassom sugere:", o: ["Pneumotórax", "Derrame pleural", "Consolidação", "Edema pulmonar"], c: 0, e: "O ponto pulmonar é praticamente específico de pneumotórax." },
    { q: "MRC abaixo de 48 indica:", o: ["Fraqueza adquirida na UTI", "Força normal", "Fadiga diafragmática isolada", "Lesão medular"], c: 0, e: "Soma MRC < 48/60 define fraqueza adquirida na UTI." },
    { q: "Desmame prolongado, pela classificação de Boles:", o: ["Mais de 3 TREs ou mais de 7 dias", "Sucesso no primeiro TRE", "Até 2 TREs", "Qualquer falha"], c: 0, e: "Simples, difícil (até 3 TREs ou 7 dias) e prolongado (além disso)." }
  ]
};
Object.assign(window.FALAS_FIXAS, {
  "fx-alarme": "Atenção! Intercorrência no leito. Decida rápido.",
  "fx-raiox": "Raio-X do plantão. Seis perguntas, pouco tempo. Valendo!",
  "fx-12h": "Plantão de doze horas. Três vidas, perguntas cada vez mais rápidas. Boa sorte!",
  "fx-certo": "Isso!",
  "fx-errado": "Não foi dessa vez."
});

/* Roteiro de narração de cada item (mesmos ids usados pelos áudios gravados). */
window.ROTEIRO = function () {
  const out = {};
  window.JORNADAS.forEach(j => {
    out[`${j.id}-briefing`] = `${j.titulo}. ${j.problema}`;
    j.casos.forEach((c, i) => {
      const v = c.vitais;
      out[`${j.id}-${i}-caso`] = `${c.leito}. ${c.paciente}. No monitor: frequência cardíaca ${v.FC}, saturação ${v.SpO2}, frequência respiratória ${v.FR}, pressão ${v.PA}. ${v.extra}. ${c.situacao} A pergunta é: ${c.pergunta}`;
      out[`${j.id}-${i}-dica`] = `Dica. ${c.dica}`;
      out[`${j.id}-${i}-gabarito`] = `Resposta-modelo. ${c.gabarito}`;
    });
  });
  Object.keys(window.RAPIDAS).forEach(n => window.RAPIDAS[n].forEach((q, k) => { out[`q-${n}-${k}`] = q.q; }));
  Object.assign(out, window.FALAS_FIXAS);
  Object.keys(out).forEach(k => { out[k] = window.FALAR(out[k]); });
  return out;
};
