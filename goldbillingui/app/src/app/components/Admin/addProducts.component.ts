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
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-addProducts',
  templateUrl: './addProducts.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class addProductsComponent {
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
      this.sd_tTxpswopga7ioVpk(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_tTxpswopga7ioVpk(bh) {
    try {
      bh = this.sd_mJhP3ryubWDZJKHu(bh);
      //appendnew_next_sd_tTxpswopga7ioVpk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tTxpswopga7ioVpk');
    }
  }

  postProducts(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_FgP8zeo9Rv7VDYxy(bh);
      //appendnew_next_postProducts
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0CtpwUulzcTAixfA');
    }
  }

  getFile(image: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { image: image };
      bh.local = {};

      bh = this.sd_mafCmhFZ5jwllPm9(bh);
      //appendnew_next_getFile
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UjJceHWhdbnBRxK8');
    }
  }

  //appendnew_flow_addProductsComponent_start

  sd_mJhP3ryubWDZJKHu(bh) {
    try {
      bh = this.sd_8KlVdPdtKCviygvE(bh);
      //appendnew_next_sd_mJhP3ryubWDZJKHu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mJhP3ryubWDZJKHu');
    }
  }

  async sd_8KlVdPdtKCviygvE(bh) {
    try {
      const HTTPServiceInstance: HTTPService =
        this.__page_injector__.get(HTTPService);

      let outputVariables = await HTTPServiceInstance.routesCheckAdmin();

      bh = this.sd_SByBAO3XW7kLITQy(bh);
      //appendnew_next_sd_8KlVdPdtKCviygvE
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8KlVdPdtKCviygvE');
    }
  }

  sd_SByBAO3XW7kLITQy(bh) {
    try {
      this.page.formGroup = FormGroup;
      this.page.formControl = FormControl;
      this.page.validator = Validators;

      bh = this.sd_0BqQWnh6URYMXGrL(bh);
      //appendnew_next_sd_SByBAO3XW7kLITQy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SByBAO3XW7kLITQy');
    }
  }

  sd_0BqQWnh6URYMXGrL(bh) {
    try {
      const page = this.page;
      page.addRegisterForm = new page.formGroup({
        name: new page.formControl('', [page.validator.required]),
        price: new page.formControl('', [page.validator.required]),
        description: new page.formControl('', [page.validator.required]),
        image: new page.formControl('', [page.validator.required]),
      });

      //appendnew_next_sd_0BqQWnh6URYMXGrL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0BqQWnh6URYMXGrL');
    }
  }

  sd_FgP8zeo9Rv7VDYxy(bh) {
    try {
      const page = this.page;
      bh.input.method = 'post';
      bh.input.url = 'product';

      bh.input.body = page.addRegisterForm.value;

      bh = this.sd_zFwZz5Hdu9AOzvFU(bh);
      //appendnew_next_sd_FgP8zeo9Rv7VDYxy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FgP8zeo9Rv7VDYxy');
    }
  }

  async sd_zFwZz5Hdu9AOzvFU(bh) {
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

      bh = this.sd_aHtlgcYBJz2ZCw7X(bh);
      //appendnew_next_sd_zFwZz5Hdu9AOzvFU
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zFwZz5Hdu9AOzvFU');
    }
  }

  async sd_aHtlgcYBJz2ZCw7X(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/admin/home');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);

      //appendnew_next_sd_aHtlgcYBJz2ZCw7X
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aHtlgcYBJz2ZCw7X');
    }
  }

  sd_mafCmhFZ5jwllPm9(bh) {
    try {
      const page = this.page;
      page.selectedFile = bh.input.image.target.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        page.imageSrc = reader.result;

        const fileString = reader.result.toString();

        // Upload the file string to Cloudinary
        // this.uploadToCloudinary(fileString);

        page.addRegisterForm.controls.image.setValue(fileString);
      };
      reader.readAsDataURL(page.selectedFile);

      //appendnew_next_sd_mafCmhFZ5jwllPm9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mafCmhFZ5jwllPm9');
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
  //appendnew_flow_addProductsComponent_Catch
}
