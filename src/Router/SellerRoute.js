
import { useContext } from "react";
import toast from "react-hot-toast";
import { userAuth } from "../AuthProvider/AuthProvider";
import useSeller from "../hooks/useSeller";

const SellerRoute = ({ children }) => {
    const { user,logOut, loading } = useContext(userAuth);
    const [isSeller, isSellerLoader] =useSeller(user?.email)
    if (loading || isSellerLoader) {
        return <h1>loading</h1>
        }

    if (user && isSeller) {
        return children;
    }
       
    return (<>
       {
        toast.success('to access isSeller route login isSeller email ')        
       }
       
    </>)
};

export default SellerRoute;