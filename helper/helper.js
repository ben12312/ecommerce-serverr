function sendResponse(res, statusCode, messages, data) {
    return res.status(statusCode).json({
        data: data,
        messages: messages,
        timestamp: new Date()
    })
}

module.exports = { sendResponse }