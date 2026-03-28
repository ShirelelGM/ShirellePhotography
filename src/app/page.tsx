import Image from "next/image";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-image-wrapper">
        <Image
          src="/images/Portada.jpg"
          alt="Shirelle Ganon Moragrega Photography"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="hero-overlay" />

      <div className="hero-content">
        <h1 className="hero-name">Shirelle GM</h1>
        <p className="hero-bio">
          A visual storyteller capturing the raw beauty of the natural world.
          Through the lens, I seek moments of wonder — from the quiet grace of
          marine life to the vast, untamed landscapes that remind us how
          extraordinary our planet truly is.
        </p>
      </div>
    </section>
  );
}
