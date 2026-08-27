import Shuffler from './Artifacts/Shuffler';
import Typewriter from './Artifacts/Typewriter';
import Scheduler from './Artifacts/Scheduler';

export default function ThreeArtifacts() {
  return (
    <section id="three-artifacts" className="bg-white py-20 md:py-28" data-thread>
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-cyan-deep">
          What it does
        </p>
        <h2 className="mt-3 max-w-2xl font-expanded text-2xl font-bold leading-snug text-navy md:text-4xl">
          Three things it has to get right.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[Shuffler, Typewriter, Scheduler].map((Card, i) => (
            <div
              key={i}
              className="rounded-card border border-navy-15 bg-white p-6 shadow-[0_20px_50px_rgba(14,22,55,0.06)]"
            >
              <Card />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
