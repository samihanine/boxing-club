import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import crypto from "crypto";

const ALTCHA_SECRET = process.env.ALTCHA_SECRET as string;

export function generateSalt(length = 20) {
  return crypto.randomBytes(length).toString("hex");
}

export function generateHmacKey() {
  const hmac = crypto.createHmac("sha256", ALTCHA_SECRET);

  return hmac.digest("hex");
}

export function generateSignature(message: string) {
  const hmac = crypto.createHmac("sha256", ALTCHA_SECRET);
  hmac.update(message);
  return hmac.digest("hex");
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function degreesToRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

export function calculateDistance(coord1: number[], coord2: number[]): number {
  const earthRadiusKm = 6371;

  const dLat = degreesToRadians(coord2[0] - coord1[0]);
  const dLon = degreesToRadians(coord2[1] - coord1[1]);

  const lat1 = degreesToRadians(coord1[0]);
  const lat2 = degreesToRadians(coord2[0]);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return earthRadiusKm * c;
}

export function formatDateForDisplay(date: Date): string {
  return new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
