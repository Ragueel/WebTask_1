import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { PageComponent } from './page/page.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/card',
        pathMatch: 'full',
      },
      {
        path: 'card',
        component: CardComponent,
      },
      {
        path: 'page',
        component: PageComponent,
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
