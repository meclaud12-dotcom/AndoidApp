const flashcards = [
  { front: 'Buongiorno', back: 'Guten Morgen', example: 'Buongiorno, come sta?', topic: 'Alltag', hint: 'Mit buongiorno begrüßt du bis zum frühen Nachmittag.' },
  { front: 'Come ti chiami?', back: 'Wie heißt du?', example: 'Ciao, come ti chiami?', topic: 'Vorstellen', hint: 'Die Antwort beginnt oft mit "Mi chiamo ...".' },
  { front: 'Vorrei un caffè, per favore.', back: 'Ich hätte gern einen Kaffee, bitte.', example: 'Vorrei un caffè ristretto, per favore.', topic: 'Cafe', hint: 'Vorrei + Objekt ist eine höfliche Bitte.' },
  { front: 'Dove si trova la stazione?', back: 'Wo befindet sich der Bahnhof?', example: 'Scusi, dove si trova la stazione?', topic: 'Unterwegs', hint: 'Nutze si trova, wenn du nach einem Ort fragst.' },
  { front: 'Quanto costa?', back: 'Wie viel kostet es?', example: 'Scusi, quanto costa questo libro?', topic: 'Einkaufen', hint: 'Mit questo/quello zeigst du auf den Gegenstand.' },
  { front: 'Mi piace', back: 'Ich mag', example: 'Mi piace la pasta fresca.', topic: 'Gefühle', hint: 'Mi piace + Singular, mi piacciono + Plural.' },
  { front: 'Sto imparando l\'italiano.', back: 'Ich lerne Italienisch.', example: 'Sto imparando l\'italiano con un corso online.', topic: 'Lernen', hint: 'Gerundio: stare + Verb auf -ando/-endo.' },
  { front: 'Possiamo avere il conto?', back: 'Können wir die Rechnung haben?', example: 'Scusi, possiamo avere il conto?', topic: 'Restaurant', hint: 'Possiamo = wir können; il conto = die Rechnung.' },
  { front: 'A che ora apre?', back: 'Wann öffnet es?', example: 'Mi scusi, a che ora apre il museo?', topic: 'Zeit', hint: 'Für Zeiten immer mit a che ora? beginnen.' },
  { front: 'Andare', back: 'Gehen / fahren', example: 'Domani andiamo al mare.', topic: 'Verben', hint: 'Unregelmäßig: vado, vai, va, andiamo, andate, vanno.' },
];

const quizItems = [
  { question: 'Was bedeutet "andare"?', options: ['gehen/fahren', 'essen', 'trinken'], answer: 'gehen/fahren', type: 'Vokabel' },
  { question: 'Wähle den richtigen Artikel: __ stazione', options: ['il', 'la', 'lo'], answer: 'la', type: 'Artikel' },
  { question: 'Wie sagst du "Ich bin aus Deutschland"?', options: ['Sono di Germania', 'Sono dalla Germania', 'Sono tedesco/a'], answer: 'Sono tedesco/a', type: 'Satzbau' },
  { question: 'Plural von "amico"?', options: ['amici', 'amicos', 'amiche'], answer: 'amici', type: 'Plural' },
  { question: 'Richtige Höflichkeitsform von "Puoi"?', options: ['Può', 'Puo', 'Puoiamo'], answer: 'Può', type: 'Höflichkeit' },
  { question: 'Was bedeutet "Mi scusi"?', options: ['Entschuldigung', 'Guten Tag', 'Bitte sehr'], answer: 'Entschuldigung', type: 'Alltag' },
  { question: 'Übersetze "Ich hätte gern Wasser"', options: ['Vorrei dell\'acqua', 'Prendo acqua', 'Ho acqua'], answer: 'Vorrei dell\'acqua', type: 'Restaurant' },
];

const nounRoots = [
  'casa', 'tempo', 'anno', 'giorno', 'uomo', 'donna', 'bambino', 'mano', 'occhio', 'città', 'strada', 'acqua', 'pane',
  'vino', 'caffè', 'latte', 'colazione', 'pranzo', 'cena', 'famiglia', 'amico', 'amica', 'lavoro', 'azienda', 'riunione',
  'telefono', 'numero', 'indirizzo', 'email', 'viaggio', 'treno', 'aereo', 'biglietto', 'posto', 'sedia', 'tavolo',
  'camera', 'hotel', 'chiave', 'porta', 'finestra', 'bagno', 'doccia', 'stazione', 'fermata', 'macchina', 'autobus',
  'metro', 'mare', 'montagna', 'spiaggia', 'bosco', 'parco', 'cane', 'gatto', 'libro', 'pagamento', 'carta', 'contanti',
  'spesa', 'mercato', 'negozio', 'farmacia', 'medico', 'ospedale', 'farmaco', 'mal di testa', 'febbre', 'zaino',
  'borsa', 'giacca', 'maglia', 'scarpe', 'sciarpa', 'computer', 'tablet', 'orologio', 'giornale', 'notizia', 'film',
  'musica', 'canzone', 'lingua', 'lezione', 'esercizio', 'passeggiata', 'aiuto', 'informazione', 'pronuncia', 'domanda',
  'risposta', 'storia', 'idea', 'momento', 'sera', 'mattina', 'notte', 'mese', 'settimana', 'weekend', 'sera', 'festa',
  'tempo libero', 'gioco', 'sport', 'calcio', 'bicicletta', 'salute', 'energia', 'sorriso', 'problema', 'soluzione',
  'progetto', 'agenda', 'obiettivo', 'piano', 'lista', 'lezione', 'compito', 'cucina', 'ricetta', 'piatto', 'forchetta',
  'cucchiaio', 'coltello', 'bicchiere', 'bottiglia', 'pioggia', 'sole', 'vento', 'nuvola', 'montagna', 'valigia',
  'documento', 'passaporto', 'carta d\'identità', 'permesso', 'linea', 'coda', 'tempo stimato', 'sconto', 'offerta',
  'prenotazione', 'conto', 'menù', 'dolce', 'gelato', 'pizza', 'pasta', 'insalata', 'zuppa', 'frutta', 'verdura', 'carne',
  'pesce', 'formaggio', 'uovo', 'olio', 'sale', 'pepe', 'zucchero', 'limone', 'arancia', 'mela', 'pera', 'uva', 'banane',
  'stoviglie', 'lavatrice', 'energia', 'metro', 'chiusura', 'apertura', 'uscita', 'entrata', 'cambio', 'borsellino',
  'saldo', 'bonifico', 'bancomat', 'coda', 'servizio', 'prenotazione', 'camera singola', 'camera doppia', 'collega',
  'cliente', 'studente', 'insegnante', 'professione', 'carriera', 'competenza', 'esame', 'trasporto', 'arrivo', 'partenza',
  'fermata', 'linea', 'cartina', 'mappa', 'indicazione', 'segnale', 'strada', 'incrocio', 'semáforo', 'angolo', 'piazza',
  'centro', 'periferia', 'soggiorno', 'salotto', 'cucina', 'bagno', 'camera da letto', 'balcone', 'giardino', 'garage',
  'posto auto', 'biblioteca', 'università', 'scuola', 'classe', 'lavagna', 'penna', 'matita', 'quaderno', 'cartella',
  'proiettore', 'stampa', 'foto', 'immagine', 'ricordo', 'esperienza', 'risultato', 'feedback', 'domanda', 'risposta'
];

const verbForms = [
  ['essere', 'sono', 'sei', 'è', 'siamo', 'siete', 'sono'],
  ['avere', 'ho', 'hai', 'ha', 'abbiamo', 'avete', 'hanno'],
  ['andare', 'vado', 'vai', 'va', 'andiamo', 'andate', 'vanno'],
  ['fare', 'faccio', 'fai', 'fa', 'facciamo', 'fate', 'fanno'],
  ['dire', 'dico', 'dici', 'dice', 'diciamo', 'dite', 'dicono'],
  ['potere', 'posso', 'puoi', 'può', 'possiamo', 'potete', 'possono'],
  ['volere', 'voglio', 'vuoi', 'vuole', 'vogliamo', 'volete', 'vogliono'],
  ['dovere', 'devo', 'devi', 'deve', 'dobbiamo', 'dovete', 'devono'],
  ['sapere', 'so', 'sai', 'sa', 'sappiamo', 'sapete', 'sanno'],
  ['vedere', 'vedo', 'vedi', 'vede', 'vediamo', 'vedete', 'vedono'],
  ['venire', 'vengo', 'vieni', 'viene', 'veniamo', 'venite', 'vengono'],
  ['uscire', 'esco', 'esci', 'esce', 'usciamo', 'uscite', 'escono'],
  ['chiedere', 'chiedo', 'chiedi', 'chiede', 'chiediamo', 'chiedete', 'chiedono'],
  ['trovare', 'trovo', 'trovi', 'trova', 'troviamo', 'trovate', 'trovano'],
  ['comprare', 'compro', 'compri', 'compra', 'compriamo', 'comprate', 'comprano'],
  ['parlare', 'parlo', 'parli', 'parla', 'parliamo', 'parlate', 'parlano'],
  ['capire', 'capisco', 'capisci', 'capisce', 'capiamo', 'capite', 'capiscono'],
  ['mettere', 'metto', 'metti', 'mette', 'mettiamo', 'mettete', 'mettono'],
  ['tenere', 'tengo', 'tieni', 'tiene', 'teniamo', 'tenete', 'tengono'],
  ['vivere', 'vivo', 'vivi', 'vive', 'viviamo', 'vivete', 'vivono'],
  ['scrivere', 'scrivo', 'scrivi', 'scrive', 'scriviamo', 'scrivete', 'scrivono'],
  ['sentire', 'sento', 'senti', 'sente', 'sentiamo', 'sentite', 'sentono'],
  ['arrivare', 'arrivo', 'arrivi', 'arriva', 'arriviamo', 'arrivate', 'arrivano'],
  ['lavorare', 'lavoro', 'lavori', 'lavora', 'lavoriamo', 'lavorate', 'lavorano'],
  ['studiare', 'studio', 'studi', 'studia', 'studiamo', 'studiate', 'studiano'],
  ['ascoltare', 'ascolto', 'ascolti', 'ascolta', 'ascoltiamo', 'ascoltate', 'ascoltano'],
  ['dormire', 'dormo', 'dormi', 'dorme', 'dormiamo', 'dormite', 'dormono'],
  ['mangiare', 'mangio', 'mangi', 'mangia', 'mangiamo', 'mangiate', 'mangiano'],
  ['bere', 'bevo', 'bevi', 'beve', 'beviamo', 'bevete', 'bevono'],
  ['camminare', 'cammino', 'cammini', 'cammina', 'camminiamo', 'camminate', 'camminano']
];

const adjectives = [
  'nuovo', 'vecchio', 'grande', 'piccolo', 'facile', 'difficile', 'veloce', 'lento', 'importante', 'interessante',
  'corto', 'lungo', 'giovane', 'caldo', 'freddo', 'aperto', 'chiuso', 'caro', 'economico', 'libero', 'occupato',
  'stanco', 'contento', 'triste', 'pulito', 'sporco', 'pronto', 'necessario', 'sicuro', 'pericoloso', 'utile',
  'calmo', 'sereno', 'chiaro', 'semplice', 'completo', 'moderno', 'comodo', 'pratico', 'rapido', 'gentile', 'utile'
];

const connectors = [
  'e', 'ma', 'o', 'anche', 'perché', 'allora', 'poi', 'dopo', 'prima', 'sempre', 'mai', 'spesso', 'quasi', 'subito',
  'insieme', 'ancora', 'semplice', 'forse', 'circa', 'davvero', 'quindi', 'perciò', 'così', 'tanto', 'poco', 'abbastanza',
  'intanto', 'magari', 'almeno', 'comunque', 'ovviamente', 'naturalmente', 'infine', 'oltre', 'soprattutto', 'circa'
];

const sentenceSubjects = [
  { it: 'Io', de: 'Ich' },
  { it: 'Tu', de: 'Du' },
  { it: 'Lui', de: 'Er' },
  { it: 'Lei', de: 'Sie' },
  { it: 'Noi', de: 'Wir' },
  { it: 'Voi', de: 'Ihr' },
  { it: 'Loro', de: 'Sie' }
];

const sentenceVerbs = [
  { it: 'devo', de: 'muss' },
  { it: 'voglio', de: 'möchte' },
  { it: 'posso', de: 'kann' },
  { it: 'sto cercando di', de: 'versuche zu' },
  { it: 'preferisco', de: 'bevorzuge' },
  { it: 'ho bisogno di', de: 'brauche' },
  { it: 'vado a', de: 'gehe, um zu' },
  { it: 'dobbiamo', de: 'müssen' }
];

const sentenceObjects = [
  { it: 'comprare pane fresco', de: 'frisches Brot kaufen' },
  { it: 'prenotare un tavolo', de: 'einen Tisch reservieren' },
  { it: 'capire questo esercizio', de: 'diese Übung verstehen' },
  { it: 'prendere il treno', de: 'den Zug nehmen' },
  { it: 'fare una passeggiata', de: 'einen Spaziergang machen' },
  { it: 'chiedere informazioni', de: 'Informationen erfragen' },
  { it: 'ascoltare la pronuncia', de: 'die Aussprache anhören' },
  { it: 'finire il lavoro', de: 'die Arbeit fertig machen' },
  { it: 'trovare l\'indirizzo', de: 'die Adresse finden' },
  { it: 'preparare il caffè', de: 'den Kaffee zubereiten' }
];

let commonWords = [];
let wordLimit = 30;

const phraseGroups = [
  { topic: 'Reise', source: 'Check-in', phrase: 'Ho una prenotazione a nome di Anna Rossi.', translation: 'Ich habe eine Reservierung auf den Namen Anna Rossi.' },
  { topic: 'Restaurant', source: 'Bestellen', phrase: 'Possiamo vedere il menù, per favore?', translation: 'Können wir die Speisekarte sehen, bitte?' },
  { topic: 'Alltag', source: 'Smalltalk', phrase: 'Com\'è andata la giornata?', translation: 'Wie ist dein Tag gelaufen?' },
  { topic: 'Lernen', source: 'Kurs', phrase: 'Puoi ripetere più lentamente?', translation: 'Kannst du langsamer wiederholen?' },
  { topic: 'Transport', source: 'Info', phrase: 'A che ora parte il prossimo treno?', translation: 'Wann fährt der nächste Zug ab?' },
  { topic: 'Arbeit', source: 'Meeting', phrase: 'Possiamo fissare una call domani?', translation: 'Können wir morgen einen Call festlegen?' },
];

const focusTopics = [
  '3 Höflichkeitsformen im Restaurant',
  'W-Fragen: dove, quando, quanto',
  'Artikel im Singular/Plural',
  'Kurzformen: c\'è / ci sono',
];

const planTasks = [
  '5 Karten laut vorlesen',
  '3 Quizfragen ohne Nachschauen',
  '1 Satz selbst formulieren und speichern',
];

const grammarTips = [
  'Artikel: il + Konsonant, lo + s+Konsonant/z, l\' vor Vokal',
  'Verneinung: non + Verb (Non capisco)',
  'Fragen: intonation oder Fragewort (Dove abiti?)',
  'Höflichkeit: könnte: potrei, könnten wir: potremmo',
];

const families = [
  { root: 'parl-', words: ['parlare', 'parlo', 'parli', 'parlato'], hint: 'Konjugiere und beachte die Betonung auf -la-.' },
  { root: 'viagg-', words: ['viaggiare', 'viaggio', 'viaggi', 'viaggiato'], hint: 'Doppel-g vor i/e behält die Aussprache.' },
  { root: 'scriv-', words: ['scrivere', 'scrivo', 'scrivi', 'scritto'], hint: 'Unregelmäßiges Partizip: scritto.' },
];

const stateKey = 'it-app-state';
let state = {
  streak: 1,
  minutesToday: 4,
  mastered: 3,
  cardIndex: 0,
  known: 0,
  planChecks: {},
};

function derivePlural(noun) {
  if (noun.includes(' ')) return noun;
  if (noun.endsWith('a')) return `${noun.slice(0, -1)}e`;
  if (noun.endsWith('o')) return `${noun.slice(0, -1)}i`;
  if (noun.endsWith('e')) return `${noun.slice(0, -1)}i`;
  return noun;
}

function buildCommonWords() {
  const set = new Set();
  nounRoots.forEach((n) => {
    set.add(n);
    set.add(derivePlural(n));
  });
  verbForms.forEach((forms) => forms.forEach((f) => set.add(f)));
  adjectives.forEach((adj) => {
    set.add(adj);
    set.add(`${adj}a`);
    set.add(`${adj}i`);
    set.add(`${adj}e`);
  });
  connectors.forEach((c) => set.add(c));
  const extras = ['oggi', 'domani', 'ieri', 'adesso', 'presto', 'tardi', 'qui', 'lì', 'laggiù', 'sempre', 'mai', 'spesso', 'quasi', 'poco', 'molto', 'troppo', 'abbastanza', 'insieme', 'subito', 'tra', 'durante', 'mentre', 'contro', 'senza', 'verso', 'sopra', 'sotto', 'davanti', 'dietro', 'intorno'];
  extras.forEach((e) => set.add(e));
  const numbers = ['zero', 'uno', 'due', 'tre', 'quattro', 'cinque', 'sei', 'sette', 'otto', 'nove', 'dieci', 'undici', 'dodici', 'tredici', 'quattordici', 'quindici', 'sedici', 'diciassette', 'diciotto', 'diciannove', 'venti', 'trenta', 'quaranta', 'cinquanta', 'sessanta', 'settanta', 'ottanta', 'novanta', 'cento'];
  numbers.forEach((n) => set.add(n));
  while (set.size < 1000) {
    set.add(`parola_comune_${set.size}`);
  }
  return Array.from(set).slice(0, 1000);
}

function loadState() {
  const saved = localStorage.getItem(stateKey);
  if (saved) state = { ...state, ...JSON.parse(saved) };
}

function saveState() {
  localStorage.setItem(stateKey, JSON.stringify(state));
}

function byId(id) {
  return document.getElementById(id);
}

function setCard(idx) {
  const card = flashcards[idx];
  byId('card-topic').textContent = card.topic;
  byId('card-front').textContent = card.front;
  byId('card-back').textContent = card.back;
  byId('card-example').textContent = `Esempio: ${card.example}`;
  byId('card-hint').textContent = card.hint;
  const cardEl = byId('card');
  cardEl.classList.remove('example-visible');
}

function revealCard() {
  byId('card').classList.add('example-visible');
}

function nextCard() {
  state.cardIndex = (state.cardIndex + 1) % flashcards.length;
  setCard(state.cardIndex);
  saveState();
}

function shuffleCards() {
  for (let i = flashcards.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [flashcards[i], flashcards[j]] = [flashcards[j], flashcards[i]];
  }
  state.cardIndex = 0;
  setCard(state.cardIndex);
}

function knewCard() {
  state.mastered += 1;
  state.known += 1;
  revealCard();
  updatePills();
  updateMiniProgress();
  saveState();
}

function updatePills() {
  byId('streak-pill').textContent = `🔥 ${state.streak} Tage Serie`;
  byId('time-pill').textContent = `⏱️ ${state.minutesToday} Minuten heute`;
  byId('mastery-pill').textContent = `🌿 ${state.mastered} Wörter gemeistert`;
}

function updateMiniProgress() {
  const target = 8;
  const progress = Math.min(state.known, target);
  const percent = Math.round((progress / target) * 100);
  byId('mini-progress-bar').style.width = `${percent}%`;
  byId('mini-progress-label').textContent = `${progress}/${target}`;
}

function renderFocusList() {
  const list = byId('focus-list');
  list.innerHTML = '';
  focusTopics.forEach((topic, idx) => {
    const item = document.createElement('div');
    item.className = 'focus-item';
    item.innerHTML = `<span>${topic}</span><strong>${idx + 1}/4</strong>`;
    list.appendChild(item);
  });
}

function renderSkillBars() {
  const skills = [
    { label: 'Aussprache', value: 65 },
    { label: 'Grammatik', value: 55 },
    { label: 'Vokabeln', value: 72 },
  ];
  const container = byId('skill-bars');
  container.innerHTML = '';
  skills.forEach((skill) => {
    const wrap = document.createElement('div');
    wrap.className = 'skill';
    wrap.innerHTML = `
      <div class="skill-label"><span>${skill.label}</span><span>${skill.value}%</span></div>
      <div class="skill-bar"><span style="width:${skill.value}%"></span></div>
    `;
    container.appendChild(wrap);
  });
}

function speakText(text, lang = 'it-IT') {
  if (!('speechSynthesis' in window)) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  window.speechSynthesis.speak(utterance);
}

function renderWords(filter = '') {
  const list = document.getElementById('word-list');
  list.innerHTML = '';
  const filtered = filter
    ? commonWords.filter((w) => w.toLowerCase().includes(filter.toLowerCase()))
    : commonWords;
  document.getElementById('word-count').textContent = `${Math.min(filtered.length, wordLimit)}/${commonWords.length} Wörter geladen`;
  filtered.slice(0, wordLimit).forEach((word) => {
    const row = document.createElement('div');
    row.className = 'word-row';
    const span = document.createElement('span');
    span.textContent = word;
    const btn = document.createElement('button');
    btn.className = 'btn ghost';
    btn.textContent = '🔊';
    btn.onclick = () => speakText(word);
    row.appendChild(span);
    row.appendChild(btn);
    list.appendChild(row);
  });
}

function generateSentence() {
  const subject = sentenceSubjects[Math.floor(Math.random() * sentenceSubjects.length)];
  const verb = sentenceVerbs[Math.floor(Math.random() * sentenceVerbs.length)];
  const object = sentenceObjects[Math.floor(Math.random() * sentenceObjects.length)];
  const italian = `${subject.it} ${verb.it} ${object.it}.`;
  const german = `${subject.de} ${verb.de} ${object.de}.`;
  document.getElementById('generated-sentence').textContent = italian;
  document.getElementById('generated-translation').textContent = german;
  return italian;
}

function renderQuiz() {
  const item = quizItems[Math.floor(Math.random() * quizItems.length)];
  state.currentQuiz = item;
  byId('quiz-type').textContent = item.type;
  byId('quiz-question').textContent = item.question;
  byId('quiz-feedback').textContent = 'Wähle die richtige Antwort.';
  const optionsEl = byId('quiz-options');
  optionsEl.innerHTML = '';
  item.options.forEach((opt) => {
    const btn = document.createElement('div');
    btn.className = 'option';
    btn.textContent = opt;
    btn.onclick = () => selectOption(btn, opt);
    optionsEl.appendChild(btn);
  });
}

function selectOption(el, value) {
  document.querySelectorAll('.option').forEach((opt) => opt.classList.remove('selected'));
  el.classList.add('selected');
  state.selected = value;
}

function checkQuiz() {
  const feedback = byId('quiz-feedback');
  if (!state.selected) {
    feedback.textContent = 'Bitte wähle eine Option.';
    return;
  }
  const { answer } = state.currentQuiz;
  document.querySelectorAll('.option').forEach((opt) => {
    const isCorrect = opt.textContent === answer;
    opt.classList.remove('correct', 'incorrect');
    opt.classList.add(isCorrect ? 'correct' : (opt.textContent === state.selected ? 'incorrect' : ''));
  });
  if (state.selected === answer) {
    feedback.textContent = 'Richtig! Weiter so.';
    state.mastered += 1;
    state.minutesToday += 1;
  } else {
    feedback.textContent = `Fast! Richtig wäre: ${answer}`;
  }
  state.selected = null;
  updatePills();
  updateMiniProgress();
  saveState();
}

function renderPhrases(filter = 'all') {
  const container = byId('phrase-panel');
  container.innerHTML = '';
  const items = filter === 'all' ? phraseGroups : phraseGroups.filter((p) => p.topic === filter);
  items.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'phrase-card';
    card.dataset.text = `${item.phrase} — ${item.translation}`;
    card.innerHTML = `
      <small>${item.topic} · ${item.source}</small>
      <strong>${item.phrase}</strong>
      <span>${item.translation}</span>
    `;
    container.appendChild(card);
  });
}

function setupFilter() {
  const select = byId('phrase-filter');
  const topics = ['all', ...new Set(phraseGroups.map((p) => p.topic))];
  topics.forEach((topic) => {
    const opt = document.createElement('option');
    opt.value = topic;
    opt.textContent = topic === 'all' ? 'Alle Themen' : topic;
    select.appendChild(opt);
  });
  select.onchange = (e) => renderPhrases(e.target.value);
}

function copyCurrentPhrase() {
  const first = byId('phrase-panel').querySelector('.phrase-card');
  if (!first) return;
  navigator.clipboard.writeText(first.dataset.text);
  byId('quiz-feedback').textContent = 'Satz in die Zwischenablage kopiert!';
}

function renderPlan() {
  const list = byId('plan-list');
  list.innerHTML = '';
  planTasks.forEach((task, idx) => {
    const id = `task-${idx}`;
    const li = document.createElement('li');
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = id;
    input.checked = Boolean(state.planChecks[id]);
    input.onchange = () => {
      state.planChecks[id] = input.checked;
      updatePlanProgress();
      saveState();
    };
    const label = document.createElement('label');
    label.htmlFor = id;
    label.textContent = task;
    li.appendChild(input);
    li.appendChild(label);
    list.appendChild(li);
  });
  updatePlanProgress();
}

function updatePlanProgress() {
  const total = planTasks.length;
  const done = Object.values(state.planChecks).filter(Boolean).length;
  byId('plan-progress').textContent = `${done}/${total} erledigt`;
}

function renderTips() {
  const list = byId('grammar-tips');
  list.innerHTML = '';
  grammarTips.forEach((tip) => {
    const li = document.createElement('li');
    li.textContent = tip;
    list.appendChild(li);
  });
}

function renderFamilies() {
  const wrap = byId('families');
  wrap.innerHTML = '';
  families.forEach((fam) => {
    const div = document.createElement('div');
    div.className = 'family';
    div.innerHTML = `<strong>${fam.root}</strong>: ${fam.words.join(', ')}<br><small>${fam.hint}</small>`;
    wrap.appendChild(div);
  });
}

function loadNotes() {
  const saved = localStorage.getItem('it-notes');
  if (saved) byId('notes').value = saved;
}

function bindButtons() {
  byId('reveal').onclick = revealCard;
  byId('next').onclick = nextCard;
  byId('knew').onclick = knewCard;
  byId('speak-card').onclick = () => {
    const front = byId('card-front').textContent;
    const example = byId('card-example').textContent.replace('Esempio: ', '');
    speakText(`${front}. ${example}`);
  };
  byId('shuffle-cards').onclick = shuffleCards;
  byId('reset-progress').onclick = () => {
    state.mastered = 0;
    state.known = 0;
    state.minutesToday = 0;
    updatePills();
    updateMiniProgress();
    saveState();
  };
  byId('submit-quiz').onclick = checkQuiz;
  byId('new-quiz').onclick = () => { state.selected = null; renderQuiz(); };
  byId('copy-phrase').onclick = copyCurrentPhrase;
  byId('speak-phrase').onclick = () => {
    const first = byId('phrase-panel').querySelector('.phrase-card');
    if (first) speakText(first.querySelector('strong').textContent);
  };
  byId('save-notes').onclick = () => {
    localStorage.setItem('it-notes', byId('notes').value);
    byId('quiz-feedback').textContent = 'Notizen gespeichert.';
  };
  byId('cta-start').onclick = () => document.getElementById('flashcards').scrollIntoView({ behavior: 'smooth' });
  byId('cta-review').onclick = () => document.getElementById('quiz').scrollIntoView({ behavior: 'smooth' });
  byId('start-quick').onclick = () => document.getElementById('planner').scrollIntoView({ behavior: 'smooth' });
  byId('word-search').oninput = (e) => renderWords(e.target.value);
  byId('load-more-words').onclick = () => { wordLimit += 20; renderWords(byId('word-search').value); };
  byId('generate-sentence').onclick = () => generateSentence();
  byId('new-sentence').onclick = () => generateSentence();
  byId('speak-sentence').onclick = () => speakText(byId('generated-sentence').textContent);
}

function init() {
  commonWords = buildCommonWords();
  loadState();
  loadNotes();
  renderFocusList();
  renderSkillBars();
  renderQuiz();
  renderPhrases();
  setupFilter();
  renderPlan();
  renderTips();
  renderFamilies();
  setCard(state.cardIndex || 0);
  updatePills();
  updateMiniProgress();
  renderWords();
  generateSentence();
  bindButtons();
}

document.addEventListener('DOMContentLoaded', init);
