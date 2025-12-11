import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Global/Navbar";
import useLenis from "./Functions/useLenis";

export default function App() {
  useLenis();
  return (
    <div className="relative min-h-screen bg-slate-50/50">
      {/* Navbar stays on top */}
      <Navbar />

      {/* Page content */}
      <main> {/* Add padding to avoid overlap with navbar */}
        <Outlet />
      </main>
    </div>
  );
}
