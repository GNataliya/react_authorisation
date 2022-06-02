import style from './style.module.scss';
import axios from 'axios';
import { useState, useEffect }  from 'react';
import { Form, Field } from "react-final-form";

function UserProfile () {

}

export default UserProfile;

// import style from './style.module.scss';
// import Button from '@mui/material/Button';
// import { MuiPickersUtilsProvider, DatePicker, TimePicker, DateTimePicker } from '@material-ui/pickers';
// import DateMomentUtils from '@date-io/moment';
// // import TextField from '@material-ui/core/TextField';

// import axios from 'axios';
// import { useState, useEffect }  from 'react';
// import { Form, Field } from "react-final-form";


// function UserProfile () {

//     const [ participants, setParticipants ] = useState([]);    

//     const [ selectDate, setSelectDate ] = useState(new Date());

//     const currentTime = (new Date().getHours() < 10 ? '0' : '') + new Date().getHours() + ':' + (new Date().getMinutes() < 10 ? '0' : '') + new Date().getMinutes();
//     const [ startTime, setStartTime ] = useState(currentTime);
//     const [ FinishTime, setFinishTime ] = useState(Date.now());  

//     const [value, setValue] = useState(null);

//     // console.log('curT', typeof(currentTime));
//     // console.log('startT', startTime)
//     // console.log('finishT', new Date(FinishTime))
//     // console.log('moment', (new Date(Date.now() * 1000) + '').slice(16,24) )
//     // const currentDate = new Date();
//     // const currentTime = currentDate.getHours() + ':' + currentDate.getMinutes();

//     useEffect ( async () => {
//         const { data } = await axios.post('api/meeting/participants');
//         setParticipants(data.participants);
//     }, [] );


//     const participant = participants.map(item => 
//         <option key={item.id} value="${item.id}">{item.name}</option>
        
//     );


//     const onSubmit = async (values) => {
//        console.log('meeteeng value', values)
//     }

    

//     const required = (value) => (value ? undefined : "Required");

//     return (
//         <div >
//             {/* <div>{ avatar ? <img src={`${avatar}`}  alt='avatar' /> 
//                 : <img src={`${avatar}`}  alt='avatar' /> }
//             </div> */}
            
//             <div className={style.box}>
                
//                 <Form
//                 onSubmit={onSubmit}
//                 render={({ handleSubmit, form, submitting, pristine, values }) => (

//                 <form onSubmit={handleSubmit} >

//                     <h2> Add a new meeting </h2>

//                     <Field name="title" validate={required}>
//                         {({ input, meta }) => (
//                         <div>
//                             <label>Title</label>
//                             <input {...input} type="text" placeholder="Title of meeting" />
//                             {meta.error && meta.touched && <span>{meta.error}</span>}
//                         </div>
//                         )}
//                     </Field>

//                     <Field name="members" component="select"  >
                        
//                         {({ input, meta }) => (
//                         <div>
//                             <label>Participants</label>
//                             <select name="members" type="text" placeholder="Person who will invite" >{participant}</select>
//                             {meta.error && meta.touched && <span>{meta.error}</span>}
//                         </div>
//                         )}
//                     </Field>


//                     <MuiPickersUtilsProvider utils={DateMomentUtils}>
                    
//                     <Field name="date" >
//                         {({ input, meta }) => (
//                         <div>
//                             <label>Date</label>
//                             <DatePicker inputVariant="outlined" className={style.date} value={selectDate} onChange={setSelectDate} />
//                             {meta.error && meta.touched && <span>{meta.error}</span>}
//                         </div>
//                         )}
//                     </Field>

//                     <Field name="start" >
//                         {({ input, meta }) => (
//                         <div>
//                             <label>Start at</label>
//                             <input type="time" defaultValue={currentTime}  />
//                             {meta.error && meta.touched && <span>{meta.error}</span>}
//                         </div>
//                         )}
//                     </Field>

//                     <Field name="end" >
//                         {({ input, meta }) => (
//                         <div>
//                             <label>End at</label>
//                             <input type="time" defaultValue={currentTime} />
//                             {meta.error && meta.touched && <span>{meta.error}</span>}
//                         </div>
//                         )}
//                     </Field>  

//                     </MuiPickersUtilsProvider>

              
//                     <div className={style.buttons}>
//                         <Button variant="outlined" size="medium" type="submit" disabled={submitting}>
//                         Save
//                         </Button>
//                     </div> 
            
//                 </form>
            
//                 )}
//                 />

//             </div>
            
//         </div>
//     );
// };

// export default UserProfile;