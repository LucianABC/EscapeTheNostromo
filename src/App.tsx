import React, { MouseEvent, useState, useRef, useEffect, useMemo } from 'react';
import './App.css';
import Button from './components/Button/Button';
import WYLogo from './assets/WY-LOGO.png'
import StartMenu from './components/Screens/StartMenu';
import PlayingLevel from './components/Screens/PlayingLevel';
import GameEnded from './components/Screens/GameEnded';
import { levels } from './data/levels';



function App() {
  const yesButtonRef = useRef<HTMLButtonElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null)

  const [levelIdx, setLevelIdx] = useState(0);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [screen, setScreen] = useState(<StartMenu />)

  useEffect(() => {
    yesButtonRef?.current?.focus();
  }, [levelIdx, questionIdx])

  useEffect(() => {
    const _screen = getScreen();
    setScreen(_screen)
  }, [levelIdx, questionIdx])



  const nextLevel = () => {
    setLevelIdx((prevVal) => prevVal + 1);
    setQuestionIdx(0);
  }

  const nextQuestion = () => {
    console.log('next question')
    setQuestionIdx((prevVal) => prevVal + 1);
  }

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { currentTarget } = e;
    const buttonPressed = (currentTarget as HTMLButtonElement).id;

    if (levelIdx === 0) {
      // Start menu: te lleva al primer nivel o la pantalla de END.
      buttonPressed === 'Si' ? nextLevel() : setLevelIdx(levels.length + 1);
      return;
    }

    const currentLevel = levels[levelIdx - 1];
    const levelQuestions = currentLevel.questions;

    if (questionIdx === (levelQuestions.length - 1)) {
      nextLevel();
      return
    }

    nextQuestion();
    return
  }

  const getScreen = () => {
    switch (levelIdx) {
      case 0:
        return <StartMenu />

      case levels.length + 1:
        return <GameEnded />

      default:
        return <PlayingLevel levelNumber={levelIdx} questionIdx={questionIdx} />
    }
  }

  return (<div id='App'>
    <header>
      <h2>MU / TH / UR</h2>
      <h3>6000</h3>
      <img src={WYLogo} />
    </header>
    <div id='content'>
      {screen}
      <footer>
        <h4>
          SELECCIONA UNA OPCIÓN Y PRESIONA ENTER  ::
        </h4>
        <div id='button-container'>
          <Button id='Si' ref={yesButtonRef} onClick={handleClick}>Si</Button><Button id='No' onClick={handleClick} ref={noButtonRef}>No</Button>
        </div>
      </footer>
    </div>

    <div id="interlaced"></div>
    <div id="glare"></div>
  </div>
  );
}

export default App;
