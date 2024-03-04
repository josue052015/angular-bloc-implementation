export interface IBaseEntity{
  id: number,
  creationDate: Date,
  updatedDate: Date,
  isDeleted: boolean,
  isActive: boolean,
  isDeleting?: boolean;
}
export interface IUser extends IBaseEntity{
  name: string,
  lastName: string,
  phone: string,
  email: string
}
export interface IInvoice extends IBaseEntity{
  detail: string,
  amount: number,
  currency: string
}