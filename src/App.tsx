import React, { MouseEvent, useState, useRef, useEffect } from 'react';
import './App.css';
import Button from './Button';
import WYLogo from './assets/WY-LOGO.png'

function App() {
  const [level, setLevel] = useState();
  const yesButtonRef = useRef<HTMLButtonElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null)
  const [focusedItem, setFocusedItem] = useState(yesButtonRef);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { target } = e;
    console.log({ target, e })

    if ((target as HTMLButtonElement).id === 'Si') {
      console.log('SIIIIIII')
    }
    if ((target as HTMLButtonElement).id === 'No') {
      console.log('BOOOOOOOOOOOOOOOOOOOOOOOO')
    }
  }

  useEffect(() => {
    focusedItem?.current?.focus();
  }, [])

  return (<div id='App'>
    <header>
      <h2>MU / TH / UR</h2>
      <h3>6000</h3>
      <img src={WYLogo} />
    </header>
    <div id='menu-container'>
      <h1>NOSTROMO</h1>
      <article>
        <p className='line-1'><b>Sistemas vitales:</b> operativos.<br /></p>
        <p className='line-2'><b>Señales externas: </b>silencio.</p>

        <p className='line-3'>Te has conectado al núcleo de mando.</p>
        <p className='line-4'>MU/TH/UR controlará el viaje y hará preguntas. </p>
        <p className='line-5'>Cada respuesta correcta mantiene la nave estable. </p>
        <p className='line-6'>Cada error abre un resquicio… algo podría usarlo.</p>

        <h4 className='line-7'>Responde sólo con SÍ o NO.</h4>
        <h4 className='line-8'>Mantén la calma.</h4>
        <h4 className='line-9'>Piensa antes de responder.</h4>

      </article>
      <footer>
        <h4>

          SELECT AND PRESS ENTER  ::
        </h4>
        <div id='button-container'>
          <Button ref={yesButtonRef} onClick={handleClick}>Yes</Button><Button onClick={handleClick} ref={noButtonRef}>No</Button>
        </div>
      </footer>
    </div>

    <div id="interlaced"></div>
    <div id="glare"></div>
  </div>
  );
}

export default App;
