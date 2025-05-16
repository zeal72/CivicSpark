import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon, Cog6ToothIcon, BellIcon, UserIcon, ShieldCheckIcon, QuestionMarkCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

// Language translations
const translations = {
  en: {
    settings: "Settings",
    general: "General",
    darkMode: "Dark Mode",
    darkModeDescription: "Switch between light and dark theme",
    language: "Language",
    languageDescription: "Select your preferred language",
    notifications: "Notifications",
    emailNotifications: "Email notifications",
    emailNotificationsDesc: "Receive email notifications for important updates",
    pushNotifications: "Push notifications",
    pushNotificationsDesc: "Receive push notifications on your device",
    account: "Account",
    username: "Username",
    email: "Email address",
    updateAccount: "Update account",
    privacy: "Privacy",
    dataCollection: "Allow data collection",
    dataCollectionDesc: "Help us improve by sharing anonymous usage data",
    personalizedAds: "Personalized ads",
    personalizedAdsDesc: "See ads that are more relevant to you",
    help: "Help",
    documentation: "Documentation",
    documentationDesc: "Read our comprehensive documentation to learn more about using our platform",
    viewDocumentation: "View documentation →",
    contactSupport: "Contact Support",
    contactSupportDesc: "Can't find what you're looking for? Our support team is here to help",
    contactSupportButton: "Contact support →"
  },
  es: {
    settings: "Configuración",
    general: "General",
    darkMode: "Modo oscuro",
    darkModeDescription: "Cambiar entre tema claro y oscuro",
    language: "Idioma",
    languageDescription: "Selecciona tu idioma preferido",
    notifications: "Notificaciones",
    emailNotifications: "Notificaciones por correo",
    emailNotificationsDesc: "Recibir notificaciones por correo para actualizaciones importantes",
    pushNotifications: "Notificaciones push",
    pushNotificationsDesc: "Recibir notificaciones push en tu dispositivo",
    account: "Cuenta",
    username: "Nombre de usuario",
    email: "Correo electrónico",
    updateAccount: "Actualizar cuenta",
    privacy: "Privacidad",
    dataCollection: "Permitir recolección de datos",
    dataCollectionDesc: "Ayúdanos a mejorar compartiendo datos de uso anónimos",
    personalizedAds: "Anuncios personalizados",
    personalizedAdsDesc: "Ver anuncios más relevantes para ti",
    help: "Ayuda",
    documentation: "Documentación",
    documentationDesc: "Lee nuestra documentación completa para aprender más sobre nuestra plataforma",
    viewDocumentation: "Ver documentación →",
    contactSupport: "Soporte técnico",
    contactSupportDesc: "¿No encuentras lo que buscas? Nuestro equipo de soporte está aquí para ayudarte",
    contactSupportButton: "Contactar soporte →"
  },
  fr: {
    settings: "Paramètres",
    general: "Général",
    darkMode: "Mode sombre",
    darkModeDescription: "Basculer entre le thème clair et sombre",
    language: "Langue",
    languageDescription: "Sélectionnez votre langue préférée",
    notifications: "Notifications",
    emailNotifications: "Notifications par e-mail",
    emailNotificationsDesc: "Recevoir des notifications par e-mail pour les mises à jour importantes",
    pushNotifications: "Notifications push",
    pushNotificationsDesc: "Recevoir des notifications push sur votre appareil",
    account: "Compte",
    username: "Nom d'utilisateur",
    email: "Adresse e-mail",
    updateAccount: "Mettre à jour le compte",
    privacy: "Confidentialité",
    dataCollection: "Autoriser la collecte de données",
    dataCollectionDesc: "Aidez-nous à améliorer en partageant des données d'utilisation anonymes",
    personalizedAds: "Annonces personnalisées",
    personalizedAdsDesc: "Voir des annonces plus pertinentes pour vous",
    help: "Aide",
    documentation: "Documentation",
    documentationDesc: "Lisez notre documentation complète pour en savoir plus sur l'utilisation de notre plateforme",
    viewDocumentation: "Voir la documentation →",
    contactSupport: "Support technique",
    contactSupportDesc: "Vous ne trouvez pas ce que vous cherchez ? Notre équipe d'assistance est là pour vous aider",
    contactSupportButton: "Contacter le support →"
  },
  de: {
    settings: "Einstellungen",
    general: "Allgemein",
    darkMode: "Dunkler Modus",
    darkModeDescription: "Wechseln Sie zwischen hellem und dunklem Thema",
    language: "Sprache",
    languageDescription: "Wählen Sie Ihre bevorzugte Sprache",
    notifications: "Benachrichtigungen",
    emailNotifications: "E-Mail-Benachrichtigungen",
    emailNotificationsDesc: "Erhalten Sie E-Mail-Benachrichtigungen für wichtige Updates",
    pushNotifications: "Push-Benachrichtigungen",
    pushNotificationsDesc: "Erhalten Sie Push-Benachrichtigungen auf Ihrem Gerät",
    account: "Konto",
    username: "Benutzername",
    email: "E-Mail-Adresse",
    updateAccount: "Konto aktualisieren",
    privacy: "Datenschutz",
    dataCollection: "Datensammlung zulassen",
    dataCollectionDesc: "Helfen Sie uns, uns zu verbessern, indem Sie anonyme Nutzungsdaten teilen",
    personalizedAds: "Personalisierte Anzeigen",
    personalizedAdsDesc: "Sehen Sie Anzeigen, die für Sie relevanter sind",
    help: "Hilfe",
    documentation: "Dokumentation",
    documentationDesc: "Lesen Sie unsere umfassende Dokumentation, um mehr über die Verwendung unserer Plattform zu erfahren",
    viewDocumentation: "Dokumentation anzeigen →",
    contactSupport: "Support kontaktieren",
    contactSupportDesc: "Sie können nicht finden, was Sie suchen? Unser Support-Team ist hier, um zu helfen",
    contactSupportButton: "Support kontaktieren →"
  }
};

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      if (savedMode !== null) {
        return savedMode === 'true';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') || 'en';
    }
    return 'en';
  });

  const [activeSection, setActiveSection] = useState('general');

  // Apply dark mode and language settings
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const t = translations[language];

  const settingsSections = [
    {
      id: 'general',
      title: t.general,
      icon: <Cog6ToothIcon className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">{t.darkMode}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t.darkModeDescription}</p>
            </div>
            <button
              onClick={toggleDarkMode}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${darkMode ? 'bg-indigo-600' : 'bg-gray-200'}`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${darkMode ? 'translate-x-6' : 'translate-x-1'}`}
              />
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">{t.language}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t.languageDescription}</p>
            </div>
            <select
              value={language}
              onChange={handleLanguageChange}
              className="mt-1 block w-32 rounded-md border-gray-300 dark:border-gray-600 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-100"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
        </div>
      ),
    },
    {
      id: 'notifications',
      title: t.notifications,
      icon: <BellIcon className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex h-5 items-center">
              <input
                id="email-notifications"
                name="email-notifications"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="email-notifications" className="font-medium text-gray-700 dark:text-gray-200">
                {t.emailNotifications}
              </label>
              <p className="text-gray-500 dark:text-gray-400">{t.emailNotificationsDesc}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex h-5 items-center">
              <input
                id="push-notifications"
                name="push-notifications"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700"
                defaultChecked
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="push-notifications" className="font-medium text-gray-700 dark:text-gray-200">
                {t.pushNotifications}
              </label>
              <p className="text-gray-500 dark:text-gray-400">{t.pushNotificationsDesc}</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'account',
      title: t.account,
      icon: <UserIcon className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              {t.username}
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full h-10 pl-5 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 sm:text-sm"
              defaultValue="johndoe"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              {t.email}
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full h-10 pl-5 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 sm:text-sm"
              defaultValue="john@example.com"
            />
          </div>
          
          <div>
            <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              {t.updateAccount}
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 'privacy',
      title: t.privacy,
      icon: <ShieldCheckIcon className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex h-5 items-center">
              <input
                id="data-collection"
                name="data-collection"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="data-collection" className="font-medium text-gray-700 dark:text-gray-200">
                {t.dataCollection}
              </label>
              <p className="text-gray-500 dark:text-gray-400">{t.dataCollectionDesc}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex h-5 items-center">
              <input
                id="personalized-ads"
                name="personalized-ads"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700"
                defaultChecked
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="personalized-ads" className="font-medium text-gray-700 dark:text-gray-200">
                {t.personalizedAds}
              </label>
              <p className="text-gray-500 dark:text-gray-400">{t.personalizedAdsDesc}</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'help',
      title: t.help,
      icon: <QuestionMarkCircleIcon className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">{t.documentation}</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {t.documentationDesc}
            </p>
            <button className="mt-2 text-sm text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
              {t.viewDocumentation}
            </button>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">{t.contactSupport}</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {t.contactSupportDesc}
            </p>
            <button className="mt-2 text-sm text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
              {t.contactSupportButton}
            </button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center mb-8">
          <button className="mr-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            <ArrowLeftIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </button>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t.settings}</h1>
          <button
            onClick={toggleDarkMode}
            className="ml-auto p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label={darkMode ? t.darkMode : t.darkMode}
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6 text-yellow-400" />
            ) : (
              <MoonIcon className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
        
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Sidebar navigation */}
            <div className="md:w-64 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
              <nav className="p-4 space-y-1">
                {settingsSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeSection === section.id ? 'bg-indigo-50 text-indigo-700 dark:bg-gray-600 dark:text-indigo-300' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600'}`}
                  >
                    <span className="mr-3">{section.icon}</span>
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
            
            {/* Main content */}
            <div className="flex-1 p-6">
              {settingsSections.find((section) => section.id === activeSection)?.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;