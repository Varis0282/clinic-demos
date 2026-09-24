import { Stethoscope, HeartPulse, Baby, Sparkles, FlaskConical, Syringe, Activity, ShieldCheck, BadgeCheck, Clock, IndianRupee, LucideIcon } from "lucide-react";

const map: Record<string, LucideIcon> = { Stethoscope, HeartPulse, Baby, Sparkles, FlaskConical, Syringe, Activity, ShieldCheck, BadgeCheck, Clock, IndianRupee };

export default function Icon({ name, className }: { name: string; className?: string }) {
  const C = map[name] ?? Stethoscope;
  return <C className={className} />;
}
