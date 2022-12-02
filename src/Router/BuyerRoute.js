
import { useContext } from "react";
import toast from "react-hot-toast";
import { userAuth } from "../AuthProvider/AuthProvider";
import useBuyer from "../hooks/useBuyer";


const BuyerRoute = ({ children }) => {
    const { user,logOut, loading } = useContext(userAuth);
    const [isBuyer, isBuyerLoader] =useBuyer(user?.email)
    if (loading || isBuyerLoader) {
        return <h1>loading</h1>
        }

    if (user && isBuyer) {
        return children;
    }
       
    return (<>
       {
        toast.success('to access isSeller route login isSeller email ')        
       }
       
    </>)
};

export default BuyerRoute;