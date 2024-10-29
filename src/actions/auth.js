"use server";

import { revalidatePath } from "next/cache";
import { deleteToken, setToken } from "../lib/token";
import { baseUrl, getHeaders } from "./config";
import { redirect } from "next/navigation";

export async function login(formData) {
  const userData = Object.fromEntries(formData);

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
  return user;
}

export async function getAllUsers() {
  const response = await fetch(`${baseUrl}/mini-project/api/auth/users`, {
    method: "GET",
    headers: await getHeaders(),
  });
  const users = response.json();
  return users;
}
export async function viewDeposit(formData) {
  const userData = Object.fromEntries(formData);
  await fetch(`${baseUrl}/mini-project/api/transactions/deposit`, {
    method: "PUT",
    headers: await getHeaders(),
    body: JSON.stringify(userData),
  });
}

export async function transactionList() {
  const response = await fetch(`${baseUrl}/mini-project/api/transactions/my`, {
    method: "GET",
    headers: await getHeaders(),
  });
  const transaction = await response.json();
  return transaction;
}

export async function viewWithdraw(formData) {
  const userData = Object.fromEntries(formData);
  await fetch(`${baseUrl}/mini-project/api/transactions/withdraw`, {
    method: "PUT",
    headers: await getHeaders(),
    body: JSON.stringify(userData),
  });
}

export async function transferToUser(formData, username) {
  const userData = Object.fromEntries(formData);
  await fetch(`${baseUrl}/mini-project/api/transactions/transfer/${username}`, {
    method: "PUT",
    headers: await getHeaders(),
    body: JSON.stringify(userData),
  });
}
