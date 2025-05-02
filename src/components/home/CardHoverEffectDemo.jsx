import { HoverEffect } from "./CardHoverEffect";
import Header from "../design/Header";
import { projects } from "../../constants";
export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 -translate-y-60">
      <Header>Get your loan now!</Header>

      <HoverEffect items={projects} />
    </div>
  );
}
