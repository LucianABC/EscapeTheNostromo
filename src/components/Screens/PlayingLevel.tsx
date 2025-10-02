import  React  from 'react';
import { levels } from '../../data/levels';

interface PlayingLevelProps {
    levelNumber: number;
    questionIdx?: number;
}

const PlayingLevel: React.FC<PlayingLevelProps> = ({ levelNumber, questionIdx }) => {
    return (
        <>   <h4>{levels[levelNumber].title}</h4>{levelNumber}</>
    )
}
export default PlayingLevel;