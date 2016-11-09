

import { Component } from 'angular2/core';
//import {Routes} from 'angular2/router';

import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import { HomeComponent } from './home/home.component';
import { CustomersListComponent } from './customers/customersList.component';
import { CustomersFeedbacksComponent } from './customers/customersFeedbacks.component';
import { ContactUsComponent } from './contact_us/contactus.component';
import { ProductInfoComponent } from './product_info/productInfo.component';
import { VideoPresentationsComponent } from './product_info/video_presentations.component';



@Component({
    selector:'bs4u-app',
    templateUrl: 'app/main.html',
    styleUrls: ['app/css/style.css'],
    directives: [HomeComponent, ROUTER_DIRECTIVES],
    providers: [
        HomeComponent,
        CustomersListComponent,
        CustomersFeedbacksComponent,
        ContactUsComponent,
        ProductInfoComponent,
        VideoPresentationsComponent,
        HTTP_PROVIDERS,
        ROUTER_PROVIDERS]

})

@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/customersList', name: 'CustomersList', component: CustomersListComponent },
    { path: '/customersFeedbacks', name: 'CustomersFeedbacks', component: CustomersFeedbacksComponent },
    { path: '/contuctUs', name: 'ContuctUs', component: ContactUsComponent },
    { path: '/productInfo', name: 'ProductInfo', component: ProductInfoComponent },
    { path: '/videoPresentations', name: 'VideoPresentations', component: VideoPresentationsComponent }
])


export class AppComponent {
    pageTitle: string = 'Main Page Title';
}