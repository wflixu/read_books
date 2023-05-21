process.on('message', data =>{
    console.info('parent process sent a message', data)
})

process.send({type:'ack', data: [3]} )