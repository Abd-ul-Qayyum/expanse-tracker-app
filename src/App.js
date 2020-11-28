import AddTransaction from './AddTransaction';
import './App.css';
import Balance from './Balance';
import Header from './Header';
import IncomExpanses from './IncomExpanses';
import TransactionsList from './TransactionsList';
import { GlobalProvider } from './context/Global'

function App() {
    return ( <
        GlobalProvider >
        <
        Header / >
        <
        div className = 'container' >
        <
        Balance / >
        <
        IncomExpanses / >
        <
        TransactionsList / >
        <
        AddTransaction / >
        <
        /div> <
        /GlobalProvider>
    );
}

export default App;