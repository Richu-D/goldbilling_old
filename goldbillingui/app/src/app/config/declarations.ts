import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-BillComponent
import { BillComponent } from '../components/Staff/ProfilePage/Bill.component';
//CORE_REFERENCE_IMPORT-OrdersComponent
import { OrdersComponent } from '../components/Staff/ProfilePage/Orders.component';
//CORE_REFERENCE_IMPORT-OrderPlcComponent
import { OrderPlcComponent } from '../components/Staff/OrderPlaced/OrderPlc.component';

//CORE_REFERENCE_IMPORT-HomePageComponent
import { HomePageComponent } from '../components/Staff/HomePage/HomePage.component';
//CORE_REFERENCE_IMPORT-CustomerDetailsComponent
import { CustomerDetailsComponent } from '../components/Staff/Customer/CustomerDetails.component';

//CORE_REFERENCE_IMPORT-HTTPService
import { HTTPService } from '../sd-services/HTTPService';
//CORE_REFERENCE_IMPORT-ProfileComponent
import { ProfileComponent } from '../components/Staff/ProfilePage/Profile.component';
//CORE_REFERENCE_IMPORT-LoginComponent
import { LoginComponent } from '../components/Auth/Login.component';
//CORE_REFERENCE_IMPORT-ScannerPageComponent
import { ScannerPageComponent } from '../components/Staff/Scanner/ScannerPage.component';
//CORE_REFERENCE_IMPORT-DetailsComponent
import { DetailsComponent } from '../components/Staff/ProductDetails/Details.component';
//CORE_REFERENCE_IMPORT-ProductListComponent
import { ProductListComponent } from '../components/Staff/ProductCart/ProductList.component';
//CORE_REFERENCE_IMPORT-CartDetailsComponent
import { CartDetailsComponent } from '../components/Staff/ProductCart/CartDetails.component';
//CORE_REFERENCE_IMPORT-CartComponent
import { CartComponent } from '../components/Staff/ProductCart/Cart.component';
//CORE_REFERENCE_IMPORT-HomeLayoutComponent
import { HomeLayoutComponent } from '../components/Staff/HomeLayout/HomeLayout.component';
//CORE_REFERENCE_IMPORT-ProductsList
import { ProductsList } from '../sd-services/ProductsList';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-BillComponent
  BillComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-OrdersComponent
  OrdersComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-OrderPlcComponent
  OrderPlcComponent,

  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-HomePageComponent
  HomePageComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-CustomerDetailsComponent
  CustomerDetailsComponent,

  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-ProfileComponent
  ProfileComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-LoginComponent
  LoginComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-ScannerPageComponent
  ScannerPageComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-DetailsComponent
  DetailsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-ProductListComponent
  ProductListComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-CartDetailsComponent
  CartDetailsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-CartComponent
  CartComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-HomeLayoutComponent
  HomeLayoutComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-HTTPService
  HTTPService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-ProductsList
  ProductsList,
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  {
    path: 'home',
    component: HomeLayoutComponent,
    children: [
      { path: 'details', component: DetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'scanner', component: ScannerPageComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'customer', component: CustomerDetailsComponent },
      { path: 'home', component: HomePageComponent },
      { path: 'completed', component: OrderPlcComponent },
      { path: 'bill', component: BillComponent },
      { path: 'orders', component: OrdersComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
