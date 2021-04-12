import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agregar-targeta',
  templateUrl: './agregar-targeta.component.html',
  styleUrls: ['./agregar-targeta.component.css']
})
export class AgregarTargetaComponent implements OnInit {

  form: FormGroup;

  constructor(private fb:FormBuilder) { 
      this.form = this.fb.group({
        titular: [''],
        numTargeta: [''],
        fechaVen: [''],
        cvv: [''],
      })
  }

  ngOnInit(): void {
  }


  agregartargeta(){
    // console.log(this.form);

    const targeta: any = {
      titular: this.form.get('titular')?.value,
      numTargeta: this.form.get('numTargeta')?.value,
      fechaVen: this.form.get('fechaVen')?.value,
      cvv: this.form.get('cvv')?.value,
    }

    console.log(targeta);
    
  }

}
