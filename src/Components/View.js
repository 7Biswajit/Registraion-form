import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({books,deleteBook}) => {
    
    return books.map(book=>(
        
        <tr key={book.age}>
            <td>{book.name}</td>
            <td>{book.age}</td>
            <td>{book.date}</td>
            <td>{book.gender}</td>
            <td className='delete-btn' onClick={()=>deleteBook(book.age)}>
                <Icon icon={trash}/>
            </td>           
        </tr>            
    
))
}
export default View;