import { LandingPrimaryVideoCtaSection } from "@/components/landing/cta/LandingPrimaryCta";
import { LandingSocialProof } from "@/components/landing/social-proof/LandingSocialProof";

import { Button } from "@/components/shared/ui/button";
import { colors } from "@/data/config/colors";
import { Link } from "react-router-dom";
import vid1 from "@/assets/vids/vid1.mp4";

export default function Intro() {
  const avatarItems = [
    {
      imageSrc: "https://picsum.photos/id/669/100/100",
      name: "Alvaro Hernandez",
    },
    {
      imageSrc: "https://picsum.photos/id/65/100/100",
      name: "Diego Melo",
    },
    {
      imageSrc: "https://picsum.photos/id/64/100/100",
      name: "Jacob Guerrero",
    },
  ];

  return (
    <>
      <LandingPrimaryVideoCtaSection
        title="Transparencia en cada taza, desde la planta hasta tu mesa."
        description="Con TrustCoffee, conoce la historia detrás de cada grano de café especial. Descubre su origen, proceso de producción y certificación de calidad, todo al alcance de tu mano."
        autoPlay
        controls={false}
        textPosition="center"
        videoPosition="center"
        videoSrc={vid1}
        withBackground
        variant="secondary"
        leadingComponent={
          <p className="font-cursive font-semibold tracking-wider bg-clip-text bg-gradient-to-r text-transparent from-pink-500 via-pink-400 to-pink-500">
            Autenticidad y sostenibilidad en cada sorbo.
          </p>
        }
      >
        <div className="w-full mt-6 flex justify-center gap-4">
          <Button size="xl" className="p-7 text-xl" variant="secondary" asChild>
            <Link to="login">Explora la trazabilidad</Link>
          </Button>
        </div>

        <LandingSocialProof
          className="w-full mt-6 justify-center"
          showRating
          numberOfUsers={750}
          suffixText="caficultores, distribuidores y consumidores confiando en TrustCoffee"
          avatarItems={avatarItems}
          size="large"
          disableAnimation
        />
      </LandingPrimaryVideoCtaSection>

      {/* Background gradient */}
      <div
        className="fixed top-0 left-0 w-full h-full -z-10"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(
            ` <svg xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="a" cx="50%" cy="56.6%" r="50%" fx="50%" fy="56.6%" gradientUnits="userSpaceOnUse"><stop offset="0%" style="stop-color:${colors.primary.dark};stop-opacity:0.1"/><stop offset="54.99%" style="stop-color:${colors.primary.darker};stop-opacity:0.1"/><stop offset="100%" style="stop-color:${colors.secondary.darker};stop-opacity:0.1"/></radialGradient></defs><rect width="100%" height="100%" fill="url(#a)"/></svg>`
          )}')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      ></div>
    </>
  );
}
