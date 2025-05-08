// Conținutul în mai multe limbi pentru secțiunea Contact
const content = {
  ro: `...`,
  en: `...`,
  de: `...`,
  ru: `...`
};

function setLanguage(lang) {
  document.getElementById('contact-content').innerHTML = content[lang];
}
setLanguage('ro');
