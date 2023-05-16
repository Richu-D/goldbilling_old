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
  selector: 'bh-ScannerPage',
  templateUrl: './ScannerPage.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class ScannerPageComponent {
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
      this.sd_10YjKy3zAquVpFcP(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_10YjKy3zAquVpFcP(bh) {
    try {
      bh = this.sd_bYosjTCqnx97WsTD(bh);
      //appendnew_next_sd_10YjKy3zAquVpFcP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_10YjKy3zAquVpFcP');
    }
  }

  enterTheCodeManually(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_ulnYTmErrxkIFEu1(bh);
      //appendnew_next_enterTheCodeManually
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2X6qpiE9ClSFjJya');
    }
  }

  scannedData(scannedId: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { scannedId: scannedId };
      bh.local = {};

      bh = this.sd_EqNPAE215DeMRkgo(bh);
      //appendnew_next_scannedData
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_C2pQDmAcGJGE136l');
    }
  }

  //appendnew_flow_ScannerPageComponent_start

  sd_bYosjTCqnx97WsTD(bh) {
    try {
      this.page.output = this.page.output;

      bh = this.sd_EQHyy7vBbF3TLBmT(bh);
      //appendnew_next_sd_bYosjTCqnx97WsTD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bYosjTCqnx97WsTD');
    }
  }

  sd_EQHyy7vBbF3TLBmT(bh) {
    try {
      const page = this.page; // let data = this.inputData

      // console.log(data)

      bh = this.sd_3a9F9iMRqA2Wh6NQ(bh);
      //appendnew_next_sd_EQHyy7vBbF3TLBmT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EQHyy7vBbF3TLBmT');
    }
  }

  async sd_3a9F9iMRqA2Wh6NQ(bh) {
    try {
      const HTTPServiceInstance: HTTPService =
        this.__page_injector__.get(HTTPService);

      let outputVariables = await HTTPServiceInstance.routesCheck();

      //appendnew_next_sd_3a9F9iMRqA2Wh6NQ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3a9F9iMRqA2Wh6NQ');
    }
  }

  async sd_ulnYTmErrxkIFEu1(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/scanner/enter-id');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });

      //appendnew_next_sd_ulnYTmErrxkIFEu1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ulnYTmErrxkIFEu1');
    }
  }

  sd_EqNPAE215DeMRkgo(bh) {
    try {
      const page = this.page;
      console.log(bh.input.scannedId);

      console.log(page);

      bh.input.params = { id: bh.input.scannedId };

      bh = this.sd_x0RGw1z94tFJrJ6N(bh);
      //appendnew_next_sd_EqNPAE215DeMRkgo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EqNPAE215DeMRkgo');
    }
  }

  async sd_x0RGw1z94tFJrJ6N(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/details');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, bh.input.params),
        });

      //appendnew_next_sd_x0RGw1z94tFJrJ6N
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_x0RGw1z94tFJrJ6N');
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
  //appendnew_flow_ScannerPageComponent_Catch
}
