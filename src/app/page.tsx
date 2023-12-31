"use client";

import { useFormik } from "formik";
import init, { run } from "@/../wasm/pkg/wasm.js";
import { useCallback, useEffect } from "react";

export default function AppPage() {
  const initWasm = useCallback(async () => {
    await init();
  }, []);

  useEffect(() => {
    initWasm();
  }, []);

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    onSubmit: (values) => {
      alert(run(values.code, ""));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="text">Code</label>
      <input
        id="code"
        name="code"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.code}
      />

      <button type="submit">Execute</button>
    </form>
  );
}
