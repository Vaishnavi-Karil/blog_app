import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const RegisterLayoutPage = ({ children }: Props) => {
  return (
    <>
      {/* <div className="maincontainer">
        <div style={{ flex: "1", alignContent: "center" }}>{children}</div>
      </div> */}
      <div>{children}</div>
    </>
  );
};

export default RegisterLayoutPage;
