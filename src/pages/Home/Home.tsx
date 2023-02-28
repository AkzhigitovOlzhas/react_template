import { loaderStore } from '@core/stories/LoaderStore';
import { observer } from 'mobx-react-lite';
import { homeStore } from './store/HomeStore';

export const Home = observer(() => {
  const { todos, fetchTodos } = homeStore;
  const { loading } = loaderStore;
  return (
    <div>
      Home
      {loading && 'LOOADING........'}
      <div>
        <button onClick={fetchTodos}>Fetch</button>
        {todos && todos.map(({ title }) => <div>{title}</div>)}
      </div>
    </div>
  );
});
