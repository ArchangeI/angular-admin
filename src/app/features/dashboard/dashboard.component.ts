import { Component, OnInit } from '@angular/core';
import { DatePipe } from "@angular/common";
import { IUser } from 'src/app/shared/interfaces/IUser';
import { ITransaction } from 'src/app/shared/interfaces/ITransaction';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DatePipe],
})

export class DashboardComponent implements OnInit {

  currentDate!: string;
  isSymbolExistInItems: boolean[] = [];

  user: IUser = {} as IUser;
  transactions: ITransaction[] = [];

  initialNames: string[] = ['John', 'Anton', 'Roman'];
  copiedByValueNames!: string[];
  copiedByReferenceNames!: string[];
  replacedAndTrimmedArray!: string[];

  constructor(private datePipe: DatePipe) {
    this.initialNames.forEach(x => x + '1');
  }

  ngOnInit(): void {
    this.getCurrentDate(this.getFormattedDate);
    this.copyArray();
    this.changeFirstElement(this.initialNames);
    this.checkIsSymbolExist(this.initialNames);
    this.replaceStringInArrayByEmptySpace(this.initialNames);
  }

  private getFormattedDate = (date: Date): void => {
    this.currentDate = `${this.datePipe.transform(date, 'MM.dd.yyyy hh:mm a')}`;
  }

  private getCurrentDate(callback: any): void {
    let date = new Date();
    callback(date);
  }

  private updateUser(date: Date = new Date(), active: boolean = false) {
    this.user = {
      id: 1,
      name: "User",
      updatedDate: date.toDateString(),
      transactions: [...this.transactions],
      active: active
    }
  }

  private copyArray() {
    this.copiedByValueNames = [...this.initialNames];
    this.copiedByReferenceNames = this.initialNames;
  }

  private changeFirstElement(arrayOfStrings: string[]) {
    arrayOfStrings[0] = "Changed Name";
  }


  private checkIsSymbolExist(arrayOfStrings: string[]): boolean[] {
    let symbol: string = "m";
    this.isSymbolExistInItems = arrayOfStrings.map(x => x.includes(symbol));
    return this.isSymbolExistInItems;
  }

  private replaceStringInArrayByEmptySpace(arrayOfStrings: string[]): void {
    let stringToReplace: string = "am";
    this.replacedAndTrimmedArray = arrayOfStrings.map(x => x.replace(stringToReplace, " ").trim());
  }
}
