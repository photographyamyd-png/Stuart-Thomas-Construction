import { cn } from "@/lib/utils";

type MainTone = "light" | "dark";

const mainToneClass: Record<MainTone, string> = {
  light: "bg-stc-white text-stc-black",
  dark: "bg-stc-black text-stc-white",
};

export function SidebarPageLayout({
  pillar,
  children,
  pillarSide = "left",
  mainTone = "light",
  className,
}: {
  pillar: React.ReactNode;
  children: React.ReactNode;
  pillarSide?: "left" | "right";
  mainTone?: MainTone;
  className?: string;
}) {
  const pillarEl = (
    <aside className="bg-stc-beige p-8 lg:sticky lg:top-20 lg:self-start lg:min-h-[calc(100vh-5rem)]">
      {pillar}
    </aside>
  );

  const mainEl = (
    <div className={cn("p-8 lg:p-12", mainToneClass[mainTone])}>{children}</div>
  );

  return (
    <div
      className={cn(
        "grid min-h-[480px] grid-cols-1 lg:grid-cols-[300px_1fr]",
        pillarSide === "right" && "lg:grid-cols-[1fr_300px]",
        className,
      )}
    >
      {pillarSide === "left" ? (
        <>
          {pillarEl}
          {mainEl}
        </>
      ) : (
        <>
          {mainEl}
          {pillarEl}
        </>
      )}
    </div>
  );
}
