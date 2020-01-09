import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DialogOverviewExampleDialogComponent } from './user/DialogOverviewExampleDialog/DialogOverviewExampleDialog.component';


const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'dialog',component: DialogOverviewExampleDialogComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
 // { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
