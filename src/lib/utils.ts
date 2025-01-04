const formatter = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeZone: "America/Sao_Paulo",
});

export const estimateReadingTime = (text: string): number => {
    const words = text.split("");
    return Math.ceil(words.length / 260);
};

export const handleKeypress = (
    e: KeyboardEvent,
    keys: string[],
    callback: Function
) => {
    if (keys.includes(e.code)) {
        callback();
    }
};

export const formatDate = (date: Date) => formatter.format(date);
