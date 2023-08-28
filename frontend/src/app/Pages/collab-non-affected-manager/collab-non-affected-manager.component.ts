import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Collaborateur } from 'src/app/classes/collaborateur';
import { CollaborateurService } from 'src/app/services/collaborateur.service';

@Component({
  selector: 'app-collab-non-affected-manager',
  templateUrl: './collab-non-affected-manager.component.html',
  styleUrls: ['./collab-non-affected-manager.component.css']
})
export class CollabNonAffectedManagerComponent implements OnInit {

  nonAffectedCollabs !: Collaborateur[];
  constructor(private collaborateurService:CollaborateurService,private router:Router) { }


  ngOnInit() {
    this.getNonAffectedCollabs();
  }

  getNonAffectedCollabs(){
    this.collaborateurService.getNonAffectedCollabs().subscribe(data=>{
      this.nonAffectedCollabs=data;
      console.log(data);  },
      error => console.log(error));
  }
}
