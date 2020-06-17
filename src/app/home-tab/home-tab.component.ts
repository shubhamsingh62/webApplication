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
   name: 'nokia',
   imglink: '/../assets/img1.jpg',
   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
},
{
  type: 'mobile',
  price: 15000,
  name: 'samsung',
  imglink: '/../assets/img1.jpg',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
},
{
  type: 'mobile',
  price: 10800,
  name: 'vivo',
  imglink: '/../assets/img1.jpg',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
},
{
  type: 'mobile',
  price: 7000,
  name: 'oppo',
  imglink: '/../assets/img1.jpg',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
},
{
  type: 'mobile',
  price: 100000,
  name: 'onida',
  imglink: '/../assets/img1.jpg',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
},
{
  type: 'Laptop',
  price: 40000,
  name: 'dell',
  imglink: '/../assets/img1.jpg',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
},
{
  type: 'Laptop',
  price: 30000,
  name: 'hp',
  imglink: '/../assets/img1.jpg',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
},
{
  type: 'Laptop',
  price: 50000,
  name: 'hp',
  imglink: '/../assets/img1.jpg',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
},
{
  type: 'Laptop',
  price: 35000,
  name: 'asus',
  imglink: '/../assets/img1.jpg',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
},
{
type: 'Furniture',
price: 400000,
name: 'Supreme',
imglink: '/../assets/img1.jpg',
text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
},
{
type: 'headphone',
price: 10000,
name: 'apple',
imglink: '/../assets/img1.jpg',
text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
},
{
  type: 'headphone',
  price: 1000,
  name: 'boat',
  imglink: '/../assets/img1.jpg',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
{
type: 'smartWatch',
price: 40000,
name: 'samsung',
imglink: '/../assets/img1.jpg',
text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
},
{
  type: 'smartWatch',
  price: 4000,
  name: 'realme',
  imglink: '/../assets/img1.jpg',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
 },
  {
    type: 'smartWatch',
    price: 8000,
    name: 'fitbit',
    imglink: '/../assets/img1.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
   {
      type: 'smartWatch',
      price: 40000,
      name: 'noise',
      imglink: '/../assets/img1.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
   }
];



  constructor() { }

  ngOnInit() {
    this.onTabClicked(this.tabItems[0]);
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
