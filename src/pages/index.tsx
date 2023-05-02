import { NextPage } from "next";
import { useState, useEffect } from "react";
import init, { hello } from "@/wasm/pkg/wasm.js";

const IndexPage: NextPage = () => {
  const [result, setResult] = useState("");

  useEffect(() => {
    (async () => {
      await init();
      setResult(hello());
    })();
  }, []);

  return (
    <div className="font-mplus1">
      <h1 className="text-2xl">SMBR Cockpit Sample</h1>
      <p>{result}</p>
    </div>
  );
};

export default IndexPage;
