import EventEmitter from "events"
import { threadId } from "worker_threads"

type Message = string
type ThreadId = number
type UserId = number;
type Participants = UserId[]

type Commands =  {
    sendMessageToThread: [ThreadId, Message]
    creatThread: [Participants]
    addUserToThread:[ThreadId, UserId],
    removeUserFromThread: [ThreadId, UserId]
}

type Events = {
    receiveMessage: [ThreadId, Message]
    creatThread: [ThreadId, Participants]
    addedUserToThread: [ThreadId, UserId]
    removedUserFromThread: [ThreadId, UserId]
}


class SafeEmitter < Events extends Record<string | symbol, unknown[]>>{
  private emitter = new EventEmitter()
  emit<K extends keyof Events>(
    channel: Exclude<K,number>,
    ...data: Events[K]
  ) {
    return this.emitter.emit(channel, ...data)
  }
  on<K extends keyof Events>(
    channel: Exclude<K,number>,
    listener:(...data: unknown[]) => void
  ){
    return this.emitter.on(channel, listener)
  }
}


let commandEmitter = new SafeEmitter<Commands>()
let eventEmitter = new SafeEmitter<Events>()

onmessage = command => {
    commandEmitter.emit(command.data.type, ...command.data.data)
}

eventEmitter.on('receiveMessage', data => {
    postMessage({type:'receiveMessage', data})
})
eventEmitter.on('creatThread', data => {
    postMessage({type:'creatThread', data})
})

commandEmitter.on('sendMessageToThread', (threadID,message) =>{
    console.log(`ok , i will send a message to threadID ${threadId}`)
})

eventEmitter.emit('creatThread', 123, [456, 789])


