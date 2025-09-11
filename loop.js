const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let i = 0; i < studentReport; i++) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
}

let i = 0
while (i < studentReport.length) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
  i++;
}

studentReport.forEach(rep => {
  if (rep < LIMIT) {
    console.log(rep);
  }
});

for (let report in studentReport) {
  if (studentReport[report] < LIMIT) {
    console.log(studentReport[report]);
  }
}

