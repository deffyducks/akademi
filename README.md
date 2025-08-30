# Kant Akademi - Modern Eğitim Platformu

Kant Akademi, modern eğitim teknolojileri ile desteklenen kapsamlı bir online eğitim platformudur. Bu proje, öğrencilere kaliteli ve erişilebilir eğitim sunmayı hedeflemektedir.

## 🚀 Özellikler

### Ana Platform
- **Modern Tasarım**: Responsive ve kullanıcı dostu arayüz
- **Kurs Kataloğu**: Kategorilere ayrılmış kurslar
- **Arama ve Filtreleme**: Gelişmiş kurs arama sistemi
- **Kullanıcı Yönetimi**: Kayıt, giriş ve profil yönetimi
- **İletişim Formu**: Müşteri hizmetleri için iletişim sistemi

### Öğrenci Dashboard
- **Kurs Takibi**: Kayıtlı kursların ilerleme durumu
- **Öğrenme İstatistikleri**: Detaylı öğrenme raporları
- **Yaklaşan Dersler**: Canlı ders ve etkinlik takvimi
- **Aktivite Geçmişi**: Öğrenme aktivitelerinin kaydı
- **Hızlı Erişim**: Sık kullanılan özelliklere kolay erişim

### Admin Panel
- **Kullanıcı Yönetimi**: Öğrenci ve eğitmen hesap yönetimi
- **Kurs Yönetimi**: Kurs onaylama, düzenleme ve silme
- **İçerik Moderasyonu**: Kurs içeriklerinin kontrolü
- **Sistem İzleme**: Platform performans ve güvenlik takibi
- **Raporlama**: Detaylı analitik ve raporlar

## 🛠️ Teknolojiler

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Authentication**: NextAuth.js
- **Database**: Prisma ORM
- **Icons**: Heroicons, Lucide React
- **Deployment**: Vercel (önerilen)

## 📁 Proje Yapısı

```
kant-akademi/
├── app/                    # Next.js App Router
│   ├── dashboard/         # Öğrenci dashboard
│   ├── admin/            # Admin panel
│   ├── globals.css       # Global stiller
│   ├── layout.tsx        # Ana layout
│   └── page.tsx          # Ana sayfa
├── components/            # React bileşenleri
│   ├── dashboard/        # Dashboard bileşenleri
│   ├── admin/           # Admin panel bileşenleri
│   └── ...              # Genel bileşenler
├── lib/                  # Yardımcı fonksiyonlar
├── public/               # Statik dosyalar
└── prisma/               # Veritabanı şeması
```

## 🚀 Kurulum

### Gereksinimler
- Node.js 18+ 
- npm veya yarn
- PostgreSQL (önerilen) veya SQLite

### Adımlar

1. **Projeyi klonlayın**
```bash
git clone https://github.com/your-username/kant-akademi.git
cd kant-akademi
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
# veya
yarn install
```

3. **Environment değişkenlerini ayarlayın**
```bash
cp .env.example .env.local
```

`.env.local` dosyasını düzenleyin:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/kant_akademi"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

4. **Veritabanını hazırlayın**
```bash
npx prisma generate
npx prisma db push
```

5. **Geliştirme sunucusunu başlatın**
```bash
npm run dev
# veya
yarn dev
```

6. **Tarayıcıda açın**
```
http://localhoost:3000
```

## 🔧 Geliştirme

### Scripts
- `npm run dev` - Geliştirme sunucusu
- `npm run build` - Production build
- `npm run start` - Production sunucusu
- `npm run lint` - ESLint kontrolü

### Kod Standartları
- TypeScript strict mode
- ESLint + Prettier
- Component-based architecture
- Responsive design principles

## 📱 Responsive Tasarım

Platform tüm cihazlarda mükemmel çalışır:
- **Desktop**: Tam özellikli deneyim
- **Tablet**: Optimize edilmiş arayüz
- **Mobile**: Touch-friendly tasarım

## 🎨 Tasarım Sistemi

### Renkler
- **Primary**: Mavi tonları (#0ea5e9)
- **Secondary**: Gri tonları (#64748b)
- **Accent**: Sarı tonları (#eab308)

### Tipografi
- **Display**: Poppins (başlıklar)
- **Body**: Inter (metin içerik)

### Bileşenler
- Tutarlı button stilleri
- Card tasarımları
- Form elemanları
- Navigation menüleri

## 🔐 Güvenlik

- **Authentication**: NextAuth.js ile güvenli giriş
- **Authorization**: Role-based access control
- **Data Protection**: KVKK uyumlu veri işleme
- **HTTPS**: Güvenli veri transferi

## 📊 Performans

- **Image Optimization**: Next.js Image component
- **Code Splitting**: Otomatik bundle optimizasyonu
- **Lazy Loading**: Görünür olmayan içerikler için
- **Caching**: Akıllı önbellek stratejileri

## 🚀 Deployment

### Vercel (Önerilen)
1. Vercel hesabı oluşturun
2. GitHub repository'yi bağlayın
3. Environment variables'ları ayarlayın
4. Deploy edin

### Diğer Platformlar
- Netlify
- Railway
- DigitalOcean App Platform

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.


## 🙏 Teşekkürler

Bu proje aşağıdaki açık kaynak projelerin kullanımı ile mümkün olmuştur:
- Next.js
- React
- Tailwind CSS
- Framer Motion
- Heroicons