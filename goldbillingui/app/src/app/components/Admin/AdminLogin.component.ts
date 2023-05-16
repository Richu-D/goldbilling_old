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
import { FormGroup, FormControl, Validators } from '@angular/forms'; //_splitter_
import { HTTPService } from 'app/sd-services/HTTPService'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-AdminLogin',
  templateUrl: './AdminLogin.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class AdminLoginComponent {
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
      this.sd_1HixnkVCj7Kc2tTL(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_1HixnkVCj7Kc2tTL(bh) {
    try {
      bh = this.sd_d4kvYbuJJ23bxlmt(bh);
      //appendnew_next_sd_1HixnkVCj7Kc2tTL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1HixnkVCj7Kc2tTL');
    }
  }

  adminLogin(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_Itbt74Y7WsxYYb7i(bh);
      //appendnew_next_adminLogin
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zYjhTRgtc372bCcL');
    }
  }

  //appendnew_flow_AdminLoginComponent_start

  sd_d4kvYbuJJ23bxlmt(bh) {
    try {
      bh = this.sd_ogikCNIOvjoPApyB(bh);
      //appendnew_next_sd_d4kvYbuJJ23bxlmt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_d4kvYbuJJ23bxlmt');
    }
  }

  sd_ogikCNIOvjoPApyB(bh) {
    try {
      this.page.formGroup = FormGroup;
      this.page.formControl = FormControl;
      this.page.validator = Validators;

      bh = this.sd_5rnU78cH4LvEkRII(bh);
      //appendnew_next_sd_ogikCNIOvjoPApyB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ogikCNIOvjoPApyB');
    }
  }

  sd_5rnU78cH4LvEkRII(bh) {
    try {
      const page = this.page;
      page.addRegisterForm = new page.formGroup({
        email: new page.formControl('', [page.validator.required]),
        password: new page.formControl('', [page.validator.required]),
      });

      //appendnew_next_sd_5rnU78cH4LvEkRII
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5rnU78cH4LvEkRII');
    }
  }

  sd_Itbt74Y7WsxYYb7i(bh) {
    try {
      const page = this.page;
      bh.input.method = 'post';
      bh.input.url = 'admin/login';

      bh.input.body = page.addRegisterForm.value;

      bh = this.sd_gxD8icNmeNP9E7Ub(bh);
      //appendnew_next_sd_Itbt74Y7WsxYYb7i
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Itbt74Y7WsxYYb7i');
    }
  }

  async sd_gxD8icNmeNP9E7Ub(bh) {
    try {
      const HTTPServiceInstance: HTTPService =
        this.__page_injector__.get(HTTPService);

      let outputVariables = await HTTPServiceInstance.sd_ZjZwWFbxVVMtewVh(
        bh.input.body,
        bh.input.method,
        undefined,
        bh.input.url,
        undefined
      );
      bh.response = outputVariables.input.result;

      bh = this.sd_nGVubRJJ4wwKbfFQ(bh);
      //appendnew_next_sd_gxD8icNmeNP9E7Ub
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gxD8icNmeNP9E7Ub');
    }
  }

  sd_nGVubRJJ4wwKbfFQ(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.response.message,
          'Login successfuly completed',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_ueYHqqadsxMYAkfU(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nGVubRJJ4wwKbfFQ');
    }
  }

  async sd_ueYHqqadsxMYAkfU(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/admin/home');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);

      //appendnew_next_sd_ueYHqqadsxMYAkfU
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ueYHqqadsxMYAkfU');
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
  //appendnew_flow_AdminLoginComponent_Catch
}
