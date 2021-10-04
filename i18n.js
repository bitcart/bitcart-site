import path from "path"
import deepmerge from "deepmerge"
import fs from "fs-extra"
import { globbySync } from "globby"

const LANGUAGE_NAMES = {
  be: "Беларуская",
  en: "English",
  pl: "Polski",
  ru: "Русский",
  hi_IN: "हिंदी"
}

const settings = {
  locales: [],
  defaultLocale: "en",
  vueI18n: { locale: "en", fallbackLocale: "en", messages: {} },
}

const locales = []

function addLocale(locale) {
  const existing = locales.find((l) => l.lang === locale.lang)
  if (existing) {
    existing.strings = deepmerge(existing.strings, locale.strings)
  } else {
    locales.push(locale)
  }
}

function loadLocales() {
  const paths = globbySync(["./locales/*.json"], {
    cwd: __dirname,
    absolute: true,
  })
  paths.forEach((file) => {
    const basename = path.basename(file)
    const lang = basename.substr(0, basename.indexOf("."))
    const strings = fs.readJsonSync(file)
    addLocale({ lang, strings })
  })
}

loadLocales()

locales.forEach((locale) => {
  const langName = LANGUAGE_NAMES[locale.lang] || locale.lang
  settings.locales.push({ code: locale.lang, name: langName })
  settings.vueI18n.messages[locale.lang] = locale.strings
})

export default settings
