import { renderOgImage, size, contentType, alt } from "./og-shared";

export const runtime = "nodejs";
export { size, contentType, alt };

export default async function Image() {
  return renderOgImage();
}
