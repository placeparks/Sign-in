import { ThirdwebAuth } from "@thirdweb-dev/auth/next";

export const { ThirdwebAuthHandler } = ThirdwebAuth({
  privateKey: process.env.NEXT_ADMIN_PRIVATE_KEY,
  domain: "https://vercel.com/placeparks/sign-in-b4xz",
});

export default ThirdwebAuthHandler();
