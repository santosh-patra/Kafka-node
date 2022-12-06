const { Kafka, logLevel } = require("kafkajs");

// the client ID lets kafka know who's producing the messages
const clientId = "my-app";
// we can define the list of brokers in the cluster
const brokers = ["localhost:9092"];
// this is the topic to which we want to write messages
const topic = "santoshTopic";

// initialize a new kafka client and initialize a producer from it
const kafka = new Kafka({ clientId, brokers });
// const kafka = new Kafka({ clientId, brokers, logLevel: logLevel.DEBUG });
const producer = kafka.producer({});

// we define an async function that writes a new message each second
const produce = async () => {
    await producer.connect();
    let i = 0;

    // after the produce has connected, we start an interval timer
    setInterval(async () => {
        try {
            // send a message to the configured topic with
            // the key and value formed from the current value of `i`
            await producer.send({
                topic,
                acks: 1,
                messages: [
                    {
                        key: String(i),
                        value: `sample Message from producer... {${i}} times`,
                    },
                ],
            });

            // if the message is written successfully, log it and increment `i`
            console.log("\n************* PRODUCER *************************");
            console.log("writes to topic : {", i, "}Times");
            console.log("************* $$$$$$$$ *************************\n");

            i++;
        } catch (err) {
            console.error("could not write message " + err);
        }
    }, 5000);
};

module.exports = produce;
