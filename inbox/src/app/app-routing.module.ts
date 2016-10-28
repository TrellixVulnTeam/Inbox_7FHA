import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboxComponent }      from './inbox/inbox.component';
import { ComposeComponent }      from './compose/compose.component';
import { EmailDetailComponent }      from './email-detail/email-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/inbox', pathMatch: 'full' },
  { path: 'inbox',  component: InboxComponent },
  { path: 'compose',  component: ComposeComponent },
  { path: 'email/:id',  component: EmailDetailComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
