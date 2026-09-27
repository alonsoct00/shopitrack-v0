import { ArrowRight } from "lucide-react";
import type { StepItem } from "@/data/types";
import { RichText } from "@/components/RichText";
import { ImageWithFallback } from "@/components/ImageWithFallback";

export function StepsList({
  steps,
  variant = "steps",
}: {
  steps: StepItem[];
  variant?: "steps" | "flow";
}) {
  return (
    <div className={`steps-list${variant === "flow" ? " steps-list--flow" : ""}`}>
      {steps.map((step, index) => {
        const number = String(index + 1).padStart(2, "0");
        const StepIcon = step.icon;
        return (
          <div
            className="step"
            key={number}
            data-reveal
            data-reveal-delay={String(Math.min(index, 4))}
          >
            <div className="step-line">
              {step.image ? (
                <span className="step-media">
                  <ImageWithFallback
                    src={step.image.src}
                    alt={step.image.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </span>
              ) : (
                <span>{StepIcon && <StepIcon />}</span>
              )}
              {index < steps.length - 1 && (
                <i>
                  <ArrowRight />
                </i>
              )}
            </div>
            {variant === "flow" ? (
              <h4>
                <RichText text={step.text} />
              </h4>
            ) : (
              <>
                <small>{number}</small>
                <p>
                  <RichText text={step.text} />
                </p>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
