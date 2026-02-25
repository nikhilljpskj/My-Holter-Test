import { Building2, Stethoscope, Shield, Award } from "lucide-react";

const badges = [
  {
    icon: Building2,
    value: "100+",
    label: "Partner Hospitals",
  },
  {
    icon: Stethoscope,
    value: "300+",
    label: "Referring Doctors",
  },
  {
    icon: Shield,
    value: "10,000+",
    label: "Tests Completed",
  },
  {
    icon: Award,
    value: "99%",
    label: "Accuracy Rate",
  },
];

export function TrustBadges() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {badges.map((badge, index) => (
        <div
          key={badge.label}
          className="bg-card rounded-2xl p-6 text-center hover-lift border border-border/50"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-hero flex items-center justify-center">
            <badge.icon className="w-6 h-6 text-white" />
          </div>
          <p className="font-display text-2xl md:text-3xl font-bold text-gradient mb-1">
            {badge.value}
          </p>
          <p className="text-sm text-muted-foreground">{badge.label}</p>
        </div>
      ))}
    </div>
  );
}
