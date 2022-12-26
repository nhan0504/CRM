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
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';

import { CustomerService } from './services/customer.service';
import { baseURL } from './shared/baseurl';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ProductComponent,
    CustomerComponent,
    CustomerdetailComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'product', component: ProductComponent },
      { path: 'customer', component: CustomerComponent },
      { path: 'customerdetail/:id', component: CustomerdetailComponent },
    ]),
      FlexLayoutModule,
      MatGridListModule
  ],
    providers: [
        CustomerService,
        { provide: 'baseURL', useValue: baseURL }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
