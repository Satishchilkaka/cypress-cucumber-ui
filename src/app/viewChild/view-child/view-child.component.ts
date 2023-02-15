import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  constructor() { }

  searchValues = [{ searchValue: '' }]
  @ViewChild('searchInput')
  searchInputValue!: ElementRef;

  getSearchData(searchInput: any) {
    this.searchValues.push({
      searchValue: this.searchInputValue.nativeElement.value
    })

  }

  ngOnInit(): void {
  }

}
