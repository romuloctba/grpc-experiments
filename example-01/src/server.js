// server.js
const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')
const path = require('path')

const protoObject = protoLoader.loadSync(path.resolve(__dirname, '../proto/notes.proto'))
const NotesDefinition = grpc.loadPackageDefinition(protoObject)

// dummy data
const data = [
	{ id: 1, title: 'Note 1', description: 'Content 1' },
	{ id: 2, title: 'Note 2', description: 'Content 2' }
]

function List (_, callback) {
	// perform some fetching, eg: from the db
	const notes = data;
	return callback(null, { notes })
}

function Find ({ request: { id } }, callback) {
	const note = data.find((note) => note.id === id)
	if (!note) return callback(new Error('Not Found'), null)
	return callback(null, { note})
}

const server = new grpc.Server()
server.addService(NotesDefinition.NoteService.service, { List, Find })

server.bind('0.0.0:50051', grpc.ServerCredentials.createInsecure())
server.start()
console.log('Listening')


