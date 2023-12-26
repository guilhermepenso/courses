require("dotenv/config");

export default {
    secret: process.eventNames.APP_SECRET,
    expiresIn: "7d"
}