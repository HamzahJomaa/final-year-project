export const to_slug = (text) =>{
    return text.toLowerCase().replaceAll(" ","_")
}

export const SpliceByWord = (text,count) =>{
    var stripedHtml = text?text.replace(/<[^>]+>/g, "") :"";
    return stripedHtml.split(" ").splice(0,count).join(" ")
}

export const BeautifyShortDate = (date) => {
    date = new Date(date)
    let monthNames =["Jan","Feb","Mar","Apr",
        "May","Jun","Jul","Aug",
        "Sep", "Oct","Nov","Dec"];

    let day = date.getDate();

    let monthIndex = date.getMonth();
    let monthName = monthNames[monthIndex];

    let year = date.getFullYear();

    return `${day} ${monthName} ${year}`;
}
