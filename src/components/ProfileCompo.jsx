import React from 'react'
import AccessibleTable from './Tables1'
import AccessibleTableTwo from './Tables2'
const ProfileCompo = () => {
  return (
    <>
    <div style={{
        display:"flex",
        flexDirection:"column",
        gap:'30px',
        paddingRight:"40px"
    }}>
   <AccessibleTable/>
   <AccessibleTableTwo/>
   </div>
   </>
 
  )
}

export default ProfileCompo;
