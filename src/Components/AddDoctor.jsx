import React from 'react'
import '../dashboardstyles/addDoctor.css';
const AddDoctor = () => {
  return (
    <div>
      <div className="forms">
        <div className="heades-container">
          <h1 className="heades-title">ADD NEW DOCTOR</h1>
        </div>
        <form>
          <h2>Basic info</h2>
          <label className='label'>Name</label>
          <input type="text" />
          <label >Date Of Birth</label>
          <input type="text" />
          <label >Gender</label>
          <input type="text" />
          <label >Profile Image</label>
          <input type="file" name="" id="" />
          <label>Speciality </label>
          <input type="text" />
          <label >Brief</label>
          <input type="submit" value="Save" className='save' />
          <input type="reset" value="Cancel" className='cancel' />
        </form>
        <form>
          <h2>Doctor Account Info </h2>
          <label className='label'>Email</label>
          <input type="text" />
          <label >phone</label>
          <input type="text" />
          <label >Password</label>
          <input type="text" />
          <label >Confirm Password</label>
          <input type="text" name="" id="" />
          <input type="submit" value="Save" className='save' />
          <input type="reset" value="Cancel" className='cancel' />
        </form>
      </div>
    </div>
  )
}

export default AddDoctor
