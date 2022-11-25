import toast from "react-hot-toast";



 const createUser=(userRoll,userName,photoURL,email,password)=>{
    const userInfo ={
        userRoll,
        userName,  
        photoURL,  
        email,
        password,
       }  
    const user=userInfo
    console.log(user)
    fetch('http://localhost:5000/users',{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(user),
    }).then(res=>res.json())
    .then(data=>{
        if(data.acknowledged){
            toast.success('user create sucessfully')
        }
    })    
}

export default createUser;