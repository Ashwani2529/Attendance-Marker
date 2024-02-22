const User=require("./Model/user");

const createUser=async(req,res)=>{
try {
    const {name,uniqueID,designation,authority,region}=req.body;
    if(!uniqueID){
        return res.status(400).json({msg:"Please enter all fields"})
    }
    const user=await User.findOne({uniqueID:uniqueID});
    if(user){
        const user=await User.findOneAndUpdate({uniqueID:uniqueID },{name,designation,authority,region});
        return res.status(400).json({msg:"User updated"})
    }
    const newUser=new User({
        name,
        uniqueID,
       designation,
        authority,region
    });
    await newUser.save();
    res.status(200).json({msg:"User created successfully"})
}
catch (error) {
    res.status(500).json({msg:"Internal server error"})
}
};

const markAttendance=async(req,res)=>{
try {
    const {uniqueID}=req.body; 
    if(!uniqueID){
        return res.status(400).json({msg:"Please enter uniqueID number"})
    }
    const user=await User.findOneAndUpdate({uniqueID:uniqueID },{attendance:"present"});
    if(!user){
        return res.status(404).json({msg:"No user found"})
    }
    res.status(200).json({msg:"Attendance marked successfully"})
} catch (error) {
    res.status(500).json({msg:"Internal server error"})
}
};

const getUser=async(req,res)=>{
    const {uniqueID}=req.params;
try {
    const user=await User.findOne({uniqueID:uniqueID});
    if(!user){
        return res.status(404).json({msg:"No user found"})
    }
    res.status(200).json(user);
}
    catch (error) {
        res.status(500).json({msg:"Internal server error"})
    }
};

const resetAttendance = async (req, res) => {
    try {
        await User.updateMany({ attendance: "present" }, { $set: { attendance: "absent" } });

        res.status(200).json({ msg: "Attendance reset successfully" });
    } catch (error) {
    console.log(error)
        res.status(500).json({ msg: "Internal server error" });
    }
};


const getAllUsers=async(req,res)=>{
try {
    const users=await User.find().select("name uniqueID");
    if(!users){
        return res.status(404).json({msg:"No user found"})
    }
    // console.log(users);
    res.status(200).json(users);
}
    catch (error) {
        res.status(500).json({msg:"Internal server error"})
    }
};

const createBulkUsers=async(req,res)=>{

    try {
        const users=req.body;
        if(!users){
            return res.status(400).json({msg:"Please enter all fields"})
        }
        try {
            await Promise.all(users.map(async (userObj) => {
                const user = await User.findOne({ uniqueID: userObj.uniqueID });
                if (!user) {
                    const newUser = new User({
                        name: userObj.name,
                        uniqueID: userObj.uniqueID,
                        designation: userObj.designation,
                        authority: userObj.authority,
                        region: userObj.region
                    });
                    await newUser.save();
                }
            }));
        
            return res.status(200).json({ msg: "Users saved successfully" });
        }  catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Internal server error" });
        }
        
    }
    catch (error) {
        console.log(error);
        res.status(500).json({msg:"Internal server error"})
    }
};

module.exports={createUser,markAttendance,getUser,resetAttendance,getAllUsers,createBulkUsers};