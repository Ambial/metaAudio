import AudioToggle from './components/AudioToggle/AudioToggle'

function App() { 
  const bird1 = new Audio( 
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3" 
  ); 
 
  const bird2 = new Audio( 
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3" 
  );
 
  return ( 
    <main id="main">
    <h1>React + TS + Vite</h1>
    <div> 
      <AudioToggle audio={bird1} description={'Caspian Tern 1'} ></AudioToggle> 
      <AudioToggle audio={bird2} description={'Caspian Tern 2'} ></AudioToggle>      
    </div> 
    </main>
  ); 
} 
 
export default App;