import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import FloatingActionButton from './FloatingActionButton'; // Importando o componente flutuante
import { useTransacoes } from './../context/TransacaoContext';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard() {
  const { transacoes } = useTransacoes();

  const [despesasData, setDespesasData] = useState({
    labels: [],
    datasets: [{ data: [], backgroundColor: [], hoverBackgroundColor: [] }]
  });
  const [receitasData, setReceitasData] = useState({
    labels: [],
    datasets: [{ data: [], backgroundColor: [], hoverBackgroundColor: [] }]
  });

  const processarDados = () => {
    const despesasCategorias = {};
    const receitasCategorias = {};

    transacoes.forEach((transacao) => {
      const { categoria, tipo, valor } = transacao;

      if (tipo === 'despesa') {
        despesasCategorias[categoria] = (despesasCategorias[categoria] || 0) + valor;
      } else if (tipo === 'receita') {
        receitasCategorias[categoria] = (receitasCategorias[categoria] || 0) + valor;
      }
    });

    setDespesasData({
      labels: Object.keys(despesasCategorias),
      datasets: [
        {
          data: Object.values(despesasCategorias),
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    });

    setReceitasData({
      labels: Object.keys(receitasCategorias),
      datasets: [
        {
          data: Object.values(receitasCategorias),
          backgroundColor: ['#4BC0C0', '#FF9F40', '#9966FF'],
          hoverBackgroundColor: ['#4BC0C0', '#FF9F40', '#9966FF'],
        },
      ],
    });
  };

  useEffect(() => {
    processarDados();
  }, []);

  const [showFab, setShowFab] = useState(false);
  const toggleFab = () => {
    setShowFab(!showFab);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
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

        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-bold text-center mb-4 text-black">Últimas Transações</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border border-zinc-400">
              <h3 className="text-lg font-semibold text-gray-600">Últimas Despesas</h3>
              <table className="min-w-full bg-white text-gray-500">
                <thead>
                  <tr>
                    <th className="text-left py-2 px-4">Data</th>
                    <th className="text-left py-2 px-4">Título</th>
                    <th className="text-left py-2 px-4">Categoria</th>
                    <th className="text-left py-2 px-4">Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {transacoes
                    .filter((transacao) => transacao.tipo === 'despesa')
                    .map((transacao) => (
                      <tr key={transacao.id} className="text-gray-700">
                        <td className="border-t py-2 px-4">{transacao.data}</td>
                        <td className="border-t py-2 px-4">{transacao.titulo}</td>
                        <td className="border-t py-2 px-4">{transacao.categoria}</td>
                        <td className="border-t py-2 px-4">R$ {transacao.valor.toFixed(2)}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 border border-zinc-400">
              <h3 className="text-lg font-semibold text-gray-600">Últimas Receitas</h3>
              <table className="min-w-full bg-white text-gray-500">
                <thead>
                  <tr>
                    <th className="text-left py-2 px-4">Data</th>
                    <th className="text-left py-2 px-4">Título</th>
                    <th className="text-left py-2 px-4">Categoria</th>
                    <th className="text-left py-2 px-4">Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {transacoes
                    .filter((transacao) => transacao.tipo === 'receita')
                    .map((transacao) => (
                      <tr key={transacao.id} className="text-gray-700">
                        <td className="border-t py-2 px-4">{transacao.data}</td>
                        <td className="border-t py-2 px-4">{transacao.titulo}</td>
                        <td className="border-t py-2 px-4">{transacao.categoria}</td>
                        <td className="border-t py-2 px-4">R$ {transacao.valor.toFixed(2)}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 right-8">
        <button
          onClick={toggleFab}
          className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
        >
          <span className="text-3xl">+</span>
        </button>
      </div>

      {showFab && <FloatingActionButton />}
    </div>
  );
}
