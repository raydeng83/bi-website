import { Routes } from '@angular/router';
import {LayoutTwoComponent} from "./layouts/layout-two/layout-two.component";

export const rootRouterConfig: Routes = [
  { 
    path: '',
    component: LayoutTwoComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

