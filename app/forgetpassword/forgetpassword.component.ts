import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  loginid:any;

  constructor(private datasrv:DataService) { }

  ngOnInit(): void {
  }

  resetpass(){
    this.datasrv.forgetPass(this.loginid).subscribe();
  }

}
