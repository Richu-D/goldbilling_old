/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  ViewChild,
  ViewChildren,
  SimpleChanges,
  OnChanges,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { HTTPService } from 'app/sd-services/HTTPService'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Profile',
  templateUrl: './Profile.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class ProfileComponent {
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
      this.sd_UkTkbQz9KEBwozUf(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_UkTkbQz9KEBwozUf(bh) {
    try {
      bh = this.sd_pEf7YYcls7IHRyio(bh);
      //appendnew_next_sd_UkTkbQz9KEBwozUf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UkTkbQz9KEBwozUf');
    }
  }

  logout(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_w0qWjQXwfP4CsoIO(bh);
      //appendnew_next_logout
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_y8IMMPOWgzA6hIHP');
    }
  }

  orderDetails(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_ztJIi6YfyI3CMVl1(bh);
      //appendnew_next_orderDetails
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CVB3uIcNgv0JeeFU');
    }
  }

  //appendnew_flow_ProfileComponent_start

  sd_pEf7YYcls7IHRyio(bh) {
    try {
      this.page.userName = bh.system.currentUser.displayName;

      bh = this.sd_pKBVVhLacoUkmIVi(bh);
      //appendnew_next_sd_pEf7YYcls7IHRyio
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pEf7YYcls7IHRyio');
    }
  }

  sd_pKBVVhLacoUkmIVi(bh) {
    try {
      const page = this.page;
      bh.input.method = 'get';
      bh.input.url = 'salesman/dashboard';

      bh = this.sd_FRIPlXvZL5GkEx5x(bh);
      //appendnew_next_sd_pKBVVhLacoUkmIVi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pKBVVhLacoUkmIVi');
    }
  }

  async sd_FRIPlXvZL5GkEx5x(bh) {
    try {
      const HTTPServiceInstance: HTTPService =
        this.__page_injector__.get(HTTPService);

      let outputVariables = await HTTPServiceInstance.sd_ZjZwWFbxVVMtewVh(
        bh.input.body,
        bh.input.method,
        undefined,
        bh.input.url,
        bh.input.params
      );
      this.page.result = outputVariables.input.result;

      bh = this.sd_iBZ3w0J9umcTmBsG(bh);
      //appendnew_next_sd_FRIPlXvZL5GkEx5x
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FRIPlXvZL5GkEx5x');
    }
  }

  sd_iBZ3w0J9umcTmBsG(bh) {
    try {
      const page = this.page;
      page.cancel = 0;
      page.pending = 0;
      page.completed = 0;
      page.result.result.DashBoard.forEach((item) => {
        if (item._id === 'Cancelled') {
          page.cancel = item.count;
        }
        if (item._id === 'Pending') {
          page.pending = item.count;
        }
        if (item._id === 'Completed') {
          page.completed = item.count;
        }
      });

      bh = this.sd_T7RCnvAKirTl2I5e(bh);
      //appendnew_next_sd_iBZ3w0J9umcTmBsG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iBZ3w0J9umcTmBsG');
    }
  }

  sd_T7RCnvAKirTl2I5e(bh) {
    try {
      const page = this.page;
      bh.input.method = 'get';
      bh.input.url = 'salesMan/order/all';

      bh = this.sd_ze27vcGrypuwQdad(bh);
      //appendnew_next_sd_T7RCnvAKirTl2I5e
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_T7RCnvAKirTl2I5e');
    }
  }

  async sd_ze27vcGrypuwQdad(bh) {
    try {
      const HTTPServiceInstance: HTTPService =
        this.__page_injector__.get(HTTPService);

      let outputVariables = await HTTPServiceInstance.sd_ZjZwWFbxVVMtewVh(
        bh.input.body,
        bh.input.method,
        undefined,
        bh.input.url,
        bh.input.params
      );
      this.page.details = outputVariables.input.result;

      bh = this.sd_Ok2qPTzTDOzpWFUs(bh);
      //appendnew_next_sd_ze27vcGrypuwQdad
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ze27vcGrypuwQdad');
    }
  }

  sd_Ok2qPTzTDOzpWFUs(bh) {
    try {
      const page = this.page;
      page.prod = [];

      page.details.result.product.forEach((item) => {
        page.prod.push({
          name: item.product.name,
          quantity: item.quantity,
        });
      });

      const items = page.prod;

      const quantities = {};

      // Loop through the array and sum the quantities for each name
      for (let i = 0; i < items.length; i++) {
        const { name, quantity } = items[i];
        quantities[name] = (quantities[name] || 0) + quantity;
      }

      // Convert the quantities object to an array of objects
      const result = Object.entries(quantities).map(([name, quantity]) => ({
        name,
        quantity,
      }));

      page.productOrders = result;

      //appendnew_next_sd_Ok2qPTzTDOzpWFUs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ok2qPTzTDOzpWFUs');
    }
  }

  sd_w0qWjQXwfP4CsoIO(bh) {
    try {
      const page = this.page;
      bh.system.oauthService.logout('/login');

      //appendnew_next_sd_w0qWjQXwfP4CsoIO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_w0qWjQXwfP4CsoIO');
    }
  }

  async sd_ztJIi6YfyI3CMVl1(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/orders');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);

      //appendnew_next_sd_ztJIi6YfyI3CMVl1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ztJIi6YfyI3CMVl1');
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
  //appendnew_flow_ProfileComponent_Catch
}
