import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  transactions = ['1', '2', '3', '4', '5', '6', '7'];
  addIncome: boolean = false;
  addExpense: boolean = false;
  value1: string = "income";
  date2: Date = new Date();
  stateOptions: any[] = [{ label: 'Income', value: 'income' }, { label: 'Expense', value: 'expense' }];
  basicData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Expense',
        backgroundColor: '#FC9472',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  incomeData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Income',
        backgroundColor: '#3BF79F',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  incomeOptions = {
    plugins: {
      legend: {
        labels: {
          color: '#FFFFFF'
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#FFFFFF'
        },
        grid: {
          color: '#FFFFFF'
        }
      },
      //#46A1E6, #E393FE,#FC9472
      y: {
        ticks: {
          color: '#FFFFFF'
        },
        grid: {
          color: '#FFFFFF'
        }
      }
    }
  };
  basicOptions = {
    plugins: {
      legend: {
        labels: {
          color: '#FFFFFF'
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#FFFFFF'
        },
        grid: {
          color: '#FFFFFF'
        }
      },
      //#46A1E6, #E393FE,#FC9472
      y: {
        ticks: {
          color: '#FFFFFF'
        },
        grid: {
          color: '#FFFFFF'
        }
      }
    }
  };
  chartOptions = {
    plugins: {
      legend: {
        labels: {
          color: '#495057'
        }
      }
    }
  }
  data = {
    labels: ['A', 'B', 'C'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ]
      }
    ]
  };
  items = [{
    label: 'Anbumani Mailathipathy',
    items: [{
        label: 'Edit Account',
        icon: 'pi pi-user-edit',
        command: () => {
            this.editAccount();
        }
    },
    {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        command: () => {
            this.signout();
        }
    }
    ]}

];

  constructor() { }

  ngOnInit(): void {
  }
  loadTransactionsLazy(event: LazyLoadEvent) {
    // simulate remote connection with a timeout
    /*     setTimeout(() => {
            //load data of required page
            let loadedProducts = this.transactions.slice(event.first, event?(event.first + event.rows));
    
            //populate page of virtual cars
            Array.prototype.splice.apply(this.virtualProducts, [...[event.first, event.rows], ...loadedProducts]);
    
            //trigger change detection
            event.forceUpdate();
        }, 1000); */
  }

  editAccount(){

  }
  signout(){}

}
