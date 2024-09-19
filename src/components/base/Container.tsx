import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export function Container({ children }: Props) {
    return (
        <div className={"container mx-auto p-3"}>
            {children}
        </div>
    );
}