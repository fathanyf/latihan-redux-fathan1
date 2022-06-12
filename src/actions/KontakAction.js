import axios from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";
export const ADD_KONTAK = "ADD_KONTAK";
export const DELETE_KONTAK = "DELETE_KONTAK";
export const DETAIL_KONTAK = 'DETAIL_KONTAK';
export const UPDATE_KONTAK = 'UPDATE_KONTAK';

export const getListKontak = () => {
    console.log("2. Masuk Action");
    return (dispach) => {

        //loading
        dispach({
            type: GET_LIST_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'GET',
            url: 'http://localhost:3000/kontaks',
            timeout: 120000
        })
            .then((response) => {
                console.log("3. berhasil dapat data : ", response.data);
                //berhasil get api
                dispach({
                    type: GET_LIST_KONTAK,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })        
            })
            .catch((error) =>{
                //gagal get api
                console.log("3. gagal dapat data : ", error.message);
                dispach({
                    type: GET_LIST_KONTAK,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
        
            })

    }
}

export const addKOntak = (data) => {
    console.log("2. Masuk Action");
    return (dispach) => {

        //loading
        dispach({
            type: ADD_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'POST',
            url: 'http://localhost:3000/kontaks',
            timeout: 120000,
            data: data
        })
            .then((response) => {
                console.log("3. berhasil dapat data : ", response.data);
                //berhasil get api
                dispach({
                    type: ADD_KONTAK,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })        
            })
            .catch((error) =>{
                //gagal get api
                console.log("3. gagal dapat data : ", error.message);
                dispach({
                    type: ADD_KONTAK,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
        
            })

    }
}

export const deleteKontak = (id) => {
    console.log("2. Masuk Action");
    return (dispach) => {

        //loading
        dispach({
            type: DELETE_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'DELETE',
            url: 'http://localhost:3000/kontaks'+id,
            timeout: 120000,
        })
            .then((response) => {
                console.log("3. berhasil dapat data : ", response.data);
                //berhasil get api
                dispach({
                    type: DELETE_KONTAK,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })        
            })
            .catch((error) =>{
                //gagal get api
                console.log("3. gagal dapat data : ", error.message);
                dispach({
                    type: DELETE_KONTAK,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
        
            })

    }
}

export const detailKontak = (data) => {
    return (dispatch) => {
        console.log("3. detail kontak : ");
        dispatch({
            type: DETAIL_KONTAK,
            payload: {
                data: data
            }
        })
    }
}

export const updateKontak = (data) => {
    console.log("2. Masuk Action");
    return (dispach) => {

        //loading
        dispach({
            type: UPDATE_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'PUT',
            url: 'http://localhost:3000/kontaks'+data.id,
            timeout: 120000,
            data: data
        })
            .then((response) => {
                console.log("3. berhasil dapat data : ", response.data);
                //berhasil get api
                dispach({
                    type: UPDATE_KONTAK,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })        
            })
            .catch((error) =>{
                //gagal get api
                console.log("3. gagal dapat data : ", error.message);
                dispach({
                    type: UPDATE_KONTAK,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
        
            })

    }
}