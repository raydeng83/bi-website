import { Routes } from '@angular/router';
import {LayoutTwoComponent} from "./layouts/layout-two/layout-two.component";
import {ProductsComponent} from "./layouts/shared-sections/products/products.component";
import {AppComponent} from "./app.component";
import {SolutionsComponent} from "./layouts/shared-sections/solutions/solutions.component";
import {TeamComponent} from "./layouts/shared-sections/team/team.component";
import {ContactUsComponent} from "./layouts/shared-sections/contact-us/contact-us.component";

export const rootRouterConfig: Routes = [
  { 
    path: '',
    redirectTo: 'services',
    pathMatch: 'full'
  },
  {
    path: 'services',
    component: LayoutTwoComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'solutions',
    component: SolutionsComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

