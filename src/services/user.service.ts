import { User } from "../models/user";

export const createNewUser = async (payload: any): Promise<any> => {
  try {
    console.log("In the service", payload);
    const result = await User.create(payload);
    return result;
  } catch (error) {
    throw error;
  }
};
