import axios from "axios";
import { CONFIG } from "../config";

export const api = axios.create({
  baseURL: CONFIG.BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export function getApiErrorMessage(err: unknown): string {
  if (axios.isAxiosError(err)) {
    const messageFromServer = (err.response?.data as any)?.error;
    if (typeof messageFromServer === "string" && messageFromServer.trim()) {
      return messageFromServer;
    }
    if (err.response) return `request failed (${err.response.status})`;
    return "network error (check base url / server)";
  }
  return "something went wrong";
}