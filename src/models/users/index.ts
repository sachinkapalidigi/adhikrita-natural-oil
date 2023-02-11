import UsersDB from "./users.mongo";

async function findUserByUsername(username: string) {
  return await UsersDB.findOne({ username }, { __v: 0 }).lean();
}

async function createUser(
  username: string,
  passwordHash: string,
  name: string
) {
  const newUser = new UsersDB({
    username,
    password: passwordHash,
    name,
  });
  const savedUser = await newUser.save();
  return savedUser;
}

export { findUserByUsername, createUser };
