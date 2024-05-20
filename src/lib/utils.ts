import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formatDateToString = (date: Date) => {
    const t = new Date(date.valueOf() + date.getTimezoneOffset() * 60 * 1000);

    return format(t, "dd'.'MM'.'yyyy", { locale: ptBR });
};

export const estimateReadingTime = (text: string): number => {
    const words = text.split("");
    return Math.ceil(words.length / 260);
};
