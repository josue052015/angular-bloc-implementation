import { IInvoice, IUser } from "../core/interfaces";

export class mockData{
    public getUsers() : IUser[]{
       return [
         {
            id: 1,
            name: "Steve",
            lastName: "Jobs",
            email: "stevejobs@gmail.com",
            phone: "8095454545",
            isActive: true,
            creationDate: new Date(),
            updatedDate: new Date(),
            isDeleted: false
         },
         {
            id: 2,
            name: "Warren",
            lastName: "Buffet",
            email: "warrenbuffet@gmail.com",
            phone: "8295465878",
            isActive: true,
            creationDate: new Date(),
            updatedDate: new Date(),
            isDeleted: false
         },
         {
            id: 3,
            name: "Carlos",
            lastName: "Slim",
            email: "carlosslim@gmail.com",
            phone: "8095462301",
            isActive: true,
            creationDate: new Date(),
            updatedDate: new Date(),
            isDeleted: false
         },
         {
            id: 4,
            name: "Michael",
            lastName: "Jackson",
            email: "michaeljackson@gmail.com",
            phone: "8095496322",
            isActive: true,
            creationDate: new Date(),
            updatedDate: new Date(),
            isDeleted: false
         },
         {
            id: 5,
            name: "Donald",
            lastName: "Trump",
            email: "donaldtrump@gmail.com",
            phone: "8292948291",
            isActive: true,
            creationDate: new Date(),
            updatedDate: new Date(),
            isDeleted: false
         },
         {
            id: 6,
            name: "Luis",
            lastName: "Abinader",
            email: "luisabinader@gmail.com",
            phone: "8299998546",
            isActive: true,
            creationDate: new Date(),
            updatedDate: new Date(),
            isDeleted: false
         },
         {
            id: 7,
            name: "Barack",
            lastName: "Obama",
            email: "barackobama@gmail.com",
            phone: "8294451256",
            isActive: true,
            creationDate: new Date(),
            updatedDate: new Date(),
            isDeleted: false
         },
         {
            id: 8,
            name: "Pedro",
            lastName: "Rodriguez",
            email: "pedrorodriguez@gmail.com",
            phone: "8095558787",
            isActive: true,
            creationDate: new Date(),
            updatedDate: new Date(),
            isDeleted: false
         },
         {
            id: 9,
            name: "Leonel",
            lastName: "Fernandez",
            email: "leonelfernandez@gmail.com",
            phone: "8096321234",
            isActive: true,
            creationDate: new Date(),
            updatedDate: new Date(),
            isDeleted: false
         },
         {
            id: 10,
            name: "Vladimir",
            lastName: "Escoto",
            email: "vladimitescoto@gmail.com",
            phone: "8092457895",
            isActive: true,
            creationDate: new Date(),
            updatedDate: new Date(),
            isDeleted: false
         }
       ]
    }
    public getInvoices(): IInvoice[]{
      return [
          {
            id: 1,
            detail: "Bread",
            currency: "USD",
            amount: 4,
            isActive: true,
            creationDate: new Date(),
            updatedDate: new Date(),
            isDeleted: false
          },
          {
            id: 2,
            detail: "Pizza",
            currency: "USD",
            amount: 22,
            isActive: true,
            creationDate: new Date(),
            updatedDate: new Date(),
            isDeleted: false
          },
          {
            id: 3,
            detail: "Juice",
            currency: "USD",
            amount: 9,
            isActive: true,
            creationDate: new Date(),
            updatedDate: new Date(),
            isDeleted: false
          },
          {
            id: 4,
            detail: "Electronic",
            currency: "USD",
            amount: 300,
            isActive: true,
            creationDate: new Date(),
            updatedDate: new Date(),
            isDeleted: false
          },
          {
            id: 5,
            detail: "Crossaint",
            currency: "USD",
            amount: 12,
            isActive: true,
            creationDate: new Date(),
            updatedDate: new Date(),
            isDeleted: false
          },
          {
            id: 6,
            detail: "Ice Cream",
            currency: "USD",
            amount: 15,
            isActive: true,
            creationDate: new Date(),
            updatedDate: new Date(),
            isDeleted: false
          },
          {
            id: 7,
            detail: "Peanuts",
            currency: "USD",
            amount: 12,
            isActive: true,
            creationDate: new Date(),
            updatedDate: new Date(),
            isDeleted: false
          },
          {
            id: 8,
            detail: "Laptop",
            currency: "USD",
            amount: 1550,
            isActive: true,
            creationDate: new Date(),
            updatedDate: new Date(),
            isDeleted: false
          },
          {
            id: 9,
            detail: "Smart Phone",
            currency: "USD",
            amount: 890,
            isActive: true,
            creationDate: new Date(),
            updatedDate: new Date(),
            isDeleted: false
          },
          {
            id: 10,
            detail: "Light Bar",
            currency: "USD",
            amount: 150,
            isActive: true,
            creationDate: new Date(),
            updatedDate: new Date(),
            isDeleted: false
          } 
      ]
    }
}