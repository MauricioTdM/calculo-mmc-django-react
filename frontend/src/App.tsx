import { useState } from 'react';
import { useToast } from './hooks/useToast';
import { calculateLCM } from './services/api';
import { Input } from './components/Input';
import { Button } from './components/Button';
import './App.css';

function App() {
    const [firstNumber, setFirstNumber] = useState<string>('');
    const [lastNumber, setLastNumber] = useState<string>('');

    const [result, setResult] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { showSuccess, showError, showWarning } = useToast();

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        const numX = parseInt(firstNumber, 10);
        const numY = parseInt(lastNumber, 10);

        if (isNaN(numX) || isNaN(numY)) {
            showWarning('Por favor, preencha os dois campos com números.');
            return;
        }

        if (numX <= 0 || numY <= 0) {
            showWarning('Ambos os números devem ser positivos e maiores que zero.');
            return;
        }

        if (numX >= numY) {
            showWarning('O primeiro número deve ser estritamente menor que o último.');
            return;
        }

        try {
            setIsLoading(true);
            setResult(null);

            const data = await calculateLCM(numX, numY);

            setResult(data.resultado ?? null);
            showSuccess('Cálculo realizado!');

        } catch (error) {
            showError(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="main-container">
            <div className="card hero-card">
                <h1>Calculadora de MMC</h1>
                <p>Descubra o menor múltiplo comum dentro de um intervalo.</p>

                <form onSubmit={handleSubmit} className="form-container">
                    <Input
                        id="firstNumber"
                        label="Primeiro Número (x):"
                        type="number"
                        value={firstNumber}
                        onChange={(e) => setFirstNumber(e.target.value)}
                        placeholder="Ex: 1"
                        disabled={isLoading}
                    />

                    <Input
                        id="lastNumber"
                        label="Último Número (y):"
                        type="number"
                        value={lastNumber}
                        onChange={(e) => setLastNumber(e.target.value)}
                        placeholder="Ex: 10"
                        disabled={isLoading}
                    />

                    <Button type="submit" disabled={isLoading || !firstNumber || !lastNumber}>
                        {isLoading ? 'Calculando...' : 'Calcular'}
                    </Button>
                </form>

                {result !== null && (
                    <div className="result-box">
                        <h2>Resultado:</h2>
                        <span className="result-number">{result}</span>
                    </div>
                )}
            </div>
        </main>
    );
}

export default App;