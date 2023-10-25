import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listeningCapturing = true) {
  const ref = useRef();
  useEffect(() => {
    function handelClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }
    document.addEventListener("click", handelClick, listeningCapturing);
    return () => {
      document.removeEventListener("click", handelClick, listeningCapturing);
    };
  }, [handler, listeningCapturing]);
  return ref;
}
