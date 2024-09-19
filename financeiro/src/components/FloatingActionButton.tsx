import React from 'react';
import { FaMoneyBillWave, FaReceipt } from 'react-icons/fa'; // Certifique-se de que isso esteja correto


const FloatingActionButton = () => {
    return (
        <div className="fixed bottom-28 right-8 flex flex-col items-center space-y-4">
            {/* Menu de opções */}
            <div className="bg-white shadow-lg rounded-md w-48 py-2">
                <ul>
                    <li className="text-black px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        
                        <FaReceipt className="text-red-500 text-xl mr-2 inline" /> Despesa 
                        
                    </li>
                    <li className="text-black px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <FaMoneyBillWave className="text-green-500 text-xl mr-2 inline" /> Receita
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default FloatingActionButton;
