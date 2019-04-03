import { Component, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";
import { ToastService } from "../../services/toast.service";

@Component({
  selector: "app-toast",
  templateUrl: "./toast.component.html",
  styles: [
    `
      :host ::ng-deep button {
        margin-right: 0.25em;
      }

      :host ::ng-deep .custom-toast .ui-toast-message {
        color: #ffffff;
        background: #fc466b;
        background: -webkit-linear-gradient(to right, #3f5efb, #fc466b);
        background: linear-gradient(to right, #3f5efb, #fc466b);
      }

      :host ::ng-deep .custom-toast .ui-toast-close-icon {
        color: #ffffff;
      }
    `
  ],
  providers: [MessageService]
})
export class ToastComponent implements OnInit {
  constructor(
    private messageService: MessageService,
    public toastService: ToastService
  ) {}

  ngOnInit() {
    console.log("ngOnInit:");
    this.toastService.userAlertEventObservableSubject.subscribe(
      (data: string) => {
        if (typeof data === "string") {
          this.messageService.add({
            severity: "success",
            summary: data,
            detail: "Запрос успешно выполнен"
          });
        }
      }
    );
  }
}
