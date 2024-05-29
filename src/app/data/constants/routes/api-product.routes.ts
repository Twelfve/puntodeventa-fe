import { environment as ENV } from '../../../../environments/environment';

export const API_PRODUCT_SERVICES = {
  READ: {
    ALL: `${ENV.apiUrl}/product/products/`,
  },
  UPDATE: {
    SERVICEREPORT: `${ENV.apiUrl}/service/report/`, //:id
    SERVICEREPORTEVIDENCE: `${ENV.apiUrl}/service/report/`, //:servicereportid/evidence?id=14
    SERVICEREPORTEVIDENCEALT: `${ENV.apiUrl}/service/report/`, //:servicereportid/evidence/alt?id=14&before=0&duringPhoto=0&duringVideo=0&afterPhoto=0&afterVideo=1
    SERVICEREPORTCOMPONENT: `${ENV.apiUrl}/mobile/service/report/`, //:id/components
    SERVICEREPORTCAPSULES: `${ENV.apiUrl}/service/report/` //:id/capsules
  },
  DELETE: {
    SERVICEREPORTEVIDENCE: `${ENV.apiUrl}/service/report/` // :servicereportid/evidence/:idEvidence
  },
  CANCEL: {
    SERVICEREPORT: `${ENV.apiUrl}/service/report/` //:id
  }
};
