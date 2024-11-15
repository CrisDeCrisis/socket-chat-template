import bcrypt from 'bcrypt';

export const bcryptHelper = {};

bcryptHelper.hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
};

bcryptHelper.comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};