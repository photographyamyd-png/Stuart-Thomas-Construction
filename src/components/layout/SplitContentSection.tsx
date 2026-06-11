import Image from "next/image";
import { cn } from "@/lib/utils";

export function SplitContentSection({
  id,
  imageSrc,
  imageAlt,
  imagePosition = "right",
  children,
  className,
}: {
  id?: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  children: React.ReactNode;
  className?: string;
}) {
  const copyPanel = (
    <div className="flex min-h-[320px] flex-col justify-center bg-stc-black p-12 lg:min-h-[480px] lg:p-16">
      {children}
    </div>
  );

  const imagePanel = (
    <div className="relative min-h-[320px] lg:min-h-[480px]">
      <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="50vw" quality={80} />
    </div>
  );

  return (
    <section
      id={id}
      className={cn("grid min-h-0 grid-cols-1 lg:grid-cols-2", className)}
    >
      {imagePosition === "left" ? (
        <>
          {imagePanel}
          {copyPanel}
        </>
      ) : (
        <>
          {copyPanel}
          {imagePanel}
        </>
      )}
    </section>
  );
}
