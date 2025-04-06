import { useEffect } from "react";

const TawkMessenger = () => {
    useEffect(() => {
        var Tawk_API = Tawk_API || {};
        var Tawk_LoadStart = new Date();
        (function () {
          var s1 = document.createElement("script");
          s1.async = true;
          s1.src = "https://embed.tawk.to/67f1ceb387b120190b78be66/1io48us5i";
          s1.charset = "UTF-8";
          s1.setAttribute("crossorigin", "*");
          document.body.appendChild(s1);
        })();
      }, []);    

  return null;
};

export default TawkMessenger;
