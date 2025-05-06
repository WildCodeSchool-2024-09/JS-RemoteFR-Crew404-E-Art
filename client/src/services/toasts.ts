import { toast } from "react-toastify";

const successToast = (message: string) => {
  toast.success(message);
};

const failureToast = (message: string) => {
  toast.error(message);
};

const infoToast = (message: string) => {
  toast.info(message);
};

export { successToast, failureToast, infoToast };
