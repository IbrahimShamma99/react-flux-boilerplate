import { useEffect } from "react";
function useStoreQuery(param) {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get(param);
    if (myParam) {
      localStorage.setItem(param, +myParam);
      setTimeout(() => {
        window.location.href =
          window.location.origin + window.location.pathname;
      }, 10000);
    }
  });
  return localStorage.getItem(param);
}
export default useStoreQuery;
