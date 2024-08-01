import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // used to escape the values and avoid XSS attacks, we will set it to false, because React already does it by default.
  },
  resources: {
    en: {
      translation: {
        TheCowHeader: "The Cow",
        TheCowDesc:
          "A cow is a domestic animal. Cows are one of the most innocent animals who are very harmless. People keep cows at their homes for various benefits. Cows are four-footed and have a large body. It has two horns, two eyes plus two ears and one nose and a mouth. Cows are herbivorous animals. They have a lot of uses to mankind. In fact, farmers and peoplekeep cows at their homes for the same purposes.",
        About: "About Us",
      },
    },
    es: {
      translation: {
        TheCowHeader: "la vaca",
        TheCowDesc:
          "Una vaca es un animal doméstico. Las vacas son uno de los animales más inocentes y muy inofensivos. La gente mantiene vacas en sus casas para obtener diversos beneficios. Las vacas tienen cuatro patas y un cuerpo grande. Tiene dos cuernos, dos ojos más dos orejas y una nariz y una boca. Las vacas son animales herbívoros. Tienen muchos usos para la humanidad. De hecho, los agricultores y la gente mantienen vacas en sus casas con los mismos fines.",
        About: "acerca de",
      },
    },
    hi: {
      translation: {
        TheCowHeader: "गाय",
        TheCowDesc:
          "गाय एक घरेलू जानवर है. गायें सबसे मासूम जानवरों में से एक हैं जो बहुत हानिरहित होती हैं। लोग विभिन्न लाभों के लिए अपने घरों में गाय पालते हैं। गायें चार पैरों वाली और विशाल शरीर वाली होती हैं। इसके दो सींग, दो आंखें, दो कान, एक नाक और एक मुंह होता है। गायें शाकाहारी जानवर हैं। मानव जाति के लिए उनके बहुत सारे उपयोग हैं। वास्तव में, किसान और लोग समान उद्देश्यों के लिए अपने घरों में गाय पालते हैं।",
        About: "हमारे बारे में",
      },
    },
  },
});

export default i18n;
