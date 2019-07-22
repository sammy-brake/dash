

export function fetchInterns() {
    return (dispatch) => {
    //   dispatch({ type: 'START_GET_INTERNS_REQUEST' });
      return fetch('http://localhost:3001/api/interns')
        .then(response => response.json())
        .then(data =>  
             dispatch({ type: 'FETCH_INTERNS', payload: data }));
            
    };
  };

 
 