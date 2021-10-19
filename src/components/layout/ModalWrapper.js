import React from "react";
import { closeModal } from "../../general/alert";
import LeftAndRight from "./LeftAndRight";

export default function ModalWrapper({ children, title }) {
  return (
    <div>
      <div>
        <LeftAndRight
          marginBottom={"16px"}
          left={<div style={{ textAlign: "center" }}>{title}</div>}
          right={
            <i
              onClick={() => {
                closeModal();
              }}
              style={{
                fontSize: "22px",
                cursor: "pointer",
              }}
              className="fal fa-times"
            ></i>
          }
        />
      </div>
      {children}
    </div>
  );
}
