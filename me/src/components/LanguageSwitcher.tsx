import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  const currentLang = i18n.language === 'en' ? 'EN' : 'FR';

  return (
    <Button
      onClick={toggleLanguage}
      sx={{
        minWidth: '70px',
        height: '40px',
        borderRadius: '20px',
        border: '2px solid',
        borderColor: 'primary.main',
        bgcolor: 'rgba(0, 212, 255, 0.1)',
        color: 'primary.main',
        fontWeight: 700,
        fontSize: '1rem',
        letterSpacing: '0.5px',
        transition: 'all 0.3s ease',
        '&:hover': {
          bgcolor: 'rgba(0, 212, 255, 0.2)',
          borderColor: 'primary.light',
          transform: 'scale(1.05)',
        },
        '&:active': {
          transform: 'scale(0.95)',
        },
      }}
    >
      {currentLang}
    </Button>
  );
};

export default LanguageSwitcher;
