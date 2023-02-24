
const Validator=(req,res,next)=>{
const {name,email,password,confirmPass,number} = req.body;
if(name.length==0 || email.length==0 || password.length==0 || confirmPass.length==0 || number<0){
    res.send("Fill all details")
}
else{
    next()
}
};


module.exports = {Validator}