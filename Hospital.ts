export class Patient {
  _name: string;
  _code: number;
  constructor(name: string, code: number) {
    this._name = name;
    this._code = code;
  }
  getName() {
    return this._name;
  }

  getCode() {
    return this._code;
  }
}

export class Queue {
  patientList: Patient[] = [];
  checkedList: Patient[] = [];
  enqueue(item: Patient) {
    return this.patientList.push(item);
  }
  show() {
    return this.patientList;
  }
  dequeue() {
    console.log(
      `Xin mời bệnh nhân ${this.patientList[0].getName()} vào khám!..., ${this.patientList[1].getName()} chuẩn bị...`
    );
    this.checkedList.push(this.patientList.shift());
  }

  sortPatientList() {
    this.patientList.sort((a: Patient, b: Patient) => {
      return a.getCode() - b.getCode();
    });
  }
  checkDoneList() {
    return this.checkedList;
  }
}

let queue = new Queue();
queue.enqueue(new Patient("Smith", 5));
queue.enqueue(new Patient("Jones", 4));
queue.enqueue(new Patient("Fehrenbach", 6));
queue.enqueue(new Patient("Brown", 1));
queue.enqueue(new Patient("Ingram", 1));
queue.sortPatientList();
console.log(queue.show());

queue.dequeue();
console.log(queue.show());

queue.dequeue();
console.log(queue.show());
console.log(queue.checkDoneList());
