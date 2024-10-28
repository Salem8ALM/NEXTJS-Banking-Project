"use server";

import { revalidatePath } from "next/cache";
import { deleteToken, setToken } from "../lib/token";
import { baseUrl, getHeaders } from "./config";
import { redirect } from "next/navigation";

export async function login(formData) {
  const userData = Object.fromEntries(formData);
  // const userData = { username, password };

  const response = await fetch(`${baseUrl}/mini-project/api/auth/login`, {
    method: "POST",
    headers: await getHeaders(),
    body: JSON.stringify(userData),
  });
  // Extract and store the token
  const { token } = await response.json();
  await setToken(token);
  // Redirect to the `/transactions` page
  redirect("/transactions");
}

export async function register(formData) {
  const response = await fetch(`${baseUrl}/mini-project/api/auth/register`, {
    method: "POST",
    body: formData,
  });

  const { token } = await response.json();
  await setToken(token);

  revalidatePath("/transactions");

  redirect("/transactions");
}

export async function logout() {
  // What do you need to do to logout?
  await deleteToken();
  // Where should you redirect the user?
  redirect("/");
}

export async function viewProfile() {
  const response = await fetch(`${baseUrl}/mini-project/api/auth/me`, {
    method: "GET",
    headers: await getHeaders(),
  });
  const user = await response.json();
  revalidatePath("/users/me");
  return user;
}

export async function getAllUsers() {
  const response = await fetch(`${baseUrl}/mini-project/api/auth/users`);
  const users = await response.json();
  return users;
}
