import os


class EXTENSION_NOT_ALLOWED(Exception):
    pass

def allowed_file(file_extension):
    ALLOWED_EXTENSIONS = {'.txt', '.pdf', '.docx'}
    return file_extension in ALLOWED_EXTENSIONS

def upload_file(upload_dir, book, book_title):
    if not os.path.exists(upload_dir):
        os.mkdir(upload_dir)

    extension = '.'+book.filename.split('.')[-1].lower()
    if not allowed_file(extension):
        raise EXTENSION_NOT_ALLOWED

    book.save(os.path.join(upload_dir, (book_title+extension)))
 
