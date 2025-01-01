export const formatDate = fecha => {
    const newDate = new Date(fecha)
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    return newDate.toLocaleDateString('es-ES', options)
}