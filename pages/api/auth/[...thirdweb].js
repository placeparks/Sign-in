import { ThirdwebAuth } from "@thirdweb-dev/auth/next";

export const { ThirdwebAuthHandler } = ThirdwebAuth({
  privateKey: process.env.ADMIN_PRIVATE_KEY,
  domain: "localhost:3001",
});

export default ThirdwebAuthHandler();
