export default {
  logger: {
    level: 'debug',
    transport: ['file', 'console'],
    exceptionFile: 'logs/exception.log',
    logFile: 'logs/console.log',
  },
  middlewares: {
    pre: [
      { ids: 'hrefstart' },
      { __ssdGlobalMiddlewares__: 'globalSession' },
      { __ssdGlobalMiddlewares__: 'cors' },
    ],
    post: [],
    sequences: {
      IDSAuthroizedAPIs: {
        pre: [{ Pre_Middlewares: 'authorization' }],
        post: [],
      },
      ADMIN_AuthroizedAPIS: {
        pre: [{ Pre_Middlewares: 'Admin_authorization' }],
        post: [],
      },
    },
  },
  ids: {
    client_id: 'rYox_duro3b0VEQwzc5kk',
    client_secret:
      '1gokNFpNnx36_JoRpETr7tXv2FzuPZwvnp4jXCWv8As-8GlPFCOqs_bC7fFMFef9LDWoZV16pHg-u9MdSatqVg',
    issuerURL: 'https://ids.neutrinos.co',
    enabled: true,
  },
};
