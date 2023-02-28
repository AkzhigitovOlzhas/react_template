import { fetchAction } from './../../../core/utils/fetchAction';
import { makeAutoObservable, runInAction } from 'mobx';
import { Todo, TodoService } from '@api/TodoService';

class HomeStore {
  todos: Todo[] | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetchTodos = async () => {
    await fetchAction(TodoService.getTodos(), {
      show: true,
      successCallback: (res) => {
        runInAction(() => {
          this.todos = res.data;
        });
      },
    });
  };
}

export const homeStore = new HomeStore();
