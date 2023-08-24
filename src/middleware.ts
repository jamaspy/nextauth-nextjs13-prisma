export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/profile", "/register"],
  // matcher: ["/((?!register|api|login).*)"],
};
