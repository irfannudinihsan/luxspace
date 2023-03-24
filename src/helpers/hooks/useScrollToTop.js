import React from "react";
import { useLayoutEffect } from "react";
import { useHistory, useNavigate } from "react-router-dom";


export default function useScrollToTop() {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [navigate]);
}
