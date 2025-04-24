import React, { useState } from "react";
import "../../styles/giftcard.css";

export function GiftCardRedeem({ onValid }) {
  const [code, setCode] = useState("");
  const [msg, setMsg] = useState("");

  const handle = async e => {
    e.preventDefault();
    const r = await fetch("/api/gift-cards/redeem", {
      method:"POST", headers:{ "Content-Type":"application/json" },
      body:JSON.stringify({ code })
    });
    if(r.ok){
      const gc = await r.json();
      setMsg("¡Código aplicado!");
      onValid && onValid(gc);
    }else{
      const err = await r.json();
      setMsg(err.msg);
    }
  };

  return(
    <form className="gc-redeem" onSubmit={handle}>
      <input value={code} onChange={e=>setCode(e.target.value.toUpperCase())}
             placeholder="Código gift‑card"/>
      <button>Canjear</button>
      {msg && <p>{msg}</p>}
    </form>
  );
}
