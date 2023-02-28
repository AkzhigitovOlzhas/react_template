import { Link } from 'react-router-dom';
import { AppRouter } from '@components/AppRouter/AppRouter';
import { changeLanguage, LanguageType } from '@config/i18';
import './App.css';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <div>
        <Link to="/">{t('home', 'Главная')}</Link>
        <br />
        <Link to="/about">{t('about', 'О нас')}</Link>
      </div>
      <div>
        {t('changeLang', 'Смена языка')}
        <button onClick={() => changeLanguage(LanguageType.EN)}>en</button>
        <button onClick={() => changeLanguage(LanguageType.RU)}>ru</button>
      </div>
      <AppRouter />
    </div>
  );
}

export default App;
