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
        {/* TODO: Vver como hacer p que sea linea por linea y no todas las lineas juntas */}
        <p><b>Sistemas vitales:</b> operativos.</p>

        <p><b>Señales externas: </b>silencio.</p>

        <p>Te has conectado al núcleo de mando.</p>
        <p>
          MU/TH/UR controlará el viaje y hará preguntas. <br />
          Cada respuesta correcta mantiene la nave estable. <br />
          Cada error abre un resquicio… algo podría usarlo.
        </p>

        <h4>
          Responde sólo con SÍ o NO.
        </h4>
        <h4>
          Mantén la calma.
        </h4>
        <h4>
          Piensa antes de responder.
        </h4>

        INPUT TO BEGIN ::
      </article>
      <div id='button-container'>
        <Button ref={yesButtonRef} onClick={handleClick}>Yes</Button><Button onClick={handleClick} ref={noButtonRef}>No</Button>
      </div>
    </div>

    <div id="interlaced"></div>
    <div id="glare"></div>
  </div>
  );
}

export default App;
