import { Component } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
  
export class AppComponent {
  todos$: Observable<any>;
  // das Dollarzeichen kann man auch weglassen. Best-Practise ist jedoch, dass man es nutzt, um anzuseigen, dass diese Variable sich stetig updated! Any nehmen wir als Datentyp, wenn wir ein JSON einbinden
  constructor(firestore: Firestore) { //hier importieren wir die Lib Firestore als Objekt und weisen sie der Var firestore zu
    const coll = collection(firestore, 'todos');//aus unserem firestore wollen die gesamte collection haben
    this.todos$ = collectionData(coll); //und aus der collection wollen wir alle daten haben

    // bei jedem updated wird diese subscribe fn aufgerufen
    this.todos$.subscribe((newTodos) => {
      console.log('Neue Todos sind: ', newTodos)
    })
  }
}
