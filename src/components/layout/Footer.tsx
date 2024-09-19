import { MouseEventHandler } from "react";
import { BeatLoader } from "react-spinners";

interface Props {
    clickHandler: MouseEventHandler<HTMLElement>;
    isPending?: boolean;
}
const Footer = ({ clickHandler, isPending = false }: Props) => {
    return (
        <div className={"w-full fixed bg-white z-[99] bottom-0 right-0 border-t border-silver-100 py-3 flex justify-center items-center"}>
            <button disabled={isPending} onClick={clickHandler} type="button" className={"w-5/6 sm:w-4/6 md:w-3/6 lg:w-1/6 text-white text-lg h-[50px] flex rounded-md hover:brightness-90 transition justify-center items-center bg-primary-100"}>
                {
                    isPending ? <BeatLoader size={15} color={"#FFF"} /> : "ثبت و ادامه"
                }
            </button>
        </div>
    );
};

export default Footer;