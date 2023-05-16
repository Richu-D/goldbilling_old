let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { Middleware } from '../../../middleware/Middleware'; //_splitter_
import * as settings from '../../../config/config'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import * as SSD_SERVICE_ID_sd_vVuq2AvtnTjhXlpb from './DashBoard_Service'; //_splitter_
//append_imports_end
export class DashBoard_Api {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'DashBoard_Api';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new DashBoard_Api(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_DashBoard_Api_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: DashBoard_Api');

    //appendnew_flow_DashBoard_Api_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: DashBoard_Api');

    this.app['get'](
      `${this.serviceBasePath}/salesMan/dashBoard`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.salesMan_DashBoard_Call(bh, parentSpanInst);
          //appendnew_next_sd_JmclCBsEJIZRE26C
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_JmclCBsEJIZRE26C');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_DashBoard_Api_HttpIn
  }
  //   service flows_DashBoard_Api

  //appendnew_flow_DashBoard_Api_start

  async salesMan_DashBoard_Call(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'salesMan_DashBoard_Call',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_vVuq2AvtnTjhXlpbInstance: SSD_SERVICE_ID_sd_vVuq2AvtnTjhXlpb.DashBoard_Service =
        SSD_SERVICE_ID_sd_vVuq2AvtnTjhXlpb.DashBoard_Service.getInstance();
      bh =
        await SSD_SERVICE_ID_sd_vVuq2AvtnTjhXlpbInstance.salesMan_DashBoard_Start(
          spanInst,
          bh
        );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_salesMan_DashBoard_Call
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uTfeWum6oK9wef2I',
        spanInst,
        'salesMan_DashBoard_Call'
      );
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src, parentSpanInst?, functionName?) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_DashBoard_Api_Catch
}
