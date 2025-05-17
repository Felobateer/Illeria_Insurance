import content from '../content.json';

export class LanguageService {
  constructor(defaultLang = "en") {
    this.lang = defaultLang;
  }

  async setLanguage(lang) {
    this.lang = lang;
    return await this.getTranslatedContent();
  }

  async translate(text, targetLang) {
    const lang = targetLang || this.lang;
    if (lang === "en" || !text) return text;

    const res = await fetch('https://libretranslate.de/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        q: text,
        source: 'en',
        target: lang,
        format: 'text',
      }),
    });

    const data = await res.json();
    return data.translatedText;
  }

  async translateObject(obj, lang) {
    const result = {};
    for (const key in obj) {
      const val = obj[key];
      result[key] = typeof val === "object"
        ? await this.translateObject(val, lang)
        : await this.translate(val, lang);
    }
    return result;
  }

  async getTranslatedContent() {
    return await this.translateObject(content, this.lang);
  }
}
