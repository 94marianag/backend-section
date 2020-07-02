module.exports = (req, res, next) => {
    const httStatus = err.status || 500;
    
    return res.status(httStatus).send({
        status: httStatus,
        message: err.message || "Internal Server Error"
    });
};