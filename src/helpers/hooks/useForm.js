import { useState } from "react";

export default function useForm(initailState) {
  const [state, setState] = useState(initailState);

  function fnUpdateState(event) {
    setState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  return {state, fnUpdateState}

  
}
