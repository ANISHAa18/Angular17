import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {FormBuilder,FormGroup,ReactiveFormsModule,Validators} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'anishh';
}
