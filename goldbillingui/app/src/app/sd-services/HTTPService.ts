/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class HTTPService {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_HTTPService

  async sd_ZjZwWFbxVVMtewVh(
    body: any = undefined,
    method: any = undefined,
    result: any = undefined,
    url: any = undefined,
    params: any = undefined,
    ...others
  ) {
    try {
      var bh: any = {
        input: {
          body: body,
          method: method,
          result: result,
          url: url,
          params: params,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_loVSBkXDPxXV7DYh(bh);
      //appendnew_next_sd_ZjZwWFbxVVMtewVh
      return (
        // formatting output variables
        {
          input: {
            result: bh.input.result,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZjZwWFbxVVMtewVh');
    }
  }

  async routesCheckAdmin(...others) {
    try {
      var bh: any = {
        input: {},
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_9Z9heiaR9PO8sL58(bh);
      //appendnew_next_routesCheckAdmin
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_H9IiyjRF8pPADjfg');
    }
  }

  //appendnew_flow_HTTPService_start

  async sd_loVSBkXDPxXV7DYh(bh) {
    try {
      bh.input.url = bh.system.environment.properties.ssdURL + bh.input.url;

      bh = await this.sd_cPatTDhO6CHmYUvc(bh);
      //appendnew_next_sd_loVSBkXDPxXV7DYh
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_loVSBkXDPxXV7DYh');
    }
  }

  async sd_cPatTDhO6CHmYUvc(bh) {
    try {
      let requestOptions = {
        url: bh.input.url,
        method: bh.input.method,
        responseType: 'json',
        headers: {},
        params: bh.input.params,
        body: bh.input.body,
        withCredentials: true,
      };
      bh.input.result = await this.sdService.nHttpRequest(requestOptions);

      //appendnew_next_sd_cPatTDhO6CHmYUvc
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cPatTDhO6CHmYUvc');
    }
  }

  async sd_9Z9heiaR9PO8sL58(bh) {
    try {
      bh.input.url = bh.system.environment.properties.ssdURL + 'admin';

      bh = await this.sd_90bSpYHitS0G75Ng(bh);
      //appendnew_next_sd_9Z9heiaR9PO8sL58
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9Z9heiaR9PO8sL58');
    }
  }

  async sd_90bSpYHitS0G75Ng(bh) {
    try {
      let requestOptions = {
        url: bh.input.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
        withCredentials: true,
      };
      bh.input.check = await this.sdService.nHttpRequest(requestOptions);

      bh = await this.sd_1WvN704EINQXe9Tp(bh);
      //appendnew_next_sd_90bSpYHitS0G75Ng
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_90bSpYHitS0G75Ng');
    }
  }

  async sd_1WvN704EINQXe9Tp(bh) {
    try {
      if (
        this.sdService.operators['sne'](
          bh.input.check.message,
          'admin verify',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_ZQvxl1x2JsWJRfl6(bh);
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1WvN704EINQXe9Tp');
    }
  }

  async sd_ZQvxl1x2JsWJRfl6(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/admin-log');
      await this.router.navigate(
        [this.sdService.formatPathWithParams(path, undefined)],
        {
          queryParams: Object.assign(qprm, ''),
        }
      );

      //appendnew_next_sd_ZQvxl1x2JsWJRfl6
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZQvxl1x2JsWJRfl6');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
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
  //appendnew_flow_HTTPService_Catch
}
