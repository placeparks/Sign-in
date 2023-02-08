import { ThirdwebAuth } from "@thirdweb-dev/auth/next";

export const { ThirdwebAuthHandler } = ThirdwebAuth({
  privateKey: process.env.NEXT_ADMIN_PRIVATE_KEY,
  domain: "https://sign-in-b4xz-25sr119wo-placeparks.vercel.app/",
});

export default ThirdwebAuthHandler();
