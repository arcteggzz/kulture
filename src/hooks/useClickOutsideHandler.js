import { useEffect } from "react";

const useClickOutsideToClose = (
  openCloseHandler,
  openCloseState,
  refElement
) => {
  useEffect(() => {
    const handleClick = (e) => {
      if (openCloseState) {
        if (!refElement?.current?.contains(e.target)) {
          openCloseHandler(false);
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [openCloseHandler, openCloseState, refElement]);
};

export default useClickOutsideToClose;
