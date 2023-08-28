import { Component } from '@angular/core';
import { Collaborateur } from 'src/app/classes/collaborateur';
import { CollaborateurService } from 'src/app/services/collaborateur.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-get-non-managers',
  templateUrl: './get-non-managers.component.html',
  styleUrls: ['./get-non-managers.component.css']
})
export class GetNonManagersComponent {
  nonManagers : Collaborateur[];
  constructor(private collaborateurService:CollaborateurService,private router:Router) {}

  ngOnInit(): void {
    this.getNonManagers();
  }

  getNonManagers(){
    this.collaborateurService.getNonManagerRH().subscribe(data=>{
      this.nonManagers=data;
      console.log(data);  },
      error => console.log(error));
  }
}
