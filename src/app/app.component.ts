import { Component, OnInit } from '@angular/core';
import { Post } from './class/post';
import { AppareilServie } from './services/appareil.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
 
  // isAuh = false;
  // //posts = new Post();
  // appareils: any[];

  // posts = [
  //   {
  //     title: "Mon premier post",
  //     content: "Voici mon premier post il est cour et unitile. Je le fait juste pour m'entrainer à angular",
  //     loveIts: -1,
  //     created_at: new Date()
  //   },
  //   {
  //     title: "Mon deuxième post",
  //     content: "Sint et in exercitation laborum minim occaecat cupidatat pariatur ea esse voluptate enim in.",
  //     loveIts: 7,
  //     created_at: new Date()
  //   },
  //   {
  //     title: "Mon trosième post",
  //     content: "Sint et in exercitation laborum minim occaecat cupidatat pariatur ea esse voluptate enim in.",
  //     loveIts: 7,
  //     created_at: new Date()
  //   },
  // ];

  // lastUpdate = new Promise((resolve, reject)=>{
  //   const date = new Date();
  //   setTimeout(() => {
  //     resolve(date);
  //   }, 2000);
  // });
  // appareilOne="Machine à laver";
  // appareilTwo="Frigo";
  // appareilThree="Ordinateur";

  // constructor(private appareilService: AppareilServie){
  //   setTimeout(() => {
  //     this.isAuh = true;
  //   }, 4000);
  // }

  // ngOnInit(){
  //   this.appareils = this.appareilService.appareils;
  // }

  // onAllumer(){
  //     this.appareilService.switchOnAll();
  // }

  // onEteindre(){
  //   if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
  //     this.appareilService.switchOffAll();
  //   } else {
  //     return null;
  //   }
  // }

  constructor(){}

  ngOnInit(){}

}
