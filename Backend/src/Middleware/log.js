export const logRequest = (req, res, next) => {
    const start = Date.now()
    const timeStamp = new Date().toLocaleString()
    console.log(`[${timeStamp}] Request ke Path: ${req.path}`)
    console.log(`[${timeStamp}] Request type: ${req.method}`)
    next()

    res.on('finish', () => {
        const end = Date.now()
        const responseTime = end - start
        console.log(`[${timeStamp}] Response Time: ${responseTime}ms`)
    })
}

export default logRequest