import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Quiz} from '../../modelos/quiz.model';
import { QuizService } from '../../servicios/quiz.service';

@Component({
  selector: 'app-create',
  standalone: true,
  providers :[QuizService],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, MatDividerModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  value = '';

  quizForm = this.fb.group({
    titulo: '',
    duracion: '',
    pregunta: '',
    respuesta1: '',
    respuesta2: '',
    respuesta3: '',
    respuesta4: ''
    			
  });

  id: string | null;

  constructor(private fb: FormBuilder, private _router: Router, private quizServicio: QuizService, private aRoute: ActivatedRoute) {
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.verEditar();
  }
  verEditar(): void {
    if (this.id != null) {
      this.quizServicio.getQuiz().subscribe(
        data => {
          this.quizForm.setValue({
            
            titulo: data.titulo,
            duracion: data.Duracion,
            pregunta: data.Pregunta,
            respuesta1: data.Respuesta1,
            respuesta2: data.Respuesta2, 
            respuesta3:  data.Respuesta3,
            respuesta4:  data.Respuesta4
          })
        },
        err => {
          console.log(err);
        }
      )
    }
  }


  agregarFicha(): void {
    const quiz: Quiz = {

      Titulo: this.quizForm.get('titulo')?.value!,
      Duracion: Number(this.quizForm.get('duracion')?.value),
      Pregunta: this.quizForm.get('pregunta')?.value,
      Respuesta1: this.quizForm.get('respuesta1')?.value,
      Respuesta2: this.quizForm.get('respuesta2')?.value,
      Respuesta3: this.quizForm.get('respuesta3')?.value,
      Respuesta4:  this.quizForm.get('respuesta4')?.value
    };
    console.log(quiz);
    

    if (this.id != null) {
      this.quizServicio.updateQuiz(this.id, quiz).subscribe(
        data => {
          this._router.navigate(['/ficha/index']);
        },
        err => {
          console.log(err);
          this._router.navigate(['/ficha/index']);
        }
      );

    } else {
      this.quizServicio.addQuiz(quiz).subscribe(data => {
        console.log(data);
        this._router.navigate(['/ficha/index']);
      },
        err => {
          console.log(err);
          this._router.navigate(['/ficha/index']);
        }
      );
    }



  }
}
