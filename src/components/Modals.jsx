import { useState } from 'react'
import './Modals.css'


const Modals = ({ closeModals, onSubmit, defaulValue }) => {
    const [formState, setFormState] = useState(defaulValue || {
        namaBarang: '',
        hargaBeli: '',
        hargaJual: '',
        stok: '',
        uploadImage: ''
    })

    const [error, setError] = useState("")

    const validateForm = () => {
        if(formState.namaBarang && formState.hargaBeli && formState.hargaJual && formState.stok ){
            setError("");
            return true
        } else {
            let errorFields = []
            for(const [key, value] of Object.entries(formState)){
                if(!value) {
                    errorFields.push(key)
                }
                console.log(errorFields)
                setError(errorFields.join(", ") + " tidak boleh kosong")
            }
            return false
        }
        
    }

    const handleOnChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleImageChange = (e) => {
        console.log(e.target.files[0].size > 100000)
        if(e.target.files[0].size > 100000){
            setError("Ukuran file tidak boleh lebih dari 100kb")
            return false
        } else {
            setFormState({
                ...formState,
                [e.target.name]: URL.createObjectURL(e.target.files[0])
            })
        }
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!validateForm()) return
        onSubmit(formState)
        closeModals();
    }

    
  return (
    <div className='modal-container' onClick={(e) => {
        if(e.target.className === 'modal-container'){
            closeModals()
        }}}>
        <div className='rounded-md p-8 bg-white w-1/4'>
            <form action="">
                <div className='flex flex-col mb-5'>
                    <label className='leading-5 mb-1' htmlFor="namaBarang">Nama Barang:</label>
                    <input className='w-full h-8 border rounded-md px-2 placeholder:text-sm' type="text" name='namaBarang' placeholder='Masukkan Nama Barang' value={formState.namaBarang} onChange={handleOnChange} />
                </div>
                <div className='flex flex-col mb-5'>
                    <label className='leading-5 mb-1' htmlFor="hargaBeli">Harga Beli</label>
                    <input className='w-full h-8 border rounded-md px-2 placeholder:text-sm' type="number" name='hargaBeli' placeholder='Masukkan Harga Beli' value={formState.hargaBeli} onChange={handleOnChange}/>
                </div>
                
                <div className='flex flex-col mb-5'>
                    <label className='leading-5 mb-1' htmlFor="hargaJual">Harga Jual</label>
                    <input className='w-full h-8 border rounded-md px-2 placeholder:text-sm' type="number" name='hargaJual' placeholder='Masukkan Harga Jual' value={formState.hargaJual} onChange={handleOnChange}/>
                </div>
                <div className='flex flex-col mb-5'>
                    <label className='leading-5 mb-1' htmlFor="stok">Stok Barang</label>
                    <input className='w-full h-8 border rounded-md px-2 placeholder:text-sm' type="number" name='stok' placeholder='Masukkan Stok Barang' value={formState.stok} onChange={handleOnChange}/>
                </div>
                <div className='flex flex-col mb-5'>
                    <label className='leading-5 mb-2' htmlFor="uploadImage">Upload Image</label>
                    <input type="file" name='uploadImage' accept="image/png, image/jpg" onChange={handleImageChange}/>
                </div>
                {error && <p className='text-red-500 text-sm'>{error}</p>}
                <button type='submit' className='font-semibold h-9 px-5 bg-blue-400 py-1 rounded-lg text-white hover:bg-white hover:text-blue-400 hover:border mt-2' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Modals