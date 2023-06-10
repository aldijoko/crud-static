



const TableData = ({rows, deleteClick, updateClick}) => {
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };
    
  return (
    <div className='py-5'>
        
        <div>
            <table className='table-auto w-full text-left p-2'>
            <thead>
                <tr>
                    <th>Nama Barang</th>
                    <th>Harga Beli</th>
                    <th>Harga Jual</th>
                    <th>Stok</th>
                    <th>Image</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className='border-t-2'>
                {rows.map((row, idx) => (
                    <tr key={idx}>
                    
                        <td>{row.namaBarang}</td>
                        <td>{numberWithCommas(row.hargaBeli)}</td>
                        <td>{numberWithCommas(row.hargaJual)}</td>
                        <td>{row.stok}</td>
                        <td><img className="w-14 h-14 my-3" src={row.uploadImage} /></td>
                        {/* <td></td> */}
                        <td className='flex items-center gap-2 py-2'>
                            <button className='px-5 py-1 bg-yellow-300 rounded-md' onClick={() => updateClick(idx)}>Edit</button>
                            <button className='px-5 py-1 bg-red-500 rounded-md' onClick={() => deleteClick(idx)}>Delete</button>
                        </td>
                    </tr>
                ))}
                
            </tbody> 
            </table>
            
        </div>
    </div>
  )
}

export default TableData