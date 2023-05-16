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
  selector: 'bh-Orders',
  templateUrl: './Orders.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class OrdersComponent {
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
      this.sd_miEQ80UoHU5AKbJK(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_miEQ80UoHU5AKbJK(bh) {
    try {
      bh = this.sd_Cp0J3dOILUJFdTNt(bh);
      //appendnew_next_sd_miEQ80UoHU5AKbJK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_miEQ80UoHU5AKbJK');
    }
  }

  bill(id: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { id: id };
      bh.local = {};

      bh = this.sd_ypwcEKonvME4dUDz(bh);
      //appendnew_next_bill
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hKN0shua4HHIc7D4');
    }
  }

  //appendnew_flow_OrdersComponent_start

  sd_Cp0J3dOILUJFdTNt(bh) {
    try {
      bh = this.sd_qSRjhzf0nUkgzh7f(bh);
      //appendnew_next_sd_Cp0J3dOILUJFdTNt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Cp0J3dOILUJFdTNt');
    }
  }

  sd_qSRjhzf0nUkgzh7f(bh) {
    try {
      const page = this.page;
      bh.input.method = 'get';
      bh.input.url = 'order/sales/salesman';

      bh = this.sd_GJZYblqkti9k0KMS(bh);
      //appendnew_next_sd_qSRjhzf0nUkgzh7f
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qSRjhzf0nUkgzh7f');
    }
  }

  async sd_GJZYblqkti9k0KMS(bh) {
    try {
      const HTTPServiceInstance: HTTPService =
        this.__page_injector__.get(HTTPService);

      let outputVariables = await HTTPServiceInstance.sd_ZjZwWFbxVVMtewVh(
        undefined,
        bh.input.method,
        undefined,
        bh.input.url,
        undefined
      );
      this.page.orders = outputVariables.input.result;

      //appendnew_next_sd_GJZYblqkti9k0KMS
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GJZYblqkti9k0KMS');
    }
  }

  sd_ypwcEKonvME4dUDz(bh) {
    try {
      const page = this.page;
      bh.input.params = { id: bh.input.id };

      bh = this.sd_bDDFyFWhgoQDUggJ(bh);
      //appendnew_next_sd_ypwcEKonvME4dUDz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ypwcEKonvME4dUDz');
    }
  }

  async sd_bDDFyFWhgoQDUggJ(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/bill');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, bh.input.params),
        });

      //appendnew_next_sd_bDDFyFWhgoQDUggJ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bDDFyFWhgoQDUggJ');
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
  //appendnew_flow_OrdersComponent_Catch
}
