import User from '../models/user.model';

export const getUserByEmail = async (email: string) => {
  try {
    // await dbConnect();
    const user = await User.findOne({ email });
    return user;
  } catch (err) {
    throw err;
  }
}

export const getUserById = async (id: string) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (err) {
    throw err;
  }
}