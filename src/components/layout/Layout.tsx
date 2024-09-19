import { ReactNode } from "react";
import AcharehLogo from '../../assets/images/achareh-logo.svg'
import { NavLink } from "react-router-dom";

interface Props {
    children: ReactNode;
}

export function Layout({ children }: Props) {
    return (
        <div className={"w-full flex flex-col"}>
            <div className={"W-full bg-white px-3 py-5 flex items-center justify-between border-b border-silver-100 shadow"}>
                <img src={AcharehLogo} alt="Achareh" width={45} height={25} />
                <ul className={"flex items-center gap-3"}>
                    <li>
                        <NavLink to={"/"} className={({ isActive }) =>
                            isActive ? "text-primary-100" : "text-text-100"
                        }>
                            ثبت آدرس
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/addresses"} className={({ isActive }) =>
                            isActive ? "text-primary-100" : "text-text-100"
                        }>
                            مشاهده آدرس ها
                        </NavLink>
                    </li>
                </ul>
            </div>
            {children}
        </div>
    );
}