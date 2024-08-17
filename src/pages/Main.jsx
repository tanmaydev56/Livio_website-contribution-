import '../styles/Main.css'

const Main = () => {
  return (
    <div className='mainside'>
        <div className="sidebar">
            <img src='https://img.freepik.com/free-photo/close-up-portrait-smiling-happy-man_171337-12131.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1720483200&semt=ais_user'></img>
            
           <div className="logo">
            <button className='logos'>Logo</button>
            <button className='sellerdocument'>Seller Document</button>
           </div>
           <div className="logout">
            <button>Logout</button>
           </div>
        </div>
        <div className="editprofile">
         <h1>Edit Profile</h1>
         <form>
            <div className="right-side">
            <label htmlFor="name">first name</label>
            <input type='text' placeholder='John'></input>
            <label htmlFor="name">Username</label>
            <input type='text' placeholder='JohnDoe'></input>
            <label htmlFor="name">New password</label>
            <input  placeholder='........'></input>
            <label htmlFor="name">Mail ID</label>
            <input type='email' placeholder='johndoe@gmail.com'></input>
            
            
            </div>
            <div className="left-side">
            <label htmlFor="name">Last name</label>
            <input type='text' placeholder='John'></input>
            <label htmlFor="name">Password</label>
            <input  placeholder='........'></input>
            <label htmlFor="name">Confirm password</label>
            <input  placeholder='........'></input>
            <label htmlFor="name">Mobile No </label>
            <input type='number' placeholder='+0-111-2222-333'></input>
            </div>
            <div className='address'>
            <label htmlFor="name"> Business Address</label>
            <select >
              <option selected>harshaldev@gmail.com</option>
            </select>
            
            </div>
            <div className='address'>
            <label htmlFor="name"> Bank Details</label>
            <select >
              <option selected>Payment Info</option>
            </select>
            
            
            </div>
            <div className='address'>
            <label htmlFor="name"> Shipping Details</label>
            <select >
              <option selected>Shipping Address</option>
            </select>
            
            
            </div>
          <div className="footerform">
            <div className="left-footer">
              <label>Customer Service contact</label>
              <input placeholder='+0-111-2222-333'></input>
              <label className='Buisnesslicense'>Buisness license</label>
              
              <select>
                <option selected>Upload</option>
              </select>
            </div>
            <div className="right-footer">
              <label>Social Media Link</label>
              <input placeholder='Instagram URL'></input>
              <input placeholder='Facebook Url'></input>
              <input placeholder='Twitter url'></input>
            </div>
          </div>
          <div className="update-btn">
            <button>UPDATE INFO</button>
          </div>
            
          
            

         </form>
           
            

        </div>
      
    </div>
  )
}

export default Main
