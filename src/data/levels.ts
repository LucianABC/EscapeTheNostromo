interface Level {
    id: number;
    title: string;
    description?: string;
    questions: Question[]
}

interface Question {
    id: number;
    question: string;
    correctAnswer: boolean
}

const levels: Level[] = [{
    id: 1, title: 'Diagnóstico de la nave',
    questions: [{ id: 0, question: '¿El reactor principal muestra oscilaciones fuera del rango nominal?', correctAnswer: false },
    { id: 1, question: '¿El sistema de navegación responde a los comandos?', correctAnswer: true },
    { id: 2, question: '¿El radar detecta anomalías en la bodega criogénica?', correctAnswer: false }],
}, {
    id: 2, title: 'Protocolo de seguridad y tripulación',
    questions: [{ id: 0, question: '¿Todos los miembros de la tripulación están localizados?', correctAnswer: true },
    { id: 1, question: '¿Se reportó actividad no identificada en cubierta inferior?', correctAnswer: false },
    { id: 2, question: '¿La señal biométrica del capitán coincide con el archivo?', correctAnswer: true },]
}, {
    id: 3, title: 'Identificación de amenaza latente',
    questions: [{ id: 0, question: '¿El mapa térmico revela focos de calor ajenos a la tripulación?', correctAnswer: false },
    { id: 1, question: '¿El dron de reconocimiento volvió intacto?', correctAnswer: true },
    { id: 2, question: '¿La compuerta de observación mostró signos de impacto?', correctAnswer: false },]
}, {
    id: 4, title: 'Falla de Contención y Señales de Intrusión',
    questions: [{ id: 0, question: '¿Se ha abierto alguna compuerta sin autorización?', correctAnswer: false },
    { id: 1, question: '¿El sistema de cámaras muestra interferencia localizada?', correctAnswer: false },
    { id: 2, question: '¿El escáner corporal detectó movimiento detrás de usted?', correctAnswer: false },]
}, {
    id: 5, title: 'Psicotecnología y Verificación del Usuario',
    questions: [{ id: 0, question: '¿Su pulso y temperatura son estables según el sensor biométrico?', correctAnswer: true },
    { id: 1, question: '¿El patrón de pensamiento reportado por su implante neural coincide con la base de datos?', correctAnswer: true },
    { id: 2, question: '¿La voz que responde ahora es la misma que antes?', correctAnswer: false },
    { id: 3, question: '¿Ha escuchado sonidos sin origen localizable?', correctAnswer: false },
    { id: 4, question: '¿Siente que algo o alguien está observándolo?', correctAnswer: false },
    { id: 5, question: '¿Usted sigue siendo humano?', correctAnswer: false },]
}, {
    id: 6, title: 'Ultimátum: Riesgo de Colapso',
    questions: [
        { id: 0, question: 'INTEGRIDAD DE LA TRIPULACIÓN COMPROMETIDA. ¿Autoriza la purga total de la tripulación para proteger la carga?', correctAnswer: true },]

}]

export { levels }