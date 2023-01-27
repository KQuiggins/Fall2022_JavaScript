const trips = [
    { destination: 'Chicago', miles: 329, gallons: 10.6},
    { destination: 'St. Louis', miles: 284, gallons: 10.5},
    { destination: 'Indianapolis', miles: 122, gallons: 3.7},
    { destination: 'Nashville', miles: 191, gallons: 6.4},
    { destination: 'Cincinnati', miles: 132, gallons: 3.9},
];

document.getElementById('btn').addEventListener('click', function(e) {
    for (let i = 0; i < trips.length; i++) {
        let trip = trips[i];
        let mpg = trip.miles / trip.gallons;
        let r_miles = mpg.toFixed(1);
        let tbl = document.getElementById('tableData');
        let row = `<tr><td>${trip.destination}</td><td>${trip.miles}</td><td>${trip.gallons}</td><td>${r_miles }</td></tr>`;
        tbl.innerHTML += row;
    }
});