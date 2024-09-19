import { AddressResponse } from "../../../api/types/Address";
import AddressItemFiled from "./AddressItemfield";

interface Props {
    address: AddressResponse;
}

const AddressItem = ({ address }: Props) => {
    return (
        <li className={"w-full bg-white shadow rounded border border-silver-100 p-4 flex flex-col gap-4"}>
            <AddressItemFiled fieldOne={address.first_name} filedTwo={address.last_name} label={"نام و نام خانوادگی"} />
            <AddressItemFiled fieldOne={address.gender} label={"جنسیت"} />
            <AddressItemFiled fieldOne={address.coordinate_mobile} label={"شماره تلفن همراه"} />
            <AddressItemFiled fieldOne={address.coordinate_phone_number} label={"شماره تلفن ثابت"} />
            <div className="border-t border-text-100 py-3 text-sm w-full flex flex-col gap-2">
                <span className={"text-silver-200"}>آدرس</span>
                <p className={"text-text-100 text-sm"}>
                    {address.address}
                </p>
            </div>
        </li>
    );
};

export default AddressItem;