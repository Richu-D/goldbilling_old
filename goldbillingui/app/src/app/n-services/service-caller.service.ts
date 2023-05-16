//append_imports_start

import * as sd_qp1n840XhLHxXRUW from 'app/sd-services/HTTPService'; //_splitter_
import * as sd_jJfaGebkrTllY48G from 'app/sd-services/ProductsList'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class __NEU_ServiceInvokerService__ {
  constructor(
    private sd_qp1n840XhLHxXRUW: sd_qp1n840XhLHxXRUW.HTTPService,
    private sd_jJfaGebkrTllY48G: sd_jJfaGebkrTllY48G.ProductsList
  ) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
