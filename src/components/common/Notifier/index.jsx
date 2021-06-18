import React from "react";
import { toastr } from "react-redux-toastr";

function notifier(msg, color = "success") {
  if (color.toLowerCase() === "success") {
    toastr.success(msg);
  } else if (color.toLowerCase() === "error") {
    toastr.error(msg);
  }
}

export { notifier };
