import { useForm } from "react-hook-form";
import { Container } from "../components/base/Container.tsx";
import InputBox from "../components/base/InputBox.tsx";
import Footer from "../components/layout/Footer.tsx";
import GenderBox from "../components/private/Address/GenderBox.tsx";
import { useState } from "react";
import AddressMap from "../components/private/Address/AddressMap.tsx";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postAddress } from "../api/address.ts";
import AddressSuccessMessage from "../components/private/Address/AddresSuccessMessage.tsx";

interface Props {

}

export interface FormValuesInterface {
    first_name: string | null;
    last_name: string | null;
    coordinate_mobile: string | null;
    coordinate_phone_number: string | null;
    address: string | null;
    region: number | null;
    gender: string | null;
    lat: number;
    long: number;
}

const formValues: FormValuesInterface = {
    first_name: null,
    last_name: "",
    address: "",
    coordinate_mobile: "",
    coordinate_phone_number: "",
    gender: "male",
    region: 1,
    lat: 0,
    long: 0
}

export function Address({ }: Props) {
    const [isNextStep, setIsNextStep] = useState<boolean>(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);

    const mutation = useMutation({ mutationFn: postAddress });
    const queryClient = useQueryClient();

    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<FormValuesInterface>({
        defaultValues: formValues,
        mode: "onTouched"
    });

    const onSubmitHandler = (data: FormValuesInterface) => {
        if (!isNextStep) {
            setIsNextStep(true);
        } else {
            mutation.mutate(data, {
                onSuccess: async (res: any) => {
                    if (res) {
                        await queryClient.invalidateQueries({ queryKey: ["addresses"] });
                        toast.success("آدرس با موفقیت ثبت شد");
                        setShowSuccessMessage(true);
                        setIsNextStep(false);
                    }
                }
            })
        }
    }

    return (
        <>
            {
                !showSuccessMessage ? <form action="" onSubmit={handleSubmit(onSubmitHandler)}>
                    {
                        !isNextStep ? <Container>
                            <div className={"w-full sm:w-5/6 md:w-4/6 mx-auto flex flex-col gap-4 mt-10 sm:mb-32 lg:mb-0"}>
                                <h1 className={"text-text-100 text-lg"}>
                                    ثبت آدرس
                                </h1>
                                <div className={"w-full bg-white rounded p-3 sm:p-8 flex flex-col gap-3 mx-auto shadow border border-silver-100"}>
                                    <h2 className={"text-sm text-text-100"}>لطفا مشخصات و آدرس خود را وارد کنید</h2>
                                    <div className={"w-full flex flex-col gap-3"}>
                                        <div className={"grid grid-cols-1 lg:grid-cols-3 gap-4"}>
                                            <InputBox
                                                register={register("first_name" as keyof FormValuesInterface, { required: "نام خود را وارد نمایید", minLength: { value: 3, message: "نام باید دارای ۳ کاراکتر باشد" } })}
                                                watch={watch}
                                                setValue={setValue}
                                                error={errors}
                                                placeholder={"محمد"}
                                                htmlFor={"userFirstName"}
                                                label={"نام"}
                                                type={"text"}
                                            />
                                            <InputBox
                                                register={register("last_name" as keyof FormValuesInterface, { required: "نام خانوادگی خود را وارد نمایید", minLength: { value: 3, message: "نام خانوادگی باید دارای ۳ کاراکتر باشد" } })}
                                                watch={watch}
                                                setValue={setValue}
                                                error={errors}
                                                placeholder={"محمدی"}
                                                htmlFor={"userLastName"}
                                                label={"نام خانوادگی"}
                                                type={"text"}
                                            />
                                            <InputBox
                                                register={register("coordinate_mobile" as keyof FormValuesInterface, { required: "پر کردن این فیلد الزامی است", pattern: { value: /^09\d{9}$/, message: "فرمت شماره همراه اشتباه است" } })}
                                                watch={watch}
                                                setValue={setValue}
                                                error={errors}
                                                placeholder={"مثال ۰۹۱۲۱۲۳۴۵۶۸۷"}
                                                htmlFor={"userMobile"}
                                                label={"شماره تلفن همراه"}
                                                type={"text"}
                                            />
                                            <InputBox
                                                register={register("coordinate_phone_number" as keyof FormValuesInterface, { pattern: { value: /^\d{11}$/, message: "فرمت شماره ثابت اشتباه است" } })}
                                                watch={watch}
                                                setValue={setValue}
                                                error={errors}
                                                isPhoneNumber={true}
                                                placeholder={"مثال ۰۲۱۴۴۲۵۶۷۸۰"}
                                                htmlFor={"userPhoneNumber"}
                                                label={"شماره تلفن ثابت"}
                                                type={"text"}
                                            />
                                            <InputBox
                                                register={register("address" as keyof FormValuesInterface, { required: "پر کردن این فیلد اجباری است" })}
                                                watch={watch}
                                                setValue={setValue}
                                                error={errors}
                                                inputClass={"lg:col-span-2"}
                                                htmlFor={"userAddress"}
                                                label={"آدرس"}
                                                type={"text"}
                                            />
                                        </div>
                                        <GenderBox register={register("gender" as keyof FormValuesInterface)} />
                                    </div>
                                </div>
                            </div>
                        </Container> :
                            <AddressMap setValue={setValue} setIsNextStep={setIsNextStep} />
                    }
                    <Footer isPending={mutation.isPending} clickHandler={handleSubmit(onSubmitHandler)} />
                </form> : <AddressSuccessMessage setShowSuccessMessage={setShowSuccessMessage} />
            }

        </>
    );
}