import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,

        },
        email:{
            type:String,
            required:true,
            unique:true,

        },
        password:{
            type:String,
            required:true,
            

        },
        avatar:{
            type:String,
            default:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.pngarts.com%2Ffiles%2F10%2FDefault-Profile-Picture-Download-PNG-Image.png&tbnid=v8VUBuf1OXg0TM&vet=10CBIQxiAoAmoXChMIqL60lbXAggMVAAAAAB0AAAAAEAc..i&imgrefurl=https%3A%2F%2Fwww.pngarts.com%2Fexplore%2Ftag%2Fdefault-profile-picture&docid=YKFsOEF9iKfEQM&w=673&h=673&itg=1&q=profile%20image&ved=0CBIQxiAoAmoXChMIqL60lbXAggMVAAAAAB0AAAAAEAc"
        },

    }, {timestamps:true}
);

const User = mongoose.model('User', userSchema);

export default User;