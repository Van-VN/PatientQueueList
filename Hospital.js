"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = exports.Patient = void 0;
var Patient = /** @class */ (function () {
    function Patient(name, code) {
        this._name = name;
        this._code = code;
    }
    Patient.prototype.getName = function () {
        return this._name;
    };
    Patient.prototype.getCode = function () {
        return this._code;
    };
    return Patient;
}());
exports.Patient = Patient;
var Queue = /** @class */ (function () {
    function Queue() {
        this.patientList = [];
        this.checkedList = [];
    }
    Queue.prototype.enqueue = function (item) {
        return this.patientList.push(item);
    };
    Queue.prototype.show = function () {
        return this.patientList;
    };
    Queue.prototype.dequeue = function () {
        console.log("Xin m\u1EDDi b\u1EC7nh nh\u00E2n ".concat(this.patientList[0].getName(), " v\u00E0o kh\u00E1m!..., ").concat(this.patientList[1].getName(), " chu\u1EA9n b\u1ECB..."));
        this.checkedList.push(this.patientList.shift());
    };
    Queue.prototype.sortPatientList = function () {
        this.patientList.sort(function (a, b) {
            return a.getCode() - b.getCode();
        });
    };
    Queue.prototype.checkDoneList = function () {
        return this.checkedList;
    };
    return Queue;
}());
exports.Queue = Queue;
var queue = new Queue();
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
