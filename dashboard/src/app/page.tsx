import "./globals.css";

import { Inter } from "next/font/google";
import { Status } from "./status/status";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main style={{ ...inter.style }} className="p-8 bg-slate-100 h-screen">
      <div
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {/* @ts-expect-error Async Server Component */}
        <Status owner="Sygeforsikring" repo="sd-ui" workflow_id="ci.yml" />

        {/* @ts-expect-error Async Server Component */}
        <Status
          owner="adaptdk"
          repo="gsv-kundeportal"
          workflow_id="smoke.yml"
        />
      </div>
    </main>
  );
}
