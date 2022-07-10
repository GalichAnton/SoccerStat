import { makeAutoObservable } from "mobx";

class DateStore {
  dateFrom: string;

  dateTo: string;

  constructor() {
    makeAutoObservable(this);
  }

  setDateFrom(dateFrom: string) {
    this.dateFrom = dateFrom;
  }

  setDateTo(dateTo: string) {
    this.dateTo = dateTo;
  }
}

export default new DateStore();
