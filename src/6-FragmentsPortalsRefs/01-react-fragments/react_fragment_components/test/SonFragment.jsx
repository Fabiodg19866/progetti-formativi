
   import { Fragment } from 'react'
   
   const SonFragment = () => {
     return (
         <Fragment>
             <p style={{
                 textAlign: 'center', fontSize: 'medium', color: 'red',
                 backgroundColor: 'yellow', marginLeft: '25%', marginRight: '25%',
                 borderRadius:'20px',padding:'60px',fontWeight:'bolder'
             }}>Description Son Fragment</p>
             
             <p style={{
                 textAlign: 'center', fontSize: 'medium', color: 'green',
                 backgroundColor: 'yellow', marginLeft: '25%', marginRight: '25%',
                 borderRadius:'20px',padding:'60px',fontWeight:'inherit'
             }}>Description Son Fragment</p>    
       </Fragment>
     )
   }
   
   export default SonFragment