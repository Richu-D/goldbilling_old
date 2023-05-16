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
  selector: 'bh-Navbar',
  templateUrl: './Navbar.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class NavbarComponent {
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
      this.sd_NLxB6ScbFWVNztA2(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_NLxB6ScbFWVNztA2(bh) {
    try {
      bh = this.sd_RJb1UOQxOSrlX90G(bh);
      //appendnew_next_sd_NLxB6ScbFWVNztA2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NLxB6ScbFWVNztA2');
    }
  }

  navigateToCart(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_2fE0baZMnuOxxTT2(bh);
      //appendnew_next_navigateToCart
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0asdsfWT7xfiysqn');
    }
  }

  navigateToDetails(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_llqkaUU3pM40tnBf(bh);
      //appendnew_next_navigateToDetails
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EE01kL2fj12dInxs');
    }
  }

  navigateToScanner(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_rTIw2zgitMFSROSw(bh);
      //appendnew_next_navigateToScanner
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IGaQh8IydvT6xJfw');
    }
  }

  navigateToHome(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_Los9xERpCXvPO7Uy(bh);
      //appendnew_next_navigateToHome
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3bDIe8JfDM5ag6d1');
    }
  }

  navigateToProfile(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_lXhi0AzhFOhTMgRd(bh);
      //appendnew_next_navigateToProfile
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TjSon7mtFrnh2WIS');
    }
  }

  //appendnew_flow_NavbarComponent_start

  sd_RJb1UOQxOSrlX90G(bh) {
    try {
      //appendnew_next_sd_RJb1UOQxOSrlX90G
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RJb1UOQxOSrlX90G');
    }
  }

  async sd_2fE0baZMnuOxxTT2(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/cart');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });

      //appendnew_next_sd_2fE0baZMnuOxxTT2
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2fE0baZMnuOxxTT2');
    }
  }

  async sd_llqkaUU3pM40tnBf(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/details');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });

      //appendnew_next_sd_llqkaUU3pM40tnBf
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_llqkaUU3pM40tnBf');
    }
  }

  async sd_rTIw2zgitMFSROSw(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/scanner');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });

      //appendnew_next_sd_rTIw2zgitMFSROSw
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rTIw2zgitMFSROSw');
    }
  }

  async sd_Los9xERpCXvPO7Uy(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/home');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);

      //appendnew_next_sd_Los9xERpCXvPO7Uy
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Los9xERpCXvPO7Uy');
    }
  }

  async sd_lXhi0AzhFOhTMgRd(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/profile');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });

      //appendnew_next_sd_lXhi0AzhFOhTMgRd
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lXhi0AzhFOhTMgRd');
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
  //appendnew_flow_NavbarComponent_Catch
}
