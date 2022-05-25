export interface User {
    data:          Data;
    loading:       boolean;
    networkStatus: number;
}

export interface Data {
    currentUser: CurrentUser;
}

export interface CurrentUser {
    __typename: string;
    id:         string;
    name:       string;
    wallets:    Wallet[];
}

export interface Wallet {
    __typename: string;
    id:         string;
    amount:     number;
    currency:   string;
}