import { Product } from './../components/product/product';
import { About } from './../components/about/about';
import { Home } from './../components/home/home';
import { Routes } from '@angular/router';
import { Electronics } from '../components/electronics/electronics';
import { Profile } from '../home-child/profile/profile';
import { PageInfo } from '../home-child/page-info/page-info';
import { Feedback } from '../home-child/feedback/feedback';

export const routes: Routes = [
    { path: '',component:Home,
        children: [
      { path: 'profile', component: Profile },
      { path: 'page-info', component: PageInfo },
      { path: 'feedback', component: Feedback }
    ]
     },
    {path: 'about',component:About},
    { path: 'product',component:Product },
    { path: 'electronics',component:Electronics }

];
