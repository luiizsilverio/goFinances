const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);


/*
export const formataValor = (value: string): string => {
  const valor = parseFloat(value);
  return formatValue(valor);
}
*/

export default formatValue;
