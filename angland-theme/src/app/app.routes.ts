import { Routes } from '@angular/router';
import {ServicesComponent} from "./layouts/shared-sections/services/services.component";
import {ProductsComponent} from "./layouts/shared-sections/products/products.component";
import {AppComponent} from "./app.component";
import {SolutionsComponent} from "./layouts/shared-sections/solutions/solutions.component";
import {TeamComponent} from "./layouts/shared-sections/team/team.component";
import {ContactUsComponent} from "./layouts/shared-sections/contact-us/contact-us.component";
import {ModernWorkforaceIamStructureComponent} from "./layouts/shared-sections/blog/modern-workforace-iam-structure/modern-workforace-iam-structure.component";

export const rootRouterConfig: Routes = [
  { 
    path: '',
    redirectTo: 'services',
    pathMatch: 'full'
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'solutions',
    component: SolutionsComponent
  },
  // {
  //   path: 'team',
  //   component: TeamComponent
  // },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'blog',
    // loadChildren: () => import('./layouts/shared-sections/blog/blog.module').then(m => m.BlogModule),
    component: ModernWorkforaceIamStructureComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

