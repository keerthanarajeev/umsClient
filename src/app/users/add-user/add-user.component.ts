import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../userService/user.service';
import { ToastService } from 'src/app/adminServices/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addFormModel = this.fb.group({
    name: ['',[Validators.required,Validators.pattern('^[a-zA-Z ]+')]],
    email: ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')]],
    status:['',[Validators.required]]
   
  })

  // class
  constructor(private fb: FormBuilder,private route:Router,private us:UserService,private toast:ToastService) {

  }

  
  ngOnInit(): void {
   
  }
  
  add(){
    var path=this.addFormModel.value
    var name=path.name
    var email=path.email
    var status=path.status
    

    if(this.addFormModel.valid){
      // console.log(name);
      // console.log(email);
      // console.log(status);
     this.us.addUser({id:"",name,email,status}).subscribe((data:any)=>{
      console.log(data);
      // alert(`${data.name} details added`)
      this.toast.showSuccess(`${data.name} details added`)

      // reset the form
      this.route.navigateByUrl("/users")

      this.addFormModel.reset()
      
     })

    }
    else{
      alert('invalid form')
    }
    
    
  }

}
