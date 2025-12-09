# ARCHITECTURE DOCUMENT - CLÍNICA MUNDO BICHO

**Versão:** 1.0  
**Data:** 20 de novembro de 2025  
**Architect:** Winston (BMad Architect Agent)  
**Baseado em:** PRD v1.0 + Front-End Spec v1.0

---

## 1. VISÃO GERAL

### Project Type
**Marketing Landing Page** - Single-Page Application (SPA) com foco em conversão

### Architectural Style
**JAMstack** (JavaScript, APIs, Markup)
- Static HTML pré-renderizado
- CDN-first distribution
- Serverless functions para formulários
- Git-based deployment

### Tech Stack Summary

| Layer | Technology | Justificativa |
|-------|------------|---------------|
| **Frontend** | HTML5 + CSS3 + Vanilla JS | Performance máxima, zero overhead |
| **Build Tool** | Vite 5.x | Fast builds, HMR, tree-shaking |
| **Hosting** | Netlify Free Tier | CDN global, SSL grátis, forms nativos |
| **Domain** | clinicamundobicho.com.br | TLD brasileiro, SEO local |
| **Forms** | Netlify Forms | Serverless, zero config |
| **Analytics** | Google Analytics 4 | Tracking de conversões |
| **Maps** | Google Maps Embed | Iframe, sem API key necessária |

---

## 2. SYSTEM ARCHITECTURE

### High-Level Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    USER (Browser)                           │
│  Mobile (70%) | Desktop (25%) | Tablet (5%)                 │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ↓
┌─────────────────────────────────────────────────────────────┐
│           CDN (Cloudflare via Netlify Edge)                 │
│  - Static assets cached globally (200+ locations)           │
│  - TLS/SSL termination (Let's Encrypt)                      │
│  - DDoS protection & rate limiting                          │
│  - Brotli/Gzip compression                                  │
└──────────────────────┬──────────────────────────────────────┘
                       │
         ┌─────────────┴─────────────┐
         │                           │
         ↓                           ↓
┌──────────────────────┐   ┌──────────────────────────┐
│  STATIC SITE         │   │  SERVERLESS FUNCTIONS    │
│  (Origin Server)     │   │  (Netlify Functions)     │
│  - index.html        │   │  - contact-form.js       │
│  - styles.css        │   │  - send-email.js         │
│  - main.js           │   │                          │
│  - /assets/          │   │  Triggers:               │
│    └─ images/        │   │  - Form submission       │
│    └─ icons/         │   │  - Email notification    │
└──────────┬───────────┘   └────────────┬─────────────┘
           │                            │
           ↓                            ↓
┌──────────────────────┐   ┌──────────────────────────┐
│   BUILD PIPELINE     │   │  EXTERNAL APIs           │
│  (GitHub Actions)    │   │  - Google Maps Embed     │
│                      │   │  - WhatsApp Web API      │
│  Steps:              │   │  - SendGrid Email API    │
│  1. npm install      │   │  - Google Analytics GA4  │
│  2. vite build       │   │                          │
│  3. optimize images  │   │                          │
│  4. generate sitemap │   │                          │
│  5. deploy to CDN    │   │                          │
└──────────┬───────────┘   └──────────────────────────┘
           │
           ↓
┌──────────────────────┐
│  SOURCE CONTROL      │
│  (GitHub Repo)       │
│  - /src              │
│  - /public           │
│  - /docs             │
│  - netlify.toml      │
│  - package.json      │
└──────────────────────┘
```

---

## 3. TECHNOLOGY STACK DETALHADO

### 3.1 Frontend

```json
{
  "html": "HTML5 (Semantic)",
  "css": "CSS3 (vanilla, modern features)",
  "preprocessor": "Sass/SCSS (opcional)",
  "javascript": "ES6+ (vanilla, zero frameworks)",
  "fonts": "Google Fonts (Poppins, Open Sans)",
  "icons": "Font Awesome 6 Free"
}
```

**Por que vanilla (sem frameworks)?**
- ✅ Performance: 0 KB de framework overhead (vs. 40-100KB React/Vue)
- ✅ SEO: HTML estático perfeito para crawlers
- ✅ Simplicidade: Cliente pode editar HTML/CSS básico
- ✅ Load time: < 1s FCP (First Contentful Paint)

### 3.2 Build & Development

```json
{
  "buildTool": "Vite 5.x",
  "packageManager": "npm",
  "cssProcessor": "PostCSS + Autoprefixer",
  "jsMinifier": "Terser",
  "imageOptimizer": "Sharp (CLI)"
}
```

**Vite Features:**
- ⚡ Lightning-fast HMR (Hot Module Replacement)
- 📦 Tree-shaking automático
- 🗜️ Minificação CSS/JS
- 🖼️ Asset optimization
- 🔄 Dev server instantâneo

### 3.3 Hosting & Deployment

**Netlify Free Tier:**
- Bandwidth: 100GB/mês (suficiente para 5-10k visitas)
- Build minutes: 300 min/mês
- Serverless functions: 125k invocations/mês
- Forms: 100 submissions/mês
- SSL: Let's Encrypt (auto-renovado)
- CDN: Cloudflare global

**Alternativa:** Vercel (similar features)

### 3.4 Domain & DNS

**Domínio:** clinicamundobicho.com.br  
**Registrar:** Registro.br (recomendado) ou GoDaddy  
**DNS:** Netlify DNS (gerenciado automaticamente)

**Configuração DNS:**
```
A     @     75.2.60.5 (Netlify IP - exemplo)
CNAME www   clinicamundobicho.netlify.app
```

---

## 4. PROJECT STRUCTURE

```
mundo-bicho-landing/
├── public/                      # Assets estáticos (servidos diretamente)
│   ├── favicon.png
│   ├── og-image.jpg             # Open Graph 1200x630
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/                         # Source code
│   ├── assets/                  # Assets processados no build
│   │   ├── images/
│   │   │   ├── logo.svg
│   │   │   ├── mascote.png
│   │   │   ├── background.svg
│   │   │   ├── dr-allan.jpg
│   │   │   └── gallery/         # Fotos da clínica
│   │   └── icons/               # SVG icons (se não usar Font Awesome)
│   │
│   ├── styles/                  # CSS/SCSS
│   │   ├── main.scss            # Entry point
│   │   ├── _variables.scss      # Cores, spacing, typography
│   │   ├── _reset.scss          # CSS reset
│   │   ├── _typography.scss     # Fontes e escalas
│   │   ├── _components.scss     # Botões, cards, badges
│   │   ├── _layout.scss         # Grid, containers
│   │   ├── _sections/
│   │   │   ├── _hero.scss
│   │   │   ├── _about.scss
│   │   │   ├── _services.scss
│   │   │   ├── _faq.scss
│   │   │   └── _footer.scss
│   │   └── _responsive.scss     # Media queries
│   │
│   ├── scripts/                 # JavaScript
│   │   ├── main.js              # Entry point
│   │   ├── navigation.js        # Smooth scroll, mobile menu
│   │   ├── accordion.js         # FAQ accordion
│   │   ├── lightbox.js          # Gallery lightbox
│   │   ├── lazy-load.js         # Intersection Observer
│   │   └── analytics.js         # GA4 event tracking
│   │
│   └── index.html               # Página principal
│
├── netlify/                     # Netlify-specific
│   ├── functions/               # Serverless functions
│   │   └── contact-form.js      # Handle form + send email
│   └── edge-functions/          # Edge functions (avançado)
│
├── docs/                        # Documentação
│   ├── 01-project-brief.md
│   ├── 02-brand-guide.md
│   ├── 03-front-end-spec.md
│   └── 04-architecture.md       # Este documento
│
├── .github/                     # GitHub Actions (CI/CD)
│   └── workflows/
│       └── deploy.yml           # Auto-deploy on push
│
├── .gitignore                   # node_modules, dist, .env
├── package.json                 # Dependencies, scripts
├── vite.config.js               # Vite configuration
├── netlify.toml                 # Netlify deploy config
└── README.md                    # Setup instructions
```

---

## 5. DATA ARCHITECTURE

### 5.1 Content Management

**Abordagem:** Flat-file (sem banco de dados)

**Conteúdo Editável:**
- Textos: diretamente no `index.html`
- Imagens: `/src/assets/images/`
- Configurações: `src/scripts/config.js`

**Future CMS (Opcional - Fase 2):**
```javascript
// src/scripts/config.js
export const config = {
  whatsapp: '+5541999887766',
  email: 'allandiegocwb@gmail.com',
  address: {
    street: 'Rua X, 123',
    neighborhood: 'Santa Felicidade',
    city: 'Curitiba',
    state: 'PR',
    zipcode: '80000-000'
  },
  hours: {
    weekdays: '09:00 - 18:00',
    saturday: '09:00 - 13:00',
    sunday: 'Fechado'
  },
  social: {
    instagram: 'https://instagram.com/mundobicho',
    facebook: 'https://facebook.com/mundobicho'
  }
};
```

### 5.2 Form Data Flow

```
User submits form
    ↓
Netlify Forms (built-in)
    ↓
Data stored in Netlify Dashboard
    ↓
Email notification (via Netlify or custom function)
    ↓
Dr. Allan receives email
    ↓
Responds via WhatsApp or email
```

**Form Fields:**
```javascript
{
  name: String (required, max 100 chars),
  email: String (required, valid email),
  phone: String (optional, format: (XX) XXXXX-XXXX),
  pet_name: String (optional),
  pet_species: Enum ['Cão', 'Gato', 'Outro'],
  message: Text (required, max 1000 chars),
  consent: Boolean (required, LGPD)
}
```

**Security:**
- Honeypot field (hidden, detects bots)
- Netlify spam filtering
- Rate limiting (5 submissions/hour por IP)
- Server-side validation

---

## 6. EXTERNAL INTEGRATIONS

### 6.1 Google Maps Embed

**Implementation:**
```html
<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!..." 
  width="100%" 
  height="450" 
  style="border:0;" 
  allowfullscreen="" 
  loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

**No API key needed** para embed básico

### 6.2 WhatsApp Business API

**Deep Link Format:**
```javascript
const whatsappLink = (message = '') => {
  const phone = '5541999887766'; // Formato: DDI + DDD + Número
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMsg}`;
};

// Exemplos de uso:
// Hero CTA: whatsappLink('Olá! Gostaria de agendar uma consulta.')
// Services CTA: whatsappLink('Tenho interesse no banho ozonizado.')
// FAQ CTA: whatsappLink('Tenho uma dúvida sobre vacinação.')
```

### 6.3 Google Analytics 4 (GA4)

**Setup:**
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', {
    'anonymize_ip': true, // LGPD compliance
    'cookie_flags': 'SameSite=None;Secure'
  });
</script>
```

**Custom Events:**
```javascript
// src/scripts/analytics.js

// CTA WhatsApp clicks
document.querySelectorAll('.btn-primary').forEach(btn => {
  btn.addEventListener('click', () => {
    gtag('event', 'click_whatsapp', {
      'event_category': 'engagement',
      'event_label': btn.textContent
    });
  });
});

// Form submission
gtag('event', 'form_submit', {
  'event_category': 'conversion',
  'event_label': 'contact_form'
});

// Scroll depth tracking
let scrollDepth = 0;
window.addEventListener('scroll', () => {
  const depth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
  if (depth > scrollDepth && depth % 25 === 0) {
    scrollDepth = depth;
    gtag('event', 'scroll_depth', {
      'event_category': 'engagement',
      'value': depth
    });
  }
});
```

---

## 7. SECURITY

### 7.1 HTTPS/TLS

- **Certificate:** Let's Encrypt (auto-renovado via Netlify)
- **Protocols:** TLS 1.2+ only
- **Redirect:** HTTP → HTTPS (automatic)

### 7.2 HTTP Security Headers

**netlify.toml:**
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=(self), microphone=()"
    Content-Security-Policy = """
      default-src 'self';
      script-src 'self' 'unsafe-inline' https://www.google-analytics.com https://www.googletagmanager.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      font-src 'self' https://fonts.gstatic.com;
      img-src 'self' data: https:;
      frame-src https://www.google.com;
      connect-src 'self' https://www.google-analytics.com;
    """
```

### 7.3 Form Security

```javascript
// netlify/functions/contact-form.js
export async function handler(event) {
  // Only accept POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  
  // Parse form data
  const data = JSON.parse(event.body);
  
  // Server-side validation
  if (!data.name || !data.email || !data.message) {
    return { statusCode: 400, body: 'Missing required fields' };
  }
  
  // Check honeypot (bot detection)
  if (data.website) { // Honeypot field
    return { statusCode: 200, body: 'Success' }; // Fake success for bots
  }
  
  // Sanitize inputs (prevent XSS)
  const sanitized = {
    name: data.name.trim().slice(0, 100),
    email: data.email.trim().toLowerCase(),
    message: data.message.trim().slice(0, 1000)
  };
  
  // Send email (SendGrid/Mailgun)
  // ... email sending logic ...
  
  return {
    statusCode: 200,
    body: JSON.stringify({ success: true })
  };
}
```

---

## 8. PERFORMANCE OPTIMIZATION

### 8.1 Performance Budget

| Metric | Target | Measurement Tool |
|--------|--------|------------------|
| **Lighthouse Performance** | ≥ 90 | Lighthouse CI |
| **First Contentful Paint (FCP)** | ≤ 1.5s | Web Vitals |
| **Largest Contentful Paint (LCP)** | ≤ 2.5s | Web Vitals |
| **Total Blocking Time (TBT)** | ≤ 200ms | Lighthouse |
| **Cumulative Layout Shift (CLS)** | ≤ 0.1 | Web Vitals |
| **Total Page Weight** | ≤ 1MB | DevTools Network |

### 8.2 Image Optimization

**Strategy:**
```javascript
// vite.config.js - Image Optimization Plugin
import { defineConfig } from 'vite';
import imagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    imagemin({
      gifsicle: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.8, 0.9] },
      svgo: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'cleanupIDs', active: false }
        ]
      },
      webp: { quality: 80 }
    })
  ]
});
```

**Image Formats:**
- **WebP + JPG fallback** via `<picture>` element
- **SVG** para logo, mascote, background (otimizado)
- **Lazy loading** com `loading="lazy"` attribute

**Example:**
```html
<picture>
  <source srcset="/assets/dr-allan.webp" type="image/webp">
  <img src="/assets/dr-allan.jpg" 
       alt="Dr. Allan Diego Ferracin de Moraes" 
       loading="lazy"
       width="800" 
       height="800">
</picture>
```

### 8.3 CSS Optimization

```css
/* Critical CSS (inline no <head>) */
/* Hero section, above-the-fold apenas */

/* Non-critical CSS */
<link rel="preload" 
      href="/styles/main.css" 
      as="style" 
      onload="this.onload=null;this.rel='stylesheet'">
```

### 8.4 JavaScript Optimization

```html
<!-- Defer non-critical scripts -->
<script src="/scripts/main.js" defer></script>

<!-- Async para analytics -->
<script src="https://www.google-analytics.com/..." async></script>
```

### 8.5 Font Loading

```html
<!-- Preconnect Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Load fonts with font-display: swap -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
```

---

## 9. SEO ARCHITECTURE

### 9.1 On-Page SEO

**Meta Tags:**
```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <title>Dr. Allan Moraes - Veterinário em Curitiba | Mundo Bicho</title>
  <meta name="description" content="Clínica veterinária com banho ozonizado, consultas e especialistas em Curitiba. Atendimento personalizado e preços acessíveis. Agende via WhatsApp!">
  
  <meta name="keywords" content="veterinário curitiba, clínica veterinária, banho ozonizado pets, consulta veterinária, dr allan moraes, mundo bicho, santa felicidade">
  
  <!-- Open Graph (Facebook) -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="Dr. Allan Moraes - Veterinário em Curitiba | Mundo Bicho">
  <meta property="og:description" content="Clínica veterinária com banho ozonizado e atendimento personalizado em Curitiba.">
  <meta property="og:image" content="https://clinicamundobicho.com.br/og-image.jpg">
  <meta property="og:url" content="https://clinicamundobicho.com.br">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Dr. Allan Moraes - Veterinário Curitiba">
  <meta name="twitter:description" content="Banho ozonizado, consultas e especialistas. Agende agora!">
  <meta name="twitter:image" content="https://clinicamundobicho.com.br/og-image.jpg">
  
  <!-- Canonical -->
  <link rel="canonical" href="https://clinicamundobicho.com.br">
  
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="/favicon.png">
</head>
```

### 9.2 Structured Data (Schema.org)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  "name": "Mundo Bicho - Clínica Veterinária Dr. Allan Moraes",
  "image": "https://clinicamundobicho.com.br/assets/logo.png",
  "description": "Clínica veterinária especializada em pequenos animais com banho ozonizado e atendimento personalizado em Curitiba.",
  "url": "https://clinicamundobicho.com.br",
  "telephone": "+5541999887766",
  "email": "allandiegocwb@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua X, 123",
    "addressLocality": "Curitiba",
    "addressRegion": "PR",
    "postalCode": "80000-000",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-25.4289",
    "longitude": "-49.2671"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "13:00"
    }
  ],
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "XX"
  }
}
</script>
```

### 9.3 Sitemap & Robots

**public/sitemap.xml:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://clinicamundobicho.com.br/</loc>
    <lastmod>2025-11-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

**public/robots.txt:**
```
User-agent: *
Allow: /

Sitemap: https://clinicamundobicho.com.br/sitemap.xml
```

---

## 10. DEPLOYMENT & CI/CD

### 10.1 Git Workflow

**Branches:**
- `main` - Production (auto-deploy)
- `dev` - Development (preview deploy)

**Workflow:**
```
Local Development → Commit → Push to dev
    ↓
Preview Deploy (dev.clinicamundobicho.netlify.app)
    ↓
Testes & Aprovação
    ↓
Merge to main
    ↓
Production Deploy (clinicamundobicho.com.br)
```

### 10.2 GitHub Actions CI/CD

**.github/workflows/deploy.yml:**
```yaml
name: Deploy to Netlify

on:
  push:
    branches: [main, dev]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Run Lighthouse CI
        run: npm run lighthouse
      
      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        with:
          args: deploy --prod
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

### 10.3 Build Commands

**package.json:**
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src/**/*.js",
    "lighthouse": "lhci autorun",
    "optimize-images": "node scripts/optimize-images.js"
  }
}
```

**netlify.toml:**
```toml
[build]
  command = "npm run build"
  publish = "dist"
  
  [build.environment]
    NODE_VERSION = "20"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

---

## 11. MONITORING & ANALYTICS

### 11.1 Performance Monitoring

**Tools:**
- **Google Analytics 4:** User behavior, conversions
- **Google Search Console:** SEO performance, indexação
- **Netlify Analytics:** Traffic, bandwidth
- **Lighthouse CI:** Performance automated testing

**Key Metrics to Track:**
- Conversion rate (visitas → WhatsApp clicks)
- Form submissions
- Scroll depth
- Time on page
- Bounce rate
- Top landing pages (organic traffic)

### 11.2 Error Tracking

**Optional (Fase 2):** Sentry.io para JavaScript error tracking

---

## 12. BACKUP & DISASTER RECOVERY

### 12.1 Source Control Backup

- **GitHub Repository:** Primary backup
- **Netlify Deploy History:** 30 days rollback
- **Manual Backups:** Export `/dist` após cada deploy major

### 12.2 Domain Backup

- **DNS Records:** Documentar em `docs/dns-config.md`
- **SSL Certificates:** Auto-renovado (Let's Encrypt)

---

## 13. SCALABILITY

### 13.1 Traffic Handling

**Current Capacity (Netlify Free):**
- **100GB bandwidth/mês** = ~10k visitas (assumindo 10MB/visita com imagens)
- **CDN caching** reduz load no origin

**Upgrade Path:**
- Netlify Pro: $19/mês (1TB bandwidth)
- Cloudflare CDN: ilimitado (se migrar)

### 13.2 Performance Under Load

**CDN Advantages:**
- Static files = escala infinitamente
- Edge caching = latência mínima global
- DDoS protection = resiliência automática

---

## 14. MAINTENANCE PLAN

### 14.1 Regular Maintenance

**Mensal:**
- [ ] Atualizar npm packages (`npm audit fix`)
- [ ] Checar performance (Lighthouse)
- [ ] Backup manual do site
- [ ] Revisar analytics (conversões)

**Trimestral:**
- [ ] Atualizar imagens galeria
- [ ] Adicionar novos depoimentos
- [ ] Revisar FAQ (adicionar perguntas comuns)
- [ ] Checar links quebrados

**Anual:**
- [ ] Renovar domínio
- [ ] Revisar design (trends)
- [ ] Major updates (features)

### 14.2 Content Update Workflow

**Para Cliente (sem conhecimento técnico):**
1. Enviar atualização via email/WhatsApp
2. Dev faz alteração no HTML
3. Commit & push para `dev` branch
4. Preview → Aprovação → Merge to `main`

**Futuro (CMS - Fase 2):**
1. Cliente loga no Netlify CMS
2. Edita conteúdo via interface visual
3. Salva → Commit automático → Build & Deploy

---

## 15. COST ESTIMATE

### 15.1 Infraestrutura

| Item | Custo Mensal | Custo Anual |
|------|--------------|-------------|
| **Netlify Hosting** | R$ 0 (free tier) | R$ 0 |
| **Domínio .com.br** | ~R$ 3 | ~R$ 40 |
| **SSL Certificate** | R$ 0 (Let's Encrypt) | R$ 0 |
| **Email Service (SendGrid)** | R$ 0 (free tier) | R$ 0 |
| **Total** | **~R$ 3/mês** | **~R$ 40/ano** |

**Upgrade Costs (se tráfego aumentar):**
- Netlify Pro: $19/mês (~R$ 95/mês)
- Custom email: Google Workspace R$ 25/mês

### 15.2 Development & Maintenance

**One-time (Development):**
- Planning & Design: Concluído
- Development: 2 semanas (~40-80h)
- Testing & QA: 1 semana
- Deploy & Launch: 1 dia

**Recurring (Maintenance):**
- Content updates: 2-4h/mês
- Security patches: 1h/mês
- Performance monitoring: 1h/mês

---

## 16. RISK MITIGATION

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| **Assets não fornecidos** | Médio | Alto | Usar placeholders, timeline claro |
| **Tráfego exceder free tier** | Baixo | Médio | Monitorar analytics, upgrade se necessário |
| **Performance ruim mobile** | Baixo | Alto | Testes contínuos, image optimization |
| **SEO demorar 3-6 meses** | Alto | Médio | Google Ads inicial, GMB ativo |
| **Formulário spam** | Médio | Baixo | Honeypot + Netlify filtering |

---

## 17. SUCCESS CRITERIA

### 17.1 Technical Metrics

- [ ] Lighthouse Performance ≥ 90 (mobile)
- [ ] Lighthouse Accessibility ≥ 90
- [ ] Core Web Vitals: todas métricas "Good"
- [ ] Zero erros JavaScript console
- [ ] Compatibilidade: iOS Safari, Android Chrome, Desktop Chrome/Firefox/Edge

### 17.2 Business Metrics (3 meses)

- [ ] Conversão ≥ 8% (visitas → contato)
- [ ] 100+ cliques WhatsApp/mês
- [ ] 50+ visitas orgânicas/mês (SEO)
- [ ] Google My Business: 20+ reviews, 4.5+ estrelas

---

## 18. NEXT STEPS

### Immediate Actions

1. **Setup Infrastructure:**
   - [ ] Criar conta Netlify
   - [ ] Criar repositório GitHub
   - [ ] Registrar domínio clinicamundobicho.com.br
   - [ ] Configurar DNS

2. **Development Environment:**
   - [ ] Clone starter template
   - [ ] `npm install`
   - [ ] `npm run dev`
   - [ ] Verificar hot reload

3. **Asset Collection:**
   - [ ] Receber logo SVG/PNG
   - [ ] Receber mascote PNG transparente
   - [ ] Receber background SVG
   - [ ] Receber fotos Dr. Allan + clínica

4. **Begin Development:**
   - [ ] Implementar Hero Section
   - [ ] Implementar Seções restantes
   - [ ] Adicionar interatividade JS
   - [ ] Otimizar performance
   - [ ] Deploy preview

---

**Versão:** 1.0  
**Última atualização:** 20 de novembro de 2025  
**Architect:** Winston (BMad Architect Agent)
