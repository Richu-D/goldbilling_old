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
import { HTTPService } from 'app/sd-services/HTTPService'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Cart',
  templateUrl: './Cart.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class CartComponent {
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
      this.sd_ReNz2MR8C8182ERj(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_ReNz2MR8C8182ERj(bh) {
    try {
      bh = this.sd_Eqa6qz3aaqkZa3kk(bh);
      //appendnew_next_sd_ReNz2MR8C8182ERj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ReNz2MR8C8182ERj');
    }
  }

  onFetching(grandTotal: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { grandTotal: grandTotal };
      bh.local = {};

      bh = this.sd_PJZOL5aAAsMHOEKO(bh);
      //appendnew_next_onFetching
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_F93tEW0ZZl8QpWkw');
    }
  }

  payment(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_9Xzmm0ST6qlmVqBS(bh);
      //appendnew_next_payment
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eeCB2d2lVG6wx0nO');
    }
  }

  onFetchingData(quantityChange: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { quantityChange: quantityChange };
      bh.local = {};

      bh = this.sd_bzaeHAexpa0GEZjN(bh);
      //appendnew_next_onFetchingData
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xUEcK0eQPpMlynF8');
    }
  }

  //appendnew_flow_CartComponent_start

  sd_Eqa6qz3aaqkZa3kk(bh) {
    try {
      //appendnew_next_sd_Eqa6qz3aaqkZa3kk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Eqa6qz3aaqkZa3kk');
    }
  }

  sd_PJZOL5aAAsMHOEKO(bh) {
    try {
      const page = this.page;
      page.grandTotal = bh.input.grandTotal;

      //appendnew_next_sd_PJZOL5aAAsMHOEKO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PJZOL5aAAsMHOEKO');
    }
  }

  sd_9Xzmm0ST6qlmVqBS(bh) {
    try {
      const page = this.page;
      bh.input.method = 'post';
      bh.input.url = 'ordder';

      bh.input.body = {
        total: page.grandTotal,
        paymentmethod: 'online',
      };

      bh = this.sd_4bbuDWjRGlEQqJmC(bh);
      //appendnew_next_sd_9Xzmm0ST6qlmVqBS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9Xzmm0ST6qlmVqBS');
    }
  }

  sd_4bbuDWjRGlEQqJmC(bh) {
    try {
      if (
        this.sdService.operators['gte'](
          this.page.grandTotal,
          0,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_Z7RJkOwMY54WlnvO(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4bbuDWjRGlEQqJmC');
    }
  }

  async sd_Z7RJkOwMY54WlnvO(bh) {
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

      bh = this.sd_kjO0Z3x6ONq7AC24(bh);
      //appendnew_next_sd_Z7RJkOwMY54WlnvO
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Z7RJkOwMY54WlnvO');
    }
  }

  async sd_kjO0Z3x6ONq7AC24(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/completed');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });

      //appendnew_next_sd_kjO0Z3x6ONq7AC24
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kjO0Z3x6ONq7AC24');
    }
  }

  sd_bzaeHAexpa0GEZjN(bh) {
    try {
      const page = this.page;
      page.changes = bh.input.quantityChange;

      console.log(page.changes, 'changes');

      //appendnew_next_sd_bzaeHAexpa0GEZjN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bzaeHAexpa0GEZjN');
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
  //appendnew_flow_CartComponent_Catch
}
