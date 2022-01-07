
import React,{useState, useEffect} from 'react'
import { View } from './Components/View';

// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('books');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const App = () => {

  // main array of objects state || books state || books array of objects
  const [books, setbooks]=useState(getDatafromLS());

  // input field states
  const [name, setName]=useState('');
  const [age, setAge]=useState('');
  const [date, setDate]=useState('');
   const [gender, setGender]=useState('');

  // form submit event
  const handleAddBookSubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let book={
      name,
      age,
      date,
       gender
    }
    setbooks([...books,book]);
    setName('');
    setAge('');
    setDate('');
    setGender('')
  }

  // delete book from LS
  const deleteBook=(age)=>{
    const filteredBooks=books.filter((element,index)=>{
      return element.age !== age
    })
    setbooks(filteredBooks);
  }

  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('books',JSON.stringify(books));
  },[books])

  return (
    <div className='wrapper'>
      <h2>Registration From</h2>
      <p>Add and view your Details using local storage</p>
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddBookSubmit}>
            <label>Name</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setName(e.target.value)} value={name}></input>
            <br></br>
            <label>Age</label>
            <input type="number" className='form-control' required
            onChange={(e)=>setAge(e.target.value)} value={age}></input>
            <br></br>
            <label>Date</label>
            <input type="date" className='form-control' required
            onChange={(e)=>setDate(e.target.value)} value={date}></input>
            <br></br>
            <label for="gender"> Select you gender</label>
            <select name="gender" className='form-control'  onChange={(e)=>setGender(e.target.value)} value={gender}>
            <option value="none" selected>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">other</option>
            </select>
            <button type="submit" className='btn btn-success btn-md'>
              SUBMIT
            </button>
          </form>
        </div>

        <div className='view-container'>
          {books.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Date</th>
                     <th>Gender</th> 
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <View books={books} deleteBook={deleteBook}/>
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setbooks([])}>Remove All</button>
          </>}
          {books.length < 1 && <div>SUBMIT YOUR DETAILS TO SEE HERE</div>}
        </div>

      </div>
    </div>
  )
}

export default App