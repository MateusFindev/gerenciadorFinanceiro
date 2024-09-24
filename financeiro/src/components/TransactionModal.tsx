import React, { useState } from 'react';

interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  expense?: boolean;
}

export default function TransactionModal({ isOpen, onClose, expense }: TransactionModalProps) {
  const [valor, setValor] = useState('');
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [data, setData] = useState('');

  if (!isOpen) return null;

  const titleModal = expense ? "Nova Despesa" : "Nova Receita";

  const categorias = expense
    ? [
        { value: 'alimentacao', label: 'Alimentação' },
        { value: 'transporte', label: 'Transporte' },
        { value: 'lazer', label: 'Lazer' },
        { value: 'outros', label: 'Outros' },
      ]
    : [
        { value: 'salario', label: 'Salário' },
        { value: 'investimento', label: 'Investimento' },
        { value: 'outros', label: 'Outros' },
      ];

  const handleSave = () => {
    console.log({
      valor,
      titulo,
      categoria,
      data,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">{titleModal}</h2>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Título</label>
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              placeholder="Ex: Compra de mercado"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Valor</label>
            <input
              type="number"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              placeholder="Ex: 100.00"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Categoria</label>
            <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Selecione uma categoria</option>
              {categorias.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Data</label>
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 py-2 px-4 bg-gray-300 text-gray-700 rounded"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="py-2 px-4 bg-blue-500 text-white rounded"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
