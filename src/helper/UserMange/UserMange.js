

const createUser=(user)=>{
   fetch('http://localhost:3003/users',{
    method:'POST',
    headers:{"content-type":"application/json"},
    body:JSON.stringify(user)
   })
   .then(res=>res.json())
   .then(data=>console.log(data))
}

export default createUser;