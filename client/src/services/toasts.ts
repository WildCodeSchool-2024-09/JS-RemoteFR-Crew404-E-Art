import { toast } from "react-toastify";

const successToast = (message: string) => {
  toast.success(message);
};

const failureToast = (message: string) => {
  toast.error(message);
};

export { successToast, failureToast };
