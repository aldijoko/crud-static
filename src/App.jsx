import { useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa';
import './App.css'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import TableData from './components/TableData'
import Modals from './components/Modals'
import ModalDelete from './components/ModalDelete';
import image1 from './assets/images/pixel1.png'

function App() {
  const [openModal, setOpenModal] = useState(false)
  const [openModalDelete, setOpenModalDelete] = useState(false)
  const [dataBarang, setDataBarang] = useState([
      {
          id: 1,
          namaBarang: 'Frozen yoghurt',
          hargaBeli: 100000,
          hargaJual: 200000,
          stok: 100,
          uploadImage: image1

      },
      {
          id: 2,
          namaBarang: 'Ice cream sandwich',
          hargaBeli: 100000,
          hargaJual: 200000,
          stok: 100,
          uploadImage: image1
      },
      {
          id: 3,
          namaBarang: 'Eclair',
          hargaBeli: 100000,
          hargaJual: 200000,
          stok: 100,
          uploadImage: image1
      },
      {
          id: 4,
          namaBarang: 'Cupcake',
          hargaBeli: 100000,
          hargaJual: 200000,
          stok: 100,
          uploadImage: image1
      }
  ])
  const [dataBarangUpdate, setDataBarangUpdate] = useState(null)
  const [deleteId, setDeleteId] = useState("")

  const handleDelete = (index) => {
    setDeleteId(index)
    setOpenModalDelete(true)
    // setDataBarang(dataBarang.filter((_, idx) => idx !== index))
  }

  const handleAdd = (data) => {
    dataBarangUpdate === null ?
    setDataBarang([...dataBarang, data]) :
    setDataBarang(dataBarang.map((item, idx) => {
      if(idx === dataBarangUpdate){
        return data
      } else {
        return item
      }
    }))
  }

  const handleUpdate = (idx) => {
    setDataBarangUpdate(idx)

    setOpenModal(true)
  }

  const handleModalDelete = (e) => {
    if(e){
      setDataBarang(data => {
        const newData = [...data]
        return newData.filter((_, idx) => idx !== deleteId)
      })
      setOpenModalDelete(false)
    } else {
      setOpenModalDelete(false)
    }
    
  }

  return (
    <>
      <div className='flex'>
        <div className='basis-[12%] h-[100vh]'>
          <Sidebar />
        </div>
        <div className='basis-[88%] '>
          <Dashboard />
          <div className='py-2 px-5 w-full'>
          {openModal && <Modals closeModals={() => {
            setOpenModal(false)
            setDataBarangUpdate(null)
          }}
            onSubmit={handleAdd}
            defaulValue={dataBarangUpdate !== null && dataBarang[dataBarangUpdate]}/>}
          <div className='py-2 '>
              <button onClick={() => setOpenModal(true)} className='bg-blue-500 text-white px-2 py-1 rounded-md text-base flex gap-3 items-center'>
                  <FaPlusCircle/>
                  Tambah Data
              </button>
          </div>
            <TableData rows={dataBarang} deleteClick={handleDelete} updateClick={handleUpdate}/>
            {openModalDelete && <ModalDelete onClickDelete={handleModalDelete} />}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
