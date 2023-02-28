import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { aboutStore } from './store/AboutStore';

export const About = observer(() => {
  const { t } = useTranslation();
  const { counter, decrement, increment } = aboutStore;

  return (
    <div>
      {t('hello')}
      <div>
        <div>{counter}</div>
        <button onClick={() => increment()}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
});
