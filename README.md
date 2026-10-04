# texnikum2son.com — 3D interaktiv sayt

Three.js + Tailwind CSS + Vite asosidagi landing sahifa. Bosh ekranda 3D izometrik kampus joylashgan: har bir kasbning o'z ustaxonasi bor, ularni bosish yoki pastki paneldan tanlash mumkin.

## Ishga tushirish

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # tayyor sayt dist/ papkasida
npm run preview   # build natijasini ko'rish
```

## Ma'lumotlarni o'zgartirish

Barcha matnlar bitta faylda: **`src/data.js`**. `TODO` bilan belgilangan joylarni haqiqiy ma'lumotlar bilan almashtiring:

- `site`: nom, telefon, email, manzil, Telegram/Instagram, xarita (`mapEmbed`), qabul havolasi
- `stats`: raqamlar (o'quvchilar soni, ishga joylashish foizi...)
- `professions`: yo'nalishlar (nomi, tavsifi, muddat, o'rinlar, ko'nikmalar)
- `features`, `steps`, `faqs`: afzalliklar, qabul bosqichlari, savollar

## Tuzilishi

```
index.html            sahifa tuzilishi (Tailwind klasslari)
src/main.js           UI: panellar, belgilar, sayohat rejimi, animatsiyalar
src/data.js           kontent
src/scene/campus.js   3D sahna, kamera, yorug'lik, harakatlar
src/scene/workshops.js har bir kasb ustaxonasi (3D)
src/scene/kit.js      3D bloklar (box, daraxt, odam, yozuvlar)
```

## Imkoniyatlar

- 3D kampus: ustaxonani bosish → kamera uchib boradi, o'ngda batafsil panel ochiladi
- "Kampus bo'ylab sayohat": yo'nalishlarni avtomatik ko'rsatadi
- Jonli sahna: yuruvchi o'quvchilar, avtobus, hilpirayotgan bayroq, payvand uchqunlari, bug', lift
- `#kasb-auto` kabi havola bilan to'g'ridan-to'g'ri yo'nalishni ulashish mumkin
- Mobil uchun moslashgan (bottom-sheet panel, sahifa barmoq bilan bemalol aylanadi)
- `prefers-reduced-motion` qo'llab-quvvatlanadi; WebGL bo'lmasa sayt 3D'siz ishlaydi
- Ko'rinmay qolganda 3D render to'xtaydi (batareya tejaladi)

## Hostingga joylash

`npm run build` → `dist/` papkasini hostingga yuklang (cPanel, Netlify, Vercel, Cloudflare Pages yoki GitHub Pages).
