import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definir o formato das transações
interface Transacao {
  id: number;
  data: string;
  titulo: string;
  categoria: string;
  tipo: 'despesa' | 'receita';
  valor: number;
}

// Criar contexto
const TransacaoContext = createContext<{ transacoes: Transacao[]; adicionarTransacao: (novaTransacao: Transacao) => void }>({
  transacoes: [],
  adicionarTransacao: () => {},
});

// Criar o provider
export const TransacaoProvider = ({ children }: { children: ReactNode }) => {
  const [transacoes, setTransacoes] = useState<Transacao[]>([
    { id: 1, data: '12/09/2024', titulo: 'Lanche', categoria: 'Alimentos', tipo: 'despesa', valor: 30 },
    { id: 2, data: '13/09/2024', titulo: 'Doril', categoria: 'Farmácia', tipo: 'despesa', valor: 25 },
    { id: 3, data: '14/09/2024', titulo: 'Plano telefonia', categoria: 'Outros', tipo: 'despesa', valor: 45 },
    { id: 4, data: '01/09/2024', titulo: 'Salário Mês 08', categoria: 'Salário', tipo: 'receita', valor: 600 },
    { id: 5, data: '05/09/2024', titulo: 'Férias 12/24', categoria: 'Férias', tipo: 'receita', valor: 200 },
    { id: 6, data: '06/09/2024', titulo: 'Reembolso', categoria: 'Outros', tipo: 'receita', valor: 100 },
  ]);

  const adicionarTransacao = (novaTransacao: Transacao) => {
    setTransacoes((prev) => [...prev, novaTransacao]);
  };

  return (
    <TransacaoContext.Provider value={{ transacoes, adicionarTransacao }}>
      {children}
    </TransacaoContext.Provider>
  );
};

// Hook para usar o contexto
export const useTransacoes = () => {
  return useContext(TransacaoContext);
};
