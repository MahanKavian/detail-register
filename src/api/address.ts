import { FormValuesInterface } from "../pages/Address";
import apiClient from "./config/ApiClient";
import { AddressResponse } from "./types/Address";

export async function postAddress(data: FormValuesInterface) {
    return await apiClient.post("/address", data);
}

export async function getAddresses(): Promise<AddressResponse[]> {
    return await apiClient.get("/address");
}