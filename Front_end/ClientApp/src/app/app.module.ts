import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './Customer/customer.component';

import { CustomerService } from './services/customer.service';
import { baseURL } from './shared/baseurl';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ProductComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'product', component: ProductComponent },
      { path: 'customer', component: CustomerComponent },
    ])
  ],
    providers: [
        CustomerService,
        { provide: 'baseURL', useValue: baseURL }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
