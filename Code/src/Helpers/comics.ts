 
import { Injectable } from '@angular/core';
import { Comic } from './models';
@Injectable()
export class ComicHelper {
 
  constructor() {
    console.log("init")
    
  }
  public getComic(index:number=0): Comic {
    return  this.getComics()[index];
  }

  public getComics(): Comic[] {
    return [
      {
        id: 6181,
        title: "Ultimate Spider-Man Ultimate Collection Book 1 (Trade Paperback)",
        issueNumber: 0,
        variantDescription: "",
        description: "Collecting the groundbreaking first year of Ultimate Spider-Man in one colossal trade paperback! High school, puberty, first dances - there are many pitfalls to being young. Compound these with intense personal tragedy and super human powers, and you can start to visualize the world of Peter Parker, a.k.a. Spider-Man. Following the murder of his uncle and the Green Goblin's assault on his high school, Peter finds himself on the brink of manhood: getting a job at the Daily Bugle to help support his widowed aunt and taking on extracurricular activities - such as bringing down the Kingpin, the head of organized crime in New York City! Collecting ULTIMATE SPIDER-MAN #1-13.\r\n352 PGS./Rated A ...$24.99",
        format: "Trade Paperback",
        pageCount: 0,
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/6/c0/59079911f0fdb",
          extension: "jpg"
        }, 
      },
      {
      id: 20956, 
      title: "Penance: Relentless (2008)",
      issueNumber: 0,
      variantDescription: "",
      description: "From the pages of CIVIL WAR: FRONT LINE and THUNDERBOLTS! Once he was a hero, now only a shell of Robbie Baldwin remains. As Penance, he begins a slow descent into madness: the most hated man in America, blamed for the disaster at Stamford, tortured by visions of his failure and obsessed with strange, seemingly meaningless numbers. A relentless pursuit begins... Collecting PENANCE: RELENTLESS #1-5.\r<br>Rated T+ ...$13.99\r<br>",
      format: "Comic",
      pageCount: 0,
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/9/90/4bb860a46f58d",
        extension: "jpg"
      }
    },
    {
      id: 16232,
      
      title: "Cap Transport (2005) #12",
      issueNumber: 12,
      variantDescription: "",
      description: null,
      
      format: "Comic",
      pageCount: 0, 
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
        extension: "jpg"
      }
    },
    {
      id: 16248, 
      title: "Cap Transport (2005) #9",
      issueNumber: 9,
      variantDescription: "",
      description: null, 
      format: "Comic",
      pageCount: 0,  
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
        extension: "jpg"
      }
    },
    {
      id: 21474, 
      title: "Ultimate X-Men (Spanish Language Edition) (2000)",
      issueNumber: 0,
      variantDescription: "",
      description: null, 
      format: "Comic",
      pageCount: 0, 
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
        extension: "jpg"
      }
    },
    {
      id: 21463, 
      title: "Ultimate Spider-Man (Spanish Language Edition) (2000) #10",
      issueNumber: 10,
      variantDescription: "",
      description: null, 
      format: "Comic",
      pageCount: 0,  
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
        extension: "jpg"
      }
    },
    {
      id: 21472, 
      title: "Ultimate Spider-Man (Spanish Language Edition) (2000) #8",
      issueNumber: 8,
      variantDescription: "",
      description: null, 
      format: "Comic",
      pageCount: 0,  
      thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
        extension: "jpg"
      }
    }]
  }
}