import { LandingMarquee } from "@/components/landing/LandingMarquee";
import { LandingTestimonialInline } from "@/components/landing/testimonial/LandingTestimonialInline";
import { LandingTestimonialInlineItem } from "@/components/landing/testimonial/LandingTestimonialInlineItem";

import {
  Coffee,
  Package,
  Leaf,
  Users,
  Globe,
  CheckCircle,
  Truck,
} from "lucide-react";

export default function Remark() {
  return (
    <>
      <LandingMarquee withBackground>
        <Coffee className="w-12 h-12 mx-8" />
        <Package className="w-12 h-12 mx-8" />
        <Leaf className="w-12 h-12 mx-8" />
        <Users className="w-12 h-12 mx-8" />
        <Globe className="w-12 h-12 mx-8" />
        <CheckCircle className="w-12 h-12 mx-8" />
        <Truck className="w-12 h-12 mx-8" />
      </LandingMarquee>

      <LandingTestimonialInline>
        <LandingTestimonialInlineItem
          name="María Rodríguez"
          text="Ahora sé exactamente de qué finca proviene mi café. ¡Es increíble conocer a los productores!"
          suffix="Consumidora de café especial"
        />

        <LandingTestimonialInlineItem
          name="Carlos López"
          text="Confío en TrustCoffee porque garantiza que mis productos sean auténticos y certificados."
          suffix="Distribuidor"
        />

        <LandingTestimonialInlineItem
          name="Lucía Gómez"
          text="Ver mi trabajo reconocido y trazado hasta el consumidor me llena de orgullo."
          suffix="Productora de café"
        />

        <LandingTestimonialInlineItem
          name="Javier Torres"
          text="Esta herramienta facilita que todos en la cadena estén conectados y en sintonía."
          suffix="Exportador de café"
        />
      </LandingTestimonialInline>
    </>
  );
}
