import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
});

export const config = {
  matcher: [
    "/destinations/:path*/",
    "/blogs/create",
    "/blogs/:path*/edit",
    "/profile",
  ],
};
