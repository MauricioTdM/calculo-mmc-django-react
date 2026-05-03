interface CalculateResponse {
    first_number: number;
    last_number: number;
    resultado?: number;
    error?: string;
}

export async function calculateLCM(firstNumber: number, lastNumber: number): Promise<CalculateResponse> {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/calculate/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            first_number: firstNumber,
            last_number: lastNumber
        })
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || "Erro ao calcular o MMC.");
    }

    return data;
}