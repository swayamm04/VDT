import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        mission: "Mission & Vision",
        about: "About",
        admin: "Admin",
        services: "Services",
        technologies: "Technologies",
        industries: "Industries",
        contact: "Contact"
      },
      hero: {
        title: "Vitality Digital Tech Pvt Ltd",
        subtitle: "Accelerating Digital Innovation & Transformation",
        cta: "Get Started",
        ctaSecondary: "Learn More"
      },
      mission: {
        title: "Mission & Vision",
        description: "Our mission is to help enterprises accelerate adoption of new technologies, untangle complex issues that always emerge during digital evolution, and orchestrate ongoing innovation. Whether it is a consumer-oriented app or a transformative enterprise-class solution, we lead the process from ideation and concept to delivery."
      },
      about: {
        title: "About V D T Pvt Ltd",
        description: "Vitality Digital Tech Pvt Ltd aims to systematically implement new innovations in the digital sector. Our programs are designed to develop fresh technological knowledge, drive transformation, and create impact across industries."
      },
      admin: {
        title: "Admin Section",
        subtitle: "V D T Pvt Ltd Programs",
        description: "Access internal resources and tools for managing operations effectively.",
        notifications: "Notifications",
        jobApplication: "Job Requirement Application",
        serviceApplication: "Service Application"
      },
      services: {
        title: "Our Services",
        subtitle: "End-to-end software development lifecycle",
        planning: {
          title: "Planning",
          description: "We collect all the relevant information from the customer to develop custom software development solutions as per their expectation."
        },
        designing: {
          title: "Designing",
          description: "The system and documents are prepared as per the requirement specifications. This helps us define overall system architecture and technology stack."
        },
        defining: {
          title: "Defining",
          description: "Once the requirement analysis phase is completed, the next step is to define and document software needs."
        },
        building: {
          title: "Building",
          description: "Developers start to build the entire system by writing code using the chosen programming language, techniques, and methodologies."
        },
        testing: {
          title: "Testing",
          description: "Evaluating the quality of software with the aim of finding and fixing defects."
        },
        deployment: {
          title: "Deployment",
          description: "The final software is released and checked for deployment issues, if any."
        },
        maintenance: {
          title: "Maintenance",
          description: "According to the service level agreement, we ensure that needs continue to be met and that the system continues to perform as per the specification."
        }
      },
      technologies: {
        title: "Technologies",
        description: "Build your software leveraging the latest technological improvements and breakthroughs. Whether you are looking for a mobile, tablet, desktop, or cross-platform software suite, we can help you build a comprehensive solution that will cater to your business needs and help you achieve your key objectives."
      },
      industries: {
        title: "Industries We Serve",
        subtitle: "Specialized solutions for diverse sectors",
        construction: {
          title: "Construction Software Development",
          description: "We deliver construction software development and green building solutions to future-driven companies all over the world."
        },
        travel: {
          title: "Travel & Hospitality",
          description: "Meet your customers' and partners' needs with our end-to-end technology solutions for hospitality."
        },
        retail: {
          title: "Retail Applications",
          description: "Create new opportunities for your business and for your customers with the help of specialized software."
        },
        healthcare: {
          title: "Healthcare IT Solutions",
          description: "Achieve higher levels of automation and efficiency, innovate new products and services, modernize infrastructure."
        },
        insurance: {
          title: "Insurance Software",
          description: "We help insurance organizations boost their efficiency, profitability, and safety through innovative digital transformation."
        },
        financial: {
          title: "Financial Software",
          description: "From one side, you get our expertise in building wide-ranging custom software for the financial sector."
        },
        automotive: {
          title: "Automotive & Logistics",
          description: "Logistics and automotive software solutions with the latest tech give you an edge over competition."
        }
      },
      contact: {
        title: "Contact Us",
        subtitle: "Get in touch with our team",
        description: "Though the project is still ongoing, internal stakeholders are pleased with our progress so far, noting our attentiveness, reliability, and professionalism.",
        email: "Email",
        emailValue: "vitalitydigitaltechinfo@gmail.com",
        address: "Address",
        addressValue: "KEONICS IT Park, Machenahalli, Shimoga, Karnataka- 577222"
      },
      footer: {
        copyright: "© {{year}} Vitality Digital Tech Pvt Ltd. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service"
      }
    }
  },
  hi: {
    translation: {
      nav: {
        mission: "मिशन और विजन",
        about: "हमारे बारे में",
        admin: "प्रशासन",
        services: "सेवाएं",
        technologies: "प्रौद्योगिकियां",
        industries: "उद्योग",
        contact: "संपर्क करें"
      },
      hero: {
        title: "वाइटैलिटी डिजिटल टेक प्राइवेट लिमिटेड",
        subtitle: "डिजिटल इनोवेशन और ट्रांसफॉर्मेशन में तेजी",
        cta: "शुरू करें",
        ctaSecondary: "अधिक जानें"
      },
      mission: {
        title: "मिशन और विजन",
        description: "हमारा मिशन उद्यमों को नई तकनीकों को अपनाने में तेजी लाने, डिजिटल विकास के दौरान उत्पन्न होने वाली जटिल समस्याओं को सुलझाने और निरंतर नवाचार का संचालन करने में मदद करना है।"
      },
      about: {
        title: "वी डी टी प्राइवेट लिमिटेड के बारे में",
        description: "वाइटैलिटी डिजिटल टेक प्राइवेट लिमिटेड का उद्देश्य डिजिटल क्षेत्र में नए नवाचारों को व्यवस्थित रूप से लागू करना है। हमारे कार्यक्रम नई तकनीकी ज्ञान विकसित करने, परिवर्तन लाने और उद्योगों में प्रभाव पैदा करने के लिए डिज़ाइन किए गए हैं।"
      },
      admin: {
        title: "प्रशासन अनुभाग",
        subtitle: "वी डी टी प्राइवेट लिमिटेड कार्यक्रम",
        description: "संचालन को प्रभावी ढंग से प्रबंधित करने के लिए आंतरिक संसाधनों और उपकरणों तक पहुंचें।",
        notifications: "सूचनाएं",
        jobApplication: "नौकरी आवेदन",
        serviceApplication: "सेवा आवेदन"
      },
      services: {
        title: "हमारी सेवाएं",
        subtitle: "संपूर्ण सॉफ्टवेयर विकास जीवनचक्र",
        planning: {
          title: "योजना",
          description: "हम ग्राहक की अपेक्षा के अनुसार कस्टम सॉफ्टवेयर विकास समाधान विकसित करने के लिए सभी प्रासंगिक जानकारी एकत्र करते हैं।"
        },
        designing: {
          title: "डिज़ाइनिंग",
          description: "सिस्टम और दस्तावेज़ आवश्यकता विनिर्देशों के अनुसार तैयार किए जाते हैं।"
        },
        defining: {
          title: "परिभाषित करना",
          description: "आवश्यकता विश्लेषण चरण पूरा होने के बाद, अगला कदम सॉफ्टवेयर जरूरतों को परिभाषित और दस्तावेज करना है।"
        },
        building: {
          title: "निर्माण",
          description: "डेवलपर्स चुनी गई प्रोग्रामिंग भाषा, तकनीकों और कार्यप्रणालियों का उपयोग करके पूरी प्रणाली का निर्माण करते हैं।"
        },
        testing: {
          title: "परीक्षण",
          description: "दोषों को खोजने और ठीक करने के उद्देश्य से सॉफ्टवेयर की गुणवत्ता का मूल्यांकन करना।"
        },
        deployment: {
          title: "डिप्लॉयमेंट",
          description: "अंतिम सॉफ्टवेयर जारी किया जाता है और डिप्लॉयमेंट समस्याओं की जांच की जाती है।"
        },
        maintenance: {
          title: "रखरखाव",
          description: "सेवा स्तर समझौते के अनुसार, हम सुनिश्चित करते हैं कि जरूरतें पूरी होती रहें।"
        }
      },
      technologies: {
        title: "प्रौद्योगिकियां",
        description: "नवीनतम तकनीकी सुधारों और सफलताओं का लाभ उठाते हुए अपना सॉफ्टवेयर बनाएं।"
      },
      industries: {
        title: "जिन उद्योगों की हम सेवा करते हैं",
        subtitle: "विविध क्षेत्रों के लिए विशेष समाधान",
        construction: {
          title: "निर्माण सॉफ्टवेयर विकास",
          description: "हम दुनिया भर की भविष्य-संचालित कंपनियों को निर्माण सॉफ्टवेयर विकास और ग्रीन बिल्डिंग समाधान प्रदान करते हैं।"
        },
        travel: {
          title: "यात्रा और आतिथ्य",
          description: "आतिथ्य के लिए हमारे एंड-टू-एंड तकनीकी समाधानों के साथ अपने ग्राहकों की जरूरतों को पूरा करें।"
        },
        retail: {
          title: "रिटेल एप्लीकेशन",
          description: "विशेष सॉफ्टवेयर की मदद से अपने व्यवसाय के लिए नए अवसर बनाएं।"
        },
        healthcare: {
          title: "हेल्थकेयर आईटी समाधान",
          description: "उच्च स्तर की स्वचालन और दक्षता प्राप्त करें, नए उत्पादों और सेवाओं का नवाचार करें।"
        },
        insurance: {
          title: "बीमा सॉफ्टवेयर",
          description: "हम बीमा संगठनों को उनकी दक्षता, लाभप्रदता और सुरक्षा बढ़ाने में मदद करते हैं।"
        },
        financial: {
          title: "वित्तीय सॉफ्टवेयर",
          description: "वित्तीय क्षेत्र के लिए व्यापक कस्टम सॉफ्टवेयर निर्माण में हमारी विशेषज्ञता प्राप्त करें।"
        },
        automotive: {
          title: "ऑटोमोटिव और लॉजिस्टिक्स",
          description: "नवीनतम तकनीक के साथ लॉजिस्टिक्स और ऑटोमोटिव सॉफ्टवेयर समाधान।"
        }
      },
      contact: {
        title: "संपर्क करें",
        subtitle: "हमारी टीम से संपर्क करें",
        description: "हालांकि परियोजना अभी भी जारी है, आंतरिक हितधारक अब तक की हमारी प्रगति से प्रसन्न हैं।",
        email: "ईमेल",
        emailValue: "vitalitydigitaltechinfo@gmail.com",
        address: "पता",
        addressValue: "केओनिक्स आईटी पार्क, माचेनहल्ली, शिमोगा, कर्नाटक- 577222"
      },
      footer: {
        copyright: "© {{year}} वाइटैलिटी डिजिटल टेक प्राइवेट लिमिटेड। सर्वाधिकार सुरक्षित।",
        privacy: "गोपनीयता नीति",
        terms: "सेवा की शर्तें"
      }
    }
  },
  kn: {
    translation: {
      nav: {
        mission: "ಮಿಷನ್ & ವಿಷನ್",
        about: "ನಮ್ಮ ಬಗ್ಗೆ",
        admin: "ಅಡ್ಮಿನ್",
        services: "ಸೇವೆಗಳು",
        technologies: "ತಂತ್ರಜ್ಞಾನಗಳು",
        industries: "ಉದ್ಯಮಗಳು",
        contact: "ಸಂಪರ್ಕಿಸಿ"
      },
      hero: {
        title: "ವೈಟಾಲಿಟಿ ಡಿಜಿಟಲ್ ಟೆಕ್ ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್",
        subtitle: "ಡಿಜಿಟಲ್ ಇನ್ನೋವೇಶನ್ & ಟ್ರಾನ್ಸ್ಫಾರ್ಮೇಶನ್ ಅನ್ನು ವೇಗಗೊಳಿಸುವುದು",
        cta: "ಪ್ರಾರಂಭಿಸಿ",
        ctaSecondary: "ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ"
      },
      mission: {
        title: "ಮಿಷನ್ & ವಿಷನ್",
        description: "ನಮ್ಮ ಮಿಷನ್ ಉದ್ಯಮಗಳಿಗೆ ಹೊಸ ತಂತ್ರಜ್ಞಾನಗಳನ್ನು ಅಳವಡಿಸಿಕೊಳ್ಳಲು ವೇಗವನ್ನು ಹೆಚ್ಚಿಸಲು, ಡಿಜಿಟಲ್ ವಿಕಸನದ ಸಮಯದಲ್ಲಿ ಉದ್ಭವಿಸುವ ಸಂಕೀರ್ಣ ಸಮಸ್ಯೆಗಳನ್ನು ಬಿಡಿಸಲು ಮತ್ತು ನಿರಂತರ ಆವಿಷ್ಕಾರವನ್ನು ಆಯೋಜಿಸಲು ಸಹಾಯ ಮಾಡುವುದು."
      },
      about: {
        title: "ವಿ ಡಿ ಟಿ ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್ ಬಗ್ಗೆ",
        description: "ವೈಟಾಲಿಟಿ ಡಿಜಿಟಲ್ ಟೆಕ್ ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್ ಡಿಜಿಟಲ್ ವಲಯದಲ್ಲಿ ಹೊಸ ಆವಿಷ್ಕಾರಗಳನ್ನು ವ್ಯವಸ್ಥಿತವಾಗಿ ಅನುಷ್ಠಾನಗೊಳಿಸುವ ಗುರಿಯನ್ನು ಹೊಂದಿದೆ."
      },
      admin: {
        title: "ಅಡ್ಮಿನ್ ವಿಭಾಗ",
        subtitle: "ವಿ ಡಿ ಟಿ ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್ ಕಾರ್ಯಕ್ರಮಗಳು",
        description: "ಕಾರ್ಯಾಚರಣೆಗಳನ್ನು ಪರಿಣಾಮಕಾರಿಯಾಗಿ ನಿರ್ವಹಿಸಲು ಆಂತರಿಕ ಸಂಪನ್ಮೂಲಗಳು ಮತ್ತು ಪರಿಕರಗಳನ್ನು ಪ್ರವೇಶಿಸಿ.",
        notifications: "ಅಧಿಸೂಚನೆಗಳು",
        jobApplication: "ಉದ್ಯೋಗ ಅರ್ಜಿ",
        serviceApplication: "ಸೇವಾ ಅರ್ಜಿ"
      },
      services: {
        title: "ನಮ್ಮ ಸೇವೆಗಳು",
        subtitle: "ಸಂಪೂರ್ಣ ಸಾಫ್ಟ್‌ವೇರ್ ಅಭಿವೃದ್ಧಿ ಜೀವನಚಕ್ರ",
        planning: {
          title: "ಯೋಜನೆ",
          description: "ಗ್ರಾಹಕರ ನಿರೀಕ್ಷೆಯಂತೆ ಕಸ್ಟಮ್ ಸಾಫ್ಟ್‌ವೇರ್ ಅಭಿವೃದ್ಧಿ ಪರಿಹಾರಗಳನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸಲು ನಾವು ಎಲ್ಲಾ ಸಂಬಂಧಿತ ಮಾಹಿತಿಯನ್ನು ಸಂಗ್ರಹಿಸುತ್ತೇವೆ."
        },
        designing: {
          title: "ವಿನ್ಯಾಸ",
          description: "ಅಗತ್ಯ ವಿಶೇಷಣಗಳ ಪ್ರಕಾರ ಸಿಸ್ಟಮ್ ಮತ್ತು ದಾಖಲೆಗಳನ್ನು ಸಿದ್ಧಪಡಿಸಲಾಗುತ್ತದೆ."
        },
        defining: {
          title: "ವ್ಯಾಖ್ಯಾನಿಸುವುದು",
          description: "ಅಗತ್ಯ ವಿಶ್ಲೇಷಣಾ ಹಂತ ಪೂರ್ಣಗೊಂಡ ನಂತರ, ಸಾಫ್ಟ್‌ವೇರ್ ಅಗತ್ಯಗಳನ್ನು ವ್ಯಾಖ್ಯಾನಿಸಿ ದಾಖಲಿಸುವುದು ಮುಂದಿನ ಹಂತವಾಗಿದೆ."
        },
        building: {
          title: "ನಿರ್ಮಾಣ",
          description: "ಡೆವಲಪರ್‌ಗಳು ಆಯ್ಕೆಮಾಡಿದ ಪ್ರೋಗ್ರಾಮಿಂಗ್ ಭಾಷೆ, ತಂತ್ರಗಳು ಮತ್ತು ವಿಧಾನಗಳನ್ನು ಬಳಸಿ ಸಂಪೂರ್ಣ ಸಿಸ್ಟಮ್ ಅನ್ನು ನಿರ್ಮಿಸಲು ಪ್ರಾರಂಭಿಸುತ್ತಾರೆ."
        },
        testing: {
          title: "ಪರೀಕ್ಷೆ",
          description: "ದೋಷಗಳನ್ನು ಕಂಡುಹಿಡಿಯುವ ಮತ್ತು ಸರಿಪಡಿಸುವ ಉದ್ದೇಶದಿಂದ ಸಾಫ್ಟ್‌ವೇರ್ ಗುಣಮಟ್ಟವನ್ನು ಮೌಲ್ಯಮಾಪನ ಮಾಡುವುದು."
        },
        deployment: {
          title: "ನಿಯೋಜನೆ",
          description: "ಅಂತಿಮ ಸಾಫ್ಟ್‌ವೇರ್ ಅನ್ನು ಬಿಡುಗಡೆ ಮಾಡಲಾಗುತ್ತದೆ ಮತ್ತು ನಿಯೋಜನೆ ಸಮಸ್ಯೆಗಳಿಗಾಗಿ ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ."
        },
        maintenance: {
          title: "ನಿರ್ವಹಣೆ",
          description: "ಸೇವಾ ಮಟ್ಟದ ಒಪ್ಪಂದದ ಪ್ರಕಾರ, ಅಗತ್ಯಗಳು ಪೂರೈಕೆಯಾಗುತ್ತಲೇ ಇರುವುದನ್ನು ನಾವು ಖಚಿತಪಡಿಸುತ್ತೇವೆ."
        }
      },
      technologies: {
        title: "ತಂತ್ರಜ್ಞಾನಗಳು",
        description: "ಇತ್ತೀಚಿನ ತಾಂತ್ರಿಕ ಸುಧಾರಣೆಗಳು ಮತ್ತು ಪ್ರಗತಿಗಳನ್ನು ಬಳಸಿಕೊಂಡು ನಿಮ್ಮ ಸಾಫ್ಟ್‌ವೇರ್ ಅನ್ನು ನಿರ್ಮಿಸಿ."
      },
      industries: {
        title: "ನಾವು ಸೇವೆ ಸಲ್ಲಿಸುವ ಉದ್ಯಮಗಳು",
        subtitle: "ವಿವಿಧ ಕ್ಷೇತ್ರಗಳಿಗೆ ವಿಶೇಷ ಪರಿಹಾರಗಳು",
        construction: {
          title: "ನಿರ್ಮಾಣ ಸಾಫ್ಟ್‌ವೇರ್ ಅಭಿವೃದ್ಧಿ",
          description: "ವಿಶ್ವಾದ್ಯಂತ ಭವಿಷ್ಯ-ಚಾಲಿತ ಕಂಪನಿಗಳಿಗೆ ನಿರ್ಮಾಣ ಸಾಫ್ಟ್‌ವೇರ್ ಅಭಿವೃದ್ಧಿ ಮತ್ತು ಹಸಿರು ಕಟ್ಟಡ ಪರಿಹಾರಗಳನ್ನು ನಾವು ತಲುಪಿಸುತ್ತೇವೆ."
        },
        travel: {
          title: "ಪ್ರಯಾಣ ಮತ್ತು ಆತಿಥ್ಯ",
          description: "ಆತಿಥ್ಯಕ್ಕಾಗಿ ನಮ್ಮ ಎಂಡ್-ಟು-ಎಂಡ್ ತಂತ್ರಜ್ಞಾನ ಪರಿಹಾರಗಳೊಂದಿಗೆ ನಿಮ್ಮ ಗ್ರಾಹಕರ ಅಗತ್ಯಗಳನ್ನು ಪೂರೈಸಿ."
        },
        retail: {
          title: "ರಿಟೇಲ್ ಅಪ್ಲಿಕೇಶನ್‌ಗಳು",
          description: "ವಿಶೇಷ ಸಾಫ್ಟ್‌ವೇರ್ ಸಹಾಯದಿಂದ ನಿಮ್ಮ ವ್ಯಾಪಾರಕ್ಕಾಗಿ ಹೊಸ ಅವಕಾಶಗಳನ್ನು ರಚಿಸಿ."
        },
        healthcare: {
          title: "ಹೆಲ್ತ್‌ಕೇರ್ ಐಟಿ ಪರಿಹಾರಗಳು",
          description: "ಹೆಚ್ಚಿನ ಮಟ್ಟದ ಆಟೊಮೇಷನ್ ಮತ್ತು ದಕ್ಷತೆಯನ್ನು ಸಾಧಿಸಿ, ಹೊಸ ಉತ್ಪನ್ನಗಳು ಮತ್ತು ಸೇವೆಗಳನ್ನು ನವೀಕರಿಸಿ."
        },
        insurance: {
          title: "ವಿಮಾ ಸಾಫ್ಟ್‌ವೇರ್",
          description: "ನವೀನ ಡಿಜಿಟಲ್ ಪರಿವರ್ತನೆಯ ಮೂಲಕ ವಿಮಾ ಸಂಸ್ಥೆಗಳ ದಕ್ಷತೆ, ಲಾಭದಾಯಕತೆ ಮತ್ತು ಸುರಕ್ಷತೆಯನ್ನು ಹೆಚ್ಚಿಸಲು ನಾವು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ."
        },
        financial: {
          title: "ಹಣಕಾಸು ಸಾಫ್ಟ್‌ವೇರ್",
          description: "ಹಣಕಾಸು ವಲಯಕ್ಕಾಗಿ ವ್ಯಾಪಕ ಕಸ್ಟಮ್ ಸಾಫ್ಟ್‌ವೇರ್ ನಿರ್ಮಾಣದಲ್ಲಿ ನಮ್ಮ ಪರಿಣತಿಯನ್ನು ಪಡೆಯಿರಿ."
        },
        automotive: {
          title: "ಆಟೋಮೋಟಿವ್ ಮತ್ತು ಲಾಜಿಸ್ಟಿಕ್ಸ್",
          description: "ಇತ್ತೀಚಿನ ತಂತ್ರಜ್ಞಾನದೊಂದಿಗೆ ಲಾಜಿಸ್ಟಿಕ್ಸ್ ಮತ್ತು ಆಟೋಮೋಟಿವ್ ಸಾಫ್ಟ್‌ವೇರ್ ಪರಿಹಾರಗಳು."
        }
      },
      contact: {
        title: "ಸಂಪರ್ಕಿಸಿ",
        subtitle: "ನಮ್ಮ ತಂಡವನ್ನು ಸಂಪರ್ಕಿಸಿ",
        description: "ಯೋಜನೆ ಇನ್ನೂ ಮುಂದುವರೆಯುತ್ತಿದ್ದರೂ, ಆಂತರಿಕ ಪಾಲುದಾರರು ಇಲ್ಲಿಯವರೆಗಿನ ನಮ್ಮ ಪ್ರಗತಿಯಿಂದ ಸಂತೋಷಪಟ್ಟಿದ್ದಾರೆ.",
        email: "ಇಮೇಲ್",
        emailValue: "vitalitydigitaltechinfo@gmail.com",
        address: "ವಿಳಾಸ",
        addressValue: "ಕೆಯೋನಿಕ್ಸ್ ಐಟಿ ಪಾರ್ಕ್, ಮಾಚೇನಹಳ್ಳಿ, ಶಿವಮೊಗ್ಗ, ಕರ್ನಾಟಕ- 577222"
      },
      footer: {
        copyright: "© {{year}} ವೈಟಾಲಿಟಿ ಡಿಜಿಟಲ್ ಟೆಕ್ ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
        privacy: "ಗೌಪ್ಯತಾ ನೀತಿ",
        terms: "ಸೇವಾ ನಿಯಮಗಳು"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
