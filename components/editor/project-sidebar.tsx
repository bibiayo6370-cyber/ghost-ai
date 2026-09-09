"use client";

import { FolderOpen, Plus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

function EmptyProjectState({ label }: { label: string }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
      <FolderOpen aria-hidden="true" className="h-8 w-8 text-copy-faint" />
      <p className="text-sm text-copy-muted">No {label.toLowerCase()} yet.</p>
    </div>
  );
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <aside
      aria-hidden={!isOpen}
      aria-label="Projects"
      className={cn(
        "fixed bottom-4 left-4 top-[4.5rem] z-40 flex w-80 flex-col rounded-2xl border border-surface-border bg-surface/95 p-4 shadow-xl backdrop-blur transition-transform duration-200 ease-out",
        isOpen ? "translate-x-0" : "pointer-events-none -translate-x-[calc(100%+1rem)]",
      )}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-copy-primary">Projects</h2>
        <Button
          aria-label="Close projects sidebar"
          onClick={onClose}
          size="icon"
          type="button"
          variant="ghost"
        >
          <X aria-hidden="true" className="h-5 w-5" />
        </Button>
      </div>

      <Tabs className="mt-6 flex min-h-0 flex-1 flex-col" defaultValue="my-projects">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="my-projects">My Projects</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
        </TabsList>
        <TabsContent className="flex min-h-0 flex-1 flex-col" value="my-projects">
          <EmptyProjectState label="projects" />
        </TabsContent>
        <TabsContent className="flex min-h-0 flex-1 flex-col" value="shared">
          <EmptyProjectState label="shared projects" />
        </TabsContent>
      </Tabs>

      <Button className="mt-4 w-full" type="button">
        <Plus aria-hidden="true" className="h-5 w-5" />
        New Project
      </Button>
    </aside>
  );
}