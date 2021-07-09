import { toast } from "react-toastify";

export const toastMessages = (message: string) => {
  return toast.dark(message, {
    position: toast.POSITION.BOTTOM_LEFT,
    autoClose: 1500,
    draggablePercent: 60,
  });
};
