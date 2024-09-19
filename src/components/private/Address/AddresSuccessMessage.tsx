import { Link } from "react-router-dom";
import successIcon from "../../../assets/icons/Success";
import { Dispatch } from "react";

interface Props {
    setShowSuccessMessage: Dispatch<boolean>
}

const AddressSuccessMessage = ({ setShowSuccessMessage }: Props) => {
    return (
        <div className="h-[90vh] bg-silver-100 flex items-center justify-center flex-col gap-10">
            <div className={"flex flex-col gap-3 items-center justify-center"}>
                <i>{successIcon}</i>
                <span className={"text-text-100 text-sm"}>
                    اطلاعات شما با موفقیت ثبت شد
                </span>
            </div>
            <div>
                <Link to={"/addresses"} onClick={() => setShowSuccessMessage(false)} className={"py-2 px-14 text-lg transition text-primary-100 rounded border-2 border-primary-100 hover:bg-primary-100 hover:text-white"}>
                    مشاهده اطلاعات
                </Link>
            </div>
        </div>
    );
};

export default AddressSuccessMessage;