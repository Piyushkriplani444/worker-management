import jwt from "jsonwebtoken";

export const createJWT = (existUser: any) => {
  return jwt.sign(
    {
      id: existUser.id,
      email: existUser.email,
    },
    process.env.JWT_KEY!
  );
};
