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
  selector: 'bh-ViewAllProducts',
  templateUrl: './ViewAllProducts.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class ViewAllProductsComponent implements AfterViewInit {
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
      this.sd_XRtBZmf0zGBTmp2z(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_XRtBZmf0zGBTmp2z(bh) {
    try {
      bh = this.sd_bF9oXJOzuKvIWb0t(bh);
      //appendnew_next_sd_XRtBZmf0zGBTmp2z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XRtBZmf0zGBTmp2z');
    }
  }

  getAllProducts(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_Ev2KaIOM4qV2TpqO(bh);
      //appendnew_next_getAllProducts
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UQKh6yR35kWatJbK');
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
      return this.errorHandler(bh, e, 'sd_Ve2xtyJP0KTXcgBL');
    }
  }

  onFilter_2(filterEvent: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { filterEvent: filterEvent };
      bh.local = {};

      bh = this.sd_iBlFYTlpoczCmWts_2(bh);
      //appendnew_next_onFilter_2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5mUX01VpK74GVFQB');
    }
  }

  //appendnew_flow_ViewAllProductsComponent_start

  sd_bF9oXJOzuKvIWb0t(bh) {
    try {
      bh = this.sd_ez7NGPUrH03ZUT3m(bh);
      //appendnew_next_sd_bF9oXJOzuKvIWb0t
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bF9oXJOzuKvIWb0t');
    }
  }

  async sd_ez7NGPUrH03ZUT3m(bh) {
    try {
      const HTTPServiceInstance: HTTPService =
        this.__page_injector__.get(HTTPService);

      let outputVariables = await HTTPServiceInstance.routesCheckAdmin();

      bh = this.sd_668YpiR1yVMrx1xl(bh);
      //appendnew_next_sd_ez7NGPUrH03ZUT3m
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ez7NGPUrH03ZUT3m');
    }
  }

  sd_668YpiR1yVMrx1xl(bh) {
    try {
      let outputVariables = this.getAllProducts();

      //appendnew_next_sd_668YpiR1yVMrx1xl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_668YpiR1yVMrx1xl');
    }
  }

  sd_Ev2KaIOM4qV2TpqO(bh) {
    try {
      const page = this.page;
      bh.input.url = 'product/all';
      bh.input.method = 'GET';

      bh = this.sd_nNRwn5UW9JmuffLK(bh);
      //appendnew_next_sd_Ev2KaIOM4qV2TpqO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ev2KaIOM4qV2TpqO');
    }
  }

  async sd_nNRwn5UW9JmuffLK(bh) {
    try {
      const HTTPServiceInstance: HTTPService =
        this.__page_injector__.get(HTTPService);

      let outputVariables = await HTTPServiceInstance.sd_ZjZwWFbxVVMtewVh(
        undefined,
        bh.input.method,
        undefined,
        bh.input.url
      );
      this.page.allProducts = outputVariables.input.result;

      bh = this.sd_YNBtjAT5dGDg9H32(bh);
      //appendnew_next_sd_nNRwn5UW9JmuffLK
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nNRwn5UW9JmuffLK');
    }
  }

  sd_YNBtjAT5dGDg9H32(bh) {
    try {
      const page = this.page;
      bh.local.dataSource = new MatTableDataSource(
        page.allProducts.result.product
      );

      bh = this.sd_E9QbOlnVduPNV5MO_1(bh);
      //appendnew_next_sd_YNBtjAT5dGDg9H32
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YNBtjAT5dGDg9H32');
    }
  }

  sd_E9QbOlnVduPNV5MO_1(bh) {
    try {
      this.page.tableData = bh.local.dataSource;

      //appendnew_next_sd_E9QbOlnVduPNV5MO_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fCUuZrXTJllwD1wP');
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
      return this.errorHandler(bh, e, 'sd_pwH2i10KjpIsbVRQ');
    }
  }

  sd_2VNGqvcKee34lvOz_1(bh) {
    try {
      const page = this.page;
      this.page.tableData.sort = this.MatSort;

      bh = this.sd_xKCCTWKzvgDN0rx7_3(bh);
      //appendnew_next_sd_2VNGqvcKee34lvOz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0XHyp5iRyIjGfVnM');
    }
  }

  sd_xKCCTWKzvgDN0rx7_3(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatPaginator: this.MatPaginator,
      });

      bh = this.sd_2VNGqvcKee34lvOz_3(bh);
      //appendnew_next_sd_xKCCTWKzvgDN0rx7_3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Z8DrfsZ4VrtUywcc');
    }
  }

  sd_2VNGqvcKee34lvOz_3(bh) {
    try {
      const page = this.page;
      this.page.tableData.paginator = this.MatPaginator;

      //appendnew_next_sd_2VNGqvcKee34lvOz_3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_c1BA70pqlNORmkfD');
    }
  }

  sd_iBlFYTlpoczCmWts_2(bh) {
    try {
      const page = this.page;
      const filterValue = (bh.input.filterEvent.target as HTMLInputElement)
        .value;
      this.page.tableData.filter = filterValue.trim().toLowerCase();

      //appendnew_next_sd_iBlFYTlpoczCmWts_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3hjPzJFcuJRBmWJH');
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
  //appendnew_flow_ViewAllProductsComponent_Catch
}
