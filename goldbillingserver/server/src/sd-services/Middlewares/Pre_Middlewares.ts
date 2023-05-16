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
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { Middleware } from '../../middleware/Middleware'; //_splitter_
import * as settings from '../../config/config'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import * as sd_Fw3wKgGdAy9sM9UI from '../ids'; //_splitter_
import * as SSD_SERVICE_ID_sd_OQYJSSTIEwN2nkED from './Post_Middlewares'; //_splitter_
//append_imports_end
export class Pre_Middlewares {
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
    this.serviceName = 'Pre_Middlewares';
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
      instance = new Pre_Middlewares(
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
      //appendnew_flow_Pre_Middlewares_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: Pre_Middlewares');

    let mw_authorization: Middleware = new Middleware(
      this.serviceName,
      'authorization',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.validatingSessionExistScript(bh, parentSpanInst);
          //appendnew_next_sd_4QDCC0rdnEI1cc84
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_4QDCC0rdnEI1cc84');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['authorization'] =
      mw_authorization;
    let mw_Admin_authorization: Middleware = new Middleware(
      this.serviceName,
      'Admin_authorization',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.admin_authorization_script(bh, parentSpanInst);
          //appendnew_next_sd_bUjcWAB6mBjCsBYS
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_bUjcWAB6mBjCsBYS');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['Admin_authorization'] =
      mw_Admin_authorization;
    //appendnew_flow_Pre_Middlewares_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: Pre_Middlewares');
    //appendnew_flow_Pre_Middlewares_HttpIn
  }
  //   service flows_Pre_Middlewares

  async authorization_start(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'authorization_start',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.jwt_check_script(bh, parentSpanInst);
      //appendnew_next_authorization_start
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uRAwb51kyWBOvgfx',
        spanInst,
        'authorization_start'
      );
    }
  }

  //appendnew_flow_Pre_Middlewares_start

  async validatingSessionExistScript(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'validatingSessionExistScript',
      parentSpanInst
    );
    try {
      bh.local.idslogin = true;

      if (bh.input && bh.input.cookies && bh.input.cookies.accessToken) {
        bh.local.idslogin = false;
      }

      console.log(bh.input);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.checkTokenExistSwitch(bh, parentSpanInst);
      //appendnew_next_validatingSessionExistScript
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YyWulxJ1xu9DItQ6',
        spanInst,
        'validatingSessionExistScript'
      );
    }
  }

  async checkTokenExistSwitch(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'checkTokenExistSwitch',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.idslogin,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_T8Hy4F9MhbnC0UJE(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.idslogin,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_XjIJG4x0FxT9D0l9(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MCsamAxqYTMDOvXs',
        spanInst,
        'checkTokenExistSwitch'
      );
    }
  }

  async sd_T8Hy4F9MhbnC0UJE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_T8Hy4F9MhbnC0UJE',
      parentSpanInst
    );
    try {
      const sd_Fw3wKgGdAy9sM9UIInstance: sd_Fw3wKgGdAy9sM9UI.ids =
        sd_Fw3wKgGdAy9sM9UI.ids.getInstance();
      bh = await sd_Fw3wKgGdAy9sM9UIInstance.authorize_start(spanInst, bh);

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_T8Hy4F9MhbnC0UJE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_T8Hy4F9MhbnC0UJE',
        spanInst,
        'sd_T8Hy4F9MhbnC0UJE'
      );
    }
  }

  async sd_XjIJG4x0FxT9D0l9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XjIJG4x0FxT9D0l9',
      parentSpanInst
    );
    try {
      bh = await this.authorization_start(spanInst, bh);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_XjIJG4x0FxT9D0l9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XjIJG4x0FxT9D0l9',
        spanInst,
        'sd_XjIJG4x0FxT9D0l9'
      );
    }
  }

  async jwt_check_script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'jwt_check_script',
      parentSpanInst
    );
    try {
      const jwt = require('jsonwebtoken');

      bh.local.adminLogined = false;

      const check_accesstoken = await jwt.verify(
        bh.input.cookies.accessToken,
        process.env.JWT_PRIVET_KEY,
        (error, done) => {
          if (error) {
            throw error;
          } else if (done.data === 'adminLogined') {
            bh.local.adminLogined = true;
          }
        }
      );

      console.log(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_MiBivu3oQondu9xA(bh, parentSpanInst);
      //appendnew_next_jwt_check_script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QV81LWmLPXnoc1Pf',
        spanInst,
        'jwt_check_script'
      );
    }
  }

  async sd_MiBivu3oQondu9xA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MiBivu3oQondu9xA',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.adminLogined,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_ElYu3XhYAAsS5chp(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.adminLogined,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_nur0U0A2Q3d39YjW(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MiBivu3oQondu9xA',
        spanInst,
        'sd_MiBivu3oQondu9xA'
      );
    }
  }

  async sd_ElYu3XhYAAsS5chp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ElYu3XhYAAsS5chp',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 401,
        message: 'AdminLogin',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_oy72DKObF1E24egq(bh, parentSpanInst);
      //appendnew_next_sd_ElYu3XhYAAsS5chp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ElYu3XhYAAsS5chp',
        spanInst,
        'sd_ElYu3XhYAAsS5chp'
      );
    }
  }

  async sd_oy72DKObF1E24egq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oy72DKObF1E24egq',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_OQYJSSTIEwN2nkEDInstance: SSD_SERVICE_ID_sd_OQYJSSTIEwN2nkED.Post_Middlewares =
        SSD_SERVICE_ID_sd_OQYJSSTIEwN2nkED.Post_Middlewares.getInstance();
      bh = await SSD_SERVICE_ID_sd_OQYJSSTIEwN2nkEDInstance.httpOut_Start(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_oy72DKObF1E24egq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oy72DKObF1E24egq',
        spanInst,
        'sd_oy72DKObF1E24egq'
      );
    }
  }

  async sd_nur0U0A2Q3d39YjW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nur0U0A2Q3d39YjW',
      parentSpanInst
    );
    try {
      bh.web.res.set({ type: 'bh', value: '' });

      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nur0U0A2Q3d39YjW',
        spanInst,
        'sd_nur0U0A2Q3d39YjW'
      );
    }
  }

  async sd_RL0MQyog4y6ituWO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RL0MQyog4y6ituWO',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 401,
        message: bh.error.message || bh.error,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3fPU4lWW9q1hUWTp(bh, parentSpanInst);
      //appendnew_next_sd_RL0MQyog4y6ituWO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RL0MQyog4y6ituWO',
        spanInst,
        'sd_RL0MQyog4y6ituWO'
      );
    }
  }

  async sd_3fPU4lWW9q1hUWTp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3fPU4lWW9q1hUWTp',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_OQYJSSTIEwN2nkEDInstance: SSD_SERVICE_ID_sd_OQYJSSTIEwN2nkED.Post_Middlewares =
        SSD_SERVICE_ID_sd_OQYJSSTIEwN2nkED.Post_Middlewares.getInstance();
      bh = await SSD_SERVICE_ID_sd_OQYJSSTIEwN2nkEDInstance.httpOut_Start(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_3fPU4lWW9q1hUWTp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3fPU4lWW9q1hUWTp',
        spanInst,
        'sd_3fPU4lWW9q1hUWTp'
      );
    }
  }

  async admin_authorization_script(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'admin_authorization_script',
      parentSpanInst
    );
    try {
      const jwt = require('jsonwebtoken');

      bh.local.adminLogined = false;

      if (!bh.input && !bh.input.cookies && !bh.input.cookies.accessToken) {
        throw 'Tokken is not found';
      }
      const check_accesstoken = await jwt.verify(
        bh.input.cookies.accessToken,
        process.env.JWT_PRIVET_KEY,
        (error, done) => {
          if (error) {
            throw error;
          } else if (done.data === 'adminLogined') {
            bh.local.adminLogined = true;
          } else {
            bh.local.responces = {
              statusCode: 401,
              message: 'salesman logined',
            };
          }
        }
      );

      console.log(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_fWonr7MxQfhm8dnT(bh, parentSpanInst);
      //appendnew_next_admin_authorization_script
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_26zazPGuGn9ixcet',
        spanInst,
        'admin_authorization_script'
      );
    }
  }

  async sd_fWonr7MxQfhm8dnT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fWonr7MxQfhm8dnT',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.adminLogined,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_dWUwJUIDsakCpHrF(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.adminLogined,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_GJq6ZLNxblKgkRNy(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fWonr7MxQfhm8dnT',
        spanInst,
        'sd_fWonr7MxQfhm8dnT'
      );
    }
  }

  async sd_dWUwJUIDsakCpHrF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dWUwJUIDsakCpHrF',
      parentSpanInst
    );
    try {
      bh.web.res.set({ type: 'bh', value: '' });

      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dWUwJUIDsakCpHrF',
        spanInst,
        'sd_dWUwJUIDsakCpHrF'
      );
    }
  }

  async sd_GJq6ZLNxblKgkRNy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GJq6ZLNxblKgkRNy',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_OQYJSSTIEwN2nkEDInstance: SSD_SERVICE_ID_sd_OQYJSSTIEwN2nkED.Post_Middlewares =
        SSD_SERVICE_ID_sd_OQYJSSTIEwN2nkED.Post_Middlewares.getInstance();
      bh = await SSD_SERVICE_ID_sd_OQYJSSTIEwN2nkEDInstance.httpOut_Start(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_GJq6ZLNxblKgkRNy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GJq6ZLNxblKgkRNy',
        spanInst,
        'sd_GJq6ZLNxblKgkRNy'
      );
    }
  }

  async sd_QAqtMaMLYNQSKHMF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QAqtMaMLYNQSKHMF',
      parentSpanInst
    );
    try {
      bh.local.responces = {
        statusCode: 401,
        message: bh.error.message || bh.error,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JscSxWvJsLDMFUDY(bh, parentSpanInst);
      //appendnew_next_sd_QAqtMaMLYNQSKHMF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QAqtMaMLYNQSKHMF',
        spanInst,
        'sd_QAqtMaMLYNQSKHMF'
      );
    }
  }

  async sd_JscSxWvJsLDMFUDY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JscSxWvJsLDMFUDY',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_OQYJSSTIEwN2nkEDInstance: SSD_SERVICE_ID_sd_OQYJSSTIEwN2nkED.Post_Middlewares =
        SSD_SERVICE_ID_sd_OQYJSSTIEwN2nkED.Post_Middlewares.getInstance();
      bh = await SSD_SERVICE_ID_sd_OQYJSSTIEwN2nkEDInstance.httpOut_Start(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_JscSxWvJsLDMFUDY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JscSxWvJsLDMFUDY',
        spanInst,
        'sd_JscSxWvJsLDMFUDY'
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
      false ||
      (await this.sd_GAdPpB1qZTMYw1Mk(bh, parentSpanInst)) ||
      (await this.sd_y2zLKPnVzM3tnPsI(bh, parentSpanInst))
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
  async sd_GAdPpB1qZTMYw1Mk(bh, parentSpanInst) {
    const nodes = ['sd_QV81LWmLPXnoc1Pf'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_RL0MQyog4y6ituWO(bh, parentSpanInst);
      //appendnew_next_sd_GAdPpB1qZTMYw1Mk
      return true;
    }
    return false;
  }
  async sd_y2zLKPnVzM3tnPsI(bh, parentSpanInst) {
    const nodes = [
      'sd_QV81LWmLPXnoc1Pf',
      'sd_bUjcWAB6mBjCsBYS',
      'sd_26zazPGuGn9ixcet',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_QAqtMaMLYNQSKHMF(bh, parentSpanInst);
      //appendnew_next_sd_y2zLKPnVzM3tnPsI
      return true;
    }
    return false;
  }
  //appendnew_flow_Pre_Middlewares_Catch
}
