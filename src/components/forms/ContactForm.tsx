"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <form
      className="space-y-5"
      action={`mailto:info@stuartthomasconstruction.com`}
      method="post"
      encType="text/plain"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required className="rounded-sm" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" className="rounded-sm" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required className="rounded-sm" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="service">Service interest</Label>
        <Input id="service" name="service" placeholder="e.g. Armour stone, waterfront work" className="rounded-sm" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Project details</Label>
        <Textarea id="message" name="message" rows={5} required className="rounded-sm" />
      </div>
      <Button type="submit" className="w-full rounded-sm bg-stc-gold font-bold uppercase tracking-wider text-stc-black hover:bg-stc-gold/90 sm:w-auto">
        Send Message
      </Button>
    </form>
  );
}
