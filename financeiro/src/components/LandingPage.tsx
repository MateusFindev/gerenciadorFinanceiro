import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      {/* Introdução */}
      <section className="flex-grow container mx-auto p-8 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-bold text-gray-800">Gerencie suas Finanças com Facilidade</h2>
        <p className="text-gray-600 mt-4 max-w-xl">Controle suas receitas, despesas e categorias. Veja gráficos detalhados para entender melhor suas finanças.</p>
        <button className="bg-blue-600 text-white px-6 py-2 mt-6 rounded-lg hover:bg-blue-500">
          Comece Agora
        </button>
      </section>

      {/* Recursos */}
      <section className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800">Controle de Receitas e Despesas</h3>
          <p className="text-gray-600 mt-2">Gerencie todas as suas receitas e despesas de forma eficiente em um único lugar.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800">Cadastro de Categorias</h3>
          <p className="text-gray-600 mt-2">Crie categorias personalizadas para organizar melhor suas transações.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800">Análise por Gráficos</h3>
          <p className="text-gray-600 mt-2">Visualize gráficos claros para entender melhor o comportamento das suas finanças.</p>
        </div>
      </section>

      {/* Chamada para Ação */}
      <section className="bg-blue-600 p-8 text-center text-white">
        <h3 className="text-3xl font-bold">Pronto para Começar?</h3>
        <button className="bg-white text-blue-600 px-6 py-2 mt-4 rounded-lg hover:bg-gray-200">
          Cadastre-se Agora
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 p-4 text-white text-center">
        <p>© 2024 Meu Sistema Financeiro. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
