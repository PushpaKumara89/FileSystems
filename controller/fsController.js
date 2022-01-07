const fs = require('fs');

const deleteImage = (req,res) =>{
    console.log('ok')
    fs.unlink('upload/images/profile_1640356724527_.jpg',function (err){
        console.log(err);
    });
}
module .exports ={deleteImage}
