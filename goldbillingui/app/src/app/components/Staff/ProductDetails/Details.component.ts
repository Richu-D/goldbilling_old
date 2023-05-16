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
import { ActivatedRoute, Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Details',
  templateUrl: './Details.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class DetailsComponent {
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
      this.sd_ilZ4tlQP3zwsX014(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    const routesd_EdN3oyxbMOubWOEQInstance =
      this.__page_injector__.get(ActivatedRoute);
    this.page._route_sd_EdN3oyxbMOubWOEQ =
      routesd_EdN3oyxbMOubWOEQInstance.queryParams.subscribe((event: any) => {
        let bh = this.sdService.__constructDefault({});
        bh.input.params = event;
        this.sd_EdN3oyxbMOubWOEQ(bh);
      });

    //append_listeners
  }

  sd_ilZ4tlQP3zwsX014(bh) {
    try {
      bh = this.sd_C5qDvc31cazOGMeg(bh);
      //appendnew_next_sd_ilZ4tlQP3zwsX014
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ilZ4tlQP3zwsX014');
    }
  }

  sd_EdN3oyxbMOubWOEQ(bh) {
    try {
      bh = this.sd_eK1HmAoAyigBg4r0(bh);
      //appendnew_next_sd_EdN3oyxbMOubWOEQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EdN3oyxbMOubWOEQ');
    }
  }

  navigateToCart(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_PMyrV3oFYTNsP8dx(bh);
      //appendnew_next_navigateToCart
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zHJ1ybUSfbfvUmr8');
    }
  }

  navigateToScan(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_gI7TnElBtjUhzmz1(bh);
      //appendnew_next_navigateToScan
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HkC2vCC0RoXgSMLX');
    }
  }

  //appendnew_flow_DetailsComponent_start

  sd_C5qDvc31cazOGMeg(bh) {
    try {
      bh = this.sd_SOAk98gKhZHk8ZzQ(bh);
      //appendnew_next_sd_C5qDvc31cazOGMeg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_C5qDvc31cazOGMeg');
    }
  }

  async sd_SOAk98gKhZHk8ZzQ(bh) {
    try {
      const HTTPServiceInstance: HTTPService =
        this.__page_injector__.get(HTTPService);

      let outputVariables = await HTTPServiceInstance.routesCheck();

      //appendnew_next_sd_SOAk98gKhZHk8ZzQ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SOAk98gKhZHk8ZzQ');
    }
  }

  sd_eK1HmAoAyigBg4r0(bh) {
    try {
      const page = this.page;
      bh.input.method = 'get';
      bh.input.url = 'product';

      page.id = bh.input.params;

      bh = this.sd_8JIhdZPUfZoHXf7l(bh);
      //appendnew_next_sd_eK1HmAoAyigBg4r0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eK1HmAoAyigBg4r0');
    }
  }

  async sd_8JIhdZPUfZoHXf7l(bh) {
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
      this.page.products = outputVariables.input.result;

      //appendnew_next_sd_8JIhdZPUfZoHXf7l
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8JIhdZPUfZoHXf7l');
    }
  }

  sd_PMyrV3oFYTNsP8dx(bh) {
    try {
      const page = this.page;
      bh.input.method = 'post';
      bh.input.url = 'cart';

      bh.input.body = {
        proid: page.id.id,
      };

      bh = this.sd_egWSstGkw8HHAR01(bh);
      //appendnew_next_sd_PMyrV3oFYTNsP8dx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PMyrV3oFYTNsP8dx');
    }
  }

  async sd_egWSstGkw8HHAR01(bh) {
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

      bh = this.sd_nEsjORXWHO6FRvFQ(bh);
      //appendnew_next_sd_egWSstGkw8HHAR01
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_egWSstGkw8HHAR01');
    }
  }

  sd_nEsjORXWHO6FRvFQ(bh) {
    try {
      const page = this.page;
      console.log(page.result.result.message);

      bh = this.sd_FgYpBLBBEL49jqzw(bh);
      //appendnew_next_sd_nEsjORXWHO6FRvFQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nEsjORXWHO6FRvFQ');
    }
  }

  async sd_FgYpBLBBEL49jqzw(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['se'](
          this.page.result.result.message,
          'ClientId Not Found.',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_8BaTApcoS4EN859J(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_QRuQKuCwhwEhqzwf(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FgYpBLBBEL49jqzw');
    }
  }

  async sd_8BaTApcoS4EN859J(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/customer');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });

      //appendnew_next_sd_8BaTApcoS4EN859J
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8BaTApcoS4EN859J');
    }
  }

  async sd_QRuQKuCwhwEhqzwf(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/cart');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });

      //appendnew_next_sd_QRuQKuCwhwEhqzwf
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QRuQKuCwhwEhqzwf');
    }
  }

  async sd_gI7TnElBtjUhzmz1(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/scanner');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });

      //appendnew_next_sd_gI7TnElBtjUhzmz1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gI7TnElBtjUhzmz1');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      const _route_sd_EdN3oyxbMOubWOEQ = this.page._route_sd_EdN3oyxbMOubWOEQ;
      if (
        _route_sd_EdN3oyxbMOubWOEQ &&
        typeof _route_sd_EdN3oyxbMOubWOEQ.unsubscribe === 'function'
      ) {
        _route_sd_EdN3oyxbMOubWOEQ.unsubscribe();
      }
    }
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
  //appendnew_flow_DetailsComponent_Catch
}
