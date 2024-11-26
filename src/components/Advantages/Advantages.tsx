import { Button } from "@/components/shared/ui/button";

import { LandingProductFeature } from "@/components/landing/LandingProductFeature";
import { LandingProductFeatureKeyPoints } from "@/components/landing/LandingProductFeatureKeyPoints";

import assets from "@/assets/imgs/assetsManager";
import { Link } from "react-router-dom";

export default function Advantages() {
  const keyPoints = [
    {
      title: "Transparencia total",
      description:
        "Sigue cada etapa del proceso de producción de tu café, desde la finca hasta tu mesa.",
    },
    {
      title: "Conexión directa",
      description:
        "Conoce a los productores y las prácticas sostenibles detrás de cada grano.",
    },
    {
      title: "Impacto social",
      description:
        "Contribuye a mejorar las condiciones de vida de los caficultores con cada compra.",
    },
  ];
  const keyPoints2 = [
    {
      title: "Autenticidad garantizada",
      description:
        "Verifica que tu café es auténtico y proviene de fuentes certificadas.",
    },
    {
      title: "Sostenibilidad",
      description:
        "Apoya prácticas responsables que respetan el medio ambiente y a los trabajadores.",
    },
    {
      title: "Experiencia enriquecedora",
      description:
        "Descubre historias únicas detrás de cada taza de café que disfrutas.",
    },
  ];

  return (
    <>
      <LandingProductFeature
        titleComponent={
          <>
            <p className="text-xl font-cursive font-semibold tracking-wider bg-clip-text bg-gradient-to-r text-transparent from-pink-500 via-pink-400 to-pink-500">
            Descubre
            </p>

            <h2 className="text-4xl font-semibold leading-tight">
            Transparencia y trazabilidad en cada etapa
            </h2>
          </>
        }
        descriptionComponent={
          <>
            <p>
              En <b>TrustCoffee</b>, cada taza cuenta una historia. Sigue el viaje
              de tu café desde las montañas donde se cultiva hasta tu taza.
              Descubre las personas y procesos detrás de su sabor único.
            </p>

            <LandingProductFeatureKeyPoints
              variant="secondary"
              keyPoints={keyPoints}
              className="mt-4"
            />

            <Button className="mt-8" variant="secondary" asChild>
              <Link to="login">Conoce más</Link>
            </Button>
          </>
        }
        imageSrc={assets.img1}
        imageAlt="Screenshot of the product"
        imagePosition="right"
        imagePerspective="none"
        zoomOnHover={false}
        withBackground
        variant="secondary"
      />

      <LandingProductFeature
        titleComponent={
          <>
            <p className="text-xl font-cursive font-semibold tracking-wider bg-clip-text bg-gradient-to-r text-transparent from-pink-500 via-pink-400 to-pink-500">
            Confía
            </p>

            <h2 className="text-4xl font-semibold leading-tight">
            Un café auténtico y responsable
            </h2>
          </>
        }
        descriptionComponent={
          <>
            <p>
              Al elegir <b>TrustCoffee</b>, no solo disfrutas de un café especial,
              sino que también apoyas un comercio local, justo y sostenible. Cada grano
              cuenta con autenticidad certificada.
            </p>
            <LandingProductFeatureKeyPoints
              variant="secondary"
              keyPoints={keyPoints2}
              className="mt-4"
            />
            <Button className="mt-8" variant="secondary" asChild>
              <Link to="login">Explora nuestros valores</Link>
            </Button>
          </>
        }
        imageSrc={assets.img2}
        imageAlt="Screenshot of the product"
        imagePosition="left"
        imagePerspective="none"
        zoomOnHover={false}
        withBackground
        variant="secondary"
      />
    </>
  );
}
