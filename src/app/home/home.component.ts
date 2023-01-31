import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  date1: Date = new Date();
  items = [{
    label: 'Anbumani M',
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
        this.logout();
      }
    }
    ]
  }];
  value1: string = "income";
  stateOptions = [{ label: 'Income', value: 'income' }, { label: 'Expense', value: 'expense' }];
  transactions = [1, 2, 3, 4, 5, 6];
  incomeData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Income',
        backgroundColor: '#FFA726',
        data: [28, 48, 40, 19, 86, 27, 90]
      }
    ]
  };
  expenseData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Expense',
        backgroundColor: '#42A5F5',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

  basicOptions = {
    plugins: {
      legend: {
        labels: {
          color: '#ebedef'
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#ebedef'
        },
        grid: {
          color: 'rgba(255,255,255,0.2)'
        }
      },
      y: {
        ticks: {
          color: '#ebedef'
        },
        grid: {
          color: 'rgba(255,255,255,0.2)'
        }
      }
    }
  };
  data = {
    labels: ['A','B','C'],
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
chartOptions={
  plugins: {
    legend: {
        labels: {
            color: '#495057'
        }
    }
  }
}
  constructor() { }

  ngOnInit(): void {
  }
  editAccount() {

  }
  logout() {

  }
}
