import { onRequest as __api_quran_words_js_onRequest } from "/Users/zia/Desktop/Development/Quran/quran/functions/api/quran-words.js"

export const routes = [
    {
      routePath: "/api/quran-words",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_quran_words_js_onRequest],
    },
  ]