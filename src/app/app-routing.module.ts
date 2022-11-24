import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskTwoComponent } from './component/task-two/task-two.component';

const routes: Routes = [
  { path: '', redirectTo: '/task-2', pathMatch: 'full' },
  { path: 'task-2', component: TaskTwoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
