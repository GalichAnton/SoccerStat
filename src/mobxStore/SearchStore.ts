import { makeAutoObservable } from "mobx";

class SearchStore {
  filter: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  setFilter(filter: string) {
    this.filter = filter.toLowerCase();
  }
}

export default new SearchStore();
