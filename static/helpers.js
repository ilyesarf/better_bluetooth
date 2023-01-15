export function download(file){
    var link = document.createElement("a")
    link.href = file.content_url;
    link.download = file.filename;
    link.click();
    URL.revokeObjectURL(link.href);
}