export default async (req, res, next) => {

    const authenticated = true;

    if (authenticated) {
        return next();
    }
}