import React from "react";

export const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl bg-gray-100 shadow-md hover:shadow-xl transition ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 text-center font-medium ${className}`}>
    {children}
  </div>
);