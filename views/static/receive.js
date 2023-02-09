function download(file){
    var link = document.createElement("a")
    var blob = new Blob([file.content], {type: file.filetype});
    link.href = URL.createObjectURL(blob);
    link.download = file.filename;
    link.click();
    URL.revokeObjectURL(link.href);
}

function receive_files(){
	let name = document.cookie.split('name=')[1]

	const peer = new Peer(name, {host: location.hostname, port: 9000, key: 'peerjs', path: '/peerjs'})

	peer.on('connection', conn => {
		console.log(`${conn.peer} connected`)
		conn.on('data', data => {
			if (confirm(`Do you want to download ${data.filename} from ${conn.peer} ?`)){	
				download(data);
			}
		})
	})
}
