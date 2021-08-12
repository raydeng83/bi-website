import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatChipsModule} from "@angular/material/chips";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatRippleModule} from "@angular/material/core";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatTabsModule} from "@angular/material/tabs";
import {FlexLayoutModule} from "@angular/flex-layout";
import {NguCarouselModule} from "@ngu/carousel";
import {ServicesComponent} from "./layouts/shared-sections/services/services.component";
import {HeaderComponent} from "./layouts/shared-sections/header/header.component";
import {IntroTwoComponent} from "./layouts/shared-sections/services/intro-two/intro-two.component";
import {ContactComponent} from "./layouts/shared-sections/contact-us/contact/contact.component";
import {FooterComponent} from "./layouts/shared-sections/footer/footer.component";
import {TestimonialsComponent} from "./layouts/shared-sections/team/testimonials/testimonials.component";
import {PortfolioCarouselComponent} from "./layouts/shared-sections/solutions/portfolio-carousel/portfolio-carousel.component";
import {ServicesCarouselComponent} from "./layouts/shared-sections/solutions/services-carousel/services-carousel.component";
import {WINDOW_PROVIDERS} from "./shared/helpers/window.helper";
import { ProductsComponent } from './layouts/shared-sections/products/products.component';
import { SolutionsComponent } from './layouts/shared-sections/solutions/solutions.component';
import { TeamComponent } from './layouts/shared-sections/team/team.component';
import { ContactUsComponent } from './layouts/shared-sections/contact-us/contact-us.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatChipsModule,
    MatInputModule,
    MatListModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    FlexLayoutModule,
    NguCarouselModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false })
  ],
  declarations: [AppComponent,
    ServicesComponent,
    HeaderComponent,
    IntroTwoComponent,
    ContactComponent,
    FooterComponent,
    TestimonialsComponent,
    PortfolioCarouselComponent,
    ServicesCarouselComponent,
    ProductsComponent,
    SolutionsComponent,
    TeamComponent,
    ContactUsComponent
  ],
  providers: [WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
