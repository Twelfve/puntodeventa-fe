import { environment as ENV } from '../../../../environments/environment';

export const API_INVENTORY_SERVICES = {
  READ: {
    ALL: `${ENV.apiUrl}/inventory/inventory`,
  },
  DELETE: {
    PRODUCT: `${ENV.apiUrl}/inventory/inventory`, //:id
  },
};
