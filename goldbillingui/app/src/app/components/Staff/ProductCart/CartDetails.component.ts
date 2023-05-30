/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
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
  selector: 'bh-CartDetails',
  templateUrl: './CartDetails.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class CartDetailsComponent implements OnChanges {
  @Input('values')
  public values: any = undefined;
  @Input('newVariable')
  public newVariable: any = undefined;
  @Output('grandTotal')
  public grandTotal: any = new EventEmitter<any>();
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
      this.sd_PObBTiCQmQu6Vp0c(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_PObBTiCQmQu6Vp0c(bh) {
    try {
      bh = this.sd_ILwk47s13XUxHkqU(bh);
      //appendnew_next_sd_PObBTiCQmQu6Vp0c
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PObBTiCQmQu6Vp0c');
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.changes = changes;

      bh = this.sd_GFxQaH2gdytamZw2(bh);
      //appendnew_next_ngOnChanges
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EoeZ26pStv3EPNmn');
    }
  }

  //appendnew_flow_CartDetailsComponent_start

  sd_ILwk47s13XUxHkqU(bh) {
    try {
      bh = this.sd_5aBO2ma2aEjw4fWa(bh);
      //appendnew_next_sd_ILwk47s13XUxHkqU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ILwk47s13XUxHkqU');
    }
  }

  sd_5aBO2ma2aEjw4fWa(bh) {
    try {
      const page = this.page;
      bh.input.method = 'get';
      bh.input.url = 'cartTotal';

      bh = this.sd_n5o4jYIwEqLitwuD(bh);
      //appendnew_next_sd_5aBO2ma2aEjw4fWa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5aBO2ma2aEjw4fWa');
    }
  }

  async sd_n5o4jYIwEqLitwuD(bh) {
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
      this.page.total = outputVariables.input.result;

      bh = this.sd_VgBu5rpBSKBusFdF(bh);
      //appendnew_next_sd_n5o4jYIwEqLitwuD
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_n5o4jYIwEqLitwuD');
    }
  }

  sd_VgBu5rpBSKBusFdF(bh) {
    try {
      const page = this.page;
      bh.local.grandTotal =
        (2 / 100) * page?.total?.result[0]?.total +
        page?.total?.result[0]?.total;

      bh = this.sd_zZbquphSz9p0ub3o(bh);
      //appendnew_next_sd_VgBu5rpBSKBusFdF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VgBu5rpBSKBusFdF');
    }
  }

  sd_zZbquphSz9p0ub3o(bh) {
    try {
      bh.pageOutput.grandTotal.emit(bh.local.grandTotal);

      //appendnew_next_sd_zZbquphSz9p0ub3o
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zZbquphSz9p0ub3o');
    }
  }

  sd_GFxQaH2gdytamZw2(bh) {
    try {
      const page = this.page;
      bh.input.method = 'get';
      bh.input.url = 'cartTotal';

      console.log('reached');

      bh = this.sd_HqWW30j15jJjKzhl(bh);
      //appendnew_next_sd_GFxQaH2gdytamZw2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GFxQaH2gdytamZw2');
    }
  }

  async sd_HqWW30j15jJjKzhl(bh) {
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
      this.page.total = outputVariables.input.result;

      //appendnew_next_sd_HqWW30j15jJjKzhl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HqWW30j15jJjKzhl');
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
  //appendnew_flow_CartDetailsComponent_Catch
}
