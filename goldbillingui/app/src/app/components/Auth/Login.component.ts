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
import { FormGroup, FormControl, Validators } from '@angular/forms'; //_splitter_
import { HTTPService } from 'app/sd-services/HTTPService'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Login',
  templateUrl: './Login.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class LoginComponent {
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
      this.sd_1jblOdx9KIYkW4Aa(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_1jblOdx9KIYkW4Aa(bh) {
    try {
      bh = this.sd_1DC4mAk7oUshCOHw(bh);
      //appendnew_next_sd_1jblOdx9KIYkW4Aa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1jblOdx9KIYkW4Aa');
    }
  }

  iDS(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_5wjf8Z5IBC19lFTf(bh);
      //appendnew_next_iDS
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8s7S8FpHVIsxZtrG');
    }
  }

  login(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_vJW4pWEPWjSxYoVx(bh);
      //appendnew_next_login
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZM3khpUodjiRaEQO');
    }
  }

  //appendnew_flow_LoginComponent_start

  sd_1DC4mAk7oUshCOHw(bh) {
    try {
      bh = this.sd_zBANKzNWLlWmgY7J(bh);
      bh = this.sd_rPkOYGKWqUnpw3Oc(bh);
      //appendnew_next_sd_1DC4mAk7oUshCOHw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1DC4mAk7oUshCOHw');
    }
  }

  sd_zBANKzNWLlWmgY7J(bh) {
    try {
      this.page.formGroup = FormGroup;
      this.page.formControl = FormControl;
      this.page.validator = Validators;

      bh = this.sd_iiEL6EKSKfAeNbnY(bh);
      //appendnew_next_sd_zBANKzNWLlWmgY7J
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zBANKzNWLlWmgY7J');
    }
  }

  sd_iiEL6EKSKfAeNbnY(bh) {
    try {
      const page = this.page;
      page.addRegisterForm = new page.formGroup({
        email: new page.formControl('', [page.validator.required]),
        password: new page.formControl('', [page.validator.required]),
      });

      //appendnew_next_sd_iiEL6EKSKfAeNbnY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iiEL6EKSKfAeNbnY');
    }
  }

  sd_rPkOYGKWqUnpw3Oc(bh) {
    try {
      const page = this.page;
      bh.input.url = bh.system.environment.properties.ssdURL + 'check';

      bh = this.sd_LE0igqOTQMQYSjKK(bh);
      //appendnew_next_sd_rPkOYGKWqUnpw3Oc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rPkOYGKWqUnpw3Oc');
    }
  }

  async sd_LE0igqOTQMQYSjKK(bh) {
    try {
      let requestOptions = {
        url: bh.input.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.input.check = await this.sdService.nHttpRequest(requestOptions);

      bh = this.sd_zFuCzXVxGwejlBrl(bh);
      //appendnew_next_sd_LE0igqOTQMQYSjKK
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LE0igqOTQMQYSjKK');
    }
  }

  sd_zFuCzXVxGwejlBrl(bh) {
    try {
      if (
        this.sdService.operators['se'](
          bh.input.check.result,
          'Checked',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_8bPc8W6ORqgO79cJ(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zFuCzXVxGwejlBrl');
    }
  }

  sd_8bPc8W6ORqgO79cJ(bh) {
    try {
      const page = this.page;
      history.back();
      console.log('here');

      //appendnew_next_sd_8bPc8W6ORqgO79cJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8bPc8W6ORqgO79cJ');
    }
  }

  sd_5wjf8Z5IBC19lFTf(bh) {
    try {
      const page = this.page;
      bh.system.oauthService.login('/home/home');

      //appendnew_next_sd_5wjf8Z5IBC19lFTf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5wjf8Z5IBC19lFTf');
    }
  }

  sd_NUNY3C6pHxlsi724(bh) {
    try {
      if (
        this.sdService.operators['sne'](
          bh.error.error.message,
          'Session not present',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_krmLgt9LY1N4upiA(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NUNY3C6pHxlsi724');
    }
  }

  sd_krmLgt9LY1N4upiA(bh) {
    try {
      const page = this.page;
      history.back();
      console.log('here');

      //appendnew_next_sd_krmLgt9LY1N4upiA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_krmLgt9LY1N4upiA');
    }
  }

  sd_vJW4pWEPWjSxYoVx(bh) {
    try {
      const page = this.page;
      bh.input.method = 'post';
      bh.input.url = 'login';

      bh.input.body = page.addRegisterForm.value;

      bh = this.sd_NKzfzCET6mN5sY9s(bh);
      //appendnew_next_sd_vJW4pWEPWjSxYoVx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vJW4pWEPWjSxYoVx');
    }
  }

  async sd_NKzfzCET6mN5sY9s(bh) {
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

      bh = this.sd_Z3qQP4G3H6DZMM9m(bh);
      //appendnew_next_sd_NKzfzCET6mN5sY9s
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NKzfzCET6mN5sY9s');
    }
  }

  sd_Z3qQP4G3H6DZMM9m(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.response,
          'Login successfuly completed',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_GPdkefvSvMVZvtbU(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Z3qQP4G3H6DZMM9m');
    }
  }

  async sd_GPdkefvSvMVZvtbU(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/home');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });

      //appendnew_next_sd_GPdkefvSvMVZvtbU
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GPdkefvSvMVZvtbU');
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
      false ||
      this.sd_vc8PZ2vGSKwsBvpw(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_vc8PZ2vGSKwsBvpw(bh) {
    const nodes = ['sd_LE0igqOTQMQYSjKK'];
    if (nodes.includes(bh.errorSource)) {
      bh = this.sd_NUNY3C6pHxlsi724(bh);
      //appendnew_next_sd_vc8PZ2vGSKwsBvpw
      return true;
    }
    return false;
  }
  //appendnew_flow_LoginComponent_Catch
}
