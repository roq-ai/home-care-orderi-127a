import { OrderInterface } from 'interfaces/order';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ResidentInterface {
  id?: string;
  first_name: string;
  last_name: string;
  date_of_birth: any;
  gender: string;
  medical_condition: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  order?: OrderInterface[];
  organization?: OrganizationInterface;
  _count?: {
    order?: number;
  };
}

export interface ResidentGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  gender?: string;
  medical_condition?: string;
  organization_id?: string;
}
