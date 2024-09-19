import React from 'react';
import Imagem from "../assets/cadeirada.jpg";

export default function Sobre () {
  return (
    <section className="w-full min-h-screen bg-gray-100 py-16 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Espaço para a foto ou logo */}
        <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
            <img
                src="/assets/cadeirada.jpg"
                alt="Mateus Fin"
                className="w-48 h-48 object-cover rounded-full"
            />
        </div>

        {/* Texto de descrição */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Sobre o Software</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Este software foi desenvolvido para ajudar usuários a gerenciar suas finanças de forma simples e eficiente. Ele permite o cadastro de receitas e despesas, além de gerar gráficos e relatórios financeiros detalhados. Com uma interface intuitiva, o software oferece uma visão clara sobre o fluxo de caixa e o orçamento, facilitando a tomada de decisões financeiras.
          </p>
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Criado por Mateus Fin</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Mateus Fin é um programador que está cursando Engenharia de Software. Com grande paixão por tecnologia e desenvolvimento, Mateus vem criando soluções inovadoras para ajudar pessoas e empresas a gerenciarem melhor seus recursos. Sua experiência em programação e seu compromisso com a qualidade estão refletidos em cada projeto que ele desenvolve.
          </p>
        </div>
      </div>
    </section>
  );
};
