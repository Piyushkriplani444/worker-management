import { User, UserDoc } from "../models/user";

export const createNewUser = async (payload: UserDoc): Promise<UserDoc> => {
  try {
    console.log("In the service", payload);
    const result = await User.create(payload);
    return result;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (userinfo: UserDoc, id: string) => {
  try {
    const result = await User.findByIdAndUpdate({ _id: id }, userinfo, {
      new: true,
      runValidators: true,
    });
    return result;
  } catch (error) {
    throw error;
  }
};

export const updateUserPatch = async (userinfo: UserDoc, id: string) => {
  try {
    const result = await User.findByIdAndUpdate({ _id: id }, userinfo, {
      new: true,
      runValidators: true,
    });
    return result;
  } catch (error) {
    throw error;
  }
};

export const softDelete = async (id: string) => {
  try {
    const result = await User.findOneAndUpdate(
      { _id: id },
      { status: false },
      { new: true }
    );
    return result;
  } catch (error) {
    throw error;
  }
};

export const getUsers = async (): Promise<UserDoc[]> => {
  const result = await User.find({ status: true });
  return result;
};

export const getUser = async (payload: string): Promise<UserDoc | null> => {
  const result = await User.findOne({ _id: payload });
  return result;
};
