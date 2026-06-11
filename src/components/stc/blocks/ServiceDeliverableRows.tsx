import Image from "next/image";
import Link from "next/link";
import { EditorialAccentRule } from "@/components/stc/primitives/EditorialAccentRule";
import { cn } from "@/lib/utils";

function accentizeTitle(title: string) {
  const words = title.trim().split(/\s+/);
  if (words.length < 2) return title;
  const last = words.pop();
  return (
    <>
      {words.join(" ")}{" "}
      <span className="text-forest">{last}</span>
    </>
  );
}

export function ServiceDeliverableRows({
  items,
  images,
}: {
  items: readonly { title: string; description: string }[];
  images: readonly string[];
}) {
  return (
    <section className="w-full" aria-labelledby="deliverables-title">
      <header className="mx-auto max-w-3xl px-6 py-12 text-center lg:px-12">
        <span className="stc-mockup-eyebrow mb-4 block">Scope</span>
        <EditorialAccentRule className="mx-auto" />
        <h2
          id="deliverables-title"
          className="stc-mockup-headline mx-auto mt-6 max-w-[18ch] text-3xl leading-[0.85] text-charcoal lg:text-4xl"
        >
          What We <span className="text-forest">Deliver</span>
        </h2>
      </header>
      <ol className="list-none">
        {items.map((item, i) => {
          const imageSrc = images[i % images.length];
          const even = i % 2 === 1;
          return (
            <li
              key={item.title}
              className="grid min-h-[clamp(320px,42vh,480px)] grid-cols-1 lg:grid-cols-2"
            >
              <div
                className={cn(
                  "relative min-h-[220px] bg-charcoal lg:min-h-full",
                  even ? "lg:order-2" : "lg:order-1",
                )}
              >
                <Image
                  src={imageSrc}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div
                className={cn(
                  "flex flex-col justify-center gap-5 bg-beige p-12 lg:gap-6 lg:p-16 xl:p-20",
                  even ? "lg:order-1" : "lg:order-2",
                )}
              >
                <svg
                  className="size-8 text-forest"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M4 8h16v4H4zM6 12v8h12v-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
                <span className="stc-mockup-eyebrow">Deliverable</span>
                <EditorialAccentRule />
                <h3 className="stc-mockup-headline max-w-[18ch] text-2xl leading-[0.85] text-charcoal lg:text-3xl">
                  {accentizeTitle(item.title)}
                </h3>
                <p className="stc-mockup-body max-w-[44ch] border-t border-copper/30 pt-4 text-base">
                  {item.description}
                </p>
                <Link
                  href="/contact"
                  className="stc-mockup-eyebrow mt-1 inline-block text-copper hover:text-forest"
                >
                  Learn more →
                </Link>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
