import { ITransaction } from "./ITransaction";

export interface IUser{
    id: number;
    name: string;
    updatedDate: string;
    transactions: ITransaction[];
    active: boolean;
}