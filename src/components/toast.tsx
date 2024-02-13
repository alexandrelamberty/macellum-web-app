import { useEffect } from "react";

import { useSelector } from "react-redux";

import { useToast } from "@/components/ui/use-toast";
import { RootState } from "@/store/store";

export function ToastNotification() {
  const { toast } = useToast();

  const toastNotification = useSelector(
    (state: RootState) => state.notifications.toast,
  );

  useEffect(() => {
    if (!toastNotification) return;
    toast(toastNotification);
  }, [toastNotification, toast]);
}
