import { projectApi } from '@api/apiConfig';
import { Todo } from './types';

export class TodoService {
  static getTodos() {
    return projectApi.get<Todo[]>('/todos');
  }
}
