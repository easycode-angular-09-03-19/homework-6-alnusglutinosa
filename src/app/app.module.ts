import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { UsersListComponent } from "./components/users-list/users-list.component";
import { UserListItemComponent } from "./components/user-list-item/user-list-item.component";
import { HttpClientModule } from "@angular/common/http";
import { UserInfoComponent } from "./components/user-info/user-info.component";
import { PostsComponent } from "./components/posts/posts.component";
import { FormsModule } from "@angular/forms";
import { ToolbarModule } from "primeng/toolbar";
import { ButtonModule } from "primeng/button";
import { ToastModule } from "primeng/toast";
import { MessageService } from "primeng/api";
import { ToastComponent } from "./components/toast/toast.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PostComponent } from "./components/post/post.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    NavbarComponent,
    UsersListComponent,
    UserListItemComponent,
    UserInfoComponent,
    PostsComponent,
    ToastComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToolbarModule,
    ButtonModule,
    ToastModule,
    BrowserAnimationsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
