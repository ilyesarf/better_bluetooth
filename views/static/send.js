send_file = function(){
	
	let name = document.cookie.split('name=')[1]
	const peer = new Peer(name, {host: location.hostname, port: 9000, key: 'peerjs', path: '/peerjs'})
	

	document.getElementById('file_content').onchange = () => {
		
		let recv_ids = document.getElementsByName('recv_id')
		let file = document.getElementById('file_content').files[0]
		
		for (i = 0; i < recv_ids.length; i++){
			if (recv_ids[i].checked == true){
				let recv_id = recv_ids[i].value
				const conn = peer.connect(recv_id + '-recv')
				console.log(conn)
				conn.on('open', () =>{
					const blob = new Blob(document.getElementById('file_content').files, {filetype: file.type})
				
					conn.send({
						content: blob,
						filename: file.name,
						filetype: file.type
					})
				})
			} else{
				continue
			}
		}
		
	}

}
