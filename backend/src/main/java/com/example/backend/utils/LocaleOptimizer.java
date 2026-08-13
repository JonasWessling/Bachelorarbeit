package com.example.backend.utils;

import java.util.Locale;

public class LocaleOptimizer {

    public static Locale optimize(Locale locale) {
        if (locale == null) return null;

        String lang = locale.getLanguage();
        String country = locale.getCountry();

        // Already optimized
        if (!country.isEmpty()) {
            return locale;
        }

        return switch (lang) {
            case "de" -> Locale.GERMANY;     // de-DE
            case "en" -> Locale.UK;          // en-GB
            default -> Locale.GERMANY;       // fallback
        };
    }

    public static String getUrlLangValue(Locale locale) {
        if (locale == Locale.UK) {
            return "english";
        }
        if (locale == Locale.GERMANY) {
            return "german";
        }

        return "english";
    }
}
