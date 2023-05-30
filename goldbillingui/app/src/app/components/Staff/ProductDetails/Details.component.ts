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
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Details',
  templateUrl: './Details.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class DetailsComponent {
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
      this.sd_ilZ4tlQP3zwsX014(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_ilZ4tlQP3zwsX014(bh) {
    try {
      bh = this.sd_C5qDvc31cazOGMeg(bh);
      //appendnew_next_sd_ilZ4tlQP3zwsX014
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ilZ4tlQP3zwsX014');
    }
  }

  navigateToCart(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_AsOyZBggnoZcRyca(bh);
      //appendnew_next_navigateToCart
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zHJ1ybUSfbfvUmr8');
    }
  }

  navigateToScan(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_M53uKBvgvycvgMEo(bh);
      //appendnew_next_navigateToScan
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HkC2vCC0RoXgSMLX');
    }
  }

  //appendnew_flow_DetailsComponent_start

  sd_C5qDvc31cazOGMeg(bh) {
    try {
      bh = this.sd_OjjDr811nmDw8T2H(bh);
      //appendnew_next_sd_C5qDvc31cazOGMeg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_C5qDvc31cazOGMeg');
    }
  }

  sd_OjjDr811nmDw8T2H(bh) {
    try {
      this.page.product = JSON.parse(localStorage.getItem('tempProduct'));

      bh = this.sd_hP2lgWesuM87hk1S(bh);
      //appendnew_next_sd_OjjDr811nmDw8T2H
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OjjDr811nmDw8T2H');
    }
  }

  async sd_hP2lgWesuM87hk1S(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['null'](
          this.page.product,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_zq3TPINBzb3I5mFI(bh);
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
        bh = await this.sd_kkbtaBoytpeRS7mq(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hP2lgWesuM87hk1S');
    }
  }

  async sd_zq3TPINBzb3I5mFI(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/scanner');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);

      //appendnew_next_sd_zq3TPINBzb3I5mFI
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zq3TPINBzb3I5mFI');
    }
  }

  sd_kkbtaBoytpeRS7mq(bh) {
    try {
      const page = this.page;
      console.log(page.product);

      //appendnew_next_sd_kkbtaBoytpeRS7mq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kkbtaBoytpeRS7mq');
    }
  }

  sd_AsOyZBggnoZcRyca(bh) {
    try {
      bh.local.product = JSON.parse(localStorage.getItem('tempProduct'));

      bh = this.sd_w8FiLxiw9gjejall(bh);
      //appendnew_next_sd_AsOyZBggnoZcRyca
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AsOyZBggnoZcRyca');
    }
  }

  sd_w8FiLxiw9gjejall(bh) {
    try {
      bh.local.cartItems = JSON.parse(localStorage.getItem('cartItems'));

      bh = this.sd_Z5SDIQ0WPH8PbfKF(bh);
      //appendnew_next_sd_w8FiLxiw9gjejall
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_w8FiLxiw9gjejall');
    }
  }

  async sd_Z5SDIQ0WPH8PbfKF(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['null'](
          bh.local.cartItems,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_827lktre26rPPUkV(bh);
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
        bh = await this.sd_WxGsb2Imn6kn0oj2(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Z5SDIQ0WPH8PbfKF');
    }
  }

  sd_827lktre26rPPUkV(bh) {
    try {
      const page = this.page;
      bh.local.product = [bh.local.product];

      bh = this.sd_vILXnNzjV2LueKta(bh);
      //appendnew_next_sd_827lktre26rPPUkV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_827lktre26rPPUkV');
    }
  }

  sd_vILXnNzjV2LueKta(bh) {
    try {
      localStorage.setItem('cartItems', JSON.stringify(bh.local.product));

      bh = this.sd_zq3TPINBzb3I5mFI(bh);
      //appendnew_next_sd_vILXnNzjV2LueKta
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vILXnNzjV2LueKta');
    }
  }

  sd_WxGsb2Imn6kn0oj2(bh) {
    try {
      const page = this.page;
      bh.local.cartItems;
      bh.pageInput.product;

      bh.local.exist = false;
      bh.local.cartItems.map((product) => {
        if (product._id == bh.local.product._id) {
          bh.local.exist = true;
        }
      });

      bh = this.sd_kFb5kk5Qe4w6ugXz(bh);
      //appendnew_next_sd_WxGsb2Imn6kn0oj2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WxGsb2Imn6kn0oj2');
    }
  }

  sd_kFb5kk5Qe4w6ugXz(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.local.exist,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_zq3TPINBzb3I5mFI(bh);
      } else if (
        this.sdService.operators['false'](
          bh.local.exist,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_8QjBnTQndrRB7vVA(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kFb5kk5Qe4w6ugXz');
    }
  }

  sd_8QjBnTQndrRB7vVA(bh) {
    try {
      const page = this.page;
      console.log(bh.local.cartItems);
      bh.local.cartItems.push(bh.local.product);

      bh = this.sd_cebPGqmlr2QGN2ze(bh);
      //appendnew_next_sd_8QjBnTQndrRB7vVA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8QjBnTQndrRB7vVA');
    }
  }

  sd_cebPGqmlr2QGN2ze(bh) {
    try {
      localStorage.setItem('cartItems', JSON.stringify(bh.local.cartItems));

      bh = this.sd_zq3TPINBzb3I5mFI(bh);
      //appendnew_next_sd_cebPGqmlr2QGN2ze
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cebPGqmlr2QGN2ze');
    }
  }

  sd_M53uKBvgvycvgMEo(bh) {
    try {
      localStorage.removeItem('tempProduct');

      bh = this.sd_zq3TPINBzb3I5mFI(bh);
      //appendnew_next_sd_M53uKBvgvycvgMEo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_M53uKBvgvycvgMEo');
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
  //appendnew_flow_DetailsComponent_Catch
}
