
import './App.css';
import Modal from './lib/components/Modal';


const modal = "Employee Created! It's Me Luigi 😉✅"
const close = "Here We Go ! 🚩"

function App() {
    return (
        <div className="App">
            <Modal texte={modal} close={close} />/
        </div>
    );
}

export default App;
