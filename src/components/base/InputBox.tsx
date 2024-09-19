import { FieldErrors, UseFormRegisterReturn, UseFormSetValue, UseFormWatch } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import { useState } from "react";
import clearFiled from "../../assets/icons/ClearField";
import {FormValuesInterface} from "../../pages/Address.tsx";

interface Props {
    label: string;
    htmlFor: string;
    isPhoneNumber?: boolean;
    inputClass?: string;
    type: string;
    watch: UseFormWatch<FormValuesInterface>
    register: UseFormRegisterReturn<any>;
    error: FieldErrors<any>;
    setValue: UseFormSetValue<FormValuesInterface>
    placeholder?: string;
}

const InputBox = ({ label, htmlFor, register, type, error, placeholder = "", watch, setValue, isPhoneNumber, inputClass }: Props) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const name = register.name;

    const clearFieldHandler = () => {
        setValue(name as keyof FormValuesInterface, "");
    }

    const focusHandler = () => {
        setIsFocused(true);
    };

    const blurHandler = () => {
        setIsFocused(false);
    };

    return (
        <div className={`${inputClass ?? "w-full"} flex flex-col gap-2`}>
            {
                isPhoneNumber ? <div className={"w-full flex justify-between items-center"}>
                    <label className={"text-text-100 text-sm cursor-pointer"} htmlFor={htmlFor}>
                        {label}
                    </label>
                    <span className={"text-silver-200 text-xs"}>
                        با پیش شماره *
                    </span>
                </div> : <label className={"text-text-100 text-sm cursor-pointer"} htmlFor={htmlFor}>
                    {label}
                </label>
            }

            <div className={`px-3 flex justify-between items-center text-text-100 focus:outline-none border-2 ${isFocused ? error[name] ? "border-red" : "border-primary-100" : error[name] ? "border-red" : "border-silver-100"} rounded`}>
                <input
                    type={type}
                    placeholder={placeholder}
                    className={`w-5/6 py-2 focus:outline-none`}
                    id={htmlFor}
                    {...register}
                    onFocus={focusHandler}
                    onBlur={blurHandler}
                />
                {watch(name) && watch(name).length > 0 && <i onClick={clearFieldHandler} className={"transition hover:cursor-pointer"}>{clearFiled}</i>}
            </div>
            {error[name] && <ErrorMessage error={error[name].message as string} />}
        </div>
    );
};

export default InputBox;