import Header from "@/components/Header";
import Login from "@/components/Login";
import { AuthProvider } from "@/context/AuthContext";

export default function login() {

    return (
        <div>
            <Header/>
            <AuthProvider>
                <Login/> 
            </AuthProvider>
        </div>
    )
}