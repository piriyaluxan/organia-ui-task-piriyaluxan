import { MapPin, Box, MessageSquare, User, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: MapPin, label: "Location", completed: true },
  { icon: Box, label: "Sub1", completed: true },
  { icon: MessageSquare, label: "Sub2", completed: false },
  { icon: User, label: "Sub3", completed: false },
];

const StepsSidebar = () => {
  return (
    <div className="flex flex-col w-60 py-6">
      {steps.map((step, idx) => (
        <div key={step.label} className="relative flex items-start gap-4 pb-10">
          {/* Vertical Line */}
          {idx < steps.length - 1 && (
            <div
              className={`absolute left-[12px] top-8 w-[2px] h-24 ${
                steps[idx + 1].completed ? "bg-green-500" : "bg-gray-300"
              }`}
            />
          )}

          {/* Success Circle / Placeholder */}
          <div className="relative  flex items-center justify-center w-7 h-10">
            {step.completed ? (
              <CheckCircle2
                size={24}
                className="text-green-600 z-20 bg-white "
              />
            ) : (
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 bg-white" />
            )}
          </div>

          {/* Step Content */}
          <div className="flex flex-col">
            <div
              className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                step.completed
                  ? "bg-gray-200 text-green-600"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              <step.icon size={20} />
            </div>

            <span
              className={`text-sm font-medium mt-2 ${
                step.completed ? "text-green-600" : "text-gray-500"
              }`}
            >
              {step.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepsSidebar;
