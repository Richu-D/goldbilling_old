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
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-ManualCode',
  templateUrl: './ManualCode.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class ManualCodeComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_KIl5vCRoXaYQxEVc(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_KIl5vCRoXaYQxEVc(bh) {
    try {
      bh = this.sd_ylEzo8lNOPwDbT7K(bh);
      //appendnew_next_sd_KIl5vCRoXaYQxEVc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KIl5vCRoXaYQxEVc');
    }
  }

  getScannedProduct(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_G9akrGURzn0shKtQ(bh);
      //appendnew_next_getScannedProduct
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FkNS1ju9HeFytBGH');
    }
  }

  //appendnew_flow_ManualCodeComponent_start

  sd_ylEzo8lNOPwDbT7K(bh) {
    try {
      bh = this.sd_QTvmX0mLARrMtuhv(bh);
      //appendnew_next_sd_ylEzo8lNOPwDbT7K
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ylEzo8lNOPwDbT7K');
    }
  }

  sd_QTvmX0mLARrMtuhv(bh) {
    try {
      this.page.formGroup = FormGroup;
      this.page.formControl = FormControl;
      this.page.validator = Validators;

      bh = this.sd_vVtTwHWS8Dz6Mey0(bh);
      //appendnew_next_sd_QTvmX0mLARrMtuhv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QTvmX0mLARrMtuhv');
    }
  }

  sd_vVtTwHWS8Dz6Mey0(bh) {
    try {
      const page = this.page;
      page.addRegisterForm = new page.formGroup({
        id: new page.formControl('', [page.validator.required]),
      });

      //appendnew_next_sd_vVtTwHWS8Dz6Mey0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vVtTwHWS8Dz6Mey0');
    }
  }

  sd_G9akrGURzn0shKtQ(bh) {
    try {
      const page = this.page;
      bh.input.method = 'get';
      bh.input.url = 'product';

      bh.input.params = { id: page.addRegisterForm.value.id };

      bh = this.sd_pvSU418TBtXugaDB(bh);
      //appendnew_next_sd_G9akrGURzn0shKtQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_G9akrGURzn0shKtQ');
    }
  }

  async sd_pvSU418TBtXugaDB(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/details');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, bh.input.params),
        });

      //appendnew_next_sd_pvSU418TBtXugaDB
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pvSU418TBtXugaDB');
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
  //appendnew_flow_ManualCodeComponent_Catch
}
