import { OrderInterface } from 'interfaces/order';
import { ItemInterface } from 'interfaces/item';
import { GetQueryInterface } from 'interfaces';

export interface OrderItemInterface {
  id?: string;
  order_id: string;
  item_id: string;
  quantity: number;
  created_at?: any;
  updated_at?: any;

  order?: OrderInterface;
  item?: ItemInterface;
  _count?: {};
}

export interface OrderItemGetQueryInterface extends GetQueryInterface {
  id?: string;
  order_id?: string;
  item_id?: string;
}
