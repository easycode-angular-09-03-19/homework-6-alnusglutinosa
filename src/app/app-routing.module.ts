import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { UserInfoComponent } from "./components/user-info/user-info.component";
import { PostsComponent } from "./components/posts/posts.component";
import { TestGuardGuard } from "./guards/test-guard.guard";
import { ToastComponent } from "./components/toast/toast.component";

const routes: Routes = [
  { path: 'user/:id', component: UserInfoComponent },
  { path: 'posts', component: PostsComponent, canActivate: [TestGuardGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'toast', component: ToastComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
