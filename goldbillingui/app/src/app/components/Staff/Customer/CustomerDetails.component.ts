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
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms'; //_splitter_
import { HTTPService } from 'app/sd-services/HTTPService'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-CustomerDetails',
  templateUrl: './CustomerDetails.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class CustomerDetailsComponent {
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
      this.sd_dX7VufnNfIM9GPeP(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_dX7VufnNfIM9GPeP(bh) {
    try {
      bh = this.sd_tLNwWIqkA4PwvlHt(bh);
      //appendnew_next_sd_dX7VufnNfIM9GPeP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dX7VufnNfIM9GPeP');
    }
  }

  addCustomer(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_aAyoeuIAgrtNQVAI(bh);
      //appendnew_next_addCustomer
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rSkPr40jZJSDPXxD');
    }
  }

  //appendnew_flow_CustomerDetailsComponent_start

  sd_tLNwWIqkA4PwvlHt(bh) {
    try {
      this.page.formGroup = FormGroup;
      this.page.formControl = FormControl;
      this.page.validator = Validators;

      bh = this.sd_jBx3USIkXjhRN3s2(bh);
      //appendnew_next_sd_tLNwWIqkA4PwvlHt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tLNwWIqkA4PwvlHt');
    }
  }

  sd_jBx3USIkXjhRN3s2(bh) {
    try {
      const page = this.page;
      page.addCustomer = new page.formGroup({
        temp: new page.formControl('', [page.validator.required]),
        name: new page.formControl('', [page.validator.required]),
        email: new page.formControl('', [page.validator.required]),
        phone: new page.formControl('', [page.validator.required]),
        address: new page.formControl('', [page.validator.required]),
        city: new page.formControl('', [page.validator.required]),
      });

      //appendnew_next_sd_jBx3USIkXjhRN3s2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jBx3USIkXjhRN3s2');
    }
  }

  sd_aAyoeuIAgrtNQVAI(bh) {
    try {
      const page = this.page;
      bh.input.method = 'post';
      bh.input.url = 'user';

      console.log(page.addCustomer.value);

      bh.input.body = page.addCustomer.value;

      bh = this.sd_1DMpb6qh7QbcwIHr(bh);
      //appendnew_next_sd_aAyoeuIAgrtNQVAI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aAyoeuIAgrtNQVAI');
    }
  }

  async sd_1DMpb6qh7QbcwIHr(bh) {
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
      bh.input.result = outputVariables.input.result;

      bh = this.sd_Y5tRwWLJd2IhMdOy(bh);
      //appendnew_next_sd_1DMpb6qh7QbcwIHr
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1DMpb6qh7QbcwIHr');
    }
  }

  sd_Y5tRwWLJd2IhMdOy(bh) {
    try {
      const page = this.page;
      history.back();

      //appendnew_next_sd_Y5tRwWLJd2IhMdOy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Y5tRwWLJd2IhMdOy');
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
  //appendnew_flow_CustomerDetailsComponent_Catch
}
