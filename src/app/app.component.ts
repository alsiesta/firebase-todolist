import { Component } from '@angular/core';
import { Firestore, collectionData, collection, setDoc } from '@angular/fire/firestore';
import { doc } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos$: Observable<any>;
  // das Dollarzeichen kann man auch weglassen. Best-Practise ist jedoch, dass man es nutzt, um anzuseigen, dass diese Variable sich stetig updated! Any nehmen wir als Datentyp, wenn wir ein JSON einbinden
  todos: Array<any> = [];
  updatemessage = false;
  message = 'You have an update!';
  newTodoText: string = 'Hallo';
  
  //hier importieren wir die Lib Firestore als Objekt und weisen sie der Var firestore zu
  constructor(private firestore: Firestore) {
    //aus unserem firestore wollen die gesamte collection haben
    const coll = collection(firestore, 'to-dos');
    //und aus der collection wollen wir alle daten haben
    this.todos$ = collectionData(coll);

    // bei jedem updated wird diese subscribe fn aufgerufen

    // ICH KANN DAS GESATME .subscribe AUSLASSEN, WENN ICH IM TEMPLATE DAS OBSERVABLE DIREKT EINBINDE!!!
    // VORTEIL MIT .subscribe IST JEDOCH, DASS ICH BEI JEDEM DB UPDATE EINE BESTIMMTE FN AUSFÜHREN KANN!

    this.todos$.subscribe((todosarray) => {
      let message = this.updatemessage;
      this.todos = todosarray;
      console.log(this.todos);
      this.updatemessage = true;
      // alert(message);
      this.updatemessage = false;
    });
  }

  addNewTodo() {
    const coll = collection(this.firestore, "to-dos");
    setDoc(doc(coll), {name: this.newTodoText});
  }
}
