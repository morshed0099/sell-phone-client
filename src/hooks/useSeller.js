import { useEffect, useState } from "react"

const useSeller= email => {
    const [isSeller, setSeller] = useState(false);    
    const [isSellerLoader, setIsSellerLoader] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://sell-phones-server-morshed0099.vercel.app/users/seller/${email}`)
                .then(res => res.json())
                .then(data =>{
                    setSeller(data.isSeller)
                    setIsSellerLoader(false)}
              )
             
        }
    }, [email])
    return [isSeller, isSellerLoader];
}

export default useSeller