import { NextPage } from "next";
import { useState, useEffect } from "react";
import init, { run } from "@/wasm/pkg/wasm.js";

const IndexPage: NextPage = () => {
  const [text, setText] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  useEffect(() => {
    (async () => {
      await init();
      setResult(run(text, ""));
    })();
  }, [text]);

  return (
    <div className="flex flex-col items-center justify-center font-mplus1">
      <h1 className="m-8 text-2xl">SMBR Cockpit Sample</h1>
      <textarea
        value={text}
        onChange={handleChange}
        className="m-8 h-[20rem] w-[60rem] bg-slate-100"
      />
      <div className="text-xl">Result: {result}</div>
    </div>
  );
};

export default IndexPage;
