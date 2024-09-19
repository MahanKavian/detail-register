import { toast } from "react-toastify";


export function errorHandler(error: any): void {
    if (error.response) {
        switch (error.response.status) {
            case 404:
                toast.error("منابع درخواستی یافت نشد");
                break;
            case 400:
                toast.error("منابع درخواستی یافت نشد");
                break;
            case 401:
                toast.error("منابع درخواستی یافت نشد");
                break;
            case 403:
                toast.error("منابع درخواستی یافت نشد");
                break;
            case 419:
                toast.error("منابع درخواستی یافت نشد");
                break;
            case 422:
                toast.error("منابع درخواستی یافت نشد");
                break;
            default:
                toast.error("خطایی رخداده است");
                break;
        }
    } else if (error.request) {
        toast.error("ارتباط با سرور برقرار نیست");
    } else {
        toast.error("خطایی نامعلوم رخداده است");
    }
}
