import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export function ContactForm() {
  return (
    <div className="space-y-5">
      <p className="text-sm text-muted-foreground">
        Call us to discuss your project. We handle quotes and scheduling by phone.
      </p>
      <Button asChild variant="stcSolid" className="w-full font-bold sm:w-auto">
        <a href={`tel:${site.phoneTel}`}>Call {site.phoneDisplay}</a>
      </Button>
    </div>
  );
}
