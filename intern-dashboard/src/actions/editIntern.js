
export function editIntern(internData) {
   
    return (dispatch) => {
        return fetch(`http://localhost:3001/api/interns/${internData.internId+1}`, {
            method: 'PATCH', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(internData)
        })
        .then(res => res.json())
        .then(data => {
            debugger 
        dispatch({ type: 'EDIT_INTERNS', payload: data })} )
    }
}
