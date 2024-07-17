const dotenv = require("dotenv")
dotenv.config();

const requiredEnvVars = [
    // 'BACKEND_URL',
    // 'FRONTEND_URL',
    // 'APP_NAME',
    'DATABASE_URL',
    // 'JWT_SECRET',
    // 'JWT_REFRESH_TOKEN_SECRET',
    // 'SMTP_HOST',
    // 'SMTP_USER',
    // 'SMTP_PASS',
    // 'SMTP_SENDER_NAME',
    // 'NODE_ENV',
    // 'HASH_SECRET',
    // 'GOOGLE_CLIENT_ID',
    // 'GOOGLE_CLIENT_SECRET',
];

const missingEnvVars = requiredEnvVars.filter((envVar) => !process.env[envVar]);

if (missingEnvVars.length > 0) {
    console.error(`Cannot start the app. Missing environment variables: \n${missingEnvVars.join('\n')}`);
    process.exit(1);
}

const config = {
    BACKEND_URL: process.env.BACKEND_URL,
    FRONTEND_URL: process.env.FRONTEND_URL,
    APP_NAME: process.env.APP_NAME,
    DATABASE_URL: process.env.DATABASE_URL,
    REQUEST_TIMEOUT: parseInt(process.env.REQUEST_TIMEOUT || '5000', 10), // Default to 5000 if not provided
    PORT: parseInt(process.env.PORT || '5000', 10),
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_REFRESH_TOKEN_SECRET: process.env.JWT_REFRESH_TOKEN_SECRET,
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
    SMTP_PORT: parseInt(process.env.SMTP_PORT || '587', 10), // Default to 587 if not provided
    SMTP_SENDER_NAME: process.env.SMTP_SENDER_NAME,
    NODE_ENV: process.env.NODE_ENV,
    HASH_SECRET: process.env.HASH_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
};

module.exports = config;