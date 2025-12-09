import './style.css';

import { createIcons, MapPin, FileBadge2, Stethoscope, Syringe, Scissors, Sparkles, Check, ShieldCheck, HandCoins, Heart, PawPrint, GraduationCap, Star, Award, Clock, ChevronDown, Quote, Smile, Activity, Instagram, Facebook, Mail, Phone } from 'lucide';

console.log('Mundo Bicho - Layout Updated');

// Initialize Lucide Icons
createIcons({
  icons: {
    MapPin,
    FileBadge2,
    Stethoscope,
    Syringe,
    Scissors,
    Sparkles,
    Check,
    ShieldCheck,
    HandCoins,
    Heart,
    PawPrint,
    GraduationCap,
    Star,
    Award,
    Clock,
    ChevronDown,
    Quote,
    Smile,
    Activity,
    Instagram,
    Facebook,
    Mail,
    Phone
  }
});



// Mobile Menu Logic
const mobileBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('main-nav').querySelector('.nav-links');
const overlay = document.getElementById('main-nav').querySelector('.overlay');

if (mobileBtn && navLinks && overlay) {
  // Toggle Menu Function
  function toggleMenu() {
    const isExpanded = mobileBtn.getAttribute('aria-expanded') === 'true';
    mobileBtn.setAttribute('aria-expanded', !isExpanded);

    if (!isExpanded) {
      navLinks.style.transform = 'translateX(0)';
      overlay.style.opacity = '1';
      overlay.style.pointerEvents = 'auto';
    } else {
      navLinks.style.transform = 'translateX(100%)';
      overlay.style.opacity = '0';
      overlay.style.pointerEvents = 'none';
    }
  }

  mobileBtn.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);

  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileBtn.setAttribute('aria-expanded', 'false');
      navLinks.style.transform = 'translateX(100%)';
      overlay.style.opacity = '0';
      overlay.style.pointerEvents = 'none';
    });
  });
}


// FAQ Accordion Logic
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.parentElement;
    const isActive = faqItem.classList.contains('active');

    // Close all other items
    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('active');
    });

    // Toggle current item
    if (!isActive) {
      faqItem.classList.add('active');
    }
  });
});
