import { Container } from "@/components/layout/Container";
import { Band } from "@/components/stc/primitives/Band";
import { EditorialAccentRule } from "@/components/stc/primitives/EditorialAccentRule";
import { cn } from "@/lib/utils";

export function ProcessStack({
  steps,
  label = "How we work",
  title = "Our Process",
  palette = "mockup",
}: {
  steps: readonly { title: string; description: string }[];
  label?: string;
  title?: string;
  palette?: "production" | "mockup";
}) {
  const mockup = palette === "mockup";

  return (
    <Band tone={mockup ? "forest" : "charcoal"} pad="lg">
      <Container>
        <header className="mx-auto max-w-2xl text-center">
          <span className={cn("stc-mockup-eyebrow", mockup ? "text-copper" : "text-stc-lime")}>
            {label}
          </span>
          <EditorialAccentRule className="mx-auto mt-4" />
          <h2
            className={cn(
              "mt-6 text-3xl leading-[0.85] text-white",
              mockup ? "stc-mockup-headline" : "stc-display-md",
            )}
          >
            {title}
          </h2>
        </header>
        <ol
          className={cn(
            "mt-10 grid list-none gap-0 border-t sm:grid-cols-2 lg:grid-cols-4",
            mockup ? "border-white/15" : "border-stc-white/15",
          )}
        >
          {steps.map((step, i) => (
            <li
              key={step.title}
              className={cn(
                "flex flex-col gap-3 border-b px-6 py-8 sm:border-b-0 sm:border-l",
                mockup ? "border-white/12 sm:first:border-l-0" : "border-stc-white/12 sm:first:border-l-0",
              )}
            >
              <span
                className={cn(
                  "font-oswald text-3xl font-bold leading-none",
                  mockup ? "text-copper" : "text-stc-lime/40",
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className={cn(
                  "text-sm uppercase tracking-wide text-white",
                  mockup ? "stc-mockup-eyebrow !text-white" : "stc-label",
                )}
              >
                {step.title}
              </h3>
              <p
                className={cn(
                  "max-w-[28ch] leading-relaxed",
                  mockup
                    ? "stc-mockup-body stc-mockup-body--on-dark text-base"
                    : "stc-body-sm text-sm text-stc-white/60",
                )}
              >
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Band>
  );
}
