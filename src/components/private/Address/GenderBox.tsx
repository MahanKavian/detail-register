import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
    register: UseFormRegisterReturn<any>;
}
const GenderBox = ({ register }: Props) => {
    return (
        <div className={"flex items-center gap-8 m-1"}>
            <span className={"text-sm"}>جنسیت</span>
            <div className={"flex items-center gap-5 m-1"}>
                <div className={"flex items-center gap-2"}>
                    <input type="radio" id="userGenderMale" {...register} value="male" />
                    <label htmlFor="userGenderMale" className={"radio-label"}>مرد</label>
                </div>
                <div className={"flex items-center gap-2"}>
                    <input type="radio" id="userGenderFemale" {...register} value="female" />
                    <label htmlFor="userGenderFemale" className={"radio-label"}>زن</label>
                </div>
            </div>
        </div>
    );
};

export default GenderBox;