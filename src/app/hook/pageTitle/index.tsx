import { useEffect } from "react";

interface IProps {
  title: string;
}

const usePageTitle = ({ title }: IProps): void => {
  const setPageTitle = (title: string) => {
    document.title = `Adotar | ${title}`;
  };

  useEffect(() => {
    setPageTitle(title);
  }, [title]);
};

export default usePageTitle;
