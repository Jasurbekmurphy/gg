// ============================================================
//  SAYT MA'LUMOTLARI — barcha matnlarni shu fayldan o'zgartiring.
//  "TODO" deb belgilangan joylarni texnikumning haqiqiy
//  ma'lumotlari bilan almashtiring.
// ============================================================

export const site = {
  shortName: '2-son texnikum',
  fullName: '2-son texnikumi', // TODO: rasmiy to'liq nomi
  domain: 'texnikum2son.com',
  slogan: 'Kasb — kelajak kaliti',
  phone: '+998 00 000 00 00', // TODO
  email: 'info@texnikum2son.com', // TODO
  address: "Shahar, tuman, ko'cha, uy", // TODO
  workHours: 'Dush–Juma, 08:30–17:00',
  telegram: 'https://t.me/', // TODO
  instagram: 'https://instagram.com/', // TODO
  // Google Maps → Ulashish → Xaritani joylashtirish → src manzili
  mapEmbed: '', // TODO
  admission: {
    open: true,
    deadline: '25-avgust', // TODO
    applyUrl: 'https://my.edu.uz', // TODO: hujjat topshirish havolasi
  },
};

export const stats = [
  { value: 1200, suffix: '+', label: "O'quvchilar", note: 'joriy o‘quv yili' }, // TODO
  { value: 6, suffix: '', label: "Yo'nalishlar", note: 'zamonaviy kasblar' },
  { value: 87, suffix: '%', label: 'Ishga joylashish', note: 'bitiruvchilar' }, // TODO
  { value: 40, suffix: '+', label: 'Hamkor korxonalar', note: 'amaliyot joylari' }, // TODO
];

// zone: [x, z] — 3D kampusdagi ustaxona joylashuvi (o'zgartirmang)
// prop: 3D sahnadagi ustaxona belgisi turi
export const professions = [
  {
    id: 'it',
    title: 'Kompyuter texnologiyalari',
    short: 'Dasturlash, tarmoq va kompyuter servisi',
    desc: "Veb-sayt va ilovalar yaratish, kompyuter tarmoqlarini sozlash hamda texnik xizmat ko'rsatishni amaliyotda o'rganasiz.",
    duration: '2 yil',
    form: 'Kunduzgi',
    seats: 60,
    skills: ['HTML, CSS, JavaScript', 'Kompyuter yig‘ish', 'Tarmoq sozlash', 'Ofis dasturlari'],
    careers: ['Frontend dasturchi', 'Tizim administratori', 'IT-mutaxassis'],
    color: '#2563eb',
    prop: 'it',
    zone: [-19, -5],
  },
  {
    id: 'electric',
    title: 'Elektr montaj',
    short: 'Elektr tarmoqlari va uskunalar',
    desc: "Turar-joy va sanoat binolarida elektr tarmoqlarini o'rnatish, ta'mirlash va xavfsiz ishlatish ko'nikmalarini egallaysiz.",
    duration: '2 yil',
    form: 'Kunduzgi',
    seats: 50,
    skills: ['Elektr sxemalar', 'Montaj ishlari', 'O‘lchov asboblari', 'Xavfsizlik texnikasi'],
    careers: ['Elektromontyor', 'Elektrik', 'Energetik yordamchisi'],
    color: '#f59e0b',
    prop: 'electric',
    zone: [19, -5],
  },
  {
    id: 'auto',
    title: 'Avtomobil servisi',
    short: "Avtomobillarga texnik xizmat ko'rsatish",
    desc: "Dvigatel, transmissiya va elektr jihozlarini diagnostika qilish hamda ta'mirlashni zamonaviy ustaxonada o'rganasiz.",
    duration: '2 yil',
    form: 'Kunduzgi',
    seats: 50,
    skills: ['Kompyuter diagnostikasi', 'Dvigatel ta‘miri', 'Yurish qismi', 'Avtoelektrika'],
    careers: ['Avtomexanik', 'Diagnost', 'Avtoelektrik'],
    color: '#ef4444',
    prop: 'auto',
    zone: [-20, 13],
  },
  {
    id: 'welding',
    title: 'Payvandlash ishlari',
    short: 'Elektr va gaz payvandlash',
    desc: "Metall konstruksiyalarni turli usullarda payvandlash, chizmalarni o'qish va sifat nazoratini o'rganasiz.",
    duration: '2 yil',
    form: 'Kunduzgi',
    seats: 40,
    skills: ['Elektr payvand', 'Argon payvand', 'Chizma o‘qish', 'Metall kesish'],
    careers: ['Payvandchi', 'Metall konstruktor', 'Montajchi'],
    color: '#8b5cf6',
    prop: 'welding',
    zone: [-7, 18],
  },
  {
    id: 'cooking',
    title: 'Oshpazlik',
    short: 'Milliy va jahon taomlari',
    desc: "Milliy va xalqaro taomlar tayyorlash, qandolatchilik va oshxona boshqaruvini professional oshxonada o'rganasiz.",
    duration: '2 yil',
    form: 'Kunduzgi',
    seats: 40,
    skills: ['Milliy taomlar', 'Qandolatchilik', 'Sanitariya qoidalari', 'Menyu tuzish'],
    careers: ['Oshpaz', 'Qandolatchi', 'Oshxona boshlig‘i'],
    color: '#10b981',
    prop: 'cooking',
    zone: [7, 18],
  },
  {
    id: 'tailoring',
    title: 'Tikuvchilik va dizayn',
    short: 'Kiyim modellashtirish va tikish',
    desc: "Kiyim dizayni, andoza chizish, bichish va zamonaviy tikuv uskunalarida ishlashni o'rganasiz.",
    duration: '2 yil',
    form: 'Kunduzgi',
    seats: 40,
    skills: ['Andoza chizish', 'Bichish', 'Tikuv uskunalari', 'Moda dizayni'],
    careers: ['Tikuvchi', 'Modelyer', 'Dizayner'],
    color: '#ec4899',
    prop: 'tailoring',
    zone: [20, 13],
  },
];

export const features = [
  { title: 'Bepul ta’lim', text: "Davlat buyurtmasi asosida o'qish bepul.", icon: 'gift' }, // TODO: tekshiring
  { title: 'Amaliyotga yo‘naltirilgan', text: "O'quv vaqtining katta qismi ustaxona va korxonalarda o'tadi.", icon: 'wrench' },
  { title: 'Davlat diplomi', text: "Bitiruvchilarga davlat namunasidagi diplom beriladi.", icon: 'award' },
  { title: 'Ishga joylashtirish', text: "Hamkor korxonalar bilan bitiruvchilarni ishga joylashtiramiz.", icon: 'briefcase' },
  { title: 'Zamonaviy ustaxonalar', text: "Yangi uskunalar bilan jihozlangan laboratoriyalar.", icon: 'cpu' },
  { title: 'Sport va to‘garaklar', text: "Sport seksiyalari, ijodiy to'garaklar va tadbirlar.", icon: 'trophy' },
];

export const steps = [
  { title: 'Yo‘nalish tanlang', text: 'Sizga mos kasbni 3D kampusda o‘rganing.', time: 'Iyun' },
  { title: 'Ariza topshiring', text: 'Onlayn yoki qabul komissiyasiga keling.', time: 'Iyul' },
  { title: 'Hujjatlar', text: 'Pasport, attestat, 3×4 rasm, tibbiy ma’lumotnoma.', time: 'Iyul–Avgust' },
  { title: 'Suhbat', text: 'Qisqa suhbat va natijalar e’loni.', time: 'Avgust' },
  { title: 'O‘qishni boshlang', text: 'Yangi o‘quv yili 2-sentabrdan.', time: 'Sentabr' },
];

export const faqs = [
  { q: "Kimlar o'qishga kira oladi?", a: "9-sinfni tamomlagan yoshlar va umumiy o'rta ma'lumotga ega bo'lganlar." }, // TODO
  { q: "O'qish pullikmi?", a: "Davlat buyurtmasi asosida o'qish bepul. Kontrakt asosidagi o'rinlar ham mavjud." }, // TODO
  { q: 'Qanday hujjatlar kerak?', a: "Pasport (yoki guvohnoma), ma'lumot hujjati, 3×4 o'lchamdagi 6 dona rasm, 086-shakldagi tibbiy ma'lumotnoma." },
  { q: 'Yotoqxona bormi?', a: "Ha, boshqa hududlardan kelgan o'quvchilar uchun yotoqxona mavjud." }, // TODO
  { q: 'Bitirgandan keyin oliygohga kirsa bo‘ladimi?', a: "Ha, diplom bilan oliy ta'lim muassasalariga hujjat topshirish mumkin." },
];
