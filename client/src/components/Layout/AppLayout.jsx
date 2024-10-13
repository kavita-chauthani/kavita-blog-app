import { Outlet } from "react-router-dom";
import { Headers } from "../Header";
import { Toaster } from "react-hot-toast";

export const AppLayout = () => {
  return (
    <>
      <Headers />
      <Toaster/>
      <Outlet />
    </>
  );
};
