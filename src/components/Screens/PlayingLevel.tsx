import React from 'react';
import { levels } from '../../data/levels';

interface PlayingLevelProps {
    levelNumber: number;
    questionIdx: number;
}

const PlayingLevel: React.FC<PlayingLevelProps> = ({ levelNumber, questionIdx }) => {
    const levelIdx = levelNumber - 1;
    return (
        <>
        <h3>{levels[levelIdx].title}</h3>
        <p>{levels[levelIdx].questions[questionIdx].question}</p>
        </>
    )
}
export default PlayingLevel;