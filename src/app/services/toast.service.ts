import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ToastService {
  private userAlertEventSource = new BehaviorSubject({});
  public userAlertEventObservableSubject = this.userAlertEventSource.asObservable();

  constructor() {}

  emitToast(value: string) {
    this.userAlertEventSource.next(value);
  }
}
