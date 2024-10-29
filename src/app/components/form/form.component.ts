import { Component, type OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }
  
  formGroup!: FormGroup
  results = []
  
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: false
    })

    
  }

  onSubmit(): void {
    console.log(this.formGroup.value)
  }

  onClear(): void {
    this.formGroup.reset()
  }
}
