import { AddressResponse } from "../../../api/types/Address";
import AddressFieldDesktop from "./AddressItemFieldDesktop";

interface Props {
    address: AddressResponse;
}

const AddressItemDesktop = ({ address }: Props) => {
    return (
        <li className={"p-8 grid grid-cols-3 gap-4 shadow rounded border border-silver-100"}>
            <AddressFieldDesktop field={address.first_name} label={"نام"} />
            <AddressFieldDesktop field={address.last_name} label={"نام خانوادگی"} />
            <AddressFieldDesktop field={address.coordinate_mobile} label={"شماره تلفن همراه"} />
            <AddressFieldDesktop field={address.coordinate_phone_number} label={"شماره تلفن ثابت"} />
            <AddressFieldDesktop field={address.gender} label={"جنسیت"} />
            <AddressFieldDesktop field={address.address} label={"آدرس"} />
        </li>
    );
};

export default AddressItemDesktop;