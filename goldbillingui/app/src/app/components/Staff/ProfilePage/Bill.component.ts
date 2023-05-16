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
import { ActivatedRoute } from '@angular/router'; //_splitter_
import { HTTPService } from 'app/sd-services/HTTPService'; //_splitter_
import { MatSort, SortDirection } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Bill',
  templateUrl: './Bill.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class BillComponent implements AfterViewInit {
  @ViewChild(MatSort)
  public MatSort: any = null;
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
      this.sd_qkReXv8Cd56kHOb1(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    const routesd_qI0LPtgC8ATH0MNKInstance =
      this.__page_injector__.get(ActivatedRoute);
    this.page._route_sd_qI0LPtgC8ATH0MNK =
      routesd_qI0LPtgC8ATH0MNKInstance.queryParams.subscribe((event: any) => {
        let bh = this.sdService.__constructDefault({});
        bh.input.id = event;
        this.sd_qI0LPtgC8ATH0MNK(bh);
      });

    //append_listeners
  }

  sd_qkReXv8Cd56kHOb1(bh) {
    try {
      bh = this.sd_BfNignWfHzJ2brXK(bh);
      //appendnew_next_sd_qkReXv8Cd56kHOb1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qkReXv8Cd56kHOb1');
    }
  }

  sd_qI0LPtgC8ATH0MNK(bh) {
    try {
      bh = this.sd_fsXFCK5jv4Qv1Z4h(bh);
      //appendnew_next_sd_qI0LPtgC8ATH0MNK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qI0LPtgC8ATH0MNK');
    }
  }

  ngAfterViewInit() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);

      bh = this.sd_xKCCTWKzvgDN0rx7_1(bh);
      //appendnew_next_ngAfterViewInit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wLIV8zlxawIlv73i');
    }
  }

  //appendnew_flow_BillComponent_start

  sd_BfNignWfHzJ2brXK(bh) {
    try {
      bh = this.sd_eJuzOUTYKNgXaqdz_1(bh);
      //appendnew_next_sd_BfNignWfHzJ2brXK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BfNignWfHzJ2brXK');
    }
  }

  sd_eJuzOUTYKNgXaqdz_1(bh) {
    try {
      const page = this.page;
      bh.local.dataSource = new MatTableDataSource([
        {
          category: 'Chain',
          product: 'Simple',
          weight: 1.0079,
          price: '12000',
          wc: '2000',
          total: '14000',
          sgst: '1400',
          cgst: '1400',
        },
        {
          category: 'Chain',
          product: 'Simple',
          weight: 1.0079,
          price: '12000',
          wc: '2000',
          total: '14000',
          sgst: '1400',
          cgst: '1400',
        },
        {
          category: 'Chain',
          product: 'Simple',
          weight: 1.0079,
          price: '12000',
          wc: '2000',
          total: '14000',
          sgst: '1400',
          cgst: '1400',
        },
        {
          category: 'Chain',
          product: 'Simple',
          weight: 1.0079,
          price: '12000',
          wc: '2000',
          total: '14000',
          sgst: '1400',
          cgst: '1400',
        },
        {
          category: 'Chain',
          product: 'Simple',
          weight: 1.0079,
          price: '12000',
          wc: '2000',
          total: '14000',
          sgst: '1400',
          cgst: '1400',
        },
      ]);

      bh = this.sd_E9QbOlnVduPNV5MO_1(bh);
      //appendnew_next_sd_eJuzOUTYKNgXaqdz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_v3S4gXqxtrwcVRG9');
    }
  }

  sd_E9QbOlnVduPNV5MO_1(bh) {
    try {
      this.page.tableData = bh.local.dataSource;

      //appendnew_next_sd_E9QbOlnVduPNV5MO_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QgEDFtubW9hNCWYJ');
    }
  }

  sd_fsXFCK5jv4Qv1Z4h(bh) {
    try {
      const page = this.page;
      console.log(bh.input.id);

      bh.input.method = 'get';
      bh.input.url = 'order/' + bh.input.id.id;

      bh = this.sd_AX4S6wWblloyfw5f(bh);
      //appendnew_next_sd_fsXFCK5jv4Qv1Z4h
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fsXFCK5jv4Qv1Z4h');
    }
  }

  async sd_AX4S6wWblloyfw5f(bh) {
    try {
      const HTTPServiceInstance: HTTPService =
        this.__page_injector__.get(HTTPService);

      let outputVariables = await HTTPServiceInstance.sd_ZjZwWFbxVVMtewVh(
        undefined,
        bh.input.method,
        undefined,
        bh.input.url,
        undefined
      );
      this.page.bill = outputVariables.input.result;

      //appendnew_next_sd_AX4S6wWblloyfw5f
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AX4S6wWblloyfw5f');
    }
  }

  sd_xKCCTWKzvgDN0rx7_1(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatSort: this.MatSort,
      });

      bh = this.sd_2VNGqvcKee34lvOz_1(bh);
      //appendnew_next_sd_xKCCTWKzvgDN0rx7_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Y59Ck18G19Qj0wQm');
    }
  }

  sd_2VNGqvcKee34lvOz_1(bh) {
    try {
      const page = this.page;
      this.page.tableData.sort = this.MatSort;

      //appendnew_next_sd_2VNGqvcKee34lvOz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PRL6XQAhjN00VnbZ');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      const _route_sd_qI0LPtgC8ATH0MNK = this.page._route_sd_qI0LPtgC8ATH0MNK;
      if (
        _route_sd_qI0LPtgC8ATH0MNK &&
        typeof _route_sd_qI0LPtgC8ATH0MNK.unsubscribe === 'function'
      ) {
        _route_sd_qI0LPtgC8ATH0MNK.unsubscribe();
      }
    }
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
  //appendnew_flow_BillComponent_Catch
}
