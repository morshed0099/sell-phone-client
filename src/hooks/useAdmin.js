import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);    
    const [isAdminLoader, setIsAdminLoader] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://sell-phones-server-morshed0099.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data =>{
               setIsAdmin(data.isAdmin)
               setIsAdminLoader(false)}
              )
             
        }
    }, [email])
    return [isAdmin, isAdminLoader];
}

export default useAdmin;
