
import { MaskContainer } from "../components/svg-mask-effect";

export function HeroBottom() {
  return (
    <div
      className="flex h-[40rem] w-full items-center justify-center overflow-hidden">
      <MaskContainer
        revealText={
          <p
            className="mx-auto text-center text-4xl font-bold text-slate-800 dark:text-white">
            Unlock your potential with LearnSphere. Where knowledge meets innovation,<br />
            and learning never stops.
          </p>
        }
        className="h-[40rem] rounded-md border text-white dark:text-black">
        Explore the future of learning with{" "}
        <span className="text-blue-500">interactive courses</span> and{" "}
        <span className="text-blue-500">AI-powered insights</span> at{" "}
        <span className="text-blue-500">LearnSphere</span>.
      </MaskContainer>
    </div>
  );
}
