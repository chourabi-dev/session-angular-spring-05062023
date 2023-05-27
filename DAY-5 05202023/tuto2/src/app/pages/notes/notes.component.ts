import { Component,OnInit } from '@angular/core';
import { NotesService } from 'src/app/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: any[] = [];

  constructor( private noteService:NotesService ){}
  
  
  

  // auto call method !!!
  ngOnInit(): void {
    this.notes  = this.noteService.getNotesList();
  }


}
