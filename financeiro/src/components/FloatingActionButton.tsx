import React, { useState } from 'react';
import { FaMoneyBillWave, FaReceipt } from 'react-icons/fa';
import TransactionModal from './TransactionModal';

const FloatingActionButton = () => {
    const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false); // Estado para controlar o modal
    const [isExpense, setIsExpense] = useState(false); // Estado para controlar o tipo de transação

    const handleOpenTransactionModal = (isExpenseSelected: boolean) => {
        setIsExpense(isExpenseSelected); // Define se é Despesa ou Receita
        setIsTransactionModalOpen(true); // Abre o modal
    };

    const handleCloseTransactionModal = () => {
        setIsTransactionModalOpen(false); // Fecha o modal
    };

    return (
        <div>
            {/* Modal de Transação */}
            <TransactionModal
                isOpen={isTransactionModalOpen}
                onClose={handleCloseTransactionModal}
                {...(isExpense ? { expense: true } : {})} // Inclui ou exclui a prop `expense` baseado no estado
            />

            <div className="fixed bottom-28 right-8 flex flex-col items-center space-y-4">
                {/* Menu de opções */}
                <div className="bg-white shadow-lg rounded-md w-48 py-2">
                    <ul>
                        <li
                            className="text-black px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleOpenTransactionModal(true)} // Define como Despesa ao clicar
                        >
                            <FaReceipt className="text-red-500 text-xl mr-2 inline" /> Despesa
                        </li>
                        <li
                            className="text-black px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleOpenTransactionModal(false)} // Define como Receita ao clicar
                        >
                            <FaMoneyBillWave className="text-green-500 text-xl mr-2 inline" /> Receita
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FloatingActionButton;
