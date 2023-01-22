document.addEventListener('DOMContentLoaded', event => {
	let name = document.cookie.split('name=')[1]

	const peer = new Peer(name, {host: location.hostname, port: 9000, key: 'peerjs', path: '/peerjs'})

	const conn = peer.connect('receiver')
	
	document.querySelector('input').onchange = function(event) {
		
		const file = event.target.files[0]
		const blob = new Blob(event.target.files, {filetype: file.type})
		
		conn.send({
			content: blob,
			filename: file.name,
			filetype: file.type
		})
	}

})
