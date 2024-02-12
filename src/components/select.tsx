import { useState } from 'react';

function Select() {
  const [procedimentoSelecionado, setProcedimentoSelecionado] = useState('');

  const handleProcedimentoChange = (event:any) => {
    setProcedimentoSelecionado(event.target.value);
  };

  return (
    <select
      required
      name="Procedimento"
      value={procedimentoSelecionado}
      onChange={handleProcedimentoChange}
      className="w-full bg-white focus:bg-transparent rounded border border-gray-300 focus:ring-2 focus:ring-indigo-900 focus:border-indigo-900 text-black outline-none text-base focus:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    >
      <option value="" className="text-black">Clique para selecionar</option>
      <option value="Implante" className="text-black">Implante</option>
      <option value="Cargaimediata" className="text-black">Carga imediata</option>
      <option value="Faceta" className="text-black">Faceta</option>
      <option value="Bichectomia" className="text-black">Bichectomia</option>
      <option value="Clareamento" className="text-black">Clareamento</option>
      <option value="Prótese" className="text-black">Prótese</option>
    </select>
  );
}

export default Select;