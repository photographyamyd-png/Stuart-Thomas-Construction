import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

export function StatRow({
  items,
  overlap = false,
}: {
  items: readonly { value: string; label: string }[];
  overlap?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative z-20 border-t-4 border-stc-lime bg-stc-charcoal shadow-[0_-8px_32px_rgb(35_31_32/40%)]",
        overlap && "-mt-px",
      )}
    >
      <Container className="grid grid-cols-1 divide-y divide-stc-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {items.map((item) => (
          <div key={item.label} className="px-2 py-6 text-center sm:py-8">
            <p className="stc-stat text-stc-lime">{item.value}</p>
            <p className="stc-label mt-2 text-role-body-on-dark">{item.label}</p>
          </div>
        ))}
      </Container>
    </div>
  );
}
