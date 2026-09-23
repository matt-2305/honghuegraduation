import guestsData from "./guests.json";

const STORAGE_KEY = "invitation_guests_db";
const ADMIN_KEY = "admin-only-key";

export interface Guest {
  id: number;
  password: string;
  name: string;
  message: string | null;
  created_at: string;
  updated_at: string;
}

function simpleEncrypt(text: string, key: string): string {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const keyBytes = encoder.encode(key);
  let out = "";
  for (let i = 0; i < data.length; i++) {
    const k = keyBytes[i % keyBytes.length];
    out += String.fromCharCode(data[i] ^ k);
  }
  return btoa(out);
}

function simpleDecrypt(b64: string, key: string): string {
  try {
    const out = atob(b64);
    const encoder = new TextEncoder();
    const keyBytes = encoder.encode(key);
    const data = new Uint8Array(out.length);
    for (let i = 0; i < out.length; i++) {
      const k = keyBytes[i % keyBytes.length];
      data[i] = out.charCodeAt(i) ^ k;
    }
    const decoder = new TextDecoder();
    return decoder.decode(data);
  } catch {
    return "";
  }
}

function loadGuests(): Guest[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const decrypted = simpleDecrypt(raw, ADMIN_KEY);
      if (decrypted) return JSON.parse(decrypted) as Guest[];
    }
  } catch {
    // ignore parse/decrypt errors
  }
  // initialize storage from JSON file on first load
  const encrypted = simpleEncrypt(JSON.stringify(guestsData), ADMIN_KEY);
  localStorage.setItem(STORAGE_KEY, encrypted);
  return guestsData;
}

function saveGuests(data: Guest[]) {
  try {
    const encrypted = simpleEncrypt(JSON.stringify(data), ADMIN_KEY);
    localStorage.setItem(STORAGE_KEY, encrypted);
  } catch {
    // ignore storage/encryption errors
  }
}

export function verifyGuest(password: string): Guest | null {
  const guests = loadGuests();
  return guests.find((g) => g.password === password) || null;
}

export function getGuestByPassword(password: string): Guest | undefined {
  const guests = loadGuests();
  return guests.find((g) => g.password === password);
}

export function adminGetAll(key: string): Guest[] | null {
  if (key !== ADMIN_KEY) return null;
  return loadGuests();
}

export function addMessage(password: string, message: string): Guest | null {
  const guests = loadGuests();
  const idx = guests.findIndex((g) => g.password === password);
  if (idx === -1) return null;
  guests[idx].message = message;
  guests[idx].updated_at = new Date().toISOString();
  saveGuests(guests);
  return guests[idx];
}
