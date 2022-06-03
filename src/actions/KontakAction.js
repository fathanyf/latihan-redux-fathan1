import axios from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";

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