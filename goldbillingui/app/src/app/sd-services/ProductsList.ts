/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class ProductsList {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_ProductsList

  async getProducts(products: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          products: products,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_ntnmrUD2VqNkTvxC(bh);
      //appendnew_next_getProducts
      return (
        // formatting output variables
        {
          input: {
            products: bh.input.products,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QMy0tkobQZEx4V3T');
    }
  }

  //appendnew_flow_ProductsList_start

  async sd_ntnmrUD2VqNkTvxC(bh) {
    try {
      bh.input.products = [
        {
          id: 1,
          name: 'Gold Product 1',
          price: 1234,
          rating: {
            one: 123,
            two: 12,
            three: 123,
            four: 2341,
            five: 123,
          },
          quantity: 123,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          image:
            'https://www.kalyanjewellers.net/images/Jewellery/Gold/images/rebha-sankalp-gold-necklace.jpg',
        },
      ];

      //appendnew_next_sd_ntnmrUD2VqNkTvxC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ntnmrUD2VqNkTvxC');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_ProductsList_Catch
}
