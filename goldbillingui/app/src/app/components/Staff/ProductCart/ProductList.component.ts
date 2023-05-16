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
  selector: 'bh-ProductList',
  templateUrl: './ProductList.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class ProductListComponent {
  @Output('fetching')
  public fetching: any = new EventEmitter<any>();
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
      this.sd_VUiL6SLX23LS1F2B(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_VUiL6SLX23LS1F2B(bh) {
    try {
      bh = this.sd_uVC9NYeq8tzpacey(bh);
      //appendnew_next_sd_VUiL6SLX23LS1F2B
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VUiL6SLX23LS1F2B');
    }
  }

  addQuantity(productId = '', quantity = 0, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { productId: productId, quantity: quantity };
      bh.local = {};

      bh = this.sd_4NlC6mfj2HoUAGEk(bh);
      //appendnew_next_addQuantity
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2EzCHgsAEIGTe3v5');
    }
  }

  removeQuantity(productId = '', quantity: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { productId: productId, quantity: quantity };
      bh.local = {};

      bh = this.sd_U2gnPlCXvLwsGjoY(bh);
      //appendnew_next_removeQuantity
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IfJ0rUIlo1Enbimc');
    }
  }

  //appendnew_flow_ProductListComponent_start

  sd_uVC9NYeq8tzpacey(bh) {
    try {
      bh = this.sd_rqg0n41dHDEypb6V(bh);
      //appendnew_next_sd_uVC9NYeq8tzpacey
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uVC9NYeq8tzpacey');
    }
  }

  sd_rqg0n41dHDEypb6V(bh) {
    try {
      const page = this.page;
      bh.input.method = 'get';
      bh.input.url = 'cart';

      bh = this.sd_YhYAst6DafVUtR4s(bh);
      //appendnew_next_sd_rqg0n41dHDEypb6V
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rqg0n41dHDEypb6V');
    }
  }

  async sd_YhYAst6DafVUtR4s(bh) {
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

      //appendnew_next_sd_YhYAst6DafVUtR4s
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YhYAst6DafVUtR4s');
    }
  }

  sd_4NlC6mfj2HoUAGEk(bh) {
    try {
      const page = this.page;
      bh.input.method = 'put';
      bh.input.url = 'cart';

      bh.input.body = {
        productId: bh.input.productId,
        CartId: page.products?.result[0]?._id,
        count: 1,
        quantity: bh.input.quantity,
      };

      bh = this.sd_DbhXaqPfqqS9WzOA(bh);
      //appendnew_next_sd_4NlC6mfj2HoUAGEk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4NlC6mfj2HoUAGEk');
    }
  }

  async sd_DbhXaqPfqqS9WzOA(bh) {
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

      bh = this.sd_WDgO1WLLlV7OBllv(bh);
      //appendnew_next_sd_DbhXaqPfqqS9WzOA
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DbhXaqPfqqS9WzOA');
    }
  }

  sd_WDgO1WLLlV7OBllv(bh) {
    try {
      const page = this.page;
      bh.input.method = 'get';
      bh.input.url = 'cart';

      bh = this.sd_cqyk9GmdeHBvO7u7(bh);
      //appendnew_next_sd_WDgO1WLLlV7OBllv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WDgO1WLLlV7OBllv');
    }
  }

  async sd_cqyk9GmdeHBvO7u7(bh) {
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

      bh = this.sd_iIYHQLGPbRcFGwJn(bh);
      //appendnew_next_sd_cqyk9GmdeHBvO7u7
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cqyk9GmdeHBvO7u7');
    }
  }

  sd_iIYHQLGPbRcFGwJn(bh) {
    try {
      const page = this.page;
      bh.local.value = bh.input.quantity;

      bh = this.sd_6xqXtTfyUsEbsStE(bh);
      //appendnew_next_sd_iIYHQLGPbRcFGwJn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iIYHQLGPbRcFGwJn');
    }
  }

  sd_6xqXtTfyUsEbsStE(bh) {
    try {
      bh.pageOutput.fetching.emit(bh.local.value);

      //appendnew_next_sd_6xqXtTfyUsEbsStE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6xqXtTfyUsEbsStE');
    }
  }

  sd_U2gnPlCXvLwsGjoY(bh) {
    try {
      const page = this.page;
      bh.input.method = 'put';
      bh.input.url = 'cart';

      bh.input.body = {
        productId: bh.input.productId,
        CartId: page.products?.result[0]?._id,
        count: -1,
        quantity: bh.input.quantity,
      };

      bh = this.sd_1c1mEQDWhX3G3o9P(bh);
      //appendnew_next_sd_U2gnPlCXvLwsGjoY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_U2gnPlCXvLwsGjoY');
    }
  }

  async sd_1c1mEQDWhX3G3o9P(bh) {
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

      bh = this.sd_w5ZHXs5tmzg0cycQ(bh);
      //appendnew_next_sd_1c1mEQDWhX3G3o9P
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1c1mEQDWhX3G3o9P');
    }
  }

  sd_w5ZHXs5tmzg0cycQ(bh) {
    try {
      const page = this.page;
      bh.input.method = 'get';
      bh.input.url = 'cart';

      bh = this.sd_mf022FNq2Di9RcHk(bh);
      //appendnew_next_sd_w5ZHXs5tmzg0cycQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_w5ZHXs5tmzg0cycQ');
    }
  }

  async sd_mf022FNq2Di9RcHk(bh) {
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

      bh = this.sd_AaRuDK2T6WLrf23a(bh);
      //appendnew_next_sd_mf022FNq2Di9RcHk
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mf022FNq2Di9RcHk');
    }
  }

  sd_AaRuDK2T6WLrf23a(bh) {
    try {
      const page = this.page;
      bh.local.value = bh.input.quantity;

      bh = this.sd_kRLoRxLdL8c0Z3Mg(bh);
      //appendnew_next_sd_AaRuDK2T6WLrf23a
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AaRuDK2T6WLrf23a');
    }
  }

  sd_kRLoRxLdL8c0Z3Mg(bh) {
    try {
      bh.pageOutput.fetching.emit(bh.local.value);

      //appendnew_next_sd_kRLoRxLdL8c0Z3Mg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kRLoRxLdL8c0Z3Mg');
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
  //appendnew_flow_ProductListComponent_Catch
}
