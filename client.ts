import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import {ProtoGrpcType} from './proto/random'
import readline from 'readline'

const PORT = 8082
const PROTO_FILE = './proto/random.proto'

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType

const client = new grpcObj.randomPackage.Random(`0.0.0.0:${PORT}`, grpc.credentials.createInsecure())

const deadline = new Date()
deadline.setSeconds(deadline.getSeconds() + 5)
client.waitForReady(deadline, (err) => {
    if(err){
        console.error(err)
        return
    }
    
    onClientReady()
})

function onClientReady() {
    // Client ping-pong streaming service (1-1)
    client.PingPong({message: "Ping"}, (err, result) => {
        if(err){
            console.error(err)
            return
        }

        console.log(result)
    })
    
    // Server random numbers streaming service (1-n)
    const numberStream = client.RandomNumbers({maxValue: 85})
    numberStream.on("data", (chunk) => {
        console.log(chunk)
    })
    
    numberStream.on("end", () => {
        console.log("Communication ended.")
    })

    // Client todo list service (n-1)
    const stream2 = client.TodoList((err, result) => {
        if (err) {
          console.error(err)
          return
        }
        console.log(result)
      })
      stream2.write({todo: "Walk the wife", status: "Never"})
      stream2.write({todo: "Walk the dog", status: "Doing"})
      stream2.write({todo: "Get a real job", status: "Impossible"})
      stream2.write({todo: "Feed the dog", status: "Done"})
      stream2.end()
    
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      })
}