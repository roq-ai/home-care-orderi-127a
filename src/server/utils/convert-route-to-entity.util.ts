const mapping: Record<string, string> = {
  items: 'item',
  orders: 'order',
  'order-items': 'order_item',
  organizations: 'organization',
  residents: 'resident',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
