import { environment as ENV } from '../../../../environments/environment';

export const API_PRODUCT_SERVICES = {
  READ: {
    ALL: `${ENV.apiUrl}/product/products/`,
    SINGLE: `${ENV.apiUrl}/product/product/`,
  },
  CREATE: {
    PRODUCT: `${ENV.apiUrl}/product/createProduct/`, //:id
  },
  UPDATE: {
    PRODUCT: `${ENV.apiUrl}/product/updateProduct/`, //:id
  },
  DELETE: {
    SERVICEREPORTEVIDENCE: `${ENV.apiUrl}/service/report/` // :servicereportid/evidence/:idEvidence
  },
  CANCEL: {
    SERVICEREPORT: `${ENV.apiUrl}/service/report/` //:id
  }
};
