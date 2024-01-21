import { useCallback, useEffect } from "react";
import init, { run } from "@/../wasm/pkg/wasm.js";

export const useSmbr = () => {
  const initWasm = useCallback(async () => {
    await init();
  }, []);

  useEffect(() => {
    initWasm();
  }, []);

  const executeCode = (text: string, input: string = "") => {
    return run(text, input);
  };

  return {
    executeCode,
  };
};
