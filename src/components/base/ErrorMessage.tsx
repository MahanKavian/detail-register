interface Props {
    error: string;
}
const ErrorMessage = ({ error }: Props) => {
    return (
        <span className={"text-xs text-red"}>
            {error}
        </span>
    );
};

export default ErrorMessage;