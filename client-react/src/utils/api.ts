/* eslint-disable @typescript-eslint/no-explicit-any */
export const apiCall = async <T>(
    endpoint: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
    body: Record<string, any> | null = null
): Promise<T> => {
    const headers = {
        'Content-Type': 'application/json',
    };

    console.log('Enviando requisição para:', endpoint);
    console.log('Método:', method);
    console.log('Body:', body);

    try {
        const response = await fetch(endpoint, {
            method,
            headers,
            body: body ? JSON.stringify(body) : null,
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Erro ${response.status}: ${response.statusText}`);
            console.error('Detalhes do erro:', errorText);
            throw new Error(`Erro na requisição: ${response.status} ${response.statusText} - ${errorText}`);
        }

        // Se a resposta for bem-sucedida, parseia como JSON
        const data: T = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao realizar a requisição:', error);
        return Promise.reject((error as Error).message);
    }
};
