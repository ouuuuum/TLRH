import {Component, OnInit} from '@angular/core';
import {CollaborateurService} from "../../services/collaborateur.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Collaborateur} from "../../classes/collaborateur";

@Component({
  selector: 'app-update-collaborator-by-treeactors',
  templateUrl: './update-collaborator-by-treeactors.component.html',
  styleUrls: ['./update-collaborator-by-treeactors.component.css']
})
export class UpdateCollaboratorByTreeactorsComponent implements OnInit{

  collaborateur :Collaborateur=new Collaborateur();
  id:number;

  constructor(private collaborateurservice:CollaborateurService
              ,private route :ActivatedRoute
              , private router:Router) {
  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.collaborateurservice.getCollaborateurById(this.id).subscribe(data => {
      this.collaborateur= data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.collaborateurservice.updateCollaborateurBy3Actors(this.id, this.collaborateur).subscribe( data =>{
        this.goToCollaborateurList();
      }
      , error => console.log(error));
  }
  goToCollaborateurList(){
    this.router.navigate(['listofcollaboratorstoupdate']);
  }


}
