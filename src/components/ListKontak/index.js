import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListKontak } from '../../actions/KontakAction';

function ListKontak() {
    const { getListKontakResult, getListKontakLoading, getListKontakError } 
    = useSelector((state) => state.KontakReducer);
    const dispach = useDispatch();

    useEffect(() => {
        
        //paggil action getlistkonatk
        console.log("1. use effect component did mount");
        dispach(getListKontak());

    }, [dispach])

  return (
    <div>
        <h4>List Kontak</h4>
        {getListKontakResult ? (
            getListKontakResult.map((kontak) => {
                return(
                    <p key={kontak.id}>{kontak.nama} - {kontak.nohp}</p>
                )
            })
        ) : getListKontakLoading ? (
            <p>Loading . . .</p>
        ) : (
            <p>{getListKontakError ? getListKontakError : "Data Kosong"}</p>
        )}
    </div>
  )
}

export default ListKontak
