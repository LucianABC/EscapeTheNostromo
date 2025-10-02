import React, { MouseEvent, useState, useRef, useEffect, useMemo } from 'react';
import './App.css';
import Button from './components/Button/Button';
import WYLogo from './assets/WY-LOGO.png'
import StartMenu from './components/Screens/StartMenu';
import PlayingLevel from './components/Screens/PlayingLevel';
import GameEnded from './components/Screens/GameEnded';
import { levels } from './data/levels';



function App() {
  const [levelIdx, setLevelIdx] = useState(0);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [screen, setScreen] = useState(<StartMenu />)

  useEffect(() => {
    yesButtonRef?.current?.focus();
    // add enter key listener to enter the option
  }, [])

  const yesButtonRef = useRef<HTMLButtonElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null)

  const nextLevel = () => {
    setLevelIdx((prevVal) => prevVal + 1);
  }

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { target } = e;

    if (levelIdx === levels.length - 1 && questionIdx === levels[levelIdx].questions.length - 1) {
      nextLevel();
    }
    console.log({ levelIdx, questionIdx, target })

    if ((target as HTMLButtonElement).id === 'Si') {
      if (levelIdx === 0) {
        nextLevel();
        return;
      }
      // guardar rta
    }
    if ((target as HTMLButtonElement).id === 'No') {
      if (levelIdx === 0) {
        setLevelIdx(levels.length); // que te mande al ultimo nivel/pantalle de end
        return;
      }
      // guardar rta
    }

    nextLevel();
  }
  useEffect(() => {
    const _screen = getScreen();
    setScreen(_screen)
  }, [levelIdx])

  const getScreen = () => {
    switch (levelIdx) {
      case 0:
        return <StartMenu />

      case levels.length:
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
          SELECT AND PRESS ENTER  ::
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
