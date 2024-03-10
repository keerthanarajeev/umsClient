import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/userService/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selected: Date | null = new Date();
  employeeCount: any = 0
  AdminUserName: any = ""
  menuSlide: boolean = true

  date: any = new Date()
  constructor(private us: UserService, private rout: Router) { }


  ngOnInit(): void {
    this.us.getUser().subscribe((result: any) => {
      console.log(result);

      this.employeeCount = result.length

    })
    this.AdminUserName = localStorage.getItem("UserName")
  }

  menuClick() {
    this.menuSlide = !this.menuSlide
  }

  logout() {
    localStorage.removeItem("UserName")
    this.rout.navigateByUrl("")

  }

  updateAdmin(event: any) {
    // console.log(event);
    this.AdminUserName = event

  }
}
