import { OrderItemInterface } from 'interfaces/order-item';
import { GetQueryInterface } from 'interfaces';

export interface ItemInterface {
  id?: string;
  name: string;
  type: string;
  quantity: number;
  price: number;
  created_at?: any;
  updated_at?: any;
  order_item?: OrderItemInterface[];

  _count?: {
    order_item?: number;
  };
}

export interface ItemGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  type?: string;
}
