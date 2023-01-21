export function download(file){
    var link = document.createElement("a")
    var blob = new Blob([file.content], {type: file.filetype});
    link.href = URL.createObjectURL(blob);
    link.download = file.filename;
    link.click();
    URL.revokeObjectURL(link.href);
}