---
stepsCompleted: ['step-01-validate-prerequisites', 'step-02-design-epics', 'step-03-create-stories', 'step-04-final-validation']
inputDocuments: ['docs/01-project-brief.md', 'docs/02-brand-guide.md', 'docs/03-front-end-spec.md', 'docs/04-architecture.md']
---

# mundo-bicho - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for mundo-bicho, decomposing the requirements from the PRD, UX Design if it exists, and Architecture requirements into implementable stories.

## Requirements Inventory

### Functional Requirements

- FR1: **Hero Section**: Display headline, subheadline, CTAs (WhatsApp, Services), and background images (mascot + wave).
- FR2: **About Section**: Display Dr. Allan's profile, photo, credentials, and core values info cards.
- FR3: **Services Section**: List all services, highlighting "Banho Ozonizado" with a special badge.
- FR4: **Contact Section/Footer**: Display address, hours, contact info, social links, and Google Maps embed.
- FR5: **Contact Form**: Functional Netlify Form with fields (Name, Email, Phone, Pet Name, Message) and spam protection.
- FR6: **WhatsApp Integration**: Floating button visible on all pages and deep links on CTAs.
- FR7: **Navigation**: Responsive header with links to sections.
- FR8: **Gallery**: Section to display photos of the clinic/pets (optional/placeholder if no assets yet).
- FR9: **Testimonials**: Section for client reviews.
- FR10: **FAQ**: Accordion section for common questions.

### NonFunctional Requirements

- NFR1: **Performance**: Lighthouse Mobile Score ≥ 90.
- NFR2: **Loading Speed**: First Contentful Paint (FCP) ≤ 1.5s, Largest Contentful Paint (LCP) ≤ 2.5s.
- NFR3: **SEO**: Complete meta tags, Open Graph, Schema.org (LocalBusiness), sitemap.xml, robots.txt.
- NFR4: **Security**: HTTPS only, Security Headers (CSP, X-Frame-Options), Form Input Sanitization.
- NFR5: **Accessibility**: WCAG AA compliance (Contrast, ARIA labels, Keyboard navigation).
- NFR6: **Tech Stack**: Vanilla HTML/CSS/JS (No frameworks), Vite Build Tool, Netlify Hosting.
- NFR7: **Responsive**: "Mobile First" approach, fully adaptive from 320px to 1920px+.

### Additional Requirements

#### Core Technical & Brand
- AR1: **Design System**: Strict adherence to Brand Guide (Colors: #FFA32D/#7ED6F7, Fonts: Poppins/Open Sans).
- AR2: **Component Styles**: Implementation of specified Button, Card, and Badge styles.
- AR3: **Image Optimization**: Use WebP with fallbacks, proper sizing/loading attributes.
- AR4: **Analytics**: Google Analytics 4 integration with custom events (form submit, whatsapp click).

#### Poetic UX & Differentiation (Project "YOLO")
- AR_UX1: **Organic Flow**: Eliminate hard section breaks. Use "Liquid Transitions" (SVG waves, gradients) to make the user scroll feel like floating down a river of care.
- AR_UX2: **"Living" Interactions**: Interactive elements must feel alive.
    - *Example:* Buttons that "breathe" (subtle scale pulse).
    - *Example:* Mascot winks or wags tail on hover (CSS Sprite or Lottie).
    - *Example:* Cursor leaves fading paw prints on non-interactive areas (Desktop only).
- AR_UX3: **Emotive Typography**: Use "Handwritten" accent font (e.g., 'Caveat' or 'Homemade Apple') for key emotional words like *Amor*, *Carinho*, *Família* inside headlines to break the corporate feel.
- AR_UX4: **Cinematic Hero**: The Hero section must use a "Parallax Layering" effect. Background moves slower than the mascot, creating depth and immersion immediately.
- AR_UX5: **Storytelling Cards**: Service cards shouldn't just list features. On hover, they should "Flip" or "Expand" to show a happy pet photo enjoying that specific service (Visual Proof > Text).

### FR Coverage Map

- FR1 (Hero) -> **Epic 1**
- FR2 (About) -> **Epic 3**
- FR3 (Services) -> **Epic 2**
- FR4 (Footer/Contact Info) -> **Epic 4**
- FR5 (Form) -> **Epic 4**
- FR6 (WhatsApp) -> **Epic 1**
- FR7 (Nav) -> **Epic 1**
- FR8 (Gallery) -> **Epic 3**
- FR9 (Testimonials) -> **Epic 3**
- FR10 (FAQ) -> **Epic 4**

## Epic List

### Epic 1: The Immersive Experience
**Goal:** Create a captivating first impression and solid technical foundation that immerses the user in the "Mundo Bicho" atmosphere immediately.
**FRs covered:** FR1, FR6, FR7, NFR1-7, AR_UX1, AR_UX4

### Epic 2: Service Showcase
**Goal:** Present the clinic's services not as a list, but as a narrative of care, highlighting the unique "Banho Ozonizado".
**FRs covered:** FR3, AR_UX2, AR_UX5

### Epic 3: Commitment & Trust
**Goal:** build deep trust by showcasing the human behind the clinic (Dr. Allan) and social proof, using emotive design.
**FRs covered:** FR2, FR8, FR9, AR_UX3

### Epic 4: Seamless Conversion
**Goal:** Remove all friction for the final step of scheduling, answering doubts and providing clear location info.
**FRs covered:** FR4, FR5, FR10

## Epic 1: The Immersive Experience

Create a captivating first impression and solid technical foundation that immerses the user in the "Mundo Bicho" atmosphere immediately.

### Story 1.1: Project Setup & Global Styles
As a developer,
I want to set up the project structure with Vite, core CSS variables, and fonts,
So that development can proceed with a consistent and high-performance foundation.

**Acceptance Criteria:**
**Given** the repo is initialized
**When** I run `npm run dev`
**Then** the server should start with no errors
**And** global CSS variables for colors (#FFA32D, #7ED6F7) and fonts (Poppins, Open Sans, Caveat) should be available
**And** the CSS reset should be applied
**And** base "Organic Flow" (AR_UX1) background styles (gradients/waves) should be configured.

### Story 1.2: Responsive Header & Navigation
As a user,
I want a clear, responsive navigation menu,
So that I can easily find "Services" or "Contact" info on any device.

**Acceptance Criteria:**
**Given** I am on mobile or desktop
**When** I view the top of the page
**Then** I should see the "Mundo Bicho" logo
**And** navigation links (About, Services, Contact)
**And** the menu should collapse into a hamburger menu on mobile (<768px)
**And** the transition when opening the menu should be smooth and liquid.

### Story 1.3: Cinematic Hero Section (Parallax)
As a "Pet Lover" user,
I want to see a beautiful, immersive introduction to the clinic,
So that I feel immediate emotional connection and trust (AR_UX4).

**Acceptance Criteria:**
**Given** I load the homepage
**When** I scroll down slightly
**Then** the background wave should move at a different speed than the mascot image (Parallax)
**And** the headline "Cuidado, Amor e Responsabilidade" should appear with "Amor" in the handwritten font (AR_UX3)
**And** there should be clear CTAs for "Agendar Horário" and "Ver Serviços"
**And** the buttons should "breathe" (AR_UX2) to invite interaction.

### Story 1.4: Floating WhatsApp Button
As a user (likely mobile),
I want a persistent WhatsApp button,
So that I can contact the clinic at any moment without searching.

**Acceptance Criteria:**
**Given** I am anywhere on the page
**When** I scroll
**Then** a green WhatsApp icon should remain fixed at the bottom right
**And** clicking it should open the WhatsApp API with a pre-filled message
**And** the button should have a "pulse" animation (AR_UX2) to attract attention organically.

## Epic 2: Service Showcase

Present the clinic's services not as a list, but as a narrative of care, highlighting the unique "Banho Ozonizado".

### Story 2.1: Services Grid Section
As a user,
I want to see all available services arranged in an organized grid,
So that I can quickly scan what the clinic offers.

**Acceptance Criteria:**
**Given** I scroll to the Services section
**When** the section comes into view
**Then** I should see a responsive grid (1 col mobile, 3 cols desktop) of service cards
**And** the background should transition smoothly from the previous section (Liquid Transition)
**And** the section title "Nossos Serviços" should be visible with appropriate typography.

### Story 2.2: Storytelling Cards (Living Interactions)
As a user,
I want to see visual proof of happy pets when I investigate a service,
So that I trust that my pet will be happy too (Visual Proof > Text) (AR_UX5).

**Acceptance Criteria:**
**Given** I see a service card (e.g., Consultas)
**When** I hover over the card (desktop) or tap it (mobile)
**Then** the card should "Flip" or "Expand" elegantly
**And** the icon/text should be replaced/overlayed by a photo of a happy pet receiving that service
**And** there should be a "Saiba Mais" link that directs to WhatsApp with a specific context message.

### Story 2.3: Banho Ozonizado Highlight
As a user looking for differentiation,
I want to clearly see the "Banho Ozonizado" as a special/exclusive service,
So that I understand this is a unique benefit of this clinic.

**Acceptance Criteria:**
**Given** I am looking at the services grid
**When** I see the "Banho Ozonizado" card
**Then** it should be visually distinct (border, shadow, or size) from others
**And** it should have an "Exclusivo" badge (AR2)
**And** the "Living Interaction" photo for this card should be high-impact (e.g., a very relaxed pet in the bath).

## Epic 3: Commitment & Trust

Build deep trust by showcasing the human behind the clinic (Dr. Allan) and social proof, using emotive design.

### Story 3.1: Dr. Allan Profile Section
As a user,
I want to know who will be caring for my pet,
So that I can trust the professional behind the clinic.

**Acceptance Criteria:**
**Given** I scroll to the "Sobre" section
**When** the section loads
**Then** I should see a warm, welcoming photo of Dr. Allan
**And** a biography emphasizing his "atendimento humanizado"
**And** his key credentials listed clearly
**And** a pull-quote using the "Handwritten" font (AR_UX3) to highlight his philosophy ("Carinho e Respeito").

### Story 3.2: Interactive Gallery (Masonry)
As a user,
I want to see real photos of the clinic and happy patients,
So that I have visual proof of the clean environment and happy animals.

**Acceptance Criteria:**
**Given** I scroll to the Gallery section
**When** I view the photos
**Then** they should be arranged in a creative Masonry grid (not a boring strict grid)
**And** clicking an image should open a lightweight lightbox (AR3)
**And** hovering over images (desktop) should produce a subtle "zoom" or "lift" effect to feel alive (AR_UX2).

### Story 3.3: Emotive Testimonials
As a user,
I want to read experiences from other real pet owners,
So that I feel confident in my choice (Social Proof).

**Acceptance Criteria:**
**Given** I scroll to the Testimonials section
**When** I read the reviews
**Then** they should be presented in clean cards with the reviewer's name
**And** the section should use "Liquid Transitions" from the previous section
**And** the typography for the reviews should be highly readable with generous spacing.

## Epic 4: Seamless Conversion

Remove all friction for the final step of scheduling, answering doubts and providing clear location info.

### Story 4.1: Helpful FAQ (Accordion)
As a user,
I want answers to common questions quickly without having to call,
So that I can resolve doubts about "Banho Ozonizado" or "Horários" instantly.

**Acceptance Criteria:**
**Given** I scroll to the FAQ section
**When** I click on a question
**Then** the answer should slide down smoothly (Accordion effect)
**And** only one question should be open at a time (optional, but cleaner)
**And** the design should match the "clean & friendly" aesthetic.

### Story 4.2: Location & Footer
As a user who prefers to visit,
I want to see exactly where the clinic is and how to get there,
So that I can plan my route.

**Acceptance Criteria:**
**Given** I scroll to the bottom of the page
**When** I view the Footer/Location section
**Then** I should see an embedded Google Map centered on the clinic
**And** the address, phone, and social links should be clearly visible
**And** the Footer should include the copyright and links to sub-documents (if any).

### Story 4.3: Smart Contact Form
As a user who prefers email/text,
I want to send a message directly from the site,
So that I can request an appointment even outside business hours.

**Acceptance Criteria:**
**Given** I fill out the contact form
**When** I click "Enviar Link"
**Then** the form should validate inputs (email format, required fields)
**And** if valid, it should submit to Netlify Forms
**And** I should see a success message ("Obrigado! Entraremos em contato em breve.") without page reload
**And** the form should be protected against spam (Honeypot field).
