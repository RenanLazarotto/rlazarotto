import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formatDateToString = (date: Date) => {
    const t = new Date(date.valueOf() + date.getTimezoneOffset() * 60 * 1000);

    return format(t, "eeee, dd 'de' MMMM 'de' yyyy", { locale: ptBR });
};
