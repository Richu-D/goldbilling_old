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
import { FormGroup, FormControl, Validators } from '@angular/forms'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-ScannerPage',
  templateUrl: './ScannerPage.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class ScannerPageComponent {
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
      this.sd_10YjKy3zAquVpFcP_1_2(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_10YjKy3zAquVpFcP_1_2(bh) {
    try {
      bh = this.sd_bYosjTCqnx97WsTD_1_2(bh);
      //appendnew_next_sd_10YjKy3zAquVpFcP_1_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_L3L0hhvCRf5dKgNZ');
    }
  }

  toggleManualCodeInput_2(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_AgpFFAvlnvI5OGvb_1_2(bh);
      //appendnew_next_toggleManualCodeInput_2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7Mh03wJG1PuLlOn3');
    }
  }

  sd_wf98MsOb4CxMBTWi_1_2(bh) {
    try {
      bh = this.sd_MlGHKwbWk02tGe7F_2(bh);
      //appendnew_next_sd_wf98MsOb4CxMBTWi_1_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Akmf4Nj17D0BzRR6');
    }
  }

  toggleCamera_2(action: any = undefined, event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { action: action, event: event };
      bh.local = {};

      bh = this.sd_TvDHYVlmPOLcYB44_1_2(bh);
      //appendnew_next_toggleCamera_2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_f7bBd4YWhqVWq6Cn');
    }
  }

  getScannedProduct_2(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_Js0mj4LsFroQNDc2_1_2(bh);
      //appendnew_next_getScannedProduct_2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tC8PaCwp7wLqyKEU');
    }
  }

  qrResult_2(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};

      bh = this.sd_0owVfOFZ64EYcsvs(bh);
      //appendnew_next_qrResult_2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_euHZcLMJ7ZEZ32G2');
    }
  }

  //appendnew_flow_ScannerPageComponent_start

  sd_bYosjTCqnx97WsTD_1_2(bh) {
    try {
      this.page.output = this.page.output;

      bh = this.sd_GsiqEecRCk9Nv0Aw_1_2(bh);
      //appendnew_next_sd_bYosjTCqnx97WsTD_1_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yFifZVnrL73o30wC');
    }
  }

  sd_GsiqEecRCk9Nv0Aw_1_2(bh) {
    try {
      this.page.formGroup = FormGroup;
      this.page.formControl = FormControl;
      this.page.validator = Validators;

      bh = this.sd_m6ldH1rtMeNOlIiH_1_2(bh);
      //appendnew_next_sd_GsiqEecRCk9Nv0Aw_1_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FQbN0PIGSElsgvFS');
    }
  }

  sd_m6ldH1rtMeNOlIiH_1_2(bh) {
    try {
      const page = this.page;
      page.addRegisterForm = new page.formGroup({
        id: new page.formControl('', [page.validator.required]),
      });

      //appendnew_next_sd_m6ldH1rtMeNOlIiH_1_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ytjsGMbAhT49i89l');
    }
  }

  sd_AgpFFAvlnvI5OGvb_1_2(bh) {
    try {
      const page = this.page;
      page.showManualQRCodeInput = !page.showManualQRCodeInput;

      //appendnew_next_sd_AgpFFAvlnvI5OGvb_1_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NE5w7mCbt5kiQyqW');
    }
  }

  sd_MlGHKwbWk02tGe7F_2(bh) {
    try {
      const page = this.page;
      page?.action?.stop();

      //appendnew_next_sd_MlGHKwbWk02tGe7F_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Z0UjwPHsNMMeujj9');
    }
  }

  async sd_TvDHYVlmPOLcYB44_1_2(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['eq'](
          this.page.action,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_SIArGH50MxMZMhTp_1_2(bh);
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
        bh = await this.sd_4MdZgOD3x2xIBzIW_1_2(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vTRDpRDd60S8QBbn');
    }
  }

  sd_4MdZgOD3x2xIBzIW_1_2(bh) {
    try {
      const page = this.page;
      if (page?.action?.isStart) {
        page?.action?.stop();
      } else {
        page?.action?.start();
      }

      //appendnew_next_sd_4MdZgOD3x2xIBzIW_1_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NzE2CqQf7mqdZbii');
    }
  }

  sd_SIArGH50MxMZMhTp_1_2(bh) {
    try {
      this.page.action = bh.input?.action;

      bh = this.sd_4MdZgOD3x2xIBzIW_1_2(bh);
      //appendnew_next_sd_SIArGH50MxMZMhTp_1_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pT5Juurx805alDPR');
    }
  }

  sd_Js0mj4LsFroQNDc2_1_2(bh) {
    try {
      const page = this.page;
      bh.local.productId = page.addRegisterForm.value.id;

      console.log(bh.local.productId, 'bh.local.productId');

      bh = this.sd_0owVfOFZ64EYcsvs(bh);
      //appendnew_next_sd_Js0mj4LsFroQNDc2_1_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SQXQyvRfpYpa4Lyv');
    }
  }

  sd_0owVfOFZ64EYcsvs(bh) {
    try {
      bh.local.ssdURL = bh.system.environment.properties.ssdURL;

      bh = this.sd_JcDdfgLIUOiAjjBh_1_2(bh);
      //appendnew_next_sd_0owVfOFZ64EYcsvs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0owVfOFZ64EYcsvs');
    }
  }

  sd_JcDdfgLIUOiAjjBh_1_2(bh) {
    try {
      const page = this.page;
      bh.local.productId = bh?.local?.productId || null;

      if (bh?.input?.event && bh?.input?.event[0]?.value) {
        console.log(`QR value is ${bh?.input?.event[0]?.value}`);
        bh.local.productId = bh?.input?.event[0]?.value;
        page.action.stop();
      }

      bh.local.method = 'get';
      bh.local.url = `${bh.local.ssdURL}product?id=${bh.local.productId}`;

      bh = this.sd_nTQobrnNkf1MMT67(bh);
      //appendnew_next_sd_JcDdfgLIUOiAjjBh_1_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UerXobRedI1SvdHu');
    }
  }

  sd_nTQobrnNkf1MMT67(bh) {
    try {
      if (
        this.sdService.operators['nnull'](
          bh.local.productId,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_x4jmM62ytYpyxQoX(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nTQobrnNkf1MMT67');
    }
  }

  async sd_x4jmM62ytYpyxQoX(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: bh.local.method,
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);

      bh = this.sd_T4De5Tu9hqRpK9L4(bh);
      //appendnew_next_sd_x4jmM62ytYpyxQoX
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_x4jmM62ytYpyxQoX');
    }
  }

  sd_T4De5Tu9hqRpK9L4(bh) {
    try {
      localStorage.setItem(
        'tempProduct',
        JSON.stringify(bh.local.result.product)
      );

      bh = this.sd_IHRLj1LHh3yY7Da0(bh);
      //appendnew_next_sd_T4De5Tu9hqRpK9L4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_T4De5Tu9hqRpK9L4');
    }
  }

  async sd_IHRLj1LHh3yY7Da0(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/details');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);

      //appendnew_next_sd_IHRLj1LHh3yY7Da0
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IHRLj1LHh3yY7Da0');
    }
  }

  sd_x2d4s15FtV9OMNUr(bh) {
    try {
      const page = this.page;
      page.action.start();

      bh = this.sd_G6tVAIiU7AJXsBnw(bh);
      //appendnew_next_sd_x2d4s15FtV9OMNUr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_x2d4s15FtV9OMNUr');
    }
  }

  sd_G6tVAIiU7AJXsBnw(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Product not found', '', {
        duration: 1000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });

      //appendnew_next_sd_G6tVAIiU7AJXsBnw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_G6tVAIiU7AJXsBnw');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_wf98MsOb4CxMBTWi_1_2(bh);
    }
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false ||
      this.sd_FqaJtfPcrfPJjkpT(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_FqaJtfPcrfPJjkpT(bh) {
    const nodes = ['sd_x4jmM62ytYpyxQoX'];
    if (nodes.includes(bh.errorSource)) {
      bh = this.sd_x2d4s15FtV9OMNUr(bh);
      //appendnew_next_sd_FqaJtfPcrfPJjkpT
      return true;
    }
    return false;
  }
  //appendnew_flow_ScannerPageComponent_Catch
}
