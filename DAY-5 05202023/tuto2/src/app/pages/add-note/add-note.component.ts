import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotesService } from 'src/app/notes.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {


  // how do we call a service ??
  // inject my service !!!

  constructor(   private noteService:NotesService , private router:Router  ){}




  noteForm = new FormGroup({
    note: new FormControl('',Validators.required)
  })


  add(){
    const formBody = this.noteForm.value;

    console.log(formBody);


    this.noteService.addNote( formBody.note );


    this.router.navigateByUrl('/notes');
    
  }

}
