"use client";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NotifyMessage() {
  const notify = () => toast.error("Cannot vote without being logged in");
  notify();
  return <ToastContainer />;
}

export default NotifyMessage;
