import React from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";

export default () => {
  return (
    <CookieConsent
      contentStyle={{
        margin: "0",
        padding: "10px"
      }}
      location="bottom"
      buttonText="I ACCEPT"
      cookieName="coach4success"
      // enableDeclineButton="true"
      declineButtonText="Close"
      declineButtonStyle={{
        background: "#c12a2a",
        border: "0",
        borderRadius: "0px",
        boxShadow: "none",
        color: "#e5e5e5",
        cursor: "pointer",
        flex: "0 0 auto",
        padding: "5px 10px",
        margin: "15px"
      }}
      style={{
        background: "#231F20",
        color: "#fff",
        padding: "0px !important",
        display: "grid",
        gridTemplateColumns: "auto auto"
      }}
      buttonStyle={{
        color: "#fff",
        fontSize: "16px",
        fontWeight: "700",
        background: "#146CB6",
        borderRadius: "0px",
        boxShadow: "none",
        cursor: "pointer",
        flex: "0 0 auto",
        padding: "20px 40px",
        margin: "0"
      }}
      expires={150}
    >
      This website uses cookies to enhance the user experience.{" "}
      {/* <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span> */}
    </CookieConsent>
  );
};
