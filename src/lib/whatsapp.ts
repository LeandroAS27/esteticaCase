import { site } from "@/config/site";

export const waLink = (mensagem: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
