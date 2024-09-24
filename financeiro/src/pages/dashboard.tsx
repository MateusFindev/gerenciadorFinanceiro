import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";
import { AuthProvider } from "@/context/AuthContext";
import { TransacaoProvider } from '@/context/TransacaoContext';


export default function dashboard() {
  return (
    <div>
        <Header/>
        <AuthProvider>
          <TransacaoProvider>
            <Dashboard/>
          </TransacaoProvider>
        </AuthProvider>
    </div>
  );
}