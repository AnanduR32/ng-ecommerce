import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  categories: any[];
  constructor(private dataService: GetDataService, private auth: AuthService) { 
    this.categories = []
    

  }

  ngOnInit(): void {
    this.dataService.getCategories().subscribe(
      (response)=>{
        this.categories = response['data'];
      },
      (error)=>{
        alert("Unable to fetch categories")
      }
    )
  }

}
