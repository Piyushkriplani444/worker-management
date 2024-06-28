import jwt from "jsonwebtoken";

export const createJWT = (existUser: any) => {
  console.log(existUser.id);
  return jwt.sign(
    {
      id: existUser.id,
      email: existUser.email,
    },
    process.env.JWT_KEY!,
    { expiresIn: "24h" }
  );
};
