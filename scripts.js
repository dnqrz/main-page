// Dicionário traduções
const translations = {
  pt: {
    title: "Volto Já",
    subtitle: "Site em manutenção.",
    cta: "Enquanto isso, você pode me encontrar nas redes sociais.",
    resume: "Currículo",
  },
  en: {
    title: "Be Right Back",
    subtitle: "Site under maintenance.",
    cta: "In the meantime, you can reach out on social media.",
    resume: "Resumé",
  },
};

// Atualizar elementos com base no idioma selecionado
function setLanguage(lang, event) {
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    element.textContent = translations[lang][key];
  });

  localStorage.setItem('language', lang);
}
