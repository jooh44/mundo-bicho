# BRAND GUIDE - CLÍNICA MUNDO BICHO

**Versão:** 1.0  
**Data:** 20 de novembro de 2025  
**Cliente:** Dr. Allan Diego Ferracin de Moraes

---

## 1. IDENTIDADE DA MARCA

### Missão
Entregar um serviço veterinário de qualidade, sempre com carinho e respeito pelos animais.

### Valores
- **Confiança:** Transparência em diagnósticos e tratamentos
- **Acessibilidade:** Qualidade profissional a preços justos
- **Atenção:** Atendimento personalizado para cada pet
- **Respeito:** Cuidado com dedicação e carinho
- **Profissionalismo:** Formação e experiência comprovadas

### Tom de Voz
- Mix de formal/técnico (70%) + leve/amigável (30%)
- Profissional mas acessível
- Empático e acolhedor
- Focado no bem-estar animal
- Educativo (responde dúvidas)

---

## 2. PALETA DE CORES

### Cores Primárias

```css
/* Laranja - Cor Principal */
--primary-orange: #FFA32D;
--primary-orange-dark: #FF7F0A;
--primary-orange-light: #FFB84D;

/* Azul Claro - Cor Secundária */
--primary-blue: #7ED6F7;
--primary-blue-dark: #45B2E9;
--primary-blue-light: #A8E5F9;
```

### Cores Neutras

```css
/* Neutros */
--neutral-white: #FFFFFF;
--neutral-black: #121212;
--neutral-gray-100: #F5F5F5;
--neutral-gray-200: #E5E5E5;
--neutral-gray-400: #D9E3EB;
--neutral-gray-600: #6C757D;
--neutral-gray-800: #343A40;
```

### Uso das Cores

| Elemento | Cor | Uso |
|----------|-----|-----|
| **Botão Primário** | `#FFA32D` | Fundo, sombra laranja suave |
| **Botão Secundário** | `#FFA32D` | Borda e texto, fundo transparente |
| **Badges/Tags** | `#FFA32D` ou `#7ED6F7` | Fundo com texto branco |
| **Títulos H1** | `#FFA32D` + `#7ED6F7` | Palavras-chave em azul claro |
| **Links** | `#7ED6F7` | Cor padrão, hover `#45B2E9` |
| **Ícones** | `#FFA32D` ou `#7ED6F7` | Alternando conforme contexto |

### Contraste (WCAG AA)

| Combinação | Ratio | Status |
|------------|-------|--------|
| `#FFA32D` on White | 2.9:1 | ❌ Use para elementos grandes |
| `#FF7F0A` on White | 4.5:1 | ✅ OK para textos |
| `#121212` on White | 16:1 | ✅ Excelente |
| `#7ED6F7` on White | 2.1:1 | ❌ Use para elementos grandes |
| `#45B2E9` on White | 3.8:1 | ⚠️ Use para textos grandes |

**Recomendação:** Para textos pequenos sobre branco, use `#FF7F0A` (laranja escuro) ou `#45B2E9` (azul médio).

---

## 3. TIPOGRAFIA

### Fontes

**Poppins** (Headings)
- Fonte: Google Fonts
- Pesos: 600 (Semibold), 700 (Bold), 800 (Extrabold)
- Uso: Títulos, CTAs, badges

**Open Sans** (Body)
- Fonte: Google Fonts
- Pesos: 400 (Regular), 600 (Semibold)
- Uso: Corpo de texto, parágrafos, listas

### Escala Tipográfica

| Elemento | Desktop | Mobile | Weight | Line Height |
|----------|---------|--------|--------|-------------|
| **H1 (Hero)** | 42px | 32px | 700-800 | 1.2 |
| **H2 (Seções)** | 32px | 24px | 700 | 1.3 |
| **H3 (Subsections)** | 24px | 20px | 600 | 1.4 |
| **Body Large** | 20px | 18px | 400 | 1.6 |
| **Body Regular** | 18px | 16px | 400 | 1.6 |
| **Body Small** | 16px | 14px | 400 | 1.5 |
| **Button** | 18px | 16px | 600 | 1.2 |
| **Caption** | 14px | 12px | 400 | 1.4 |

### Exemplo de Uso

```css
/* Heading Principal */
h1 {
  font-family: 'Poppins', sans-serif;
  font-size: 42px;
  font-weight: 700;
  line-height: 1.2;
  color: var(--primary-orange);
}

/* Palavra destaque em azul */
h1 .highlight {
  color: var(--primary-blue);
}

/* Corpo de texto */
p {
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.6;
  color: var(--neutral-gray-800);
}
```

---

## 4. COMPONENTES UI

### Botões

#### Botão Primário (Laranja)

```css
.btn-primary {
  background: #FFA32D;
  color: #FFFFFF;
  padding: 14px 28px;
  border-radius: 12px;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-weight: 600;
  border: none;
  box-shadow: 0 4px 12px rgba(255, 163, 45, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-primary:hover {
  background: #FF7F0A;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(255, 163, 45, 0.4);
}
```

#### Botão Secundário (Outline Laranja)

```css
.btn-secondary {
  background: transparent;
  color: #FFA32D;
  padding: 12px 24px;
  border: 2px solid #FFA32D;
  border-radius: 12px;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-secondary:hover {
  background: #FFA32D;
  color: #FFFFFF;
}
```

### Cards

```css
.card {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--neutral-gray-200);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  border-color: var(--primary-orange);
}
```

### Badges

```css
/* Badge Laranja */
.badge-orange {
  background: #FFA32D;
  color: #FFFFFF;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  display: inline-block;
}

/* Badge Azul */
.badge-blue {
  background: #7ED6F7;
  color: #FFFFFF;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  display: inline-block;
}

/* Badge Outline */
.badge-outline {
  background: transparent;
  color: #FFA32D;
  border: 1.5px solid #FFA32D;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  display: inline-block;
}
```

### Ícones

**Estilo:** Linear, 2px stroke weight  
**Tamanho:** 24px (mobile), 32px (desktop), 48px (destaque)  
**Cores:** `#FFA32D` ou `#7ED6F7` alternando conforme contexto  
**Biblioteca:** Font Awesome 6 Free ou Heroicons

```html
<!-- Exemplo Font Awesome -->
<i class="fa-solid fa-location-dot" style="color: #FFA32D;"></i>
<i class="fa-solid fa-user-doctor" style="color: #7ED6F7;"></i>
```

---

## 5. ESPAÇAMENTO (8pt Grid)

### Sistema de Espaçamento

```css
/* Base: 8px */
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;
--space-3xl: 64px;
--space-4xl: 96px;
```

### Uso

| Elemento | Espaçamento |
|----------|-------------|
| **Padding botão** | 14px 28px (vertical horizontal) |
| **Padding card** | 24px |
| **Margin entre seções** | 64px (desktop), 48px (mobile) |
| **Gap grid** | 24px (desktop), 16px (mobile) |

---

## 6. DESIGN PATTERNS

### Hero Section

**Layout:** 50/50 split (desktop), empilhado (mobile)  
**Background:** Branco com ondas decorativas laranjas  
**Componentes:**
- Badge "Clínica Veterinária em Curitiba"
- H1 com palavra "Responsabilidade" em azul
- Subtítulo em cinza escuro
- Lista com ícones (localização + profissionais)
- 2 CTAs (primário + secundário)
- Imagem: mascote + background SVG separados

```html
<section class="hero">
  <div class="hero-text">
    <span class="badge-outline">
      Clínica Veterinária em <span style="color: #7ED6F7;">Curitiba</span>
    </span>
    <h1>
      Cuidado, Amor e <span class="highlight">Responsabilidade</span>
    </h1>
    <p>O Mundo do seu bicho também é o nosso! Vamos cuidar do seu Pet e garantir toda a proteção que ele merece.</p>
    <ul class="hero-features">
      <li><i class="fa-location"></i> Localizado em Santa Felicidade</li>
      <li><i class="fa-user-doctor"></i> Profissionais qualificados</li>
    </ul>
    <div class="hero-actions">
      <button class="btn-primary">Agendar Horário</button>
      <button class="btn-secondary">Ver Serviços</button>
    </div>
  </div>
  <div class="hero-image">
    <img src="/assets/background.svg" class="hero-bg" alt="Background decorativo"/>
    <img src="/assets/mascote.png" class="hero-pet" alt="Mascote Mundo Bicho"/>
  </div>
</section>
```

### Cards de Serviço

**Layout:** Grid 3 colunas (desktop), 1 coluna (mobile)  
**Componentes:**
- Ícone 48px (laranja ou azul)
- Título H3
- Descrição 2-3 linhas
- Badge "Exclusivo" para banho ozonizado
- Link "Saiba mais →"

### Seções Alternadas

**Pattern:** Alternar background branco e cinza claro (`#F5F5F5`)

---

## 7. ASSETS VISUAIS

### Logo

**Formato:** SVG (preferencial), PNG (fallback)  
**Variações:**
- Logo colorido (sobre fundo branco)
- Logo branco (sobre fundo laranja/azul)
- Logo compacto (mobile)

**Tamanho mínimo:** 120px largura  
**Clear space:** 16px ao redor

### Mascote

**Descrição:** Cachorro dourado (Cocker Spaniel) com roupa de veterinário (scrubs azul + estetoscópio)  
**Formato:** PNG com fundo transparente ou SVG  
**Uso:** Hero section, seção "Sobre", footer (opcional)  
**Tamanho sugerido:** 600x800px (PNG), vetorizado (SVG)

### Background Decorativo

**Descrição:** Ondas fluidas laranja (#FFA32D) com gradiente suave  
**Formato:** SVG (escalável)  
**Uso:** Hero background, seções de destaque  
**Opacidade:** 10-20% quando usado como overlay

### Fotografia

**Estilo:** Natural, bem iluminada, cores vibrantes  
**Temas:**
- Dr. Allan atendendo pets (profissional mas caloroso)
- Recepção/consultório limpo e organizado
- Pets felizes pós-atendimento
- Equipamentos modernos (banho ozonizado)

**Tratamento:**
- Warm tone (+10% vibrance)
- Contrast +15%
- Destaque laranja/azul suave nas sombras

---

## 8. ACESSIBILIDADE

### Requisitos

- **Contraste mínimo:** 4.5:1 (textos normais), 3:1 (textos grandes)
- **Alt text:** Todas as imagens devem ter descrição
- **Focus indicators:** Visíveis (outline 2px laranja)
- **Navegação por teclado:** Tab order lógico
- **ARIA labels:** Em elementos interativos

### Testes

- Lighthouse Accessibility: ≥ 90
- WAVE Tool: sem erros críticos
- Screen reader: NVDA/JAWS compatível

---

## 9. ANIMAÇÕES & MICROINTERAÇÕES

### Princípios

- **Sutis:** Não distrair do conteúdo
- **Rápidas:** 150-300ms
- **Propositais:** Reforçar hierarquia e feedback

### Exemplos

```css
/* Hover botão */
.btn-primary:hover {
  transform: translateY(-2px);
  transition: transform 0.2s ease;
}

/* Card hover */
.card:hover {
  transform: translateY(-4px);
  transition: all 0.3s ease;
}

/* Scroll reveal (usar AOS ou Intersection Observer) */
.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

## 10. RESPONSIVIDADE

### Breakpoints

```css
/* Mobile */
@media (max-width: 767px) { }

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Large Desktop */
@media (min-width: 1440px) { }
```

### Adaptações Mobile

- Hero: empilhar texto acima da imagem
- Grid: 3 cols → 1 col
- Botões: largura 100%
- Font sizes: reduzir 20-25%
- Padding: reduzir 25-33%

---

## 11. CHECKLIST DE APROVAÇÃO

### Design
- [ ] Cores seguem paleta oficial
- [ ] Tipografia usa Poppins + Open Sans
- [ ] Espaçamento baseado em 8pt grid
- [ ] Contraste WCAG AA em todos os textos

### Componentes
- [ ] Botões com estados hover/active
- [ ] Cards com animação hover
- [ ] Badges consistentes
- [ ] Ícones uniformes (2px stroke)

### Assets
- [ ] Logo em SVG + PNG
- [ ] Mascote fundo transparente
- [ ] Background SVG otimizado
- [ ] Fotos otimizadas WebP

### Responsividade
- [ ] Mobile-first approach
- [ ] Testado em iPhone/Android
- [ ] Breakpoints funcionando
- [ ] Imagens adaptativas (srcset)

---

## 12. EXEMPLOS DE USO

### ✅ Correto

```html
<!-- Título com destaque azul -->
<h1>Cuidado, Amor e <span style="color: #7ED6F7;">Responsabilidade</span></h1>

<!-- Botão primário -->
<button class="btn-primary">Agendar Horário</button>

<!-- Badge outline -->
<span class="badge-outline">Clínica Veterinária em <span style="color: #7ED6F7;">Curitiba</span></span>
```

### ❌ Incorreto

```html
<!-- NÃO usar cores fora da paleta -->
<h1 style="color: #FF0000;">Título</h1>

<!-- NÃO usar Comic Sans ou fontes não aprovadas -->
<p style="font-family: Comic Sans;">Texto</p>

<!-- NÃO usar laranja em texto pequeno sobre branco (contraste baixo) -->
<p style="color: #FFA32D; font-size: 14px;">Texto pequeno</p>
```

---

## 13. CONTATO PARA DÚVIDAS

**Designer:** [Nome do designer]  
**Email:** [email]  
**Aprovação final:** Dr. Allan Diego Ferracin de Moraes

---

**Versão:** 1.0  
**Última atualização:** 20 de novembro de 2025
