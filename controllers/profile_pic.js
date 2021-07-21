const multer=require('multer')
const storage= multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./images')
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+""+file.originalname)
    }
})


var pic_upload =multer({storage:storage,
limits:{
    fileSize:1000000
},
})

module.exports=pic_upload
