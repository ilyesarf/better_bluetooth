document.addEventListener('DOMContentLoaded', event => {
	const peer = new Peer('sender', {host: 'localhost', port: 9000, key: 'peerjs', path: '/peerjs'})

	const conn = peer.connect('receiver')

	document.querySelector('input').onchange = function(event) {
		
		const file = event.target.files[0]
		const blob = new Blob(event.target.files, {filetype: file.type})
		var url  = window.URL.createObjectURL(blob);

		conn.send({
			content_url: url,
			filename: file.name,
			filetype: file.type
		})
	}

})
