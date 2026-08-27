import { tradeTiles } from '../content';
import chevronBg from '../assets/images/chevron-bg.svg';
import plumbingIcon from '../assets/icons/plumbing.svg';
import heatingIcon from '../assets/icons/heating.svg';
import electricalIcon from '../assets/icons/electrical.svg';
import roofingIcon from '../assets/icons/roofing.svg';
import buildingIcon from '../assets/icons/building.svg';
import landscapingIcon from '../assets/icons/landscaping.svg';

const ICONS = {
  plumbing: plumbingIcon,
  heating: heatingIcon,
  electrical: electricalIcon,
  roofing: roofingIcon,
  building: buildingIcon,
  landscaping: landscapingIcon,
};

export default function TradeTiles() {
  return (
    <section id="who-its-for" className="relative overflow-hidden bg-white py-20 md:py-28" data-thread>
      <img
        src={chevronBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.15]"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-cyan-deep">
          Who it's for
        </p>
        <h2 className="mt-3 max-w-xl font-expanded text-2xl font-bold leading-snug text-navy md:text-4xl">
          Built for the trades that live on their phone.
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {tradeTiles.map((tile) => (
            <div
              key={tile.key}
              className="group rounded-card border border-navy-15 bg-white p-6 transition-[border-color,transform] hover:-translate-y-px hover:border-cyan-deep"
            >
              <img src={ICONS[tile.key]} alt="" aria-hidden="true" className="h-10 w-10" />
              <h3 className="mt-4 text-lg font-semibold text-navy">{tile.name}</h3>
              <p className="mt-2 text-[15px] text-navy-65">{tile.line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
