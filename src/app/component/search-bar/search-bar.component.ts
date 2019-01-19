import { Component, OnInit, ViewChild, ElementRef,EventEmitter,Output, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../../service/data.service';
import { Mobile } from '../../model/mobile';
import { MobileService } from '../../service/mobile.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Input() mobile: Mobile;
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  allPosts: Mobile[];
  autoCompleteList: any[]

  @ViewChild('autocompleteInput') autocompleteInput: ElementRef;
  @Output() onSelectedOption = new EventEmitter();

  constructor(
    private dataService: DataService,
    private mobileService: MobileService
  ) { }

  ngOnInit() {
    this.dataService.getPosts().subscribe(posts => {
      this.allPosts = posts

    });

    this.myControl.valueChanges.subscribe(userInput => {
      this.autoCompleteExpenseList(userInput);
    })
  }

  private autoCompleteExpenseList(input) {
    let categoryList = this.filterCategoryList(input)
    this.autoCompleteList = categoryList;
  }

  filterCategoryList(val) {
    var categoryList = []
    if (typeof val != "string") {
      return [];
    }
    if (val === '' || val === null) {
      return [];
    }
    return val ? this.allPosts.filter(s => s.brand.toLowerCase().indexOf(val.toLowerCase()) != -1)
      : this.allPosts;
  }

  displayFn(post: Mobile) {
    let k = post ? post.brand : post;
    return k;
  }

  filterPostList(event) {
    var posts= event.source.value;
        if(!posts) {
          this.dataService.searchOption=[]
        }
        else {
          console.log("not")

            this.dataService.searchOption.push(posts);
            //this.onSelectedOption.emit(this.dataService.searchOption)
            this.mobileService.getMobiles().subscribe(mobile => this.mobile = mobile);
        }
        
        this.focusOnPlaceInput();

       
        
  }

  search(event){
    var searchOption = event.source.value;
    console.log("searchOption:: "+searchOption);
  }

  removeOption(option) {
        
    let index = this.dataService.searchOption.indexOf(option);
    if (index >= 0)
        this.dataService.searchOption.splice(index, 1);
        this.focusOnPlaceInput();

        this.onSelectedOption.emit(this.dataService.searchOption)
}

focusOnPlaceInput() {
  this.autocompleteInput.nativeElement.focus();
  this.autocompleteInput.nativeElement.value = '';
}

}
