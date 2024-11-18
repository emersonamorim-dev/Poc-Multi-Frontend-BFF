const apiCall = async (method, url, body = null) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  const options = {
    method: method,
    headers: headers,
    body: body ? JSON.stringify(body) : null,
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Erro ao fazer a requisição');
    }

    return data;
  } catch (error) {
    throw error;
  }
};


export default apiCall;
