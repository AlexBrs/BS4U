System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', 'angular2/router', './home/home.component', './customers/customersList.component', './customers/customersFeedbacks.component', './contact_us/contactus.component', './product_info/productInfo.component', './product_info/video_presentations.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, home_component_1, customersList_component_1, customersFeedbacks_component_1, contactus_component_1, productInfo_component_1, video_presentations_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (customersList_component_1_1) {
                customersList_component_1 = customersList_component_1_1;
            },
            function (customersFeedbacks_component_1_1) {
                customersFeedbacks_component_1 = customersFeedbacks_component_1_1;
            },
            function (contactus_component_1_1) {
                contactus_component_1 = contactus_component_1_1;
            },
            function (productInfo_component_1_1) {
                productInfo_component_1 = productInfo_component_1_1;
            },
            function (video_presentations_component_1_1) {
                video_presentations_component_1 = video_presentations_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.pageTitle = 'Main Page Title';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'bs4u-app',
                        templateUrl: 'app/main.html',
                        styleUrls: ['app/css/style.css'],
                        directives: [home_component_1.HomeComponent, router_1.ROUTER_DIRECTIVES],
                        providers: [
                            home_component_1.HomeComponent,
                            customersList_component_1.CustomersListComponent,
                            customersFeedbacks_component_1.CustomersFeedbacksComponent,
                            contactus_component_1.ContactUsComponent,
                            productInfo_component_1.ProductInfoComponent,
                            video_presentations_component_1.VideoPresentationsComponent,
                            http_1.HTTP_PROVIDERS,
                            router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: '/customersList', name: 'CustomersList', component: customersList_component_1.CustomersListComponent },
                        { path: '/customersFeedbacks', name: 'CustomersFeedbacks', component: customersFeedbacks_component_1.CustomersFeedbacksComponent },
                        { path: '/contuctUs', name: 'ContuctUs', component: contactus_component_1.ContactUsComponent },
                        { path: '/productInfo', name: 'ProductInfo', component: productInfo_component_1.ProductInfoComponent },
                        { path: '/videoPresentations', name: 'VideoPresentations', component: video_presentations_component_1.VideoPresentationsComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map