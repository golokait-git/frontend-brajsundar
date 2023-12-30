"use client";
import Script from "next/script";
import React, { useState } from "react";
const Wrapper = ({ children }) => {
  return (
    <React.Fragment>
      <iframe
        src="https://brajsundardas.edmingle.com/js-sdks/signup-sdk/iframe.php?subdomain=brajsundardas"
        id="iframe"
        className="iframe"
        style={{
          width: "100vw",
          height: "100vh",
          border: "none",
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: 10000,
          display: "none",
        }}
      />
      <main>{children}</main>
      <Script src="/js/jquery.min.js" async />
      <Script
        async
        src={
          "https://brajsundardas.edmingle.com/js-sdks/signup-sdk/signup-sdk.js?v=2.8"
        }
      />
      <Script async src="/js/inst.js" />
    </React.Fragment>
  );
};

export default Wrapper;
