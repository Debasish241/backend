import multer from "multer";


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname) //keeping original name is not good becaus if user upload same file name 5files then previously uploaded files will be overwritten
        console.log(file,"from multer.middleware");
    }
})

export const upload = multer({ storage, })