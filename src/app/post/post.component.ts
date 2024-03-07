import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormGroup,ReactiveFormsModule,Validators} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  
  selector: 'app-post',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  aki:FormGroup;
  data:any;
  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router) {

    this.aki=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required,],
      state:['',Validators.required]
    })
  }
ngOnInit(): void {
}
postdata() {
  this.http.post("http://localhost:3000/posts",this.aki.value).subscribe(res=> {
    console.log(this.aki.value);
    this.router.navigate(['/get']); //get ku pathil login
    alert("Submit Successfully");
  });
}

}