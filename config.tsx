"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Navbar }  from "./Navbar";
import { Sidebar } from "./Sidebar";

export function DashboardLayout({
  children,
  user,
}: {
  children: React.ReactNode;
  user: { name: string; email: string };
}) {
  const [collapsed,  setCollapsed]  = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="dashboard-glass-bg min-h-screen transition-colors duration-300">
      <Sidebar
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
        onToggleCollapsed={() => setCollapsed((v) => !v)}
        user={user}
      />

      <div
        className={`min-h-screen transition-[padding-left] duration-300 ${
          collapsed ? "lg:pl-20" : "lg:pl-[272px]"
        }`}
      >
        <Navbar user={user} onOpenSidebar={() => setMobileOpen(true)} />

        <main className="relative z-10 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mx-auto max-w-7xl"
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
