import { LandingSaleCtaSection } from "@/components/landing/cta/LandingSaleCta";

export default function FinalAction() {
  return (
    <LandingSaleCtaSection
      withBackgroundGlow
      variant="secondary"
      backgroundGlowVariant="secondary"
      title="¿Estás listo para cambiar la forma en que disfrutas el café?"
      description="Únete a TrustCoffee y sé parte de una comunidad que apoya la transparencia, la sostenibilidad y el comercio justo. Haz de cada taza una decisión con impacto."
      ctaHref="#"
      ctaLabel="Únete Ahora"
    />
  );
}