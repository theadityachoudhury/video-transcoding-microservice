const getUser = (req, res) => {
    res.status(200).json({
        message: "User details",
        status: 200
    })
}

module.exports = {
    getUser,
}