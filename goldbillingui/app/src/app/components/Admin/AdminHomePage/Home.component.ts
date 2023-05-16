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
import { HTTPService } from 'app/sd-services/HTTPService'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Home',
  templateUrl: './Home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class HomeComponent {
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
      this.sd_FMTVDYxE9QTDIg7H(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_FMTVDYxE9QTDIg7H(bh) {
    try {
      bh = this.sd_9rTR719aILuxuo2S(bh);
      //appendnew_next_sd_FMTVDYxE9QTDIg7H
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FMTVDYxE9QTDIg7H');
    }
  }

  //appendnew_flow_HomeComponent_start

  sd_9rTR719aILuxuo2S(bh) {
    try {
      bh = this.sd_0n9rmVlbwfZQH6lW(bh);
      //appendnew_next_sd_9rTR719aILuxuo2S
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9rTR719aILuxuo2S');
    }
  }

  async sd_0n9rmVlbwfZQH6lW(bh) {
    try {
      const HTTPServiceInstance: HTTPService =
        this.__page_injector__.get(HTTPService);

      let outputVariables = await HTTPServiceInstance.routesCheckAdmin();

      //appendnew_next_sd_0n9rmVlbwfZQH6lW
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0n9rmVlbwfZQH6lW');
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
  //appendnew_flow_HomeComponent_Catch
}
