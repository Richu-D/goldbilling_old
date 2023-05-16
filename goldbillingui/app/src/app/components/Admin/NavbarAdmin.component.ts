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
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-NavbarAdmin',
  templateUrl: './NavbarAdmin.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class NavbarAdminComponent {
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
      this.sd_W4d1SlxNCDJRR4ch(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_W4d1SlxNCDJRR4ch(bh) {
    try {
      bh = this.sd_9hJvnt2yCbKAIY0E(bh);
      //appendnew_next_sd_W4d1SlxNCDJRR4ch
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_W4d1SlxNCDJRR4ch');
    }
  }

  adminHome(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_KTPEAMxkUuI5BCgc(bh);
      //appendnew_next_adminHome
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_h74EoP8QYZubN0JR');
    }
  }

  addProducts(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_YKyydUcZlnhbKpfH(bh);
      //appendnew_next_addProducts
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_S6209iY39WecoXYm');
    }
  }

  allOrders(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_mSrT4C5WIoU6Datt(bh);
      //appendnew_next_allOrders
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n5RXg7uDKp5xDEzr');
    }
  }

  //appendnew_flow_NavbarAdminComponent_start

  sd_9hJvnt2yCbKAIY0E(bh) {
    try {
      //appendnew_next_sd_9hJvnt2yCbKAIY0E
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9hJvnt2yCbKAIY0E');
    }
  }

  async sd_KTPEAMxkUuI5BCgc(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/admin/home');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);

      //appendnew_next_sd_KTPEAMxkUuI5BCgc
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KTPEAMxkUuI5BCgc');
    }
  }

  async sd_YKyydUcZlnhbKpfH(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/admin/add-products');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);

      //appendnew_next_sd_YKyydUcZlnhbKpfH
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YKyydUcZlnhbKpfH');
    }
  }

  async sd_mSrT4C5WIoU6Datt(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/admin/orders');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);

      //appendnew_next_sd_mSrT4C5WIoU6Datt
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mSrT4C5WIoU6Datt');
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
  //appendnew_flow_NavbarAdminComponent_Catch
}
