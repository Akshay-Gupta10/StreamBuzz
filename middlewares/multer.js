import multer from "multer";

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"/public/temp")
    },
    filename:function(req,file,cb){
        const fileName=`${Date.now()}-${file.originalname}`
        cb(null,fileName)
    }
})

export const upload=multer({storage})