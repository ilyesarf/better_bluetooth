send_file = function(){
	
	let name = document.cookie.split('name=')[1]
	const peer = new Peer(name, {host: location.hostname, port: 9000, key: 'peerjs', path: '/peerjs'})
	

	document.getElementById('file_content').onchange = () => {
		
		let recv_id = document.getElementById('recv_id').value
		let file = document.getElementById('file_content').files[0]
		
		const conn = peer.connect(recv_id + '-recv')
		
		conn.on('open', () =>{
			const blob = new Blob(document.getElementById('file_content').files, {filetype: file.type})
		
			conn.send({
				content: blob,
				filename: file.name,
				filetype: file.type
			})
		})
	}


}
