import * as multer from 'multer'
import * as path from 'path'

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './uploads/') // Файлы сохраняются в папке uploads/
	},
	filename: (req, file, cb) => {
		const ext = path.extname(file.originalname) // Расширение файла
		cb(null, Date.now() + '-' + file.originalname) // Уникальное имя файла
	},
})

export const upload = multer({ storage })
