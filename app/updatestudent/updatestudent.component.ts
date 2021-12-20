import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { LoginserviceService } from '../loginservice.service';
import { Student } from '../student';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {

  student:any;
  uniqid:any

  constructor(private logsrv:LoginserviceService, private datasrv:DataService, private router:Router) { 
    this.student=new Student();
  }

  ngOnInit(): void {
    this.uniqid=this.logsrv.studid;
    this.logsrv.loginstudent(this.uniqid).subscribe(
      (data)=>{
        console.log(data);
        this.student=data;
      }
    )
  }

  updateStudent(studForm:any){
    this.student=studForm.value;
    this.datasrv.updateStudent(this.student).subscribe();
  }

  goBack(){
    this.router.navigate(['tostudhome',this.uniqid])
  }

}
