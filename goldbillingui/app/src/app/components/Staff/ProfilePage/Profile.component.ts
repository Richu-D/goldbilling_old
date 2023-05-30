/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
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

  logout_5(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_4No8yOdR5FAZGk6v_5(bh);
      //appendnew_next_logout_5
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DKZpEj5ZD6luXRp6');
    }
  }

  //appendnew_flow_ProfileComponent_start

  sd_pEf7YYcls7IHRyio(bh) {
    try {
      //appendnew_next_sd_pEf7YYcls7IHRyio
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pEf7YYcls7IHRyio');
    }
  }

  async sd_ztJIi6YfyI3CMVl1(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/orders');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });

      //appendnew_next_sd_ztJIi6YfyI3CMVl1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ztJIi6YfyI3CMVl1');
    }
  }

  sd_4No8yOdR5FAZGk6v_5(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('"enter the logout logic for your application..!"', 'okay', {
          duration: 2000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });

      //appendnew_next_sd_4No8yOdR5FAZGk6v_5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QbXUsqsGwUy7u5a1');
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
