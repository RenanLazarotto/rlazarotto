import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formatDateToString = (date: Date) => {
    const t = new Date(date.valueOf() + date.getTimezoneOffset() * 60 * 1000);

    return format(t, "dd'.'MM'.'yyyy", { locale: ptBR });
};

export const randomString = (length: number = 4) => {
    const characters: string = "abcdefghijklmnopqrstuvwxyz0123456789";
    let result: string = "";

    for (let i = 1; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return `r${result}`;
};
