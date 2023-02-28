import { makeAutoObservable } from 'mobx';

class LoaderStore {
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setLoader = (state: boolean) => {
    this.loading = state;
  };
}

export const loaderStore = new LoaderStore();
