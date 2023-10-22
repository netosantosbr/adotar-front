import { useToast } from "@chakra-ui/react";

type NotificationStatus =
  | "info"
  | "warning"
  | "success"
  | "error"
  | "loading"
  | undefined;

const useNotify = () => {
  const toast = useToast();

  const notify = (title: string, status: NotificationStatus) => {
    toast({
      title,
      variant: "left-accent",
      position: "top-right",
      status: status,
    });
  };

  return { notify };
};

export default useNotify;
