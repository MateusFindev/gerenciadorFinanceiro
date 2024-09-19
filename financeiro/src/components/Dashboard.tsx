import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import FloatingActionButton from './FloatingActionButton'; // Importando o componente flutuante

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard() {
  // Dados para o gráfico de despesas
  const despesasData = {
    labels: ['Alimentos', 'Farmácia', 'Outros'],
    datasets: [
      {
        data: [30, 20, 50],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  // Dados para o gráfico de receitas
  const receitasData = {
    labels: ['Salário', 'Férias', 'Outros'],
    datasets: [
      {
        data: [60, 30, 10],
        backgroundColor: ['#4BC0C0', '#FF9F40', '#9966FF'],
        hoverBackgroundColor: ['#4BC0C0', '#FF9F40', '#9966FF'],
      },
    ],
  };

  // Adicionando o estado para controlar a visibilidade do componente flutuante
  const [showFab, setShowFab] = useState(false);

  // Função para alternar o estado do componente
  const toggleFab = () => {
    setShowFab(!showFab);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Gráficos de despesas e receitas */}
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-red-600">Despesas</h2>
            <div className="bg-white shadow-lg rounded-lg p-4">
              <Pie data={despesasData} />
            </div>
          </div>

          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-green-600">Receitas</h2>
            <div className="bg-white shadow-lg rounded-lg p-4">
              <Pie data={receitasData} />
            </div>
          </div>
        </div>

        {/* Histórico de últimas despesas/receitas */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-bold text-center mb-4 text-black">Últimas Transações</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border border-zinc-400">
              <h3 className="text-lg font-semibold text-gray-600">Últimas Despesas</h3>
              <ul>
                <li className="flex justify-between my-2 text-gray-500">
                  <span>12/09/2024</span>
                  <span>Farmácia</span>
                  <span>R$ 25,00</span>
                </li>
                {/* Adicione mais despesas conforme necessário */}
              </ul>
            </div>

            <div className="p-4 border border-zinc-400">
              <h3 className="text-lg font-semibold text-gray-600">Últimas Receitas</h3>
              <ul>
                <li className="flex justify-between my-2 text-gray-500">
                  <span>01/09/2024</span>
                  <span>Salário</span>
                  <span>R$ 600,00</span>
                </li>
                {/* Adicione mais receitas conforme necessário */}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Botão de Adicionar Transação */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={toggleFab} // Adiciona o evento de clique para alternar o componente flutuante
          className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
        >
          <span className="text-3xl">+</span>
        </button>
      </div>

      {/* Mostra o botão flutuante se showFab for true */}
      {showFab && <FloatingActionButton />}
    </div>
  );
}
