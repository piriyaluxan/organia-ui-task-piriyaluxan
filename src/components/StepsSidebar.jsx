import { MapPin, Box, MessageSquare, User } from "lucide-react";
import { CheckCircle2 } from "lucide-react";

const steps = [
  { icon: MapPin, label: "Location", completed: true, active: true },
  { icon: Box, label: "Sub1", completed: true, active: false },
  { icon: MessageSquare, label: "Sub2", completed: false, active: false },
  { icon: User, label: "Sub3", completed: false, active: false },
];

const StepsSidebar = () => {
  return (
    <div className="flex flex-col items-center gap-0 py-4">
      {steps.map((step, idx) => (
        <div key={step.label} className="flex flex-col items-center">
          <div className="relative">
            {step.completed && (
              <CheckCircle2 className="absolute -left-3 -top-1 h-4 w-4 text-success fill-success stroke-primary-foreground" />
            )}
            <div
              className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                step.active
                  ? "bg-accent text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              <step.icon className="h-5 w-5" />
            </div>
          </div>
          <span className="text-xs text-accent font-medium mt-1">
            {step.label}
          </span>
          {idx < steps.length - 1 && (
            <div className="w-0.5 h-6 bg-border my-1" />
          )}
        </div>
      ))}
    </div>
  );
};

export default StepsSidebar;
