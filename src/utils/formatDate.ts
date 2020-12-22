import { format, parseISO } from 'date-fns';

const formatDate = (vdata: Date): string => {
    let dataFormatada = vdata.toString();
    const [date, time] = dataFormatada.split('T');
    dataFormatada = format(parseISO(date), 'dd/MM/yyyy');
  return dataFormatada;
}

export default formatDate;
