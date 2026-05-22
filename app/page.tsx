"use client";

import { Image } from "@heroui/image";
import { useState } from "react";

export default function Home() {
  const [spinning, setSpinning] = useState(false);

  const spinButton = () => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 1500);
  };

  return (
    <div>
      <Image
        alt="Joffrey on the iron throne"
        src="https://tse2.mm.bing.net/th/id/OIP.Q-eSMTXkft89xI6m1z12dwHaLR?w=203&h=307&c=7&r=0&o=7&pid=1.7&rm=3"
        width={200}
      />

      <Image
        alt="joffrey 2"
        src="https://tse2.mm.bing.net/th/id/OIP.F1f719rTLlA4RIXX_dUSDgHaLH?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3"
        width={200}
      />

      <Image
        alt="joffrey 3 "
        src="https://tse3.mm.bing.net/th/id/OIP.bVu0zOKT-FpgHDN9-HSnjgHaKq?w=203&h=293&c=7&r=0&o=7&pid=1.7&rm=3"
        width={200}
      />

      <Image
        alt="joffrey 4"
        src="https://tse2.mm.bing.net/th/id/OIP.yb9lv0ZU6c5oDhiOBUTKAwHaKq?w=203&h=293&c=7&r=0&o=7&pid=1.7&rm=3"
        width={200}
      />

      <Image
        alt="joffrey 5"
        src="https://tse4.mm.bing.net/th/id/OIP.gFb_3InvtHTYR53pEOnwDQHaLG?w=203&h=304&c=7&r=0&o=7&pid=1.7&rm=3"
        width={200}
      />
    </div>
  );
}
