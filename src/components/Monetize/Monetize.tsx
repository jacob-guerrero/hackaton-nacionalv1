import { LandingMarquee } from "@/components/landing/LandingMarquee";
import { LandingShowcase } from "@/components/landing/showcase/LandingShowcase";
import Image from "@/components/shared/Image";

import assets from "@/assets/imgs/assetsManager";

export default function Monetize() {
  return (
    <>
      <LandingShowcase
        titleComponent={
          <>
            <p className="text-xl font-cursive font-semibold tracking-wider bg-clip-text bg-gradient-to-r text-transparent from-pink-500 via-pink-400 to-pink-500">
              Comparte
            </p>

            <h2 className="text-4xl font-semibold leading-tight">
              Regala más que café, comparte historias y sostenibilidad
            </h2>
          </>
        }
        description="El café no es solo una bebida, es una experiencia que conecta a las personas y apoya a las comunidades que lo hacen posible. ¡Comparte TrustCoffee con quienes más amas!"
        className="-mb-12"
      />

      <LandingMarquee animationDurationInSeconds={100} className="max-h-58">
        <Image
          src={assets.imgfin1}
          alt="Café especial en taza de cerámica"
          className="object-cover mx-4"
          width={300}
          height={300}
        />

        <Image
          src={assets.imgfin2}
          alt="Productores de café en sus fincas"
          className="object-cover mx-4"
          width={300}
          height={300}
        />

        <Image
          src={assets.imgfin3}
          alt="Granos de café seleccionados a mano"
          className="object-cover mx-4"
          width={300}
          height={300}
        />

        <Image
          src={assets.imgfin4}
          alt="Momentos compartidos disfrutando café"
          className="object-cover mx-4"
          width={300}
          height={300}
        />
      </LandingMarquee>

      <LandingMarquee
        animationDurationInSeconds={110}
        animationDirection="left"
        className="max-h-58"
      >
        <Image
          src={assets.imgend1}
          alt="Proceso de tostado del café"
          className="object-cover mx-4"
          width={300}
          height={300}
        />

        <Image
          src={assets.imgend2}
          alt="Entrega de café directo al consumidor"
          className="object-cover mx-4"
          width={300}
          height={300}
        />

        <Image
          src={assets.imgend3}
          alt="Amigos disfrutando café juntos"
          className="object-cover mx-4"
          width={300}
          height={300}
        />
      </LandingMarquee>
    </>
  );
}
