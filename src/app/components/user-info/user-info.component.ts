import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UsersService } from "../../services/users.service";
import { MessageService } from "primeng/api";
import { User } from "../../interfaces/User";
import { ToastService } from "../../services/toast.service";
import { NgForm, Form } from "@angular/forms";

@Component({
  selector: "app-user-info",
  templateUrl: "./user-info.component.html",
  styleUrls: ["./user-info.component.css"]
})
export class UserInfoComponent implements OnInit {
  user: User;
  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService,
    private messageService: MessageService,
    public toastService: ToastService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.userService.getuserById(id).subscribe(
      (data: User) => {
        this.user = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  onFormSubmit(form: NgForm) {
    this.userService.editUser(form.value).subscribe(
      (data: User) => {
        this.router.navigate([`/`]);
        this.toastService.emitToast(`Элемент отредактирован!`);
      },
      err => {
        this.toastService.emitToast(`Ошибка в редактировании!`);
        console.log(err);
      }
    );
  }

  onClickEdit() {
    this.isEdit = !this.isEdit;
  }
}
