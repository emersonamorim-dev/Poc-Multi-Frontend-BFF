export const apiCall = async (endpoint, method = 'GET', body = null) => {
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
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro na API:', error);
        return Promise.reject(error.message);
    }
};
