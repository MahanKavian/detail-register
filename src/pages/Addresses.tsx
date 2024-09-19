import { useQuery } from "@tanstack/react-query";
import { Container } from "../components/base/Container";
import { getAddresses } from "../api/address";
import { AddressResponse } from "../api/types/Address";
import AddressItem from "../components/private/Addresses/AddressItem";
import AddressItemDesktop from "../components/private/Addresses/AddressItemDesktop";

interface Props {

}

export function Addresses({ }: Props) {

    const { data: addresses, isLoading } = useQuery({
        queryKey: ["addresses"],
        queryFn: getAddresses
    })

    return (
        <Container>
            {
                isLoading ? <span className={"m-4 text-sm text-primary-100"}>درحال بارگذاری</span> :
                    <div className={"w-full sm:w-5/6 md:w-4/6 mt-6 flex mx-auto flex-col gap-3"}>
                        <h1>
                            آدرس ها و مشخصات
                        </h1>
                        <ul className={"flex flex-col lg:hidden gap-5"}>
                            {
                                addresses && addresses.slice(0, 5)?.map((address: AddressResponse) => {
                                    return (
                                        <AddressItem address={address} key={address.id.toString()} />
                                    )
                                })
                            }
                        </ul>
                        <ul className="hidden lg:flex flex-col gap-6 flex-wrap">
                            {
                                addresses && addresses.slice(0, 5)?.map((address: AddressResponse) => {
                                    return (
                                        <AddressItemDesktop address={address} key={address.id.toString()} />
                                    )
                                })
                            }
                        </ul>
                    </div>
            }
        </Container>
    );
}