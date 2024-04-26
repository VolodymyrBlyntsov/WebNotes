const useCreateDate = () => {
    const dateObj = new Date()
    let month = dateObj.getMonth()
    let monthName
    switch(month) {
        case 0: monthName = "Січ.";
            break;
        case 1: monthName = "Лют.";
            break;
        case 2: monthName = "Бер.";
            break;
        case 3: monthName = "Трав.";
            break;
        case 4: monthName = "Квіт.";
            break;
        case 5: monthName = "Чер.";
            break;
        case 6: monthName = "Лип.";
            break;
        case 7: monthName = "Серп.";
            break;
        case 8: monthName = "Вер.";
            break;
        case 9: monthName = "Жов.";
            break;
        case 10: monthName = "Лист.";
            break;
        case 11: monthName = "Груд.";
            break;
    }

    const date = `${monthName} ${dateObj.getDate()}, ${dateObj.getFullYear()} [${dateObj.getHours()}:${dateObj.getMinutes()}]`
    return date;
}

export default useCreateDate