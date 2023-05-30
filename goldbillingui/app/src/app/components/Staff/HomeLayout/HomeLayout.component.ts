/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
  AfterViewInit,
  ViewChild,
  ViewChildren,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-HomeLayout',
  templateUrl: './HomeLayout.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class HomeLayoutComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_BjskyfLKhShwRaje(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_BjskyfLKhShwRaje(bh) {
    try {
      bh = this.sd_r48K5GMhWrk97nFw_1(bh);
      //appendnew_next_sd_BjskyfLKhShwRaje
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BjskyfLKhShwRaje');
    }
  }

  //appendnew_flow_HomeLayoutComponent_start

  sd_r48K5GMhWrk97nFw_1(bh) {
    try {
      const page = this.page;
      bh.local.navbar = [
        {
          icon: 'fa-solid fa-house',
          name: 'Home',
          url: '/home/home',
        },
        {
          icon: 'fa-solid fa-qrcode',
          name: 'Scan',
          url: '/home/scanner',
        },
        {
          icon: 'fa-solid fa-cart-shopping',
          name: 'Cart',
          url: '/home/cart',
        },
        {
          icon: 'fa-solid fa-user',
          name: 'User',
          url: '/home/profile',
        },
      ];

      bh = this.sd_RJb1UOQxOSrlX90G_1(bh);
      //appendnew_next_sd_r48K5GMhWrk97nFw_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3ZKW9eaWU6Cw8qS0');
    }
  }

  sd_RJb1UOQxOSrlX90G_1(bh) {
    try {
      this.page.navbar = bh.local.navbar;

      //appendnew_next_sd_RJb1UOQxOSrlX90G_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3K9ZX36Wy3r4b51H');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
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
  //appendnew_flow_HomeLayoutComponent_Catch
}
