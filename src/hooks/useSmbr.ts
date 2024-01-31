import { useCallback, useEffect } from "react";
import init, { run } from "@/../wasm/pkg/wasm.js";

export const useSmbr = () => {
  const initWasm = useCallback(async () => {
    await init();
  }, []);

  useEffect(() => {
    initWasm();
  }, []);

  const execute = (code: string, input: string) => {
    return run(code, input);
  };

  return { execute };
};
