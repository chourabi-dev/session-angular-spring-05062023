import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private notes:any[] = [];

  constructor() { }


  addNote(note:string | null | undefined){
    this.notes.push(note);
  }


  getNotesList(){
    return this.notes;
  }
}
