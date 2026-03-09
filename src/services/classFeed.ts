import type { Post, User } from "../types";
import { api } from "./api";

export async function login(username: string): Promise<{ token: string; user: User }> {
  const response = await api.post("/login", { username });
  return response.data;
}

export async function getFeed(authors?: string[]): Promise<Post[]> {
  const response = await api.get("/feed", {
    params: authors?.length ? { authors: authors.join(",") } : undefined,
  });
  return response.data.posts;
}

export async function createPost(text: string): Promise<Post> {
  const response = await api.post("/posts", { text });
  return response.data.post;
}

export async function createComment(postId: string, text: string): Promise<Comment> {
  const response = await api.post(`/posts/${postId}/comments`, { text });
  return response.data.comment;
}