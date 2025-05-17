import content from '../content.json';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export class LanguageService {
  constructor(defaultLang = "en") {
    this.lang = defaultLang;
  }

  async setLanguage(lang) {
    this.lang = lang;
    return await this.getTranslatedContent();
  }

  async translate(text, targetLang) {
    if (targetLang === 'en') return text;
    const res = await fetch(`https://lingva.ml/api/v1/${targetLang}/${text}`);

    if (!res.ok) throw new Error("Translation API error");

    const data = await res.json();
    return data.translated;
  }

  async translateObject(obj, lang) {
    const result = {};
    for (const key in obj) {
      const val = obj[key];
      if (typeof val === 'object') {
          result[key] = await this.translateObject(val, lang);
        } else {
            try {
            result[key] = await this.translate(val, lang);
        } catch (err) {
          console.warn(`Failed to translate "${val}", using fallback.`);
          result[key] = val;
        }
      }
    }
    return result;
  }

  async getTranslatedContent() {
    if (this.lang === 'en') return content;
    
    try {
      return await this.translateObject(content, this.lang);
    } catch (error) {
      console.error("Translation failed entirely, falling back to English:", error);
      return content;
    }
  }
}

