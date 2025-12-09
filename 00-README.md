# README - PROJETO MUNDO BICHO

## 📋 Visão Geral

Landing page profissional para a **Clínica Veterinária Mundo Bicho**, sob direção do **Dr. Allan Diego Ferracin de Moraes**.

**Domínio:** clinicamundobicho.com.br  
**Status:** Fase Planning concluída → Pronto para Development (IDE)

---

## 🎨 Identidade Visual

### Cores
- **Laranja:** `#FFA32D` (primário), `#FF7F0A` (hover)
- **Azul Claro:** `#7ED6F7` (secundário), `#45B2E9` (hover)
- **Neutros:** `#FFFFFF`, `#121212`, `#F5F5F5`

### Tipografia
- **Headings:** Poppins (Bold 700-800)
- **Body:** Open Sans (Regular 400, Semibold 600)

### Assets
- Logo Mundo Bicho (SVG/PNG)
- Mascote (cachorro veterinário - PNG transparente)
- Background laranja ondulado (SVG)
- Fotos Dr. Allan + clínica

---

## 📁 Estrutura do Projeto

```
mundo-bicho-landing/
├── docs/                        # Documentação completa
│   ├── 01-project-brief.md      # Visão geral, objetivos, público
│   ├── 02-brand-guide.md        # Paleta, tipografia, componentes
│   ├── 03-front-end-spec.md     # Layout, HTML/CSS, wireframes
│   └── 04-architecture.md       # Tech stack, deployment, CI/CD
│
├── src/
│   ├── assets/
│   │   └── images/              # Logo, mascote, fotos
│   ├── styles/                  # CSS/SCSS
│   └── scripts/                 # JavaScript
│
├── public/                      # Assets estáticos
├── netlify/                     # Serverless functions
├── package.json                 # Dependencies
├── vite.config.js               # Build config
├── netlify.toml                 # Deploy config
└── README.md                    # Este arquivo
```

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | HTML5 + CSS3 + Vanilla JavaScript |
| **Build** | Vite 5.x |
| **Hosting** | Netlify (Free Tier) |
| **Domain** | clinicamundobicho.com.br |
| **Forms** | Netlify Forms |
| **Analytics** | Google Analytics 4 |
| **Maps** | Google Maps Embed |

---

## 📦 Artefatos Entregues

### ✅ Fase Planning (Concluída)

1. **01-project-brief.md**
   - Contexto do negócio
   - Identidade visual (cores, tipografia)
   - Público-alvo
   - Diferenciais competitivos
   - Serviços oferecidos
   - Objetivos & métricas

2. **02-brand-guide.md**
   - Paleta de cores completa
   - Tipografia (escalas, uso)
   - Componentes UI (botões, cards, badges)
   - Espaçamento (8pt grid)
   - Design patterns
   - Acessibilidade

3. **03-front-end-spec.md**
   - Estrutura da página (seção por seção)
   - Wireframes desktop + mobile
   - HTML structure completo
   - CSS styles detalhado
   - Hero section pronto para implementar
   - Assets necessários
   - Responsividade

4. **04-architecture.md**
   - System architecture diagram
   - Tech stack detalhado
   - Project structure
   - Security (HTTPS, headers, forms)
   - Performance optimization
   - SEO architecture
   - Deployment & CI/CD
   - Monitoring & analytics

---

## 🎯 Hero Section (Pronto para Implementar)

### Mensagem Principal
**Badge:** "Clínica Veterinária em Curitiba"  
**Título:** "Cuidado, Amor e Responsabilidade"  
**Subtítulo:** "O Mundo do seu bicho também é o nosso! Vamos cuidar do seu Pet e garantir toda a proteção que ele merece."

### Destaques
- 📍 Localizado em Santa Felicidade
- ✅ Profissionais qualificados

### CTAs
- **Primário:** "Agendar Horário" (laranja, WhatsApp)
- **Secundário:** "Ver Serviços" (outline laranja)

---

## 🛠️ Setup para Development

### Pré-requisitos
- Node.js 20+ LTS
- npm ou yarn
- Git
- Editor de código (VS Code recomendado)

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/mundo-bicho-landing.git
cd mundo-bicho-landing

# 2. Instale dependências
npm install

# 3. Inicie dev server
npm run dev

# 4. Abra no navegador
# http://localhost:5173
```

### Scripts Disponíveis

```bash
npm run dev         # Dev server com hot reload
npm run build       # Build de produção
npm run preview     # Preview do build
npm run lint        # Lint JavaScript
```

---

## 📝 Informações Pendentes (Cliente)

**Informações necessárias para finalizar desenvolvimento:**

### Contato
- [ ] Número WhatsApp formatado: +55 (XX) XXXXX-XXXX
- [ ] Número telefone (se diferente)
- [ ] Confirmar email: allandiegocwb@gmail.com

### Localização
- [ ] Endereço completo: Rua/Av, Número, Bairro
- [ ] CEP completo
- [ ] Coordenadas GPS (ou validar no Google Maps)
- [ ] Informação sobre estacionamento

### Redes Sociais
- [ ] URL Instagram
- [ ] URL Facebook

### Assets Visuais
- [ ] Logo Mundo Bicho (SVG + PNG alta res)
- [ ] Mascote (PNG fundo transparente, 800x1000px mínimo)
- [ ] Background laranja ondulado (SVG)
- [ ] Foto profissional Dr. Allan (800x800px, fundo limpo)
- [ ] 3-5 fotos da clínica (recepção, consultório, banho)
- [ ] 8-12 fotos para galeria

### Conteúdo
- [ ] Biografia detalhada Dr. Allan (formação, experiência)
- [ ] 3-5 depoimentos reais de clientes (com autorização)
- [ ] Valores de serviços (se divulgar)
- [ ] Formas de pagamento aceitas

---

## 🎨 Design System - Referência Rápida

### Botões

```html
<!-- Primário -->
<button class="btn btn-primary">
  <i class="fa-brands fa-whatsapp"></i>
  Agendar Horário
</button>

<!-- Secundário -->
<button class="btn btn-secondary">
  Ver Serviços
</button>
```

### Badges

```html
<span class="badge badge-outline">
  Clínica Veterinária em <span class="text-blue">Curitiba</span>
</span>

<span class="badge badge-exclusive">Exclusivo</span>
```

### Títulos

```html
<h1>Cuidado, Amor e <span class="text-blue">Responsabilidade</span></h1>
```

---

## 📊 Métricas de Sucesso

### Performance (Targets)
- Lighthouse Performance: ≥ 90 (mobile)
- First Contentful Paint: ≤ 1.5s
- Largest Contentful Paint: ≤ 2.5s
- Total Page Weight: ≤ 1MB

### Business (3 meses)
- Taxa de conversão: ≥ 8%
- Cliques WhatsApp: 100+/mês
- Visitas orgânicas: 50+/mês
- Google My Business: 20+ reviews, 4.5+ estrelas

---

## 🚢 Deployment

### Netlify (Recomendado)

```bash
# 1. Conectar repositório GitHub ao Netlify
# 2. Configurar build settings:
Build command: npm run build
Publish directory: dist
Node version: 20

# 3. Configurar domínio personalizado:
clinicamundobicho.com.br

# 4. SSL auto-configurado (Let's Encrypt)
```

### Deploy Manual

```bash
npm run build
# Upload pasta /dist para hosting
```

---

## 📞 Contato

**Cliente:** Dr. Allan Diego Ferracin de Moraes  
**Email:** allandiegocwb@gmail.com  
**CNPJ:** 08105955000115

**Desenvolvimento:** [Seu nome/empresa]  
**Email:** [seu-email]

---

## 📄 Licença

Todos os direitos reservados © 2025 Mundo Bicho - Clínica Veterinária

---

## 🔗 Links Úteis

- [Documentação Completa](./docs/)
- [Brand Guide](./docs/02-brand-guide.md)
- [Front-End Spec](./docs/03-front-end-spec.md)
- [Architecture](./docs/04-architecture.md)

---

**Versão:** 1.0  
**Última atualização:** 20 de novembro de 2025  
**Status:** 🟢 Pronto para Development
