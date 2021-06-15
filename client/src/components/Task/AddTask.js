import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from '@material-ui/core';
import { useState } from "react";
import {addContact} from "../../service/api";
import {useHistory} from 'react-router-dom';


const useStyle=makeStyles({
    container:{
        width:'40%',
        margin:'auto',
        marginTop:'50px',
        '&>*':{
            marginTop:'20px'
        }
    },
    heading:{
        fontSize:'30px',
        margin:'auto'
    },
    btn:{
        backgroundColor:'#add8e6',
    }
});

const initialValue={
    Name:'',
    UserName:'',
    Email:'',
    Phone:''
}


const AddContact=()=>{
    const [contact,setConatct]=useState(initialValue);
    const {Name,UserName,Email,Phone}=contact;
    const classes=useStyle();
    const history=useHistory();

    const onValueChange=(e)=>{
        setConatct({...contact,[e.target.name]:e.target.value})
    }

    const addContactDetail=async()=>{
        await addContact(contact);
        history.goBack();
    }
      
    // await addContact(contact);
    return(
        <div>
            <FormGroup className={classes.container}>
                <Typography className={classes.heading}>Add User here :) </Typography>
                <FormControl>
                    <InputLabel>
                        Name
                    </InputLabel>
                    <Input onChange={(e)=>onValueChange(e)} name="Name" value={Name}/>
                </FormControl>
                <FormControl>
                    <InputLabel>
                        UserName
                    </InputLabel>
                    <Input onChange={(e)=>onValueChange(e)} name="UserName" value={UserName}/>
                </FormControl>
                <FormControl>
                    <InputLabel>
                        Email
                    </InputLabel>
                    <Input onChange={(e)=>onValueChange(e)} name="Email" value={Email}/>
                </FormControl>
                <FormControl>
                    <InputLabel>
                        Phone
                    </InputLabel>
                    <Input onChange={(e)=>onValueChange(e)} name="Phone" value={Phone}/>
                </FormControl>
                <Button className={classes.btn} onClick={()=>addContactDetail()}>Add Contact</Button>
            </FormGroup>
        </div>
    )
}

export default AddContact;

// onClick={()=>addContactDetail()