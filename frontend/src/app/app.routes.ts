import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';
import { IndexingStatus } from './pages/indexing-status/indexing-status';
import { Chat } from './pages/chat/chat';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'indexing/:id', component: IndexingStatus },
  { path: 'chat/:id', component: Chat },
  { path: '**', redirectTo: '' }
];
