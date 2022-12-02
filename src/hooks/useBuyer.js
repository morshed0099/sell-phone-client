import { useEffect, useState } from "react"

const useBuyer = email => {
    const [isBuyer, setIsBuyer] = useState(false);    
    const [isBuyerLoader, setisBuyerLoader] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/buyer/${email}`)
                .then(res => res.json())
                .then(data =>{
                    setIsBuyer(data.isBuyer)
                    setisBuyerLoader(false)}
              )
             
        }
    }, [email])
    return [isBuyer, isBuyerLoader];
}

export default useBuyer;