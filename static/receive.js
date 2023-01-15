import { download } from './helpers.js'

document.addEventListener('DOMContentLoaded', event => {
	const peer = new Peer('receiver', {host: 'localhost', port: 9000, key: 'peerjs', path: '/peerjs'})

	peer.on('connection', conn => {
		console.log('connected')
		conn.on('data', data => {
			if (confirm('Do you want to download ' + data.filename + ' ?')){	
				download(data);
			}
		})
	})
})
