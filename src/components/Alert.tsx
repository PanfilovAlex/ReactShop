import React, { useEffect } from "react";

type AlertProps = {
  closeAlert: () => void;
  name: string;
};

export const Alert = (props: AlertProps) => {
  const name = props.name;
  const closeAlert = props.closeAlert;
  useEffect(() => {
    const timerID = window.setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerID);
    };
  }, [name]);

  return (
    <div id="toast-container">
      <div className="toast"> {name} добавлен в карзину</div>
    </div>
  );
};
