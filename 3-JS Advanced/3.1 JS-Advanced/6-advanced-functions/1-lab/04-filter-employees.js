function filterEmployees(data, criteria) {
    data = JSON.parse(data);
    const [key, value] = criteria.split('-');
    let counter = 0;

    data.forEach(employee => filteringEmployees.call(employee));
 
    function filteringEmployees() {
        if (this[key] === value || this[key] === 'all') {
            return console.log(`${counter++}. ${this.first_name} ${this.last_name} - ${this.email}`);
        }
    };
};
filterEmployees(`[{
    "id": "1",    
    "first_name": "Ardine",    
    "last_name": "Bassam",    
    "email": "abassam0@cnn.com",    
    "gender": "Female"    
    }, {    
    "id": "2",    
    "first_name": "Kizzee",    
    "last_name": "Jost",    
    "email": "kjost1@forbes.com",    
    "gender": "Female"
    },
    {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
    }]`,
    'gender-Female');