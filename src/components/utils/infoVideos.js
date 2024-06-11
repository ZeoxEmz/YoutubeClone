export const videoDate = (publishedAt)=>{
    const fullDate = new Date(publishedAt);
    const videoDateYear =  new Date().getFullYear() - fullDate.getFullYear();
    if(videoDateYear >= 1) return `hace ${videoDateYear} Años`

    const videoDateMonth =  new Date().getMonth() >= fullDate.getMonth();
    if(videoDateMonth) return `hace ${fullDate.getMonth()} meses`

    return `hace ${fullDate.getHours()} Horas`
}
export const videoViews = (viewCount)=>{
    if (viewCount >= 1000000) {
        return (viewCount / 1000000).toFixed(1) + 'M vistas';
    } else if (viewCount >= 1000) {
        return (viewCount / 1000).toFixed(1) + 'K vistas';
    }
    return viewCount + ' vistas';
}