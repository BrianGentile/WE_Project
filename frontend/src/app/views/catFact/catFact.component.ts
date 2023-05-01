import { HeaderService } from "../../components/template/header/header.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CatFactsAPIService } from './requestAPI';
import { Fact } from './interfaceAPI'; 


@Component({
  selector: "app-valorant",
  templateUrl: "./catFact.component.html",
  styleUrls: ["./catFact.component.css"],
  providers: [CatFactsAPIService]
})
export class CatFactComponent implements OnInit {
  donnees: Fact;
  constructor(private router: Router, private headerService: HeaderService, private APIService: CatFactsAPIService) {
    headerService.headerData = {
      title: "Cat Fact",
      icon: "http",
      routeUrl: "/catFact",
    };
    
  }


  ngOnInit(): void {
    this.donnees = {fact:""}; // pour eviter les erreurs dans la console
    this.APIService.getFact().subscribe((data) => {
      this.donnees = data;
    }
    );

  }
    // this.http.get<Fact>('https://catfact.ninja/fact').subscribe(
    //   (data) => {
    //     this.donnees = data;
    //     console.log(this.donnees);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  

  
}