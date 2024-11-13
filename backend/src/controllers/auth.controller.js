import { bcryptHelper } from '../helpers/bcrypt.helper.js';
import { generateJWT } from '../helpers/generateJWT.helper.js';
import { userModel } from '../models/user.model.js';

export const authCtrl = {};

authCtrl.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const userExists = await userModel.findOne({ email });

        if (userExists) {
            return res.status(400).json({
                message: 'The email is already in use.'
            });
        }

        const newUser = new userModel({ username, email, password });
        newUser.password = await bcryptHelper.hashPassword(password);
        await newUser.save();

        res.status(201).json({
            newUser,
            message: 'User created successfully.'
        });
    } catch (error) {
        res.status(500).json({
            message: 'An error occurred. Please try again later.'
        });
    }
};

authCtrl.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        const validPassword = await bcryptHelper.comparePassword(password, user.password);

        if (!user || !validPassword) {
            return res.status(400).json({
                message: 'Invalid email or password.'
            });
        }

        const token = await generateJWT(user);

        res.cookie('token', token, {
            httpOnly: false, // The cookie only accessible by the web server //! Cambiar a true luego de probar
            secure: false,  // Set to true if your website is served over HTTPS //! Cambiar a true en caso de usar https
            maxAge: 60 * 60 * 1000 // 1 hour
        });

        res.status(200).json({
            user,
            message: 'User logged in successfully.'
        });
    } catch (error) {
        res.status(500).json({
            message: 'An error occurred. Please try again later.'
        });
    }
};

authCtrl.me = async (req, res) => {
    try {
        const user = req.user;

        const token = await generateJWT(user);

        res.cookie('token', token, {
            httpOnly: true, // The cookie only accessible by the web server
            secure: false,  // Set to true if your website is served over HTTPS
            maxAge: 60 * 60 * 1000 // 1 hour
        });

        res.status(200).json({
            user,
            message: 'User retrieved successfully.'
        });
    } catch (error) {
        res.status(500).json({
            message: 'An error occurred. Please try again later.'
        });
    }
};

authCtrl.logout = async (_req, res) => {
    try {
        res.clearCookie('token');

        res.status(200).json({
            message: 'User logged out successfully.'
        })
    } catch (error) {
        res.status(500).json({
            message: 'An error occurred. Please try again later.'
        });
    }
};