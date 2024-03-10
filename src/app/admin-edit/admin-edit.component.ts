import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AdminService } from '../adminServices/admin.service';
import { ToastService } from '../adminServices/toast.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {

  admin: any = {}
  fileData: any = ""

  @Output() onAdminChange = new EventEmitter()

  // attribute to store data from parent

  @Input() data: any

  constructor(private as: AdminService, private tos:ToastService) { }

  profilePic: any = "https://i.postimg.cc/13Gvr2LZ/Placeholder-Person-removebg-preview.png"

  editClicked: boolean = false

  ngOnInit(): void {
    this.as.loginApi().subscribe((result: any) => {
      this.admin = result[0]
      if (this.admin.profile) {
        this.profilePic = this.admin.profile
      }
    });

  }

  editClick() {
    this.editClicked = true;
  }

  cancelEdit() {
    this.editClicked = false;
  }

  getFile(event: any) {
    let file = event.target.files[0];

    // URL conversion
    let fr = new FileReader();
    // Convert
    fr.readAsDataURL(file);

    // Store the converted URL (onload)
    fr.onload = (event: any) => {
      console.log(event.target.result);

      // preview
      this.profilePic = event.target.result

      // add profile in admin data
      this.admin.profile = this.profilePic

      console.log(this.admin);

    };
  }


  editData() {

    this.as.updateAdmin(this.admin).subscribe((result: any) => {
      console.log(result);

      // update local storage with new username
      var indexE=result.email.indexOf('@')
      localStorage.setItem("userName",result.email.slice(0,indexE));

      this.onAdminChange.emit(result.email.slice(0, indexE))
      this.cancelEdit()

      this.tos.showSuccess("Profile Updated")
    });
  }




}

