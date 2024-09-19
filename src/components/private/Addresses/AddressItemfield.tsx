interface Props {
    fieldOne: string;
    filedTwo?: string;
    label: string;
}

const AddressItemFiled = ({ fieldOne, filedTwo, label }: Props) => {
    return (
        <div className={"w-full flex justify-between items-center text-sm"}>
            <span className={"text-silver-200"}>{label}</span>
            <div className={"flex items-center gap-1"}>
                <span>{fieldOne.length > 0 ? fieldOne : "-"}</span>
                {filedTwo && <span>{filedTwo}</span>}
            </div>
        </div>
    );
};

export default AddressItemFiled;