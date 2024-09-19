interface Props {
    field: string;
    label: string;
}

const AddressFieldDesktop = ({ field, label }: Props) => {
    return (
        <div className={"flex flex-col gap-3"}>
            <span className={"text-silver-200"}>{label}</span>
            <span className={"text-text-100"}>{field.length > 0 ? field : "-"}</span>
        </div>
    );
};

export default AddressFieldDesktop;