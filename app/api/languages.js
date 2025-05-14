
export class LanguageService {
  constructor(apiKey, defaultLang = "en") {
    this.apiKey = apiKey;
    this.lang = defaultLang;
  }

  setLanguage(lang) {
    this.lang = lang;
  }

  async translate(text, targetLang = this.lang) {
    if (targetLang === "en" || !text) return text;

    const res = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${this.apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        q: text,
        target: targetLang,
        format: "text",
      }),
    });

    const data = await res.json();
    return data.data?.translations?.[0]?.translatedText || text;
  }
}
