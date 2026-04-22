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
          There is a quiet nostalgia in the most fleeting things: a sunset
          dissolving into night, the wind moving across your face,
          bioluminescence flickering in the vastness of the ocean. The most
          beautiful moments in life never last, and no matter how deeply we
          feel them, we cannot keep them. Through my lens, I try to preserve a
          fragment of that beauty, not only what the world looked like, but
          what it felt like to stand inside it.
        </p>
      </div>
    </section>
  );
}
