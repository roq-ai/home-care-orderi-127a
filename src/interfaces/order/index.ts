import { OrderItemInterface } from 'interfaces/order-item';
import { ResidentInterface } from 'interfaces/resident';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  status: string;
  order_date: any;
  delivery_date: any;
  resident_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  order_item?: OrderItemInterface[];
  resident?: ResidentInterface;
  user?: UserInterface;
  _count?: {
    order_item?: number;
  };
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  resident_id?: string;
  user_id?: string;
}
