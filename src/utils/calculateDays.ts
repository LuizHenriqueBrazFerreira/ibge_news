import moment from 'moment';

export const calculateDays = (date:string) => {
  const dataPublicacao:Date = moment(date, 'DD/MM/YYYY HH:mm:ss').toDate();

  const dataAtual:Date = new Date();

  const dataDifference:number = dataAtual.getTime() - dataPublicacao.getTime();

  const daysDifference:number = Math.floor(dataDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
};
