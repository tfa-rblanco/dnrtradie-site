import { useEffect } from "react";

const TawkMessenger = () => {
  useEffect(() => {
    // Define global variables
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Create and insert the Tawk.to script
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/67f1ceb387b120190b78be66/1io48us5i";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    // Hide the widget once it loads
    script.onload = () => {
      if (window.Tawk_API && window.Tawk_API.onLoad) {
        window.Tawk_API.onLoad = function () {
          window.Tawk_API.hide();
        };
      }
    };

    return () => {
      document.body.removeChild(script); // Clean up on unmount
    };
  }, []);
};


export default TawkMessenger;
