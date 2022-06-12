import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addKOntak, getListKontak, updateKontak } from "../../actions/KontakAction"


function AddKOntak() {
    const [nama, setNama] = useState("");
    const [nohp, setNohp] = useState("");
    const [id, setId] = useState ("");

    // const { AddKOntakResult } = useSelector((state) => state.)
    const dispatch = useDispatch();

    const { AddKOntakResult, detailKontakResult, updateKontakResult } = useSelector((state) => state.KontakReducer);
    const handleSubmit = (event) => {
        event.preventDefault();

        if(id) {
          //update kontak
          dispatch(updateKontak({id: id, nama: nama, nohp: nohp}))
        }else{
          //add kontak
          dispatch(addKOntak({nama: nama, nohp: nohp}))
        }

        dispatch(addKOntak({nama: nama, nohp: nohp}))
    }

  useEffect(() => {
      if(AddKOntakResult) {
        dispatch(getListKontak());
        setNama('');
        setNohp(''); 
      }
  }, [AddKOntakResult, dispatch])

  useEffect(() => {
    if(detailKontakResult) {
      setNama(detailKontakResult.nama);
      setNohp(detailKontakResult.nohp);
      setId(detailKontakResult.id);
    }
}, [detailKontakResult, dispatch])

useEffect(() => {
  if(updateKontakResult) {
    dispatch(getListKontak());
    setNama('');
    setNohp(''); 
    setId('');
  }
}, [updateKontak, dispatch])

  return (
    <div>
      <h4>{id? "Edit Kontak" : "Add Kontak"}</h4>
      <form onSubmit={(event) => handleSubmit(event)}>

        <input type="text" name="nama" placeholder="nama . . ." value={nama} 
          onChange={(event) => setNama(event.target.value)}/>

        <input type="text" name="nohp" placeholder="nohp . . ." value={nohp} 
          onChange={(event) => setNohp(event.target.value)}/>

          <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddKOntak
