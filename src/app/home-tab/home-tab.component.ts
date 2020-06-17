import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.component.html',
  styleUrls: ['./home-tab.component.css']
})
export class HomeTabComponent implements OnInit {
  public filtered_listArray;
  public flitearray;
  public itemtype;
  public newitemsArray = [];
  public tabItems = [
    {
     text: 'mobile',
     isSelected: false
  },
  {
    text: 'Laptop',
    isSelected: false
 },
 {
  text: 'Furniture',
  isSelected: false
},
{
  text: 'headphone',
  isSelected: false
},
{
  text: 'smartWatch',
  isSelected: false
}
];

public mainitem = [
  {
   type: 'mobile',
   price: 10000,
   name: 'nokia mobile',
   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
},
{
  type: 'Laptop',
  price: 40000,
  name: 'dell laptop',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
},
{
type: 'Furniture',
price: 400000,
name: 'Supreme',
text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
},
{
type: 'headphone',
price: 10000,
name: 'apple',
text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
},
{
type: 'smartWatch',
price: 40000,
name: 'apple smart Watch',
text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
}
];



  constructor() { }

  ngOnInit() {
  }

  onTabClicked(tabItem) {
    console.log(tabItem.text);
    this.newitemsArray = [];
    this.itemtype = tabItem.text;
    for(let i = 0 ; i < this.mainitem.length ; i++) {
    if(this.mainitem[i].type === this.itemtype) {
      this.newitemsArray.push(this.mainitem[i]);
    }
    }
    this.setActiveTabItem(tabItem);
  }

  public setActiveTabItem(tabItem): void {
    this.tabItems.forEach((value, index: Number) => {
        value.isSelected = false;
    });
    tabItem.isSelected = true;
}



}
