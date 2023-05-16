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
import { MatPaginator } from '@angular/material/paginator'; //_splitter_
import { MatSort, SortDirection } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-ViewOrders',
  templateUrl: './ViewOrders.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class ViewOrdersComponent implements AfterViewInit {
  @ViewChild(MatSort)
  public MatSort: any = null;
  @ViewChild(MatPaginator)
  public MatPaginator: any = null;
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
      this.sd_Ckeq6Oci12YLWSeq(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_Ckeq6Oci12YLWSeq(bh) {
    try {
      bh = this.sd_VmjUn9nFDTCqYQlk(bh);
      //appendnew_next_sd_Ckeq6Oci12YLWSeq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ckeq6Oci12YLWSeq');
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
      return this.errorHandler(bh, e, 'sd_xdtTLycne35DPOf3');
    }
  }

  onFilter_3(filterEvent: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { filterEvent: filterEvent };
      bh.local = {};

      bh = this.sd_iBlFYTlpoczCmWts_3(bh);
      //appendnew_next_onFilter_3
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JQVN7oBkD0tPsA7A');
    }
  }

  onBackdrop(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_a9JlyA98kw25emBL(bh);
      //appendnew_next_onBackdrop
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EctRizjQ6aXCxd4t');
    }
  }

  //appendnew_flow_ViewOrdersComponent_start

  sd_VmjUn9nFDTCqYQlk(bh) {
    try {
      bh = this.sd_Z2e0GLnYr0MerdGv(bh);
      //appendnew_next_sd_VmjUn9nFDTCqYQlk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VmjUn9nFDTCqYQlk');
    }
  }

  async sd_Z2e0GLnYr0MerdGv(bh) {
    try {
      const HTTPServiceInstance: HTTPService =
        this.__page_injector__.get(HTTPService);

      let outputVariables = await HTTPServiceInstance.routesCheckAdmin();

      bh = this.sd_lwPYcJ0AGIDAFP80(bh);
      //appendnew_next_sd_Z2e0GLnYr0MerdGv
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Z2e0GLnYr0MerdGv');
    }
  }

  sd_lwPYcJ0AGIDAFP80(bh) {
    try {
      const page = this.page;
      bh.input.method = 'get';
      bh.input.url = 'order';

      bh = this.sd_32hGP7ejSwQbt37N(bh);
      //appendnew_next_sd_lwPYcJ0AGIDAFP80
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lwPYcJ0AGIDAFP80');
    }
  }

  async sd_32hGP7ejSwQbt37N(bh) {
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
      this.page.value = outputVariables.input.result;

      bh = this.sd_Q3t9gL8GP3cg8Zxf(bh);
      //appendnew_next_sd_32hGP7ejSwQbt37N
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_32hGP7ejSwQbt37N');
    }
  }

  sd_Q3t9gL8GP3cg8Zxf(bh) {
    try {
      const page = this.page;
      bh.local.dataSource = new MatTableDataSource(page.value.result.orders);

      console.log(bh.local.dataSource);

      bh = this.sd_qMYglfzg57IwXpWi(bh);
      //appendnew_next_sd_Q3t9gL8GP3cg8Zxf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Q3t9gL8GP3cg8Zxf');
    }
  }

  sd_qMYglfzg57IwXpWi(bh) {
    try {
      this.page.tableData = bh.local.dataSource;

      //appendnew_next_sd_qMYglfzg57IwXpWi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qMYglfzg57IwXpWi');
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
      return this.errorHandler(bh, e, 'sd_gMimUaVY1hcU8MvA');
    }
  }

  sd_2VNGqvcKee34lvOz_1(bh) {
    try {
      const page = this.page;
      this.page.tableData.sort = this.MatSort;

      bh = this.sd_xKCCTWKzvgDN0rx7_2(bh);
      //appendnew_next_sd_2VNGqvcKee34lvOz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_l6bBItamsVyubPnP');
    }
  }

  sd_xKCCTWKzvgDN0rx7_2(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatPaginator: this.MatPaginator,
      });

      bh = this.sd_2VNGqvcKee34lvOz_2(bh);
      //appendnew_next_sd_xKCCTWKzvgDN0rx7_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VA2ZfU7aq2kNDQ9S');
    }
  }

  sd_2VNGqvcKee34lvOz_2(bh) {
    try {
      const page = this.page;
      this.page.tableData.paginator = this.MatPaginator;

      //appendnew_next_sd_2VNGqvcKee34lvOz_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UPmeDgBAKRFOFZQi');
    }
  }

  sd_iBlFYTlpoczCmWts_3(bh) {
    try {
      const page = this.page;
      console.log(bh.input.filterEvent);
      const filterValue = (bh.input.filterEvent.target as HTMLInputElement)
        .value;
      this.page.tableData.filter = filterValue.trim().toLowerCase();

      //appendnew_next_sd_iBlFYTlpoczCmWts_3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YPyJsiGfcoaz2b3B');
    }
  }

  sd_a9JlyA98kw25emBL(bh) {
    try {
      const page = this.page;
      alert('Event Occured');

      //appendnew_next_sd_a9JlyA98kw25emBL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_a9JlyA98kw25emBL');
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
  //appendnew_flow_ViewOrdersComponent_Catch
}
