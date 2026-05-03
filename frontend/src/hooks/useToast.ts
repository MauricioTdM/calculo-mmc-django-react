import { toast } from 'react-toastify';

export const useToast = () => {
    const showSuccess = (message: string = 'Cálculo realizado com sucesso!') => {
        toast.success(message);
    };

    const showError = (error: unknown) => {
        if (error instanceof Error) {
            toast.error(`Erro: ${error.message}`);
        } else if (typeof error === 'string') {
            toast.error(error);
        } else {
            toast.error('Ocorreu um erro inesperado no servidor.');
        }
    };

    const showWarning = (message: string) => {
        toast.warning(message);
    }

    return { showSuccess, showError, showWarning };
};