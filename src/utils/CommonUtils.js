import { store } from "react-notifications-component";
import { NotificationManager } from "react-notifications";

export const notificationManage = (type, message) => {
  store.addNotification({
    title: type === "success" ? "Success!" : "Oops!",
    message: message,
    type: type,
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 3000,
      onScreen: true,
    },
  });
};

export const showNotification = (type, message) => {
  if (type === "success") {
    NotificationManager.success(message, "Success!", 3000);
  } else if (type === "error") {
    NotificationManager.error(message, "Oops!", 3000);
  } else if (type === "warning") {
    NotificationManager.warning(message, "Warning!", 3000);
  } else if (type === "info") {
    NotificationManager.info(message, "Information", 3000);
  }
};

export const notificationTypes = {
  success: "success",
  error: "error",
  warning: "warning",
  info: "info",
};

export const scrollTop = () => {
  window.scrollTo(0, 0);
};
