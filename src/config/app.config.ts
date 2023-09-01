interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Home Care Administrator'],
  customerRoles: [],
  tenantRoles: ['Home Care Administrator', 'Home Care Staff'],
  tenantName: 'Organization',
  applicationName: 'Home care ordering system',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    "Manage organization's account and orders",
    'Manage Home Care Staff in the system',
    'View and manage active and previous orders',
    'Communicate with the Pharmacy regarding orders',
  ],
};
