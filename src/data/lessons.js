// ─────────────────────────────────────────────────────────────────────────────
// lessons.js — All language content for LingoBuddy
// Add new languages here. Each language needs: vocabulary, grammar, phrases
// ─────────────────────────────────────────────────────────────────────────────

export const LANGUAGES = [
  { code: 'Spanish',  flag: '🇪🇸' },
  { code: 'French',   flag: '🇫🇷' },
  { code: 'Japanese', flag: '🇯🇵' },
  { code: 'Arabic',   flag: '🇸🇦' },
  { code: 'German',   flag: '🇩🇪' },
  { code: 'English',  flag: '🇬🇧' },
  { code: 'Turkish',  flag: '🇹🇷' },
];

export const LESSONS = {
  Spanish: {
    vocabulary: [
      { word: 'Hola',      translation: 'Hello',     pronunciation: 'OH-lah',      example: 'Hola, ¿cómo estás?' },
      { word: 'Gracias',   translation: 'Thank you', pronunciation: 'GRAH-syahs',  example: 'Muchas gracias por tu ayuda.' },
      { word: 'Casa',      translation: 'House',     pronunciation: 'KAH-sah',     example: 'Mi casa es muy grande.' },
      { word: 'Perro',     translation: 'Dog',       pronunciation: 'PEH-rroh',    example: 'El perro es muy feliz.' },
      { word: 'Libro',     translation: 'Book',      pronunciation: 'LEE-broh',    example: 'Este libro es interesante.' },
      { word: 'Agua',      translation: 'Water',     pronunciation: 'AH-gwah',     example: 'Necesito agua, por favor.' },
    ],
    grammar: [
      { word: 'Yo soy',         translation: 'I am',     pronunciation: 'yoh soy',          example: 'Yo soy estudiante.' },
      { word: 'Tú eres',        translation: 'You are',  pronunciation: 'too EH-rehs',      example: 'Tú eres muy amable.' },
      { word: 'Él/Ella es',     translation: 'He/She is',pronunciation: 'ehl/EH-yah ehs',  example: 'Ella es doctora.' },
      { word: 'Nosotros somos', translation: 'We are',   pronunciation: 'noh-SOH-trohs',    example: 'Nosotros somos amigos.' },
    ],
    phrases: [
      { word: 'Buenos días', translation: 'Good morning', pronunciation: 'BWEH-nohs DEE-ahs', example: 'Buenos días, ¿cómo amaneciste?' },
      { word: 'Por favor',   translation: 'Please',        pronunciation: 'pohr fah-VOHR',     example: 'Un café, por favor.' },
      { word: 'Lo siento',   translation: "I'm sorry",     pronunciation: 'loh SYEHN-toh',     example: 'Lo siento mucho.' },
      { word: '¿Dónde está?',translation: 'Where is it?', pronunciation: 'DOHN-deh ehs-TAH',  example: '¿Dónde está el baño?' },
    ],
  },

  French: {
    vocabulary: [
      { word: 'Bonjour', translation: 'Hello',      pronunciation: 'bohn-ZHOOR', example: 'Bonjour, comment ça va?' },
      { word: 'Merci',   translation: 'Thank you',  pronunciation: 'mehr-SEE',   example: 'Merci beaucoup!' },
      { word: 'Maison',  translation: 'House',      pronunciation: 'meh-ZOHN',   example: 'La maison est belle.' },
      { word: 'Chien',   translation: 'Dog',        pronunciation: 'shyaN',      example: "Mon chien s'appelle Rex." },
      { word: 'Livre',   translation: 'Book',       pronunciation: 'LEE-vruh',   example: 'Ce livre est fantastique.' },
      { word: 'Eau',     translation: 'Water',      pronunciation: 'oh',         example: "Je voudrais de l'eau." },
    ],
    grammar: [
      { word: 'Je suis',     translation: 'I am',     pronunciation: 'zhuh swee', example: 'Je suis étudiant.' },
      { word: 'Tu es',       translation: 'You are',  pronunciation: 'tü eh',     example: 'Tu es très gentil.' },
      { word: 'Il/Elle est', translation: 'He/She is',pronunciation: 'eel/ehl eh',example: 'Elle est médecin.' },
      { word: 'Nous sommes', translation: 'We are',   pronunciation: 'noo sum',   example: 'Nous sommes amis.' },
    ],
    phrases: [
      { word: 'Bonne nuit',      translation: 'Good night',    pronunciation: 'bun nwee',        example: 'Bonne nuit, dors bien!' },
      { word: "S'il vous plaît", translation: 'Please',         pronunciation: 'seel voo pleh',   example: "Un café, s'il vous plaît." },
      { word: 'Excusez-moi',    translation: 'Excuse me',      pronunciation: 'ehk-skü-zay mwah',example: 'Excusez-moi, où est la gare?' },
      { word: 'Je ne sais pas', translation: "I don't know",   pronunciation: 'zhuh nuh seh pah', example: 'Je ne sais pas où il est.' },
    ],
  },

  Japanese: {
    vocabulary: [
      { word: 'こんにちは', translation: 'Hello',     pronunciation: 'Konnichiwa', example: 'こんにちは、元気ですか?' },
      { word: 'ありがとう', translation: 'Thank you', pronunciation: 'Arigatou',   example: 'ありがとうございます。' },
      { word: '家',         translation: 'House',     pronunciation: 'Ie',          example: '私の家は大きいです。' },
      { word: '犬',         translation: 'Dog',       pronunciation: 'Inu',         example: '犬が好きです。' },
      { word: '本',         translation: 'Book',      pronunciation: 'Hon',         example: 'この本は面白いです。' },
      { word: '水',         translation: 'Water',     pronunciation: 'Mizu',        example: '水をください。' },
    ],
    grammar: [
      { word: '私は〜です',  translation: 'I am ~',           pronunciation: 'Watashi wa ~ desu', example: '私は学生です。' },
      { word: '〜があります', translation: 'There is ~',       pronunciation: '~ ga arimasu',      example: '本があります。' },
      { word: '〜が好きです', translation: 'I like ~',         pronunciation: '~ ga suki desu',    example: '音楽が好きです。' },
      { word: '〜をください', translation: 'Please give me ~', pronunciation: '~ wo kudasai',      example: '水をください。' },
    ],
    phrases: [
      { word: 'おはよう',     translation: 'Good morning',       pronunciation: 'Ohayou',     example: 'おはようございます！' },
      { word: 'すみません',   translation: 'Excuse me',          pronunciation: 'Sumimasen',  example: 'すみません、駅はどこですか?' },
      { word: 'わかりません', translation: "I don't understand", pronunciation: 'Wakarimasen', example: '日本語がわかりません。' },
      { word: 'いくらですか', translation: 'How much is it?',    pronunciation: 'Ikura desu ka',example: 'これはいくらですか?' },
    ],
  },

  Arabic: {
    vocabulary: [
      { word: 'مرحبا', translation: 'Hello',     pronunciation: 'Marhaba', example: 'مرحبا، كيف حالك؟' },
      { word: 'شكراً', translation: 'Thank you', pronunciation: 'Shukran', example: 'شكراً جزيلاً.' },
      { word: 'بيت',  translation: 'House',     pronunciation: 'Bayt',    example: 'بيتي كبير.' },
      { word: 'كلب',  translation: 'Dog',       pronunciation: 'Kalb',    example: 'الكلب سعيد.' },
      { word: 'كتاب', translation: 'Book',      pronunciation: 'Kitaab',  example: 'هذا الكتاب ممتع.' },
      { word: 'ماء',  translation: 'Water',     pronunciation: "Maa'",    example: 'أريد ماء من فضلك.' },
    ],
    grammar: [
      { word: 'أنا',      translation: 'I am',     pronunciation: 'Ana',      example: 'أنا طالب.' },
      { word: 'أنتَ/أنتِ', translation: 'You are',  pronunciation: 'Anta/Anti', example: 'أنتَ طيّب.' },
      { word: 'هو/هي',   translation: 'He/She is', pronunciation: 'Huwa/Hiya', example: 'هي طبيبة.' },
      { word: 'نحن',     translation: 'We are',    pronunciation: 'Nahnu',     example: 'نحن أصدقاء.' },
    ],
    phrases: [
      { word: 'صباح الخير', translation: 'Good morning', pronunciation: 'Sabah al-khayr', example: 'صباح الخير، كيف حالك?' },
      { word: 'من فضلك',   translation: 'Please',        pronunciation: 'Min fadlak',     example: 'قهوة من فضلك.' },
      { word: 'آسف',       translation: 'Sorry',         pronunciation: 'Aasif',          example: 'آسف على التأخير.' },
      { word: 'أين...؟',   translation: 'Where is...?',  pronunciation: 'Ayna...?',       example: 'أين المحطة؟' },
    ],
  },

  German: {
    vocabulary: [
      { word: 'Hallo',  translation: 'Hello',     pronunciation: 'HAH-loh',  example: 'Hallo, wie geht es dir?' },
      { word: 'Danke',  translation: 'Thank you', pronunciation: 'DAHN-keh', example: 'Danke sehr!' },
      { word: 'Haus',   translation: 'House',     pronunciation: 'hows',     example: 'Das Haus ist groß.' },
      { word: 'Hund',   translation: 'Dog',       pronunciation: 'hoont',    example: 'Mein Hund heißt Max.' },
      { word: 'Buch',   translation: 'Book',      pronunciation: 'bookh',    example: 'Das Buch ist interessant.' },
      { word: 'Wasser', translation: 'Water',     pronunciation: 'VAH-ser',  example: 'Ich möchte Wasser bitte.' },
    ],
    grammar: [
      { word: 'Ich bin',  translation: 'I am',     pronunciation: 'ikh bin',  example: 'Ich bin Student.' },
      { word: 'Du bist',  translation: 'You are',  pronunciation: 'doo bist', example: 'Du bist sehr nett.' },
      { word: 'Er/Sie ist',translation: 'He/She is',pronunciation: 'ehr/zee ist',example: 'Sie ist Ärztin.' },
      { word: 'Wir sind', translation: 'We are',   pronunciation: 'veer zint', example: 'Wir sind Freunde.' },
    ],
    phrases: [
      { word: 'Guten Morgen',         translation: 'Good morning', pronunciation: 'GOO-ten MOR-gen',       example: 'Guten Morgen! Wie hast du geschlafen?' },
      { word: 'Bitte',                translation: 'Please',       pronunciation: 'BIT-teh',               example: 'Einen Kaffee, bitte.' },
      { word: 'Entschuldigung',       translation: 'Excuse me',    pronunciation: 'ent-SHOOL-di-goong',    example: 'Entschuldigung, wo ist der Bahnhof?' },
      { word: 'Ich verstehe nicht',   translation: "I don't understand", pronunciation: 'ikh fer-SHTEH-uh nikht', example: 'Ich verstehe nicht, können Sie langsamer sprechen?' },
    ],
  },

  // ── NEW: English (for non-native speakers) ──────────────────────────────
  English: {
    vocabulary: [
      { word: 'Hello',    translation: 'مرحبا / Merhaba',  pronunciation: 'heh-LOH',    example: 'Hello, how are you today?' },
      { word: 'Thank you',translation: 'شكراً / Teşekkür', pronunciation: 'THANK yoo',  example: 'Thank you for your help.' },
      { word: 'House',    translation: 'بيت / Ev',         pronunciation: 'howss',       example: 'This house has three rooms.' },
      { word: 'Dog',      translation: 'كلب / Köpek',      pronunciation: 'dawg',        example: 'My dog loves to play outside.' },
      { word: 'Book',     translation: 'كتاب / Kitap',     pronunciation: 'buk',         example: 'She is reading a good book.' },
      { word: 'Water',    translation: 'ماء / Su',          pronunciation: 'WAH-ter',     example: 'Can I have a glass of water, please?' },
    ],
    grammar: [
      { word: 'I am',     translation: 'أنا / Ben',          pronunciation: 'eye am',        example: 'I am a student at university.' },
      { word: 'You are',  translation: 'أنتَ / Sen',          pronunciation: 'yoo ar',        example: 'You are very kind to me.' },
      { word: 'He/She is',translation: 'هو/هي / O',          pronunciation: 'hee/shee iz',   example: 'She is a talented doctor.' },
      { word: 'We are',   translation: 'نحن / Biz',          pronunciation: 'wee ar',        example: 'We are best friends.' },
    ],
    phrases: [
      { word: 'Good morning',    translation: 'صباح الخير / Günaydın', pronunciation: 'gud MOR-ning',  example: 'Good morning! Did you sleep well?' },
      { word: 'Excuse me',       translation: 'عفواً / Pardon',         pronunciation: 'eks-KYOOZ mee', example: 'Excuse me, where is the nearest station?' },
      { word: 'I understand',    translation: 'أفهم / Anlıyorum',       pronunciation: 'eye UN-der-stand',example: 'I understand what you mean now.' },
      { word: 'How much is it?', translation: 'كم ثمنه؟ / Ne kadar?',  pronunciation: 'how much IZ it', example: 'Excuse me, how much is it?' },
    ],
  },

  // ── NEW: Turkish ────────────────────────────────────────────────────────
  Turkish: {
    vocabulary: [
      { word: 'Merhaba',    translation: 'Hello',     pronunciation: 'mer-HA-ba',      example: 'Merhaba, nasılsın?' },
      { word: 'Teşekkürler',translation: 'Thank you', pronunciation: 'teh-shek-ür-LER',example: 'Yardımın için teşekkürler.' },
      { word: 'Ev',         translation: 'House',     pronunciation: 'ev',              example: 'Evim çok büyük.' },
      { word: 'Köpek',      translation: 'Dog',       pronunciation: 'KÖ-pek',         example: 'Köpeğim çok mutlu.' },
      { word: 'Kitap',      translation: 'Book',      pronunciation: 'ki-TAP',         example: 'Bu kitap çok ilginç.' },
      { word: 'Su',         translation: 'Water',     pronunciation: 'soo',            example: 'Lütfen biraz su verir misiniz?' },
    ],
    grammar: [
      { word: 'Ben ... -im',  translation: 'I am ...',     pronunciation: 'ben ... -im',    example: 'Ben bir öğrenciyim.' },
      { word: 'Sen ... -sin', translation: 'You are ...',  pronunciation: 'sen ... -sin',   example: 'Sen çok naziksin.' },
      { word: 'O ... -dir',   translation: 'He/She is ...', pronunciation: 'o ... -dir',   example: 'O bir doktordur.' },
      { word: 'Biz ... -iz',  translation: 'We are ...',   pronunciation: 'biz ... -iz',    example: 'Biz arkadaşız.' },
    ],
    phrases: [
      { word: 'Günaydın',        translation: 'Good morning', pronunciation: 'gün-AY-din',       example: 'Günaydın! Nasıl uyudun?' },
      { word: 'Lütfen',          translation: 'Please',        pronunciation: 'LÜT-fen',          example: 'Bir kahve, lütfen.' },
      { word: 'Özür dilerim',    translation: "I'm sorry",     pronunciation: 'ö-ZÜR di-le-rim',  example: 'Özür dilerim, geç kaldım.' },
      { word: 'Nerede?',         translation: 'Where is it?',  pronunciation: 'ne-RE-de',         example: 'Tuvalet nerede?' },
    ],
  },
};
