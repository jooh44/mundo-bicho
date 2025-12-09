# FRONT-END SPECIFICATION - CLÍNICA MUNDO BICHO

**Versão:** 1.0  
**Data:** 20 de novembro de 2025  
**UX Expert:** Sally (BMad UX Agent)  
**Baseado em:** PRD v1.0 + Brand Guide v1.0

---

## 1. VISÃO GERAL

### Objetivo
Especificação técnica completa para implementação do frontend da landing page Mundo Bicho, seguindo a identidade visual aprovada (laranja #FFA32D + azul claro #7ED6F7) e o mockup fornecido pelo cliente.

### Design Philosophy
- **Clean & Modern:** Layout espaçoso, hierarquia clara
- **Warmth & Trust:** Cores vibrantes, fotos acolhedoras
- **Conversion-Focused:** CTAs estratégicos, WhatsApp sempre acessível
- **Mobile-First:** Experiência otimizada para smartphone

---

## 2. ESTRUTURA DA PÁGINA

### Information Architecture (Single-Page Scroll)

```
┌─────────────────────────────────┐
│ Header/Navigation (optional)    │
├─────────────────────────────────┤
│ Hero Section                    │
├─────────────────────────────────┤
│ Sobre o Dr. Allan               │
├─────────────────────────────────┤
│ Serviços Oferecidos             │
├─────────────────────────────────┤
│ Diferenciais Competitivos       │
├─────────────────────────────────┤
│ FAQ (Perguntas Frequentes)      │
├─────────────────────────────────┤
│ Depoimentos                     │
├─────────────────────────────────┤
│ Galeria de Fotos                │
├─────────────────────────────────┤
│ Localização & Horários          │
├─────────────────────────────────┤
│ Footer                          │
└─────────────────────────────────┘

+ Floating WhatsApp Button (fixed)
```

---

## 3. SEÇÃO POR SEÇÃO

### 3.1 HERO SECTION

**Objetivo:** Capturar atenção imediata, comunicar proposta de valor, converter em clique WhatsApp

#### Layout Desktop (1024px+)

```
┌──────────────────────────────────────────────────────────────┐
│  [Logo Mundo Bicho]           [Nav: Sobre|Serviços|Contato]  │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌────────────────────┐  ┌──────────────────────────────┐  │
│  │ TEXTO (50%)        │  │ IMAGEM (50%)                 │  │
│  │                    │  │                              │  │
│  │ [Badge]            │  │  ┌────────────────────────┐  │  │
│  │ Clínica Vet. em    │  │  │ [Background SVG        │  │  │
│  │ [Curitiba]         │  │  │  laranja ondulado]     │  │  │
│  │                    │  │  │                        │  │  │
│  │ H1: Cuidado, Amor  │  │  │  [Mascote PNG/SVG      │  │  │
│  │ e [Responsabilida- │  │  │   sobreposto]          │  │  │
│  │ de]                │  │  │                        │  │  │
│  │                    │  │  └────────────────────────┘  │  │
│  │ Subtítulo: O Mundo │  │                              │  │
│  │ do seu bicho...    │  │                              │  │
│  │                    │  │                              │  │
│  │ ✓ Localização      │  │                              │  │
│  │ ✓ Profissionais    │  │                              │  │
│  │                    │  │                              │  │
│  │ [BTN: Agendar]     │  │                              │  │
│  │ [BTN: Serviços]    │  │                              │  │
│  └────────────────────┘  └──────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

#### Layout Mobile (<768px)

```
┌─────────────────────────────┐
│  [Logo]          [☰ Menu]   │
├─────────────────────────────┤
│                             │
│  ┌───────────────────────┐  │
│  │ [Imagem Hero]         │  │
│  │ Background + Mascote  │  │
│  └───────────────────────┘  │
│                             │
│  [Badge] Clínica Vet. em    │
│  [Curitiba]                 │
│                             │
│  H1: Cuidado, Amor e        │
│  [Responsabilidade]         │
│                             │
│  Subtítulo: O Mundo do      │
│  seu bicho também...        │
│                             │
│  ✓ Localização              │
│  ✓ Profissionais            │
│                             │
│  [BTN: Agendar] (100%)      │
│  [BTN: Serviços] (100%)     │
│                             │
└─────────────────────────────┘
```

#### HTML Structure

```html
<section class="hero" id="hero">
  <div class="container">
    <div class="hero-grid">
      
      <!-- Texto -->
      <div class="hero-text">
        <span class="badge badge-outline">
          Clínica Veterinária em 
          <span class="text-blue">Curitiba</span>
        </span>
        
        <h1 class="hero-title">
          Cuidado, Amor e 
          <span class="text-blue">Responsabilidade</span>
        </h1>
        
        <p class="hero-subtitle">
          O Mundo do seu bicho também é o nosso! Vamos cuidar do seu Pet 
          e garantir toda a proteção que ele merece.
        </p>
        
        <ul class="hero-features">
          <li>
            <i class="fa-solid fa-location-dot icon-orange"></i>
            Localizado em Santa Felicidade
          </li>
          <li>
            <i class="fa-solid fa-user-doctor icon-blue"></i>
            Profissionais qualificados
          </li>
        </ul>
        
        <div class="hero-actions">
          <a href="https://wa.me/55XXXXXXXXXXX?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta." 
             class="btn btn-primary"
             aria-label="Agendar consulta via WhatsApp">
            <i class="fa-brands fa-whatsapp"></i>
            Agendar Horário
          </a>
          <a href="#servicos" class="btn btn-secondary">
            Ver Serviços
          </a>
        </div>
      </div>
      
      <!-- Imagem -->
      <div class="hero-image">
        <img src="/assets/background.svg" 
             alt="Background decorativo laranja" 
             class="hero-bg"
             loading="eager">
        <img src="/assets/mascote.png" 
             alt="Mascote Mundo Bicho - Cachorro veterinário" 
             class="hero-pet"
             loading="eager">
      </div>
      
    </div>
  </div>
</section>
```

#### CSS Key Styles

```css
/* Hero Section */
.hero {
  background: #FFFFFF;
  padding: 80px 0;
  position: relative;
  overflow: hidden;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

/* Badge */
.badge-outline {
  display: inline-block;
  padding: 6px 18px;
  border: 1.5px solid #FFA32D;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 600;
  color: #FFA32D;
  margin-bottom: 20px;
}

.text-blue {
  color: #7ED6F7;
}

/* Título */
.hero-title {
  font-family: 'Poppins', sans-serif;
  font-size: 42px;
  font-weight: 700;
  line-height: 1.2;
  color: #FFA32D;
  margin-bottom: 16px;
}

/* Subtítulo */
.hero-subtitle {
  font-size: 18px;
  line-height: 1.6;
  color: #343A40;
  margin-bottom: 24px;
}

/* Features List */
.hero-features {
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;
}

.hero-features li {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 16px;
  color: #343A40;
}

.icon-orange { color: #FFA32D; }
.icon-blue { color: #7ED6F7; }

/* Botões */
.hero-actions {
  display: flex;
  gap: 16px;
}

.btn-primary {
  background: #FFA32D;
  color: #FFFFFF;
  padding: 14px 28px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 12px rgba(255, 163, 45, 0.3);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #FF7F0A;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(255, 163, 45, 0.4);
}

.btn-secondary {
  background: transparent;
  color: #FFA32D;
  padding: 12px 24px;
  border: 2px solid #FFA32D;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #FFA32D;
  color: #FFFFFF;
}

/* Imagem */
.hero-image {
  position: relative;
  height: 500px;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 1;
}

.hero-pet {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 400px;
  height: auto;
  z-index: 2;
}

/* Responsividade Mobile */
@media (max-width: 767px) {
  .hero {
    padding: 40px 0;
  }
  
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  
  .hero-image {
    order: -1; /* Imagem primeiro em mobile */
    height: 350px;
  }
  
  .hero-title {
    font-size: 32px;
  }
  
  .hero-actions {
    flex-direction: column;
  }
  
  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
  }
}
```

---

### 3.2 SOBRE O DR. ALLAN

**Objetivo:** Construir confiança através de credenciais, experiência e abordagem humanizada

#### Layout

```
┌──────────────────────────────────────────────────────────────┐
│                  H2: Conheça o Dr. Allan                     │
├──────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌────────────────────────────────────┐   │
│  │              │  │ Dr. Allan Diego Ferracin de Moraes│   │
│  │  [Foto       │  │                                    │   │
│  │   Circular]  │  │ Formado em Medicina Veterinária... │   │
│  │              │  │                                    │   │
│  │  (30% width) │  │ ✓ X anos de experiência           │   │
│  │              │  │ ✓ Especializado em pequenos...    │   │
│  │              │  │ ✓ Atendimento humanizado          │   │
│  │              │  │                                    │   │
│  │              │  │ "Cada animal merece ser tratado   │   │
│  │              │  │  com carinho, respeito e          │   │
│  │              │  │  dedicação profissional."         │   │
│  │              │  │  - Dr. Allan Moraes               │   │
│  └──────────────┘  └────────────────────────────────────┘   │
│                                                              │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐         │
│  │Icon  │  │Icon  │  │Icon  │  │Icon  │  │Icon  │         │
│  │Trust │  │Acess │  │Attent│  │Respt │  │Prof  │         │
│  └──────┘  └──────┘  └──────┘  └──────┘  └──────┘         │
└──────────────────────────────────────────────────────────────┘
```

#### HTML Structure

```html
<section class="about" id="sobre">
  <div class="container">
    <h2 class="section-title">Conheça o Dr. Allan</h2>
    
    <div class="about-grid">
      <!-- Foto -->
      <div class="about-image">
        <img src="/assets/dr-allan.jpg" 
             alt="Dr. Allan Diego Ferracin de Moraes" 
             class="about-photo"
             loading="lazy">
      </div>
      
      <!-- Texto -->
      <div class="about-text">
        <h3>Dr. Allan Diego Ferracin de Moraes</h3>
        <p>
          Formado em Medicina Veterinária, com especialização em clínica 
          médica de pequenos animais. Com anos de experiência no cuidado 
          de cães e gatos, o Dr. Allan dedica-se a proporcionar atendimento 
          personalizado e humanizado para cada pet.
        </p>
        
        <ul class="about-credentials">
          <li><i class="fa-check"></i> X anos de experiência em clínica veterinária</li>
          <li><i class="fa-check"></i> Especializado em pequenos animais (cães e gatos)</li>
          <li><i class="fa-check"></i> Atendimento humanizado e dedicado</li>
        </ul>
        
        <blockquote class="about-quote">
          "Cada animal merece ser tratado com carinho, respeito e 
          dedicação profissional."
          <cite>- Dr. Allan Moraes</cite>
        </blockquote>
      </div>
    </div>
    
    <!-- Values Cards -->
    <div class="values-grid">
      <div class="value-card">
        <i class="fa-solid fa-shield-heart icon-orange"></i>
        <h4>Confiança</h4>
        <p>Transparência em diagnósticos</p>
      </div>
      <div class="value-card">
        <i class="fa-solid fa-hand-holding-dollar icon-blue"></i>
        <h4>Acessibilidade</h4>
        <p>Qualidade a preços justos</p>
      </div>
      <div class="value-card">
        <i class="fa-solid fa-heart icon-orange"></i>
        <h4>Atenção</h4>
        <p>Atendimento personalizado</p>
      </div>
      <div class="value-card">
        <i class="fa-solid fa-paw icon-blue"></i>
        <h4>Respeito</h4>
        <p>Cuidado com dedicação</p>
      </div>
      <div class="value-card">
        <i class="fa-solid fa-user-doctor icon-orange"></i>
        <h4>Profissionalismo</h4>
        <p>Formação comprovada</p>
      </div>
    </div>
    
  </div>
</section>
```

#### CSS Key Styles

```css
.about {
  background: #F5F5F5;
  padding: 80px 0;
}

.section-title {
  font-family: 'Poppins', sans-serif;
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  color: #FFA32D;
  margin-bottom: 48px;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 48px;
  margin-bottom: 64px;
}

.about-photo {
  width: 100%;
  max-width: 300px;
  border-radius: 50%;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}

.about-quote {
  border-left: 4px solid #FFA32D;
  padding-left: 24px;
  margin: 24px 0;
  font-style: italic;
  color: #6C757D;
}

/* Values Grid */
.values-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
}

.value-card {
  background: #FFFFFF;
  padding: 24px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.value-card i {
  font-size: 32px;
  margin-bottom: 12px;
}

@media (max-width: 767px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
  }
}
```

---

### 3.3 SERVIÇOS OFERECIDOS

**Objetivo:** Apresentar serviços com destaque para banho ozonizado

#### Layout

```
┌──────────────────────────────────────────────────────────────┐
│                  H2: Nossos Serviços                         │
├──────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ [CARD 1]     │  │ [CARD 2]     │  │ [CARD 3]     │      │
│  │ BANHO OZON.  │  │ CONSULTAS    │  │ EXAMES       │      │
│  │ [Badge Excl] │  │              │  │              │      │
│  │ [Ícone 48px] │  │ [Ícone]      │  │ [Ícone]      │      │
│  │ Descrição... │  │ Descrição... │  │ Descrição... │      │
│  │ [Link →]     │  │ [Link →]     │  │ [Link →]     │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ [CARD 4-6]   │  │ [CARD 5]     │  │ [CARD 6]     │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                              │
│           [BTN PRIMARY: Agendar Serviço]                    │
└──────────────────────────────────────────────────────────────┘
```

#### HTML Structure

```html
<section class="services" id="servicos">
  <div class="container">
    <h2 class="section-title">Nossos Serviços</h2>
    
    <div class="services-grid">
      
      <!-- Banho Ozonizado (Destaque) -->
      <div class="service-card featured">
        <span class="badge badge-exclusive">Exclusivo</span>
        <i class="fa-solid fa-droplet icon-large icon-orange"></i>
        <h3>Banho Ozonizado e Medicamentoso</h3>
        <p>
          Tecnologia inovadora com ozônio para tratamento de pele, 
          alívio de dor, redução de inflamação e fortalecimento imunológico.
        </p>
        <a href="#contato" class="service-link">Saiba mais →</a>
      </div>
      
      <!-- Consultas -->
      <div class="service-card">
        <i class="fa-solid fa-stethoscope icon-large icon-blue"></i>
        <h3>Consultas Clínicas Gerais</h3>
        <p>
          Atendimento clínico completo para diagnóstico e tratamento 
          de diversas condições.
        </p>
        <a href="#contato" class="service-link">Saiba mais →</a>
      </div>
      
      <!-- Exames -->
      <div class="service-card">
        <i class="fa-solid fa-x-ray icon-large icon-orange"></i>
        <h3>Exames Especializados</h3>
        <p>
          Ultrassom, radiografia com profissionais especializados.
        </p>
        <a href="#contato" class="service-link">Saiba mais →</a>
      </div>
      
      <!-- Especialidades -->
      <div class="service-card">
        <i class="fa-solid fa-heart-pulse icon-large icon-blue"></i>
        <h3>Especialidades Médicas</h3>
        <p>
          Acesso a dermatologistas, cardiologistas, nefrologistas 
          e outros especialistas.
        </p>
        <a href="#contato" class="service-link">Saiba mais →</a>
      </div>
      
      <!-- Laboratório -->
      <div class="service-card">
        <i class="fa-solid fa-flask icon-large icon-orange"></i>
        <h3>Exames Laboratoriais</h3>
        <p>
          Coleta para exames laboratoriais com laboratório parceiro certificado.
        </p>
        <a href="#contato" class="service-link">Saiba mais →</a>
      </div>
      
      <!-- Banho e Tosa -->
      <div class="service-card">
        <i class="fa-solid fa-scissors icon-large icon-blue"></i>
        <h3>Banho e Tosa Tradicional</h3>
        <p>
          Serviços de higiene e estética para seu pet com todo cuidado.
        </p>
        <a href="#contato" class="service-link">Saiba mais →</a>
      </div>
      
    </div>
    
    <div class="services-cta">
      <a href="https://wa.me/55XXXXXXXXXXX?text=Gostaria%20de%20agendar%20um%20serviço" 
         class="btn btn-primary btn-large">
        <i class="fa-brands fa-whatsapp"></i>
        Agendar Serviço via WhatsApp
      </a>
    </div>
    
  </div>
</section>
```

#### CSS Key Styles

```css
.services {
  background: #FFFFFF;
  padding: 80px 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 48px;
}

.service-card {
  background: #FFFFFF;
  border: 1px solid #E5E5E5;
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  border-color: #FFA32D;
}

/* Card Destaque (Banho Ozonizado) */
.service-card.featured {
  border: 2px solid #FFA32D;
  box-shadow: 0 4px 16px rgba(255, 163, 45, 0.15);
}

.badge-exclusive {
  position: absolute;
  top: 12px;
  right: 12px;
  background: linear-gradient(135deg, #FFA32D, #FF7F0A);
  color: #FFFFFF;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.icon-large {
  font-size: 48px;
  margin-bottom: 16px;
}

.service-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #121212;
}

.service-link {
  color: #7ED6F7;
  font-weight: 600;
  text-decoration: none;
  margin-top: 12px;
  display: inline-block;
}

.service-link:hover {
  color: #45B2E9;
}

.services-cta {
  text-align: center;
}

@media (max-width: 767px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
```

---

### 3.4 FLOATING WHATSAPP BUTTON

**Objetivo:** WhatsApp sempre acessível durante scroll

#### HTML Structure

```html
<a href="https://wa.me/55XXXXXXXXXXX?text=Olá!%20Gostaria%20de%20falar%20sobre%20os%20serviços%20da%20Mundo%20Bicho" 
   class="whatsapp-float"
   aria-label="Enviar mensagem no WhatsApp"
   target="_blank"
   rel="noopener noreferrer">
  <i class="fa-brands fa-whatsapp"></i>
</a>
```

#### CSS

```css
.whatsapp-float {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 60px;
  height: 60px;
  background: #25D366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  font-size: 32px;
  box-shadow: 0 4px 16px rgba(37, 211, 102, 0.4);
  z-index: 9999;
  transition: all 0.3s ease;
  animation: pulse 2s infinite;
}

.whatsapp-float:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@media (max-width: 767px) {
  .whatsapp-float {
    width: 56px;
    height: 56px;
    bottom: 20px;
    right: 20px;
    font-size: 28px;
  }
}
```

---

## 4. ASSETS NECESSÁRIOS

### Checklist de Assets

#### Imagens
- [ ] `logo.svg` - Logo Mundo Bicho (vetorizado)
- [ ] `logo.png` - Logo fallback (2x resolution)
- [ ] `mascote.png` - Mascote fundo transparente (800x1000px)
- [ ] `mascote.svg` - Mascote vetorizado (preferencial)
- [ ] `background.svg` - Background laranja ondulado
- [ ] `dr-allan.jpg` - Foto profissional Dr. Allan (800x800px)
- [ ] `clinica-recepcao.jpg` - Foto recepção (1600x1200px)
- [ ] `clinica-consultorio.jpg` - Foto consultório
- [ ] `clinica-banho.jpg` - Área de banho/tosa
- [ ] `galeria/` - 8-12 fotos adicionais

#### Ícones
- Font Awesome 6 Free (CDN)
- Heroicons (SVG - opcional)

#### Fontes
- Google Fonts: Poppins (600, 700, 800)
- Google Fonts: Open Sans (400, 600)

---

## 5. RESPONSIVIDADE

### Breakpoints

```css
/* Mobile Small */
@media (max-width: 575px) { }

/* Mobile */
@media (max-width: 767px) { }

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Large Desktop */
@media (min-width: 1440px) {
  .container {
    max-width: 1280px;
  }
}
```

### Adaptações Mobile

| Elemento | Desktop | Mobile |
|----------|---------|--------|
| Hero Grid | 2 cols (50/50) | 1 col (empilhado) |
| Services Grid | 3 cols | 1 col |
| Values Grid | 5 cols | 1 col |
| Font H1 | 42px | 32px |
| Font H2 | 36px | 28px |
| Padding Seção | 80px | 40px |
| Botões | width: auto | width: 100% |

---

## 6. PERFORMANCE

### Otimizações

**Imagens:**
- WebP + JPG fallback
- Lazy loading (`loading="lazy"`)
- Responsive images (`srcset`)
- Hero: eager loading

**CSS:**
- Critical CSS inline
- Restante: preload + async

**JavaScript:**
- Defer non-critical scripts
- Intersection Observer (lazy load, scroll reveal)
- Minimal dependencies

**Fontes:**
- Preconnect Google Fonts
- `font-display: swap`

---

## 7. ACESSIBILIDADE

### Checklist

- [ ] Alt text em todas as imagens
- [ ] ARIA labels em elementos interativos
- [ ] Focus indicators visíveis
- [ ] Contraste ≥ 4.5:1
- [ ] Navegação por teclado
- [ ] Landmarks semânticos (`<header>`, `<main>`, `<section>`, `<footer>`)

---

## 8. PRÓXIMOS PASSOS

1. **Implementar HTML base** seguindo estruturas acima
2. **Estilizar com CSS** seguindo Brand Guide
3. **Adicionar interatividade** (smooth scroll, accordion, lightbox)
4. **Otimizar assets** (WebP, minify)
5. **Testar responsividade** (iPhone, Android, tablets)
6. **Validar acessibilidade** (Lighthouse, WAVE)
7. **Deploy** (Netlify + clinicamundobicho.com.br)

---

**Versão:** 1.0  
**Última atualização:** 20 de novembro de 2025
