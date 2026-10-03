// Google Ads: conversão "Clique no WhatsApp".
// Dispara a cada clique em qualquer link do WhatsApp (wa.me) da página:
// botão do topo, botão flutuante e números de contato.
export const WHATSAPP_CONVERSION = "AW-18221780456/5zYfCLW8448dEOib6fBD";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function isWhatsAppLink(el: Element | null): boolean {
  const link = el?.closest("a");
  if (!link) return false;
  try {
    return new URL(link.href).hostname === "wa.me";
  } catch {
    return false;
  }
}

/** Registra o listener de cliques. Retorna a função que o remove. */
export function trackWhatsAppClicks(): () => void {
  const onClick = (event: MouseEvent) => {
    if (!(event.target instanceof Element) || !isWhatsAppLink(event.target)) return;
    window.gtag?.("event", "conversion", { send_to: WHATSAPP_CONVERSION });
  };
  document.addEventListener("click", onClick);
  return () => document.removeEventListener("click", onClick);
}
