const produce = require("../producer/producer")
const consume = require("../consumer/consumer")
exports.controller = async (req, res) => {
    console.log("****************Controller***************");
    res.status(200).json({
        status: 0,
        message: "Sample Controller Message"
    })
}

exports.producer = async (req, res) => {
    produce().catch((err) => {
        console.error("error in producer: ", err)
    })
}

exports.consumer = async (req, res) => {
    consume().catch((err) => {
        console.error("error in consumer: ", err)
    })
}


