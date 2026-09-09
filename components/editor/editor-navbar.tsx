"use client";

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { Button } from "@/components/ui/button";

interface EditorNavbarProps {
  isSidebarOpen: boolean;
  onSidebarToggle: () => void;
}

export function EditorNavbar({
  isSidebarOpen,
  onSidebarToggle,
}: EditorNavbarProps) {
  const ToggleIcon = isSidebarOpen ? PanelLeftClose : PanelLeftOpen;
  const toggleLabel = isSidebarOpen ? "Close projects sidebar" : "Open projects sidebar";

  return (
    <header className="flex h-14 shrink-0 items-center border-b border-surface-border bg-surface px-4">
      <div className="flex flex-1 items-center">
        <Button
          aria-label={toggleLabel}
          onClick={onSidebarToggle}
          size="icon"
          type="button"
          variant="ghost"
        >
          <ToggleIcon aria-hidden="true" className="h-5 w-5" />
        </Button>
      </div>
      <div aria-hidden="true" className="flex flex-1 justify-center" />
      <div aria-hidden="true" className="flex flex-1 justify-end" />
    </header>
  );
}