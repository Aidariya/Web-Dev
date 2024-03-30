<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, Output, EventEmitter } from '@angular/core';
>>>>>>> master

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
<<<<<<< HEAD

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
=======
  @Output() categorySelected = new EventEmitter<string>();

}
>>>>>>> master
