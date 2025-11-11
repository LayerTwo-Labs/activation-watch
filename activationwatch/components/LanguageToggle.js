import { useContext } from "react";

export default function LanguageToggle() {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleToggle = () => {
    setLanguage(prevLanguage => prevLanguage === 'en' ? 'zh' : 'en');
  };

  return (
    <button onClick={handleToggle}>
      {language === 'en' ? 'Switch to Chinese' : 'Switch to English'}
    </button>
  );
}