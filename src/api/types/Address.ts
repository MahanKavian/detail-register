export interface AddressResponse {
    address: string;
    address_id: string;
    coordinate_mobile: string;
    coordinate_phone_number: string;
    first_name: string;
    gender: string;
    id: string;
    last_name: string;
    lat: number;
    lng: number;
    region: AddressRegion;
}

export interface AddressRegion {
    city_object: AddressCity;
    id: number;
    name: string;
    state_object: AddressState;
}

export interface AddressCity {
    city_id: number;
    city_name: string;
}

export interface AddressState {
    state_id: number;
    state_name: string;
}
