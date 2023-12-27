import React from "react";

const sizeClasses = {
  txtPoppinsSemiBold14: "font-poppins font-semibold",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtPoppinsMedium12Black900: "font-medium font-poppins",
  txtPoppinsMedium12: "font-medium font-poppins",
  txtPoppinsMedium10: "font-medium font-poppins",
  txtInterMedium12: "font-inter font-medium",
  txtInterRegular14: "font-inter font-normal",
  txtPoppinsMedium14Black90001: "font-medium font-poppins",
  txtInterMedium14: "font-inter font-medium",
  txtInterMedium14RedA700: "font-inter font-medium",
  txtInterMedium12Black900: "font-inter font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
