import React, { useState } from "react";

export default function Abc() {
  const [a, b] = useState({ c: "q", d: 27 });

  const x = (e) => b({ ...a, c: e.target.value });
  const y = (s) => b({ ...a, d: parseInt(s.target.value) });

  return (
    <div>
      <input id="r" value={a.c} onChange={x} />
      <input id="t" value={a.d} onChange={y} />
      {JSON.stringify(a, null, 2)}
    </div>
  );
}