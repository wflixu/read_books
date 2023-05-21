import { fork } from "child_process";
import EventEmitter from "events";


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


let worker =  new Worker('WorkerScript.js')
worker.postMessage('some data')

worker.onmessage = event => {
   eventEmitter.emit(
    event.type,
    ...event.data.data
   )
}

commandEmitter.on('sendMessageToThread', data => {
    worker.postMessage({type:'sendMessageToThread', data})
})
commandEmitter.on('creatThread', data => {
    worker.postMessage({type:'creatThread', data})
})
eventEmitter.on('creatThread', (threadId, participants)=>{
    console.log('created a new chat thread!')
})


commandEmitter.emit('creatThread',[456, 789])





// 8.6.2 
let child = fork('child-thread.js')
child.on('message', data => {
  console.info('Child process sent a message');
})

child.send({type:'syn', data:[3]})