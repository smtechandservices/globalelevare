import { site } from "@/lib/content";

export default function WhatsAppFloater() {
  return (
    <a
      href={site.waLink}
      target="_blank"
      rel="noreferrer"
      aria-label={`Chat with us on WhatsApp: ${site.whatsappDisplay}`}
      title="Chat on WhatsApp"
      className="group fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] shadow-lg shadow-black/20 transition-transform hover:scale-105 focus-visible:scale-105 outline-none"
    >
      <span className="absolute inset-0 rounded-full bg-[#25d366] opacity-60 animate-ping [animation-duration:2.5s]" />
      <svg
        viewBox="0 0 24 24"
        className="relative h-8 w-8 fill-white"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.892.52 3.66 1.42 5.176L2 22l4.964-1.393A9.94 9.94 0 0 0 12.001 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.15a8.14 8.14 0 0 1-4.144-1.13l-.297-.176-3.038.852.82-2.98-.194-.307A8.15 8.15 0 1 1 20.15 12 8.16 8.16 0 0 1 12 20.15z" />
      </svg>
    </a>
  );
}
